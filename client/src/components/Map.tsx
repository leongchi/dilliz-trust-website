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
  initialCenter = { lat: 22.3121, lng: 114.2185 }, // 默認香港觀塘 MG Tower 坐標
  initialZoom = 16,
  onMapReady,
}: MapViewProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<google.maps.Map | null>(null);
  const [loadFailed, setLoadFailed] = useState(false);

  const init = usePersistFn(async () => {
    await loadMapScript();
    
    // 如果 SDK 載入失敗，或者 window.google 未定義，觸發備用靜態地圖
    if (!window.google || !window.google.maps) {
      setLoadFailed(true);
      return;
    }

    if (!mapContainer.current) {
      console.error("Map container not found");
      return;
    }

    try {
      map.current = new window.google.maps.Map(mapContainer.current, {
        zoom: initialZoom,
        center: initialCenter,
        mapTypeControl: true,
        fullscreenControl: true,
        zoomControl: true,
        streetViewControl: true,
        mapId: "DEMO_MAP_ID",
      });
      if (onMapReady) {
        onMapReady(map.current);
      }
    } catch (err) {
      console.error("Error initializing Google Map:", err);
      setLoadFailed(true);
    }
  });

  useEffect(() => {
    init();
  }, [init]);

  // 如果加載失敗（在外部 cPanel 等非沙盒環境），呈現高奢、100% 穩定的靜態 3D 地圖卡片與導航跳轉
  if (loadFailed) {
    return (
      <div className={cn("w-full h-[280px] relative flex flex-col items-center justify-center overflow-hidden bg-zinc-900 group/map", className)}>
        {/* 高奢暗色地圖背景圖（中環/觀塘海濱 3D 視覺） */}
        <img 
          src="/images/hk_skyline.jpg" 
          alt="DILLIZ CAPITAL TRUST LIMITED" 
          className="absolute inset-0 w-full h-full object-cover opacity-20 filter grayscale contrast-125 group-hover/map:scale-105 transition-transform duration-[2000ms]"
        />
        
        {/* 暗金色微光遮罩 */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
        
        {/* 核心引導內容 */}
        <div className="relative z-10 text-center px-6 space-y-4">
          <div className="w-12 h-12 rounded-full bg-metal-gold/10 border border-metal-gold/30 flex items-center justify-center text-metal-gold mx-auto animate-pulse">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
          </div>
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-slate-200 font-serif">DILLIZ CAPITAL TRUST LIMITED</h4>
            <p className="text-[11px] text-slate-400 font-light max-w-xs mx-auto leading-relaxed">
              香港九龍觀塘海濱道 133 號萬兆豐群樓 17 樓 I 室<br/>
              Unit I, 17/F, MG Tower, 133 Hoi Bun Road, Kwun Tong, HK
            </p>
          </div>
          
          {/* 高奢金屬按鈕：一鍵跳轉 Google Map 導航 */}
          <a 
            href="https://maps.google.com/?q=Unit+I,+17/F,+MG+Tower,+133+Hoi+Bun+Road,+Kwun+Tong,+Hong+Kong" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-metal-gold text-black text-[10px] font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300 shadow-gold-glow hover:shadow-white/20"
          >
            開啟 Google 地圖導航
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div ref={mapContainer} className={cn("w-full h-[500px]", className)} />
  );
}
