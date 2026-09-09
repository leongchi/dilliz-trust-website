# 社交媒體及 WhatsApp 效果圖驗證

驗證日期：2026-09-09

| 檢查 | 結果 |
|---|---|
| X 目的地 | 已核對為 `Dilliz Capital Trust Limited (@DLZcapital)`。 |
| Facebook 目的地 | 已核對為 `帝力斯 Dilliz Capital Trust`。 |
| 預覽隔離 | 只有受信任沙盒主機加入 `?socialPreview=1` 時顯示；production build 及正式網址保持原狀。 |
| 導覽文字 | 預覽顯示繁體「信託」、簡體「信托」、英文「Trust」。 |
| 頁尾 | X 及 Facebook 均以 40px 圓形純 Logo 按鈕排列於公司 Logo 旁，沒有文字標籤。 |
| WhatsApp | 右下角使用 56–60px 深石墨圓形純 Logo 浮動按鈕，連結使用 `+852 6528 6838`。 |
| 離站提示 | X 按鈕已驗證顯示英文離站確認；取消後不開啟外部網站。 |
| WhatsApp 提示 | 已驗證繁體中文離站確認，目的地為 WhatsApp；未按「繼續」，沒有向外部服務傳送資料。 |
| Desktop | 1440×900 首屏顯示繁體「信託」導覽及右下角 60px WhatsApp Logo；全頁頁尾顯示 X、Facebook 與公司 Logo 同組排列。 |
| Mobile | 390×844 首屏顯示 56px WhatsApp Logo，與右側及底部安全區保持間距；全頁沒有橫向溢出。 |
| Build | `pnpm run check` 及 `pnpm run build` 通過。 |
| 聚焦預覽修正 | 新增受信任沙盒網址 `/?socialFocus=1`，在正常比例同時顯示「信託」、公司 Logo、X、Facebook 及固定 WhatsApp Logo，不依賴整頁長截圖。 |
| 聚焦 Desktop | 1440×900 通過；頁首、聚焦示意、實際頁尾圖示及右下 WhatsApp 均在同一畫面可見。 |
| 聚焦 Mobile | 390×844 通過；三個社交圖示及 WhatsApp 按鈕清楚可見，無橫向溢出或安全區遮擋。 |
