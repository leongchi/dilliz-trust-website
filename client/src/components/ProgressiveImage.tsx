import React, { useState } from "react";

interface ProgressiveImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  aspectRatioClassName?: string; // 例如 "aspect-[4/3]" 或 "aspect-[16/10]"
  children?: React.ReactNode; // 疊加在圖片上的內容（例如 Logo）
}

const ProgressiveImage: React.FC<ProgressiveImageProps> = ({
  src,
  alt,
  className = "",
  containerClassName = "",
  aspectRatioClassName = "aspect-[4/3]",
  children,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className={`relative overflow-hidden rounded-3xl border border-white/10 bg-[#1e1e1e] shadow-gold-glow ${aspectRatioClassName} ${containerClassName}`}
      style={{
        backfaceVisibility: "hidden",
        transform: "translateZ(0)", // 強制啟用 GPU 渲染加速
      }}
    >
      {/* 骨架屏 / 暗金色漸變底色：圖片加載前顯示 */}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-[#2a2315] via-[#1a1a1a] to-[#201c12] transition-opacity duration-1000 ease-out flex items-center justify-center ${
          isLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        {/* 極簡精緻的微小加載菊花，進一步提升奢華感 */}
        <div className="w-6 h-6 border-2 border-metal-gold/20 border-t-metal-gold rounded-full animate-spin opacity-40" />
      </div>

      {/* 實際圖片：初始 opacity-0，加載完成後在 1.2 秒內絲滑漸顯 */}
      <img
        src={src}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-1200 cubic-bezier(0.16, 1, 0.3, 1) ${
          isLoaded ? "opacity-100" : "opacity-0"
        } ${className}`}
        style={{
          willChange: "opacity",
          backfaceVisibility: "hidden",
        }}
      />

      {/* 疊加內容（例如 Shield Logo）：在圖片加載完成後，在 1 秒內極其溫柔地浮現，消除視覺時間差 */}
      {children && (
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default ProgressiveImage;
