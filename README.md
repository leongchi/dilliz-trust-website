# DILLIZ 網站設計及上載指南

本文件只記錄 **DILLIZ CAPITAL TRUST LIMITED 網站**的設計、內容修改、建置、GitHub 及 cPanel 上載流程。

## 網站現況

| 項目 | 現況 |
|---|---|
| 正式網站 | [www.dilliz.com](https://www.dilliz.com) |
| GitHub | [leongchi/dilliz-trust-website](https://github.com/leongchi/dilliz-trust-website) |
| 原始碼分支 | `main` |
| 正式部署分支 | `gh-pages` |
| cPanel 目標目錄 | `/home/dilldvbi/public_html/` |
| 前端技術 | React 19、TypeScript、Vite、Tailwind CSS 4、shadcn/ui、Wouter |
| 語言 | 繁體中文 `zh`、簡體中文 `cn`、英文 `en` |
| 內容項目 | `content.json` 共 342 個三語項目 |

`main` 保存可繼續修改及重新建置的網站原始碼；`gh-pages` 保存完成建置、可由 cPanel 直接部署的正式網站檔案。不要在 `gh-pages` 修改 React／TypeScript 原始碼。

## 網站設計

網站採用 **瑞士私人銀行式的低調奢華方向**。核心視覺是深皇家藍、香檳金、暖白及石墨色；版面以清晰網格、細金線、克制留白及高對比文字建立信任感。標題偏向典雅襯線字體，正文使用易讀的無襯線字體。互動保持沉穩，按鈕、卡片及頁面進場只使用短而柔和的動效。

所有新增頁面或區塊都應延續同一設計語言，不應加入霓虹色、鮮豔漸層、過量圓角、強烈陰影或與金融信託定位不一致的裝飾。

## 網站頁面

| 路徑 | 頁面檔案 |
|---|---|
| `/` | `client/src/pages/Home.tsx` |
| `/about` | `client/src/pages/About.tsx` |
| `/services` | `client/src/pages/Services.tsx` |
| `/cases` | `client/src/pages/Cases.tsx` |
| `/membership` | `client/src/pages/Membership.tsx` |
| `/faq` | `client/src/pages/FAQ.tsx` |
| `/contact` | `client/src/pages/Contact.tsx` |
| `/terms` | `client/src/pages/Terms.tsx` |
| `/privacy` | `client/src/pages/Privacy.tsx` |
| `/legislation` | `client/src/pages/Legislation.tsx` |
| `/disclaimer` | `client/src/pages/Disclaimer.tsx` |

網站路由集中在 `client/src/App.tsx`；導航、語言選擇、頁尾及風險披露集中在 `client/src/components/Layout.tsx`；全站色彩、字體及共用樣式集中在 `client/src/index.css`。

## 網站文字

| 使用情況 | 應修改的檔案 | 是否需要重新建置 |
|---|---|---|
| 在 cPanel 快速改正式網站文字 | `/home/dilldvbi/public_html/content.json` | 不需要 |
| 修改原始碼內的正式內容檔 | `client/public/content.json` | 需要 |
| 修改網站的內建後備文字 | `client/src/lib/translations.json` | 需要 |
| 修改頁面結構或未使用翻譯鍵的文字 | 對應的 `client/src/pages/*.tsx` | 需要 |
| 修改導航、頁尾或披露 | `client/src/components/Layout.tsx` | 需要 |

`client/src/lib/translations.ts` 會以 `cache: "no-store"` 並附加時間參數載入 `/content.json`。因此，在 cPanel 正確修改並儲存 `public_html/content.json` 後，正常重新整理即可取得新文字，不應要求訪客使用 Hard Refresh。

修改 JSON 時必須保留每個項目的 `zh`、`cn`、`en` 三個欄位，以及所有引號、逗號與大括號。正式內容與後備內容應保持同步，避免 `content.json` 無法載入時顯示舊字。

## 合規文字規則

全站不得加入「定存」、「Fixed Deposit」、「投資」、「投资」或 `investment`。固定收益相關內容統一使用「固定收益信託」及 `Fixed Income Trust`。風險披露維持目前已核准文字，不應自行縮短、刪除或改成銀行存款式描述。

戰略合作夥伴只在相關服務內容內輕量提及，不建立獨立的戰略聯盟頁面。BlackSilver 對應托管服務，HashKey 對應資產聯動信用卡，中達證券行對應全球銀行帳戶。

## 圖片及網站檔案

網站圖片現存於 `client/public/images/` 及 `client/public/manus-storage/`。替換圖片時應保持原檔名或同步更新程式中的路徑，並壓縮至適合網頁的尺寸。不要刪除 `client/public/.htaccess`、`client/public/content.json`、favicon、Logo 或 SPA 所需檔案。

正式建置輸出位於 `dist/public/`。上載時必須包含該目錄內的全部檔案及隱藏檔 `.htaccess`，不能只上載 `index.html`。

## 快取及路由

`.htaccess` 同時處理 React 單頁路由與快取。HTML 及 `content.json` 使用不快取設定，確保訪客一般重新整理即可看到新版本；具雜湊檔名的 JavaScript 與 CSS 使用一小時快取。若部署後仍見舊內容，先確認 cPanel 已執行最新 `gh-pages` commit 的 **Deploy HEAD Commit**，再檢查 `public_html/content.json` 是否為正確 JSON。

## 上載方式

### cPanel 直接修改文字

只改文字時，直接在 cPanel File Manager 打開 `/home/dilldvbi/public_html/content.json`。儲存前先備份原檔，儲存後以 JSON 驗證工具確認格式。此方法不需要重新建置或更新 GitHub，但完成後應把相同改動同步回 `client/public/content.json` 及 `client/src/lib/translations.json`，避免下一次完整部署覆蓋。

### 手動上載完整網站

完成建置後，把 `dist/public/` 裡面的全部內容上載至 cPanel `public_html/`。如採用覆蓋方式，必須確認 `.htaccess`、`content.json`、`assets/`、`images/`、`manus-storage/`、`index.html` 及 `404.html` 均已更新。

### GitHub 配合 cPanel

建議用 `main` 保存原始碼，再把 `dist/public/` 同步至 `gh-pages`。`gh-pages` 內的 `.cpanel.yml` 會把正式檔案複製到 `/home/dilldvbi/public_html/`。推送完成後，在 cPanel 依次進入 **Git Version Control → Update from Remote → Deploy HEAD Commit**。

## 上載前檢查

| 檢查 | 要求 |
|---|---|
| TypeScript | `pnpm run check` 必須通過 |
| 正式建置 | `pnpm run build` 必須完成 |
| 禁用字眼 | 搜尋結果必須為零 |
| 三語內容 | `content.json` 每項必須有 `zh`、`cn`、`en` |
| 路由 | 首頁及所有主要路徑可直接開啟及重新整理 |
| 快取 | 一般重新整理可取得最新 HTML 與文字 |
| 外部連結 | 保留三語離站提示 |

## 最新網站命令

```bash
# 1. 進入網站原始碼目錄
cd /home/ubuntu/dilliz-trust-website

# 2. 安裝或同步依賴
pnpm install

# 3. 檢查 TypeScript
pnpm run check

# 4. 檢查禁用字眼；正常結果不應輸出任何內容
grep -RniE '定存|Fixed Deposit|投資|投资|investment' client/src client/public/content.json || true

# 5. 建置正式網站；輸出在 dist/public/
pnpm run build

# 6. 驗證正式 content.json
jq empty dist/public/content.json && echo 'content.json OK'

# 7. 建立乾淨的 gh-pages 工作目錄
rm -rf /tmp/dilliz-gh-pages
gh repo clone leongchi/dilliz-trust-website /tmp/dilliz-gh-pages
cd /tmp/dilliz-gh-pages
git checkout gh-pages

# 8. 以最新建置覆蓋正式分支，但保留 .git 及 .cpanel.yml
rsync -av --delete \
  --exclude='.git/' \
  --exclude='.cpanel.yml' \
  /home/ubuntu/dilliz-trust-website/dist/public/ ./

# 9. 推送最新正式網站
git add -A
git commit -m "Deploy website $(date +%Y-%m-%d)"
git push origin gh-pages

# 10. 推送後到 cPanel 執行
# Git Version Control → Update from Remote → Deploy HEAD Commit
```
