# 正式評估 EmailJS 啟用修正驗證

驗證日期：2026-09-04

| 檢查 | 結果 |
|---|---|
| 問題重現 | 舊 production bundle 把 assessment sender 的 enable function 編譯成固定 `false`，因此第九步顯示「暫時未能提交」。 |
| 根本修正 | 移除不可靠的 build-time live flag；sender 及頁面共用同一 runtime hostname gate。 |
| 正式主機 | `dilliz.com` 及 `www.dilliz.com` 回傳可提交。 |
| 預覽主機 | 正式評估路由在 Manus／其他主機保持鎖定；只有受信任開發主機的 `/assessment-preview` 可配合本機 test flag。 |
| EmailJS 設定 | Compiled bundle 已包含 `service_p02igzf`、`template_id6y2ku` 及既有 public key。 |
| 無網絡單元測試 | 通過；兩個正式主機為 `true`，正式預覽路由及未知主機為 `false`，測試沒有呼叫 EmailJS。 |
| Build | `pnpm run check` 及 `pnpm run build` 通過；輸出資產為 `index-ZnWpu1vx.js`。 |
| 禁止字眼 | `定存`、`Fixed Deposit`、`投資`、`投资`、`investment` 掃描通過。 |

正式 EmailJS 寄送端點尚未在本輪測試中再次觸發，避免向 CS 重複寄送；先前 `template_id6y2ku` 的完整 61 欄實際寄送及收件驗證仍然有效。
