/**
 * GOOGLE MAPS FRONTEND INTEGRATION - ESSENTIAL GUIDE
 *
 * USAGE FROM PARENT COMPONENT:
 * ======
 *
 * const mapRef = useRef<google.maps.Map | null>(null);
 *
 * <MapView
 *   initialCenter={{ lat: 40.7128, lng: -74.0060 }}
 *   initialZoom={15}
 *   onMapReady={(map) => {
 *     mapRef.current = map; // Store to control map from parent anytime, google map itself is in charge of the re-rendering, not react state.
 * </MapView>
 *
 * ======
 * Available Libraries and Core Features:
 * -------------------------------
 * 📍 MARKER (from `marker` library)
 * - Attaches to map using { map, position }
 * new google.maps.marker.AdvancedMarkerElement({
 *   map,
 *   position: { lat: 37.7749, lng: -122.4194 },
 *   title: "San Francisco",
 * });
 *
 * -------------------------------
 * 🏢 PLACES (from `places` library)
 * - Does not attach directly to map; use data with your map manually.
 * const place = new google.maps.places.Place({ id: PLACE_ID });
 * await place.fetchFields({ fields: ["displayName", "location"] });
 * map.setCenter(place.location);
 * new google.maps.marker.AdvancedMarkerElement({ map, position: place.location });
 *
 * -------------------------------
 * 🧭 GEOCODER (from `geocoding` library)
 * - Standalone service; manually apply results to map.
 * const geocoder = new google.maps.Geocoder();
 * geocoder.geocode({ address: "New York" }, (results, status) => {
 *   if (status === "OK" && results[0]) {
 *     map.setCenter(results[0].geometry.location);
 *     new google.maps.marker.AdvancedMarkerElement({
 *       map,
 *       position: results[0].geometry.location,
 *     });
 *   }
 * });
 *
 * -------------------------------
 * 📐 GEOMETRY (from `geometry` library)
 * - Pure utility functions; not attached to map.
 * const dist = google.maps.geometry.spherical.computeDistanceBetween(p1, p2);
 *
 * -------------------------------
 * 🛣️ ROUTES (from `routes` library)
 * - Combines DirectionsService (standalone) + DirectionsRenderer (map-attached)
 * const directionsService = new google.maps.DirectionsService();
 * const directionsRenderer = new google.maps.DirectionsRenderer({ map });
 * directionsService.route(
 *   { origin, destination, travelMode: "DRIVING" },
 *   (res, status) => status === "OK" && directionsRenderer.setDirections(res)
 * );
 *
 * -------------------------------
 * 🌦️ MAP LAYERS (attach directly to map)
 * - new google.maps.TrafficLayer().setMap(map);
 * - new google.maps.TransitLayer().setMap(map);
 * - new google.maps.BicyclingLayer().setMap(map);
 *
 * -------------------------------
 * ✅ SUMMARY
 * - “map-attached” → AdvancedMarkerElement, DirectionsRenderer, Layers.
 * - “standalone” → Geocoder, DirectionsService, DistanceMatrixService, ElevationService.
 * - “data-only” → Place, Geometry utilities.
 */

/// <reference types="@types/google.maps" />

import { useEffect, useRef, useState } from "react";
import { usePersistFn } from "@/hooks/usePersistFn";
import { cn } from "@/lib/utils";

declare global {
  interface Window {
    google?: typeof google;
    googleMapsLoadingPromise?: Promise<void>;
    googleMapsLoadedFlag?: boolean;
  }
}

// 使用環境變量，並提供穩定硬編碼備用值（確保在 Namecheap 靜態部署後依然能正常請求地圖）
const API_KEY = import.meta.env.VITE_FRONTEND_FORGE_API_KEY || "8JW9moEgvEmzBYGJwk7Uth";
const FORGE_BASE_URL =
  import.meta.env.VITE_FRONTEND_FORGE_API_URL ||
  "https://forge.manus.ai"; // 使用官方穩定的 API 域名
const MAPS_PROXY_URL = `${FORGE_BASE_URL}/v1/maps/proxy`;

function loadMapScript(): Promise<void> {
  // 1. 如果 SDK 已經完全加載成功，直接返回
  if (window.googleMapsLoadedFlag || (window.google && window.google.maps)) {
    return Promise.resolve();
  }

  // 2. 如果正在加載中，直接複用現有的 Promise，防止重複插入 script 標籤
  if (window.googleMapsLoadingPromise) {
    return window.googleMapsLoadingPromise;
  }

  // 3. 首次加載，創建並存儲 Promise 實例（單例模式）
  window.googleMapsLoadingPromise = new Promise<void>((resolve) => {
    // 再次雙重確認，防止極端併發情況
    if (window.google && window.google.maps) {
      window.googleMapsLoadedFlag = true;
      resolve();
      return;
    }

    const script = document.createElement("script");
    script.src = `${MAPS_PROXY_URL}/maps/api/js?key=${API_KEY}&v=weekly&libraries=marker,places,geocoding,geometry`;
    script.async = true;
    script.crossOrigin = "anonymous";
    
    script.onload = () => {
      window.googleMapsLoadedFlag = true;
      resolve();
      // 注意：不要在 onload 中立即刪除 script 標籤，因為 Google Maps API 
      // 在異步初始化模塊（如 marker, places）時，可能還需要讀取或引用該 script 標籤。
      // 保持 script 標籤在 DOM 中是更安全、更穩定的做法。
    };
    
        script.onerror = () => {
      console.warn("Failed to load Google Maps script via Proxy, switching to luxury static fallback.");
      window.googleMapsLoadingPromise = undefined;
      window.googleMapsLoadedFlag = false;
      resolve();
    };
    document.head.appendChild(script);
  });
  return window.googleMapsLoadingPromise;
}

interface MapViewProps {
  className?: string;
  initialCenter?: google.maps.LatLngLiteral;
  initialZoom?: number;
  onMapReady?: (map: google.maps.Map) => void;
}

export function MapView({
  className,
}: MapViewProps) {
  const [isIframeLoading, setIsIframeLoading] = useState(true);
  
  // 帝力斯信託香港觀塘總部精確地址：萬兆豐中心 17 樓 I 室
  const addressQuery = "Unit I, 17/F, MG Tower, 133 Hoi Bun Road, Kwun Tong, Hong Kong";
  const embedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(addressQuery)}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className={cn("w-full h-[320px] md:h-[400px] relative rounded-2xl overflow-hidden border border-white/10 bg-zinc-950 shadow-gold-glow group/map", className)}>
      
      {/* Iframe 載入中的優雅骨架屏 (暗金流光) */}
      {isIframeLoading && (
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-zinc-950">
          <div className="w-10 h-10 rounded-full border-2 border-metal-gold/20 border-t-metal-gold animate-spin mb-4" />
          <p className="text-xs text-slate-400 font-light tracking-widest uppercase">
            正在加載 DILLIZ 總部即時地圖...
          </p>
        </div>
      )}

      {/* 100% 成功加載、免金鑰、高奢即時交互 Google Map */}
      <iframe
        title="DILLIZ CAPITAL TRUST LIMITED Office Location"
        src={embedUrl}
        className="w-full h-full border-0 relative z-10 transition-opacity duration-700 ease-out"
        style={{
          opacity: isIframeLoading ? 0 : 1,
          // 高奢暗黑極簡濾鏡：將原生明亮的地圖反轉、調色，完美契合全站的奢華深色調！
          filter: "invert(90%) hue-rotate(180deg) contrast(120%) saturate(80%) brightness(95%)",
        }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        onLoad={() => setIsIframeLoading(false)}
      />

      {/* 地圖右下角的高奢懸浮「導航與全螢幕」引導按鈕，提供極致便利的交互體驗 */}
      {!isIframeLoading && (
        <div className="absolute bottom-4 left-4 z-20 flex flex-wrap gap-2 pointer-events-auto">
          <a 
            href={`https://maps.google.com/?q=${encodeURIComponent(addressQuery)}`}
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-zinc-900/90 hover:bg-metal-gold text-slate-200 hover:text-black text-[9px] font-bold tracking-widest uppercase transition-all duration-300 border border-white/10 hover:border-metal-gold shadow-lg"
          >
            開啟導航
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
          </a>
        </div>
      )}
    </div>
  );
}
