# 📬 帝力斯資本信託有限公司 (DILLIZ) 諮詢表單 - EmailJS 啟用與配置指南

本網站的「聯絡我們」諮詢表單已完整整合了 **EmailJS 官方前端 SDK**。在您填入專屬的 API 金鑰後，客戶提交的預約資訊（姓名、電話、電郵、諮詢項目、資產規模、留言）將會**直接且即時地投遞至您的官方郵箱**（如 `info@dilliztrust.com`）。

為了讓表單正式開始工作，請按照以下 **3 步** 進行簡單的配置：

---

## 📌 第一步：註冊 EmailJS 並獲取憑證

1. **註冊帳戶**：
   * 訪問 [EmailJS 官網 (https://www.emailjs.com/)](https://www.emailjs.com/)，點擊 **Sign Up Free** 註冊一個免費或付費帳戶。
2. **添加郵件服務 (Email Service)**：
   * 登入後，進入左側選單的 **Email Services**。
   * 點擊 **Add New Service**，選擇您的電子郵箱服務商：
     * 如果使用企業郵局（如 Office 365, Outlook, Google Workspace），請選擇對應的服務。
     * 如果是自定義域名郵箱，可以選擇 **SMTP Server** 並填入您的 SMTP 資訊。
   * 點擊 **Connect Account** 完成授權，您將獲得一個 **`Service ID`**（例如：`service_abc123`）。
3. **創建郵件模板 (Email Template)**：
   * 進入左側選單的 **Email Templates**，點擊 **Create New Template**。
   * 您可以設計郵件的排版與外觀。在郵件內容中，使用雙花括號 `{{}}` 來動態接收表單欄位。
   * 點擊右上角的 **Save**，您將獲得一個 **`Template ID`**（例如：`template_xyz789`）。
4. **獲取公開金鑰 (Public Key)**：
   * 進入左側選單底部的 **Account** -> **API Keys**。
   * 在 **Public Key** 欄位中複製您的金鑰（例如：`user_xxxxxx` 或 `pk_xxxxxx`）。

---

## 📌 第二步：配置您的郵件模板 (Email Template)

為了讓 EmailJS 能夠正確解析並排版客戶提交的數據，請在您的 **Email Template** 編輯器中，將郵件主體（Body）設置為以下結構（您可以直接複製）：

### 📝 建議的郵件主題 (Subject)
```text
【新客戶預約諮詢】{{from_name}} - {{interest}}
```

### 📝 建議的郵件內容 (Body)
```html
<h3>您收到了一封來自帝力斯官網的新客戶諮詢預約：</h3>
<hr />
<p><strong>👤 客戶姓名：</strong> {{from_name}}</p>
<p><strong>📞 聯絡電話：</strong> {{phone}}</p>
<p><strong>✉️ 電子郵件：</strong> {{reply_to}}</p>
<p><strong>💼 諮詢項目：</strong> {{interest}}</p>
<p><strong>💰 資產規模：</strong> {{amount}}</p>
<p><strong>💬 備註留言：</strong></p>
<blockquote style="background: #f9f9f9; border-left: 4px solid #c5a880; padding: 10px 15px; margin: 10px 0;">
  {{message}}
</blockquote>
<hr />
<p style="color: #888; font-size: 11px;">本郵件由 DILLIZ CAPITAL TRUST LIMITED 官網表單自動發送。</p>
```

> ⚠️ **注意**：花括號內的變數名稱（如 `{{from_name}}`、`{{phone}}` 等）必須與前端代碼發送的 Key **完全一致**。前端已為您做好了完美的雙語轉換（例如諮詢項目會自動轉化為「託管服務 / Custody Services」），您直接複製上方模板即可。

---

## 📌 第三步：將金鑰填入網頁代碼中

打開您的專案檔案：`/client/src/pages/Contact.tsx`，在頂部（約第 24 - 26 行）找到以下變數，並將引號內的佔位符替換為您在第一步中獲得的真實金鑰：

```typescript
// ==========================================
// 📬 EMAILJS 官方配置 (請在此填入您的真實金鑰)
// ==========================================
const EMAILJS_SERVICE_ID = "您的_SERVICE_ID";     // 填入您的 EmailJS Service ID
const EMAILJS_TEMPLATE_ID = "您的_TEMPLATE_ID";   // 填入您的 EmailJS Template ID
const EMAILJS_PUBLIC_KEY = "您的_PUBLIC_KEY";     // 填入您的 Public Key (在 Account -> API Keys 頁面)
```

保存檔案。當代碼更新並部署後，表單將會自動從「模擬演示模式」升級為**「真實郵件投遞模式」**！

---

## 🛡️ 內置的防呆與安全機制

我們在 `Contact.tsx` 中為您編寫了極其嚴謹的防呆機制：
1. **自動檢測**：若您未填寫金鑰（或保留佔位符），系統**不會崩潰**，而是會自動降級為「模擬成功演示模式」，並彈出溫和的 Toast 提示您填寫配置，確保在開發或測試期間前端體驗不中斷。
2. **安全防護**：EmailJS SDK 使用的是 **Public Key（公開金鑰）**，不包含任何後台 Private Key，因此您可以安全地將其暴露在前端網頁中，無需擔心安全洩露。
3. **提交狀態鎖定**：在郵件發送期間，提交按鈕會自動轉為金色加載狀態（`Loader2` 旋轉）並禁用點擊，防止委託人因重複點擊而發送多封重疊郵件。
