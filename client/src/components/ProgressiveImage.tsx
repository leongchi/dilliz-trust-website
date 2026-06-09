import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface ProgressiveImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  aspectRatio?: string; // e.g. 'aspect-[16/10]', 'aspect-[4/3]', 'aspect-video'
}

export const ProgressiveImage: React.FC<ProgressiveImageProps> = ({
  src,
  alt,
  className,
  containerClassName,
  aspectRatio = 'aspect-[16/10]',
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldShowSkeleton, setShouldShowSkeleton] = useState(true);

  useEffect(() => {
    // 當 src 改變時，重設狀態
    setIsLoaded(false);
    setShouldShowSkeleton(true);
  }, [src]);

  const handleLoad = () => {
    setIsLoaded(true);
    // 讓骨架屏在圖片開始漸顯後稍微延遲消失，確保過渡極致順滑
    setTimeout(() => {
      setShouldShowSkeleton(false);
    }, 300);
  };

  return (
    <div className={cn("relative overflow-hidden w-full", aspectRatio, containerClassName)}>
      {/* 高奢暗金色漸變骨架屏 */}
      {shouldShowSkeleton && (
        <div 
          className={cn(
            "absolute inset-0 z-10 animate-pulse",
            "bg-gradient-to-br from-[#1a1a1a] via-[#24211a] to-[#1f1a12]",
            "border border-metal-gold/10 rounded-inherit"
          )}
        >
          {/* 金色微光掃過效果 */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-metal-gold/5 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
        </div>
      )}

      {/* 真實圖片 */}
      <img
        src={src}
        alt={alt}
        onLoad={handleLoad}
        className={cn(
          "w-full h-full object-cover transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
          isLoaded ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-95 blur-sm",
          className
        )}
        loading="lazy"
        {...props}
      />
    </div>
  );
};
