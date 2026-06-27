import styled from "styled-components";
import { useEffect, useRef } from "react";
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import AISection from "../components/AISection";
import TechSection from "../components/TechSection";
import Footer from "../components/Footer";
import NeuralCanvas from "../components/NeuralCanvas";

const PageContainer = styled.div`
  background: #030810;
  min-height: 100vh;
  overflow-x: hidden;
  position: relative;
`;

const CanvasWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
`;

export default function MarineICTPage() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const revealElements = document.querySelectorAll("[data-reveal]");
      revealElements.forEach((el) => {
        el.style.opacity = "0";
        el.style.transform = "translateY(28px)";
        el.style.transition = "opacity 0.75s ease, transform 0.75s ease";
      });

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const delay = parseInt(entry.target.dataset.delay || 0, 10);
              setTimeout(() => {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
              }, delay);
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.05, rootMargin: "0px 0px 120px 0px" }
      );

      revealElements.forEach((el) => observer.observe(el));

      setTimeout(() => {
        revealElements.forEach((el) => {
          if (el.style.opacity === "0") {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
          }
        });
      }, 2500);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <PageContainer>
      <CanvasWrapper>
        <NeuralCanvas ref={canvasRef} />
      </CanvasWrapper>
      <ContentWrapper>
        <Navigation />
        <HeroSection />
        <AISection />
        <TechSection />
        <Footer />
      </ContentWrapper>
    </PageContainer>
  );
}
