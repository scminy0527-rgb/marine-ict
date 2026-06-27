import * as S from "./MarineICTPage.style";
import { useEffect, useRef } from "react";
import Navigation from "../../components/main/Navigation";
import HeroSection from "../../components/main/HeroSection";
import AISection from "../../components/main/AISection";
import YOLOSection from "../../components/main/YOLOSection";
import TechSection from "../../components/main/TechSection";
import Footer from "../../components/main/Footer";
import NeuralCanvas from "../../components/main/NeuralCanvas";

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
        { threshold: 0.05, rootMargin: "0px 0px 120px 0px" },
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
    <S.PageContainer>
      <S.CanvasWrapper>
        <NeuralCanvas ref={canvasRef} />
      </S.CanvasWrapper>
      <S.ContentWrapper>
        <Navigation />
        <HeroSection />
        <AISection />
        <YOLOSection />
        <TechSection />
        <Footer />
      </S.ContentWrapper>
    </S.PageContainer>
  );
}
