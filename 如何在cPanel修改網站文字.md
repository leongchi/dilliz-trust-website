# 📝 如何在 cPanel 直接修改網站文字

## 概述

本版本的網站已將**所有文字內容**抽取到一個獨立的 `content.json` 檔案中。
您只需在 cPanel 的 File Manager 中修改這個 JSON 檔案，儲存後刷新網頁即可看到更新。

**無需任何打包、編譯或技術操作。**

---

## 修改步驟

### 1. 登入 cPanel
### 2. 進入 File Manager → `public_html/`
### 3. 找到 `content.json` 檔案
### 4. 右鍵 → Edit（編輯）
### 5. 搜尋您想修改的文字（Ctrl+F）
### 6. 修改文字後，點擊「Save Changes（儲存）」
### 7. 刷新網頁即可看到更新

---

## content.json 格式說明

每一條文字都有三個語言版本：

```json
"hero.title": {
  "zh": "因為您，才值得擁有",
  "en": "Because You Deserve It",
  "cn": "因为您，才值得拥有"
}
```

- `zh` = 繁體中文
- `en` = English
- `cn` = 簡體中文

**修改時只需替換引號內的文字即可。**

---

## 常見修改範例

### 範例 1：修改首頁標語
找到：
```json
"hero.title": {
  "zh": "因為您，才值得擁有",
```
改為：
```json
"hero.title": {
  "zh": "您的新標語",
```

### 範例 2：修改會員權益文字
找到：
```json
"inline.membership.5": {
  "zh": "尊享定存特惠收益率",
```
改為您想要的新文字。

---

## ⚠️ 注意事項

1. **不要刪除引號 `""`**：所有文字必須在引號內。
2. **不要刪除逗號 `,`**：每一組 `}` 後面都有逗號（最後一組除外）。
3. **不要修改 key 名稱**：只修改 `"zh":`、`"en":`、`"cn":` 後面的文字。
4. **如果修改後網頁出錯**：檢查是否有多餘或缺少的引號/逗號。可以用 [jsonlint.com](https://jsonlint.com) 驗證 JSON 格式。

---

## 文字對照表（部分常用 Key）

| Key | 說明 |
|-----|------|
| `nav.about` | 導航欄「關於我們」 |
| `nav.services` | 導航欄「我們的服務」 |
| `nav.membership` | 導航欄「會員計劃」 |
| `hero.title` | 首頁大標題 |
| `hero.subtitle` | 首頁副標題 |
| `services.asset.title` | 託管服務標題 |
| `services.trust.title` | 家族信託標題 |
| `services.deposit.title` | 全球銀行戶口標題 |
| `services.finance.title` | 資產聯動信用卡標題 |
| `services.card.title` | 全球賬單代付標題 |
| `inline.membership.*` | 會員計劃頁面的權益文字 |
| `inline.home.*` | 首頁的各段文字 |
| `inline.about.*` | 關於我們頁面的文字 |

完整的 313 條文字都在 `content.json` 中，用 Ctrl+F 搜尋中文即可快速定位。

---

## 檔案結構

```
public_html/
├── content.json          ← 📝 唯一需要修改的檔案
├── index.html            ← 網頁入口（不需修改）
├── .htaccess             ← 路由設定（不需修改）
├── assets/               ← JS/CSS 檔案（不需修改）
├── images/               ← 圖片檔案
└── manus-storage/        ← 其他資源
```
