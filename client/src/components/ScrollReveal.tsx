import React, { useEffect, useRef, useState, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: 100 | 200 | 300 | 400 | 500;
  threshold?: number;
  triggerOnce?: boolean;
}

export default function ScrollReveal({
  children,
  className = "",
  delay,
  threshold = 0.1,
  triggerOnce = true
}: ScrollRevealProps) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerRef = ref.current;
    if (!observerRef) return;

    // 降級處理：若瀏覽器不支援 IntersectionObserver，直接顯示
    if (!("IntersectionObserver" in window)) {
      setIsIntersecting(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          if (triggerOnce) {
            observer.unobserve(observerRef);
          }
        } else if (!triggerOnce) {
          setIsIntersecting(false);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -80px 0px" // 稍微在視窗底部上方一點點觸發，視覺效果更精緻
      }
    );

    observer.observe(observerRef);

    return () => {
      if (observerRef && !triggerOnce) {
        observer.unobserve(observerRef);
      }
    };
  }, [threshold, triggerOnce]);

  // 動態生成動畫與延遲類別
  const animationClass = isIntersecting ? "animate-fadeIn" : "opacity-0";
  const delayClass = delay ? `animation-delay-${delay}` : "";

  return (
    <div
      ref={ref}
      className={`${animationClass} ${delayClass} ${className}`}
      style={{
        // 為了防止加載時的閃爍，在未相交且支援 JS 時先將不透明度設為 0
        opacity: isIntersecting ? undefined : 0,
        transition: "opacity 0.5s ease-out"
      }}
    >
      {children}
    </div>
  );
}
