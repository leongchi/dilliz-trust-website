export type BrochureLanguage = "zh" | "cn" | "en";

type LocalizedText = Record<BrochureLanguage, string>;

export const brochureSectionCopy: Record<string, LocalizedText> = {
  eyebrow: {
    zh: "公司資料",
    cn: "公司资料",
    en: "Company Materials"
  },
  title: {
    zh: "下載帝力斯公司小冊子",
    cn: "下载帝力斯公司小册子",
    en: "Download the DILLIZ Company Brochure"
  },
  description: {
    zh: "瀏覽公司簡介、核心服務及會員計劃。請選擇適合的語言版本下載完整 PDF。",
    cn: "浏览公司简介、核心服务及会员计划。请选择合适的语言版本下载完整 PDF。",
    en: "Explore our company profile, core services and membership plans. Select your preferred language to download the complete PDF."
  },
  download: {
    zh: "下載 PDF",
    cn: "下载 PDF",
    en: "Download PDF"
  },
  opensNewTab: {
    zh: "PDF 將在新分頁開啟",
    cn: "PDF 将在新分页打开",
    en: "PDF opens in a new tab"
  }
};

export const brochures = [
  {
    id: "zh",
    marker: "中",
    href: "https://dilliztrust-sidutyns.manus.space/manus-storage/dilliz-company-brochure-zh_47a1ae12.pdf",
    downloadName: "DILLIZ-Capital-Trust-Chinese-Brochure.pdf",
    title: {
      zh: "帝力斯公司小冊子｜中文版",
      cn: "帝力斯公司小册子｜中文版",
      en: "DILLIZ Company Brochure — Chinese"
    } satisfies LocalizedText,
    language: {
      zh: "繁體中文",
      cn: "繁体中文",
      en: "Traditional Chinese"
    } satisfies LocalizedText,
    meta: {
      zh: "PDF · 2 頁 · 1.2 MB",
      cn: "PDF · 2 页 · 1.2 MB",
      en: "PDF · 2 pages · 1.2 MB"
    } satisfies LocalizedText
  },
  {
    id: "en",
    marker: "EN",
    href: "https://dilliztrust-sidutyns.manus.space/manus-storage/dilliz-company-brochure-en_ed021898.pdf",
    downloadName: "DILLIZ-Capital-Trust-English-Brochure.pdf",
    title: {
      zh: "DILLIZ 公司小冊子｜英文版",
      cn: "DILLIZ 公司小册子｜英文版",
      en: "DILLIZ Company Brochure — English"
    } satisfies LocalizedText,
    language: {
      zh: "English｜英文",
      cn: "English｜英文",
      en: "English"
    } satisfies LocalizedText,
    meta: {
      zh: "PDF · 2 頁 · 4.8 MB",
      cn: "PDF · 2 页 · 4.8 MB",
      en: "PDF · 2 pages · 4.8 MB"
    } satisfies LocalizedText
  }
] as const;
