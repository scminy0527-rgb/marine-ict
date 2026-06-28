import { useState, useRef, useEffect } from "react";
import * as S from "./YoloTestPage.style";
import Navigation from "../../components/main/Navigation";

const API_BASE_URL = "http://localhost:8000";

export default function YoloTestPage() {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);
  const [jobId, setJobId] = useState(null);
  const [jobStatus, setJobStatus] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const fileInputRef = useRef(null);
  const dropZoneRef = useRef(null);
  const pollingIntervalRef = useRef(null);

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dropZoneRef.current?.classList.add("drag-active");
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dropZoneRef.current?.classList.remove("drag-active");
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dropZoneRef.current?.classList.remove("drag-active");

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      const file = files[0];
      if (file.type.startsWith("video/")) {
        handleFileSelect(file);
      } else {
        setError("비디오 파일만 업로드 가능합니다.");
      }
    }
  };

  const handleFileInputChange = (e) => {
    const files = e.target.files;
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const handleFileSelect = (file) => {
    setError(null);

    // 파일 크기 제한 (예: 500MB)
    const maxSize = 500 * 1024 * 1024;
    if (file.size > maxSize) {
      setError("파일 크기가 너무 큽니다 (최대 500MB)");
      return;
    }

    setUploadedFile(file);
    handleUpload(file);
  };

  const checkJobStatus = async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/detection/jobs/${id}/`);
      const data = await response.json();
      return data;
    } catch (err) {
      console.error("Failed to check job status:", err);
      return null;
    }
  };

  const startPolling = (id) => {
    console.log("동영상 처리 시간");
    pollingIntervalRef.current = setInterval(async () => {
      const job = await checkJobStatus(id);
      if (!job) return;

      setJobStatus(job.status);

      if (job.status === "done") {
        clearInterval(pollingIntervalRef.current);
        setIsProcessing(false);
        setUploadProgress(100);

        console.log(`결과 비디오 url: ${job.result_video_url}`);

        setResult({
          id: job.id,
          status: job.status,
          detected_count: job.detected_count || 0,
          detection_summary: job.detection_summary || {},
          result_video_url: job.result_video_url,
          original_video_url: job.original_video_url,
          processing_time: job.processing_time || 0,
        });
      } else if (job.status === "failed") {
        clearInterval(pollingIntervalRef.current);
        setIsProcessing(false);
        setError(job.error || "처리 중 오류가 발생했습니다");
      } else if (job.status === "processing") {
        const progress = job.progress || 0;
        setUploadProgress(Math.min(progress, 95));
      }
    }, 2000);
  };

  const handleUpload = async (file) => {
    setIsUploading(true);
    setUploadProgress(0);
    setError(null);
    setIsProcessing(true);

    try {
      const formData = new FormData();
      formData.append("original_video", file);

      const xhr = new XMLHttpRequest();

      xhr.upload.addEventListener("progress", (e) => {
        if (e.lengthComputable) {
          const progress = Math.round((e.loaded / e.total) * 100 * 0.3);
          setUploadProgress(progress);
        }
      });

      xhr.addEventListener("load", async () => {
        if (xhr.status === 200 || xhr.status === 201) {
          const data = JSON.parse(xhr.responseText);
          const id = data.id;
          setJobId(id);
          setUploadProgress(30);
          startPolling(id);
        } else {
          const data = JSON.parse(xhr.responseText);
          setError(data.detail || "업로드 중 오류가 발생했습니다");
          setIsProcessing(false);
        }
        setIsUploading(false);
      });

      xhr.addEventListener("error", () => {
        setError("네트워크 오류가 발생했습니다");
        setIsProcessing(false);
        setIsUploading(false);
      });

      xhr.open("POST", `${API_BASE_URL}/detection/upload/`);
      xhr.send(formData);
    } catch (err) {
      setError("업로드 중 오류가 발생했습니다: " + err.message);
      setIsProcessing(false);
      setIsUploading(false);
    }
  };

  useEffect(() => {
    return () => {
      if (pollingIntervalRef.current) {
        clearInterval(pollingIntervalRef.current);
      }
    };
  }, []);

  const handleReset = () => {
    if (pollingIntervalRef.current) {
      clearInterval(pollingIntervalRef.current);
    }
    setUploadedFile(null);
    setUploadProgress(0);
    setError(null);
    setResult(null);
    setJobId(null);
    setJobStatus(null);
    setIsProcessing(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleDownload = () => {
    if (result?.result_video_url) {
      const a = document.createElement("a");
      a.href = result.result_video_url;
      a.download = "yolo_detected_video.mp4";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  return (
    <S.PageContainer>
      <S.ContentWrapper>
        <Navigation />

        {/* Hero Section */}
        <S.HeroSection>
          <S.SectionLabel data-reveal="true" data-delay="0">
            Object Detection
          </S.SectionLabel>
          <S.Headline data-reveal="true" data-delay="100">
            YOLO 모델 테스트
          </S.Headline>
          <S.Description data-reveal="true" data-delay="200">
            동영상을 업로드하면 YOLO 모델이 자동으로 객체를 탐지하고, 각
            프레임에 탐지 결과를 표시한 처리된 동영상을 반환합니다.
          </S.Description>
        </S.HeroSection>

        {/* Upload Section */}
        <S.UploadContainer>
          <S.UploadArea
            ref={dropZoneRef}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
            className={isUploading ? "uploading" : ""}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept="video/*"
              onChange={handleFileInputChange}
              disabled={isUploading}
            />
            <S.UploadIcon>📹</S.UploadIcon>
            <S.UploadText>
              <S.UploadTitle>동영상을 업로드하세요</S.UploadTitle>
              <S.UploadSubtitle>
                또는 클릭해서 파일을 선택하세요
              </S.UploadSubtitle>
              <S.UploadSubtitle style={{ fontSize: "12px", marginTop: "8px" }}>
                최대 500MB까지 지원합니다
              </S.UploadSubtitle>
            </S.UploadText>
            <S.UploadButton disabled={isUploading}>
              {isUploading ? "처리 중..." : "파일 선택"}
            </S.UploadButton>
          </S.UploadArea>

          {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
        </S.UploadContainer>

        {/* Progress Section */}
        {(isUploading || isProcessing || uploadProgress > 0) && !result && (
          <S.ProgressSection>
            <S.ProgressContainer>
              <S.ProgressLabel>
                처리 진행도
                {jobStatus && (
                  <span
                    style={{
                      marginLeft: "12px",
                      fontSize: "14px",
                      color: "#00aaff",
                    }}
                  >
                    상태: {jobStatus === "pending" && "대기중"}
                    {jobStatus === "processing" && "처리중"}
                    {jobStatus === "done" && "완료"}
                    {jobStatus === "failed" && "실패"}
                  </span>
                )}
              </S.ProgressLabel>
              <S.ProgressBar>
                <S.ProgressFill $width={uploadProgress} />
              </S.ProgressBar>
              <S.ProgressText>{uploadProgress}%</S.ProgressText>
              {isUploading && (
                <S.ProgressSubtext>파일 업로드 중...</S.ProgressSubtext>
              )}
              {isProcessing && !isUploading && (
                <S.ProgressSubtext>
                  YOLO 모델이 영상을 처리 중입니다...
                </S.ProgressSubtext>
              )}
            </S.ProgressContainer>
          </S.ProgressSection>
        )}

        {/* Results Section */}
        {result && (
          <S.ResultsSection>
            <S.ResultsTitle data-reveal="true" data-delay="0">
              탐지 결과
            </S.ResultsTitle>

            <S.ResultsGrid>
              <S.ResultCard data-reveal="true" data-delay="100">
                <S.CardLabel>원본 동영상</S.CardLabel>
                <S.VideoContainer>
                  <video controls>
                    <source
                      src={result.original_video_url}
                      type="video/mp4"
                    />
                    브라우저가 동영상 재생을 지원하지 않습니다.
                  </video>
                </S.VideoContainer>
              </S.ResultCard>

              <S.ResultCard data-reveal="true" data-delay="200">
                <S.CardLabel>처리 결과</S.CardLabel>
                <S.VideoContainer>
                  <video controls>
                    <source
                      src={result.result_video_url}
                      type="video/mp4"
                    />
                    브라우저가 동영상 재생을 지원하지 않습니다.
                  </video>
                </S.VideoContainer>
              </S.ResultCard>
            </S.ResultsGrid>

            {/* Detection Stats */}
            <S.ResultsGrid style={{ marginTop: "40px" }}>
              <S.ResultCard data-reveal="true" data-delay="300">
                <S.CardLabel>탐지 통계</S.CardLabel>
                <S.CardContent>
                  <div>
                    <h4>탐지된 객체</h4>
                    <p style={{ fontSize: "24px", color: "#00c8ff" }}>
                      {result.detected_count || 0}개
                    </p>
                  </div>
                  {result.processing_time > 0 && (
                    <div style={{ marginTop: "16px" }}>
                      <h4>처리 시간</h4>
                      <p>{result.processing_time.toFixed(1)}초</p>
                    </div>
                  )}
                  {result.detection_summary &&
                    Object.keys(result.detection_summary).length > 0 && (
                      <div style={{ marginTop: "16px" }}>
                        <h4>탐지 요약</h4>
                        <p style={{ fontSize: "12px", whiteSpace: "pre-wrap" }}>
                          {JSON.stringify(result.detection_summary, null, 2)}
                        </p>
                      </div>
                    )}
                </S.CardContent>
              </S.ResultCard>

              <S.ResultCard data-reveal="true" data-delay="400">
                <S.CardLabel>다운로드</S.CardLabel>
                <S.CardContent>
                  <S.ActionButtons>
                    <S.ActionButton
                      $primary
                      onClick={handleDownload}
                      title="처리된 동영상 다운로드"
                    >
                      결과 영상 받기
                    </S.ActionButton>
                    <S.ActionButton onClick={handleReset} title="초기화">
                      다시 시작
                    </S.ActionButton>
                  </S.ActionButtons>
                  <p style={{ marginTop: "16px", fontSize: "12px" }}>
                    결과 영상을 다운로드하거나 새로운 동영상을 업로드할 수
                    있습니다.
                  </p>
                </S.CardContent>
              </S.ResultCard>
            </S.ResultsGrid>
          </S.ResultsSection>
        )}

        {/* Empty State */}
        {!result && !isUploading && uploadProgress === 0 && !uploadedFile && (
          <S.ProgressSection>
            <S.EmptyState>
              <p>
                동영상을 업로드하면 YOLO 모델의 처리 결과를 확인할 수 있습니다.
              </p>
            </S.EmptyState>
          </S.ProgressSection>
        )}
      </S.ContentWrapper>
    </S.PageContainer>
  );
}
