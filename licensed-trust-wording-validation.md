# 持牌信託身份用語全站檢查

驗證日期：2026-09-09

| 項目 | 結果 |
|---|---|
| 繁體身份標籤 | `香港持牌信託服務公司` 已改為 `香港持牌信託`；句子內使用自然語法 `香港持牌信託公司`。 |
| 簡體身份標籤 | `香港持牌信托服务公司` 已改為 `香港持牌信托`；句子內使用 `香港持牌信托公司`。 |
| 英文身份標籤 | `HK Licensed Trust Service Provider` 已改為 `HK Licensed Trust Company`；描述內改為 `licensed trust company in Hong Kong`。 |
| 一般服務名稱 | `我們提供的服務`、`託管服務`、`Trust services` 等功能或產品描述保留，不作無關刪除。 |
| Runtime／fallback | `client/public/content.json` 與 `client/src/lib/translations.json` 的修改身份用語逐行一致。 |
| SEO | `client/index.html` 已改為 `持牌信託公司`。 |
| 舊身份用語 | 原始碼及 production build 中 `持牌信託服務`、`持牌信托服务`、`licensed trust service provider` 均為零。 |
| 禁止字眼 | `定存`、`Fixed Deposit`、`投資`、`投资`、`investment` 均為零。 |
| Build | `pnpm run check` 及 `pnpm run build` 通過；桌面 1440×900 與手機 390×844 顯示正常。 |
