# 網站工作整理

- [x] 核對現時網站設計、文字來源、建置設定與部署檔案。
- [x] 建立只包含網站設計、內容修改、建置及上載工作的交接文件。
- [x] 排除小冊子、簡報及其他非網站工作內容。
- [x] 在文件最後加入最新且已核對的網站命令。
- [x] 驗證網站建置命令並交付整理後文件。

## 正式同步及部署

- [x] 核對遠端 `main` 最新狀態並同步網站文件與快取設定。
- [ ] 重新建置網站並把 `dist/public/` 發佈至 `gh-pages`。
- [ ] 在 cPanel 執行 Update from Remote 及 Deploy HEAD Commit。
- [ ] 核對正式網站已載入新版本及最新快取設定。

## 會員版面金色效果圖（只作預覽）

- [x] 以目前網站會員區截圖製作只更換會員文字內容的效果圖。
- [x] 完全保留黑色卡片、顏色、四個會員級別、圖示、推薦標籤及卡片排列。
- [x] 將卡片內容替換為參考會員表所示的服務項目、門檻、收益發放周期、離岸賬戶配置、全球賬單支付及客戶服務文字。
- [ ] 交付效果圖供確認；未獲批准前不得更新 `main`、`gh-pages` 或正式網站。

## 會員「包含權益」效果圖修訂

- [x] 為基礎、標準、尊享及典藏設定逐級增加而不重複的包含權益。
- [x] 保留會員卡設計、主要數值、圖示、推薦標籤及四欄排列不變。
- [x] 製作新版效果圖；未獲批准前不修改或部署正式網站。

## 尊享及典藏權益文字微調（只作預覽）

- [x] 只微調尊享及典藏的「包含權益」文字，保持基礎及標準內容不變。
- [x] 令尊享集中於費用豁免、信用卡授信、客戶管理及受益人條款。
- [x] 令典藏集中於全球架構、私隱、多重信託協調、合夥人諮詢及家族辦公室對接。
- [x] 製作新版效果圖；未獲批准前不修改或部署正式網站。

## Elite 英文及簡體會員效果圖

- [x] 英文第四級名稱改為 `Elite`，並只保留一次 `Bespoke plan — contact our specialist`。
- [x] 簡體第四級保留「典藏」，並只保留一次「专属方案｜详情请洽专员」。
- [x] 其他 Elite 欄位使用「按方案定制／優先配置／專屬安排」對應的英簡文字，不重複洽詢。
- [x] 分別製作英文及簡體中文版效果圖；未獲批准前不修改或部署正式網站。

## 典藏繁體中文會員效果圖

- [x] 第四級保留「典藏」，只保留一次「專屬方案｜詳情請洽專員」。
- [x] 其他典藏欄位使用「按方案定制、專屬安排、優先配置、特惠手續費、資深客戶專員對接」。
- [x] 保留現有卡片設計及其他級別內容，製作繁體中文效果圖供 Review。
- [x] 未獲批准前不修改或部署正式網站。

## 英文及簡體內容跟隨繁體版本

- [x] 以已確認的繁體四級內容結構同步英文及簡體中文版本。
- [x] 英文第四級維持 `Elite`，簡體第四級維持「典藏」。
- [x] 兩個版本的典藏／Elite 只保留一次洽詢提示，其他欄位按繁體內容對應翻譯。
- [x] 分別製作英文及簡體中文版效果圖；未獲批准前不修改或部署正式網站。

## 已批准會員內容正式上線

- [x] 將已批准的繁體、簡體及英文會員內容寫入正式網站來源與 runtime `content.json`。
- [x] 英文第四級使用 `Elite`；典藏／Elite 只保留一次洽詢提示。
- [x] 建置並檢查三語會員頁、合規字眼、JSON 格式及響應式顯示。
- [x] 同步 `main` 及 `gh-pages`，保留現有 cPanel 部署設定與正式內容。
- [ ] 經確認後執行 cPanel Update from Remote 及 Deploy HEAD Commit。
- [ ] 核對正式網站三語會員頁已更新。

## 會員卡 Hover 微動畫

- [x] 四張會員卡在桌面滑鼠懸停時輕微上移並增加克制的金色邊線及光感。
- [x] 卡片圖示同步柔和增亮，內容文字及卡片尺寸不得跳動。
- [x] 尊享推薦卡保留原有視覺優先級，不因其他卡 Hover 而被削弱。
- [x] 流動裝置不依賴 Hover；`prefers-reduced-motion` 使用者不播放位移動畫。
- [x] 完成 TypeScript、建置及桌面／流動版視覺檢查。
- [x] 同步 `main` 及 `gh-pages`。

## 手機版會員卡排版優化

- [x] 在小螢幕縮減卡片內外空白，但維持清晰的標題、數值及分段層級。
- [x] 長標籤與長數值採用穩定換行，避免英文、繁體及簡體互相擠壓。
- [x] 提高包含權益的行距、勾號對齊及按鈕觸控高度，移除手機版不必要的固定空白。
- [x] 保留桌面版四欄設計及 Hover 效果不變。
- [x] 完成繁體中文 390px 及 320px 小螢幕檢查。
- [x] 完成簡體中文及英文小螢幕檢查。
- [x] 在小螢幕檢查繁體、簡體及英文並完成建置。
- [x] 同步 `main` 及 `gh-pages`。

## 英文 Custodian Plan 標籤效果圖

- [x] 只把英文會員頁的 `Fixed Income Trust Threshold*` 暫改為 `Custodian Plan`。
- [x] 四張卡的數值、權益、Elite 名稱、兩行英文口號及所有設計保持不變。
- [x] 製作英文效果圖後還原臨時程式；未獲批准前不修改或部署正式網站。

## Custodian Plan 英文正式上線

- [x] 只把英文 `membership.threshold` 更新為 `Custodian Plan`，繁體及簡體值保持不變。
- [x] 同步 runtime `content.json` 及 fallback `translations.json`。
- [x] 完成三語內容斷言、TypeScript、建置及桌面／手機檢查。
- [x] 同步 `main` 及 `gh-pages`。
- [ ] 經確認後部署正式網站。
- [ ] 核對正式英文會員頁顯示 `Custodian Plan`。

## 移除會員頁重複風險披露

- [x] 移除會員卡下方的重複固定收益信託風險披露，繁體、簡體及英文同步生效。
- [x] 保留會員頁獨立的十二個月存續期說明。
- [x] 保留全站頁尾的三語風險披露，不修改其內容或位置。
- [x] 完成 TypeScript、建置及三語頁面檢查。
- [x] 同步 `main` 及 `gh-pages`。

## 英文聯絡頁標題單行顯示

- [x] 桌面版英文 `Start Planning Your Family Legacy` 保持一行，不改文字內容。
- [x] 手機版允許自然換行，避免縮得太小或超出畫面。
- [x] 繁體及簡體標題、其他聯絡頁內容與設計保持不變。
- [x] 完成 TypeScript、建置及桌面／手機三語檢查。
- [x] 同步 `main` 及 `gh-pages`。

## 英文會員藍灰標籤全大寫效果圖

- [x] 只把英文會員卡的藍灰色欄位標籤統一轉為全大寫。
- [x] 白色／金色資料、Elite 名稱、權益內容、四卡設計及排版保持不變。
- [x] 製作效果圖後移除臨時預覽程式；未獲批准前不修改或部署正式網站。

## 英文會員藍灰標籤全大寫正式上線

- [x] 英文會員卡的藍灰色欄位標籤統一為全大寫，資料值及權益內容不變。
- [x] 繁體及簡體會員卡標籤保持原有顯示。
- [x] 完成 TypeScript、建置及英文桌面／手機檢查。
- [ ] 同步 `main` 及 `gh-pages`，再部署並核對正式網站。

## 英文會員口號更新

- [x] 英文會員頁改為兩行口號：`Build A Trust with DILLIZ` 及 `SHAPE THE FUTURE YOU DESERVE`。
- [x] 繁體及簡體會員頁口號與內容維持不變。
- [x] 重新建置及檢查英文桌面與流動版換行效果後，再繼續正式部署。

## Fixed-Term Custodian Funding Plan 術語效果圖

- [x] 深度搜尋全站英文 `Fixed Income Trust`、`Fixed-Income Trust` 及相關變體，逐項分類使用場景。
- [x] 只修改英文；繁體及簡體中文文字、內容與版面全部保持不變。
- [x] 正式／首次介紹、服務標題及重要說明使用 `Fixed-Term Custodian Funding Plan`。
- [x] 會員卡、重複段落、按鈕、窄版位置使用簡稱 `Custodian Plan`。
- [x] 首次出現時評估使用 `Fixed-Term Custodian Funding Plan ("Custodian Plan")`。
- [x] 製作具代表性的網站效果圖供確認；批准前不得修改、提交或部署正式網站。

## 英文 Custodian Funding Plan 術語正式上線

- [x] 依已確認效果圖更新 runtime `content.json` 與 fallback `translations.json` 的英文內容。
- [x] 首次介紹、正式服務範圍及頁尾風險披露使用 `Fixed-Term Custodian Funding Plan`。
- [x] 會員卡、權益、期限、重複段落及窄版位置使用 `Custodian Plan`。
- [x] 更新硬編碼英文通知並清除全站 `Fixed Income Trust`／`fixed income trust` 遺留。
- [x] 斷言繁體及簡體內容逐字不變，完成 TypeScript、建置及桌面／手機檢查。
- [x] 同步 `main` 及 `gh-pages`。

## 英文首頁 CTA 標題單行顯示

- [x] 英文 `Begin Your Bespoke Wealth Planning Today` 在桌面版保持單行。
- [x] 手機版允許自然、平衡換行，不可縮至難以閱讀或出現橫向溢出。
- [x] 繁體及簡體標題與版面保持不變。
- [x] 完成 TypeScript、建置及桌面／手機視覺檢查。
- [x] 同步 `main` 及 `gh-pages`。

## Google Form 網站表格規劃

- [x] 檢視指定 Google Form 的欄位、必填設定、分段及提交流程。
- [x] 比較網站內嵌 Google Form 與網站原生表格的操作、資料儲存、通知及私隱要求。
- [x] 以現有 DILLIZ 深色金色設計提出表格版面及手機流程。
- [x] 先提供操作建議與所需決策；未獲批准前不修改或部署正式網站。

## DILLIZ 原生八步驟表格預覽（方案 B）

- [x] 核對目前程式碼、分支及預覽環境，確保不改動正式提交流程。
- [x] 以繁體中文為基礎整理八個步驟，並適配簡體中文及英文內容。
- [x] 建立獨立預覽路由、進度顯示、上一頁／下一頁、欄位驗證及預覽完成狀態。
- [x] 將舊用語改為合規網站用語，並把重複電郵及雙語雙重同意合併為清晰欄位。
- [x] 明確標示預覽不會傳送或保存資料，不連接 Google Sheet、EmailJS 或正式資料庫。
- [x] 驗證桌面版及手機版排版、鍵盤操作、必填錯誤及減少動態效果設定。
- [x] 提供預覽連結及效果圖；未獲再次批准前不部署正式網站或接通真實提交。

## 新版 Google Form 內容同步至沙盒預覽

- [x] 檢視 `https://forms.gle/DPXNd9KpA8nkXjSQ9` 的全部分段、問題、選項、必填及確認設定。
- [x] 與目前 `/assessment-preview` 內容逐項比較，列出新增、刪除及修改內容。
- [x] 只更新沙盒預覽的繁體、簡體及英文內容，不連接或保存真實資料。
- [x] 重新驗證變更步驟、必填錯誤、桌面及手機排版和禁止字眼。
- [x] 提供新版沙盒連結與效果圖；未獲批准前不部署正式網站。

## `/assessment-preview` 完整互動與測試功能

- [x] 核對目前表格狀態、八個步驟及所有必填規則。
- [x] 加入「其他」選項的條件欄位與條件必填驗證。
- [x] 加入逐步完成狀態、阻止跳過未完成部分及錯誤聚焦。
- [x] 加入第九個「核對及測試提交」畫面，顯示全部已填資料及返回編輯入口。
- [x] 加入模擬提交成功、模擬提交失敗、重試及測試編號；不連接真實 Google Sheet。
- [x] 加入測試資料自動填入及完整清除功能，並明確標示只供沙盒測試。
- [x] 驗證繁體、簡體、英文、桌面、手機、鍵盤、必填、格式、成功及失敗流程。
- [x] 提供完整沙盒測試連結與效果圖；不更新正式網站或部署分支。

## 沙盒表單正式寫入指定 Google Sheet

- [x] 檢查目前工作階段是否已連接 Google Workspace，並取得指定 Google Sheet 的網址或檔案 ID。
- [x] 確認試算表由 DILLIZ 控制，並限定只有獲授權人員可查看敏感申請資料。
- [x] 建立欄位對照、提交時間、語言、沙盒標記、提交編號及八部分資料欄。
- [x] 建立安全接收端，不在瀏覽器公開 Google 憑證；限制來源、驗證欄位並處理重複提交。
- [x] 將 `/assessment-preview` 的成功與失敗畫面接通真實沙盒寫入結果。
- [x] 以虛構測試資料提交並在 Google Sheet 核實新增資料列。
- [x] 驗證錯誤、重試、手機及三語流程；正式網站、GitHub、gh-pages、cPanel 保持不變。
- [x] 提供沙盒測試連結、Sheet 驗證結果及正式上線前的安全清單。

## Google Apps Script Web App 獨立串接示範

- [x] 核對現有 `Sandbox Submissions` 的 27 欄 schema 與沙盒資料界線。
- [x] 建立可直接貼入 Apps Script 的 `Code.gs`，包含 JSON 接收、欄位白名單、必填驗證及 Sheet 寫入。
- [x] 加入提交編號防重複、`LockService` 並行保護、請求大小限制及統一 JSON 回覆。
- [x] 建立 `appsscript.json` manifest 與 Script Properties 設定說明，避免把 Sheet ID 或密鑰放在網站程式碼。
- [x] 建立網站端 `fetch` 串接示例及沙盒端點設定方法。
- [x] 撰寫 DILLIZ Google 帳戶建立、授權、部署 Web App、取得 `/exec` 網址及更新部署的逐步指南。
- [x] 以靜態檢查及測試案例驗證 Apps Script 與網站端 payload 一致。
- [x] 交付可下載的示範程式與指南；不修改或部署正式網站。

## EmailJS 沙盒通知設定及設計指南

- [x] 核對現有聯絡表格使用的 EmailJS service、template 及 public key 位置，但不改動其流程。
- [x] 為開戶評估定義獨立 EmailJS template，只包含提交編號、時間、語言、申請人姓名及受限 Sheet 連結。
- [x] 設計 DILLIZ 私人銀行風格的電郵主旨、HTML 版面、純文字備援及 Reply-To 設定。
- [x] 撰寫 EmailJS Dashboard 建立 template、設定收件人、測試寄送及檢查紀錄的逐步操作。
- [x] 準備 `/assessment-preview` 在 Google Sheet 寫入成功後才觸發 EmailJS 的沙盒整合程式。
- [x] 定義 EmailJS 寄送失敗時的處理方式，確保 Sheet 成功資料不會重複提交。
- [x] 提供設定檢查表，待使用者回傳新 template ID 及確認 CS 郵箱後才啟用實際寄送。
- [x] 正式網站、現有諮詢表格、GitHub、gh-pages 及 cPanel 保持不變。

## 全部表格資料只經 EmailJS 電郵正文發送

- [x] 停用 `/assessment-preview` 的 Google Sheet 寫入流程，並保留既有正式網站不變。
- [x] 建立 8 個部分、全部欄位、提交編號、提交時間及語言的 EmailJS parameters 對照。
- [x] 設計繁體、簡體及英文的 DILLIZ 完整電郵正文預覽。
- [x] 在沙盒加入「預覽電郵內容」畫面，不發送 EmailJS 或保存資料。
- [x] 電郵收件人固定為 `info@dilliz.com`，Reply-To 使用申請人電郵。
- [x] 加入重複寄送防護、寄送失敗重試及清楚的 no-storage 提示設計。
- [x] 驗證所有欄位均在電郵預覽顯示、三語及手機版正常，而且沒有 Google Sheet 網絡請求。
- [x] 提供效果圖及沙盒連結；未獲再次批准前不寄出測試郵件或更新正式網站。

## `template_id6y2ku` 全欄位 EmailJS 沙盒串接

- [x] 建立與已確認電郵預覽一致的完整 EmailJS HTML template，涵蓋 8 個部分的所有欄位。
- [x] 建立完整 template parameters 對照，收件人固定為 `info@dilliz.com`，Reply-To 使用申請人電郵。
- [x] 更新 EmailJS Dashboard 的 `template_id6y2ku`，並確認沒有 Google Sheet 連結或寫入依賴。
- [x] 將 `/assessment-preview` 的最終提交接到現有 `service_p02igzf` 及 `template_id6y2ku`。
- [x] 加入單次提交鎖、重複點擊防護、失敗重試及三語成功／錯誤提示。
- [x] 在不寄信模式驗證全部欄位 parameters、字數、EmailJS 錯誤及手機版流程。
- [x] 取得使用者最後確認後，以內建虛構資料寄出一封沙盒測試電郵到 `info@dilliz.com`。
- [x] 核對 EmailJS 寄送結果及提交編號；正式網站、Contact 表格、GitHub、gh-pages、cPanel 保持不變。

## 聯絡短表＋詳細評估雙路徑沙盒流程

- [x] 核對現有 Contact 短表提交成功畫面、EmailJS 流程及欄位名稱。
- [x] 設計繁體、簡體及英文的非強制「繼續初步評估」提示及退出選項。
- [x] 以一次性、同分頁記憶體方式傳遞姓名、電話及電郵；不放入網址、不長期保存。
- [x] 在短表成功後加入「願意提供更多資料？繼續初步評估」按鈕，原有一般查詢提交保持獨立。
- [x] 在 `/assessment-preview` 讀取一次性資料並自動填入第一步，讀取後立即清除。
- [x] 確保詳細評估使用 `template_id6y2ku`，短表維持原有 `template_qunjjdo`，不重複寄送。
- [x] 加入沙盒測試入口及不寄信模式，驗證接受、略過、返回、刷新、三語及手機流程。
- [x] 提供雙路徑效果圖及沙盒連結；正式網站、GitHub、gh-pages、cPanel 不部署。

## 短表移除服務及資產規模欄位

- [x] 從 Contact 短表移除「感興趣的服務」及「預計信託資產規模」欄位。
- [x] 從短表 EmailJS parameters 移除兩個已取消欄位，現有一般查詢 template 保持可用。
- [x] 更新繁體、簡體及英文提示，短表只要求姓名及電話／電郵其中一項，備註選填。
- [x] 保留提交後「繼續初步評估」及「等待專員聯絡」兩個選擇。
- [x] 確認繼續時只帶入姓名、電話及電郵，詳細表保留全部八個步驟。
- [x] 以 no-send 沙盒模式驗證最少資料、成功畫面、略過及繼續流程。
- [x] 提供新版桌面及手機效果圖；正式網站及部署分支保持不變。

## 中英文公司小冊子網站下載

- [x] 檢查中英文 PDF 的封面、頁數、檔案大小、內容語言及可正常開啟狀態。
- [x] 核對 About、Contact、Footer 等位置，選擇最自然且不干擾主要轉換流程的下載入口。
- [x] 將兩份 PDF 上傳為長期有效的網站靜態資產，不把大型檔案放入專案目錄。
- [x] 建立繁體、簡體及英文的公司小冊子下載標題、說明、語言標籤及檔案大小提示。
- [x] 在合適頁面加入中英文下載按鈕，使用可鍵盤操作、清楚焦點及新分頁安全屬性。
- [x] 驗證兩個 PDF 連結、下載檔名、桌面／手機排版及三語切換。
- [x] 提供沙盒效果圖及下載測試結果；未確認前不部署 GitHub、gh-pages 或 cPanel。

## 客戶評估表及小冊子正式發布

- [x] 核對本機工作樹、`main`、`gh-pages` 及遠端最新 commit，避免覆蓋其他工作階段更新。
- [x] 將詳細評估 EmailJS 正式寄送設定由沙盒鎖定改為可用，保留短表與詳細表獨立 template。
- [x] 確認 About 小冊子下載資產可在正式部署環境長期存取。
- [x] 執行 TypeScript、production build、禁止字眼、三語、EmailJS 欄位、PDF 及路由檢查。
- [x] 保存並同步完整來源版本到 GitHub `main`。
- [x] 只把 `dist/public` 正式資產發布至 `gh-pages`，保留 `.cpanel.yml`、`.nojekyll`、`404.html` 及 `.htaccess`。
- [x] 核對 GitHub 遠端 `main`／`gh-pages` commit；`www.dilliz.com` 仍顯示舊資產，等待 cPanel 部署。
- [x] 提供 `Git Version Control → Manage → Pull or Deploy → Update from Remote → Deploy HEAD Commit` 步驟。

## `/assessment-preview` EmailJS 沙盒通知正式串接

- [ ] 核對 Google Sheet 成功回覆、現有 EmailJS service、`template_id6y2ku` 及 `info@dilliz.com` 設定。
- [ ] 只在 Sheet 寫入成功後發送 EmailJS 安全摘要，不傳送稅務、資金、款項或電話資料。
- [ ] 將 EmailJS 成功與失敗狀態分開記錄；通知失敗不得重複寫入 Google Sheet。
- [ ] 加入繁體、簡體及英文的「資料已保存／通知已寄出／通知待處理」提示。
- [ ] 在不實際寄送郵件的情況下測試 Sheet-only、EmailJS 錯誤、重試及重複提交流程。
- [ ] 取得使用者再次確認後，以虛構資料從網站寄出一封通知到 `info@dilliz.com`。
- [ ] 核對 EmailJS 寄送結果、Sheet 資料列及提交編號一致。
- [ ] 交付沙盒測試連結；正式網站、現有 Contact 表格、GitHub、gh-pages 及 cPanel 保持不變。
