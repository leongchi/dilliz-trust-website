# 諮詢 EmailJS 客戶姓名修正驗證

驗證日期：2026-09-10

| 項目 | 結果 |
|---|---|
| 根本原因 | EmailJS 主旨已使用 `from_name`，但正文客戶姓名欄使用另一個姓名變數，因此主旨有姓名而正文空白。 |
| 修正 | 統一由單一 payload builder 同時提供 `from_name`、`customer_name`、`client_name`、`user_name` 及 `name`，全部使用同一經 trim 的客戶姓名。 |
| 電郵欄位 | `reply_to` 與 `email` 同步使用客戶電郵；電話及備註保留既有 fallback。 |
| 空白防護 | 姓名或電郵空白時，payload builder 會拒絕建立寄送資料。 |
| 無網絡測試 | 使用 Jennifer 虛構資料驗證五個姓名 aliases、電話、電郵、備註及必填 guard；沒有呼叫 EmailJS。 |
| 瀏覽器測試 | `/contact?shortFormTest=1` 以虛構姓名及電郵成功到達提交完成／繼續評估畫面；沒有寄送電郵。 |
| Build | `pnpm run check` 及 `pnpm run build` 通過；production bundle 包含全部姓名 aliases。 |
