import React, { useState } from "react";
import { 
  Shield, 
  Briefcase, 
  Globe, 
  CreditCard, 
  FileText, 
  ChevronDown, 
  Phone, 
  Mail, 
  MapPin, 
  Award, 
  Check, 
  ArrowRight, 
  Menu, 
  X,
  ExternalLink,
  Users,
  Lock,
  HeartPulse,
  TrendingUp,
  Coins
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

export default function Home() {
  const [mobileMenuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"custody" | "asset" | "offshore" | "card" | "bill">("custody");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handlePlaceholderClick = (featureName: string) => {
    toast.info(`${featureName}功能即將推出，敬請期待！`, {
      description: "我們的專屬客戶經理將竭誠為您服務。",
    });
  };

  const services = {
    custody: {
      title: "託管服務 | Custody Services",
      subtitle: "Protecting Your Assets. Securing Your Legacy. 守護您的資產，傳承您的未來。",
      description: "我們的信託服務旨在有效且安全地保護、管理及傳承您的財富。作為您的受託人，我們秉持誠信、專業及嚴格保密原則，始終以您的最佳利益為依歸。",
      solutions: [
        { title: "資產保障信託 (Asset Protection Trusts)", desc: "隔離商業與個人風險，確保核心資產不受法律糾紛或債權人追索影響。" },
        { title: "遺產與傳承規劃 (Estate & Succession Planning)", desc: "跨世代財富傳承設計，確保家族基業按照您的意願平穩延續。" }
      ],
      footer: "我們提供專業的信託管理、合規監管及透明報告，讓您安心無憂。",
      icon: Shield,
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663428880536/SiDUtyNsHUfgNGHiRqWWfq/trust_concept-ntRyoHQMCmdhN7ZWDmDD8t.webp"
    },
    asset: {
      title: "資產規劃 | Asset Structuring",
      subtitle: "Secure. Stable. Guaranteed Returns. 安全穩定，收益保障。",
      description: "我們的定期存款產品為您提供穩健可靠的儲蓄增值方案，在固定期限內享有保證回報，助力從容規劃短期及長期財務目標。",
      solutions: [
        { title: "具競爭力的利率 (Competitive interest rates)", desc: "高於市場平均水平的收益率，讓閒置資金穩步增值。" },
        { title: "靈活存期選擇 (Flexible tenures)", desc: "提供多種不同存期，滿足您短期流動性或長期資產配置的需求。" },
        { title: "低風險理財方案 (Low-risk savings solution)", desc: "嚴格的風險管理框架，保障資產穩健運行。" },
        { title: "本金保障 (Guaranteed principal protection)", desc: "100% 本金安全承諾，抵禦市場波動帶來的資產減損風險。" }
      ],
      footer: "憑藉完善的國際網絡及嚴格的合規標準，我們協助客戶高效管理全球資產。",
      icon: TrendingUp,
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=800"
    },
    offshore: {
      title: "離岸銀行設立服務 | Offshore Banking Services",
      subtitle: "Connecting You to the World. 連接全球，佈局世界。",
      description: "我們的全球銀行服務為個人、企業及跨國企業提供安全、合規及高效的跨境金融解決方案，助您在全球市場中遊刃有餘。",
      solutions: [
        { title: "多幣種賬戶服務 (Multi-currency accounts)", desc: "支持全球主流貨幣，靈活應對多國資產配置與貿易結算。" },
        { title: "跨境資金轉移 (Cross-border fund transfers)", desc: "安全、快捷的國際匯款通道，降低跨境資金流轉成本。" },
        { title: "國際貿易結算 (International trade settlement)", desc: "專業的貿易金融工具與信用支持，保障跨國交易順利完成。" },
        { title: "離岸賬戶規劃 (Offshore account solutions)", desc: "量身定制的境外賬戶設立方案，優化全球稅務與資產架構。" }
      ],
      footer: "憑藉完善的國際網絡及嚴格的合規標準，我們協助客戶高效管理全球資產。",
      icon: Globe,
      image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=800"
    },
    card: {
      title: "資產聯動信用卡服務 | Asset Link Credit Card",
      subtitle: "Flexible Spending. Exclusive Rewards. 靈活消費，尊享禮遇。",
      description: "我們的信用卡產品為您提供便捷與靈活的消費體驗，同時享有專屬獎賞及禮遇，將您的資產實力轉化為無上限的全球消費特權。",
      solutions: [
        { title: "靈活信用額度 (Flexible credit limits)", desc: "根據您的託管資產實力，提供相匹配的超高信用額度。" },
        { title: "安全網上及非接觸式支付 (Secure online & contactless payments)", desc: "頂級加密技術與實時交易監控，保障每一筆交易安全無虞。" },
        { title: "全球通用 (Global acceptance)", desc: "通行全球數百萬家商戶與尊貴會所，尊享無國界的便利體驗。" }
      ],
      footer: "無論身處何處，均可安心享受專屬禮遇。體驗為您量身定制的極致生活方式。",
      icon: CreditCard,
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663428880536/SiDUtyNsHUfgNGHiRqWWfq/credit_card-BeiQWMCC6iG5E64cMfCE4e.webp"
    },
    bill: {
      title: "智能賬單支付服務 | International Bill Payment Services",
      subtitle: "Seamless Payments. Total Control. 輕鬆繳費，掌握全局。",
      description: "我們的賬單支付服務協助您輕鬆管理財務，透過安全、準時及自動化的繳費安排，讓您無需擔心錯過任何付款期限，專注於更重要的人生規劃。",
      solutions: [
        { title: "多渠道支付方式 (Multi-channel payment options)", desc: "支持全球多種主流支付渠道與自動化扣款，省時省力。" },
        { title: "安全加密處理 (Secure and encrypted processing)", desc: "符合國際金融級安全標準，確保您的敏感財務數據不外洩。" }
      ],
      footer: "以高效安全的支付方案，助您從容管理每一項財務承諾，實現真正的財務自由與掌控力。",
      icon: FileText,
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800"
    }
  };

  const cases = [
    {
      title: "創業成功，區分風險",
      scenario: "王先生經營製造企業多年，公司規模與債務隨之擴張。在一次市場波動中，公司面臨巨額債務與法律糾紛，由於未提早做好資產隔離規劃，個人名下房產和投資資產面臨被追索風險。",
      solution: "建立控股架構，區分個人與企業責任；優化股權配置，降低債務穿透風險。",
      result: "個人與家庭資產成功與企業風險隔離，財富得以保全。",
      icon: Briefcase
    },
    {
      title: "婚姻變動，資產重新分配",
      scenario: "陳女士為高淨值投資人，婚姻關係發生重大變化時，才發現大部分資產屬於夫妻共同財產，面臨高比例分割。",
      solution: "提前設立信託持有部分資產；設計婚前/婚後財產安排；強化家族資產獨立架構。",
      result: "家族核心資產得到保護，子女未來繼承不受影響。",
      icon: Users
    },
    {
      title: "退休規劃不足，晚年生活品質受市場風險波及",
      scenario: "陳女士事業成功、資產豐厚，卻將多數資金投入高波動投資與家族事業，未完整規劃退休現金流與醫療保障。當年歲漸長、健康出現變化時，才發現資產雖多，卻缺乏穩定可支配收入來源，養老生活品質受到影響。",
      solution: "規劃建立退休專屬信託，鎖定穩定現金流；建立資產分類架構（成長資產 × 保值資產 × 現金流資產）。",
      result: "退休後擁有穩定收入與專屬保障，生活品質不受市場波動影響，實現安心、尊嚴且自主的晚年生活。",
      icon: HeartPulse
    },
    {
      title: "跨境資產面臨全球徵稅與資訊透明壓力",
      scenario: "張先生擁有多國資產與身份，隨著全球稅務資訊交換機制 (CRS) 實施，面臨重複課稅與隱私暴露風險。",
      solution: "重塑跨境資產架構；合規稅務優化規劃；多司法管轄區信託設計。",
      result: "在合法合規的前提下優化稅務效率，同時確保家族財富隱私。",
      icon: Globe
    },
    {
      title: "突發意外，資產凍結與繼承延誤",
      scenario: "企業負責人突然因重病或意外離世，銀行賬戶暫時凍結，公司資金流動受阻，家族需經歷繁複法律程序才能動用資產，影響企業營運與家庭生活。",
      solution: "設立生前信託 (Living Trust)；制定資產接管與緊急授權機制；建立企業應急管理架構。",
      result: "資產可按照預先安排平穩過渡，避免資金凍結與法律程序延誤。",
      icon: Lock
    },
    {
      title: "子女海外發展，身份與稅務複雜化",
      scenario: "子女留學或移民海外，家庭資產涉及多重稅務身份，未規劃前可能面臨高額贈與稅、遺產稅或雙重課稅困難。",
      solution: "跨境信託架構設計；贈與與繼承安排優化；多重身份稅務模擬規劃。",
      result: "降低跨境稅務負擔，保障家族財富完整傳承。",
      icon: Award
    }
  ];

  const membershipTiers = [
    {
      name: "精選版 (Essential)",
      level: "尊享會員：尊顯版",
      services: {
        deposit: "基礎版 (Essential)",
        credit: "輕享版",
        global: "✓",
        vip: "—",
        concierge: "—"
      },
      bg: "bg-slate-50",
      border: "border-border"
    },
    {
      name: "優越版 (Standard)",
      level: "尊享會員：優越版",
      services: {
        deposit: "標準版 (Standard)",
        credit: "優選版",
        global: "✓",
        vip: "—",
        concierge: "—"
      },
      bg: "bg-blue-50/30",
      border: "border-blue-100"
    },
    {
      name: "尊榮版 (Premium)",
      level: "尊享會員：尊榮版",
      services: {
        deposit: "尊享版 (Premium)",
        credit: "尊尚版",
        global: "✓",
        vip: "✓",
        concierge: "✓"
      },
      bg: "bg-amber-50/20",
      border: "border-amber-200/50",
      highlight: true
    },
    {
      name: "私享典藏版 (Signature / Elite)",
      level: "尊享會員：私享典藏版",
      services: {
        deposit: "旗艦版 (Signature / Elite)",
        credit: "典藏版",
        global: "—",
        vip: "—",
        concierge: "（如需了解詳情請與專屬顧問聯繫）"
      },
      bg: "bg-slate-900 text-white",
      border: "border-slate-800"
    }
  ];

  const faqs = [
    {
      q: "什麼是信託？主要角色有哪些？",
      a: "信託是一種財產管理制度，主要包含三個角色：\n1. 委託人：提供或擁有財產的人。\n2. 受託人（信託公司）：負責管理與處分財產的專業機構。\n3. 受益人：享受信託利益的人（委託人自己或其指定的家人皆可）。"
    },
    {
      q: "信託公司與一般的商業銀行有什麼不同？",
      a: "兩者最大差異在於業務範圍與資金運用：\n- 商業銀行：主要業務為吸收大眾存款與辦理放款，可公開募集資金。\n- 信託公司：主要是為客戶提供資產管理、信託規劃等服務，不能吸收公眾存款，資金募集也多採私募形式。在台灣及香港，許多大型銀行內部皆設有專屬的「信託部」來提供此服務。"
    },
    {
      q: "香港信託公司與銀行的保障機制有何本質區別？",
      a: "香港銀行受存款保障計劃 (DPS) 覆蓋，每人最高保障 80 萬港元。而信託的核心保障在於「信託財產獨立隔離」。資產不屬於受託人的自有資產，也不受 DPS 保護（但存放在銀行的信託現金存款仍受 DPS 覆蓋）。"
    },
    {
      q: "如果信託公司倒閉，我的資產會被清算嗎？",
      a: "不會。根據《受託人條例》，信託資產獨立於公司自有資產，不納入清算範圍。資產將由法院或委託人委任的新受託人接管。"
    },
    {
      q: "信託公司可以幫忙處理哪些財產？",
      a: "幾乎所有具有經濟價值的財產都能交付信託，常見的包含：\n- 金錢信託：用於退休規劃、子女教育基金、不動產買賣價金履約保證。\n- 有價證券信託：包含股票、債券等，企業常用於「員工持股信託」以留才。\n- 不動產信託：包含房屋、土地，可用於管理租金收入或防範產權遭詐騙。"
    },
    {
      q: "把錢或財產交給信託公司，會不會被私吞或搞丟？",
      a: "不會。信託財產具有高度的法律保障：\n1. 獨立性：信託財產完全獨立於信託公司的自有資產之外。即便信託公司經營不善破產，債權人也無權拍賣或扣押您的信託財產。\n2. 政府嚴格監管：各地金融主管機關皆有嚴格的設立門檻與法規（如台灣的《信託法》與香港《受託人條例》），確保受託人依法行事。"
    },
    {
      q: "信託能持續多久？我可以終止我的信託嗎？",
      a: "在香港設立的信託，如果你不終止它，它可以永遠存在。你的資產將受到信託的無限期保護。但是，如果您設立了可撤銷信託，您可以隨時終止它。"
    },
    {
      q: "客戶經理或你們的專業團隊會管理我帳戶中的資產嗎？",
      a: "委託人如需要專業或投資建議，絕對有權自行聘請律師、會計師或持牌投資顧問等獨立專業人士。帝力斯信託不提供投資建議。我們的客戶經理僅以信託行政人員身份，嚴格按照您的指示行事。"
    },
    {
      q: "經營信託業務需要特別的證照嗎？",
      a: "以香港為例，任何經營信託或公司服務業務的業者 (TCSP)，都必須向公司註冊處申請相關牌照，並受《打擊洗錢條例》嚴格監管。帝力斯資本信託有限公司持有牌照號碼：TC010540。"
    },
    {
      q: "債權人可以通過信託追溯我的資產嗎？",
      a: "帝力斯信託提供的託管信託服務可以作為財產的防火牆，也具有保密功能。根據《信託承認條例》（第 76 章，第 2 節，第 11 節）附表第 2(1)節，信託資產是一項獨立的基金，不屬於信託公司自己的財產，以受託人的名義持有，受託人負責根據其規定的條款和特殊職責管理信託資產。如果信託目的是合法的，信託期限超過 5 年，信託資產被追溯的可能性很低。"
    },
    {
      q: "香港信託相對於日本或歐美信託的主要優勢？",
      a: "主要優勢包括：永久存續、排除外國強迫繼承法（防火牆條款）、稅務環境優越（無資產增值稅、遺產稅及預扣稅），以及極高的隱私性（無公共信託登記冊）。歡迎隨時和我們的顧問聊聊，讓我們一起為您找出更安心、更貼心的金融規劃。"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-[var(--gold)] selection:text-white">
      {/* 頂部通知欄 / 牌照聲明 */}
      <div className="bg-[#071426] text-slate-300 py-2 px-4 text-xs border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="bg-[var(--gold)] text-white px-1.5 py-0.5 rounded-sm font-semibold text-[10px]">持牌信託</span>
            <span>帝力斯資本信託有限公司 DILLIZ CAPITAL TRUST LIMITED | 信託或公司服務提供者牌照號碼: TC010540</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-white transition-colors cursor-pointer" onClick={() => handlePlaceholderClick("客戶端登入")}>
              專屬客戶端登入
            </span>
          </div>
        </div>
      </div>

      {/* 導航欄 */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <img 
              src="/manus-storage/IMG_3906_7699ca83.JPG" 
              alt="DILLIZ CAPITAL TRUST Logo" 
              className="h-14 w-auto object-contain"
            />
          </a>

          {/* 桌面導航 */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#about" className="text-sm font-medium text-slate-600 hover:text-[#0B1E36] transition-colors">關於我們</a>
            <a href="#services" className="text-sm font-medium text-slate-600 hover:text-[#0B1E36] transition-colors">信託服務</a>
            <a href="#cases" className="text-sm font-medium text-slate-600 hover:text-[#0B1E36] transition-colors">真實案例</a>
            <a href="#membership" className="text-sm font-medium text-slate-600 hover:text-[#0B1E36] transition-colors">會員等級</a>
            <a href="#faq" className="text-sm font-medium text-slate-600 hover:text-[#0B1E36] transition-colors">常見問題</a>
            <a href="#contact" className="text-sm font-medium text-slate-600 hover:text-[#0B1E36] transition-colors">聯絡我們</a>
          </nav>

          {/* 桌面 CTA 按鈕 */}
          <div className="hidden lg:flex items-center gap-4">
            <button 
              onClick={() => handlePlaceholderClick("預約專屬諮詢")} 
              className="btn-gold text-sm font-semibold tracking-wide"
            >
              預約專屬諮詢
            </button>
          </div>

          {/* 行動端選單按鈕 */}
          <button className="lg:hidden p-2 text-slate-600" onClick={() => setMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* 行動端選單 */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-6 absolute top-20 left-0 w-full shadow-xl animate-in fade-in slide-in-from-top-5 duration-200">
            <nav className="flex flex-col gap-4 mb-6">
              <a href="#about" onClick={() => setMenuOpen(false)} className="text-base font-medium text-slate-700 py-2 border-b border-slate-50">關於我們</a>
              <a href="#services" onClick={() => setMenuOpen(false)} className="text-base font-medium text-slate-700 py-2 border-b border-slate-50">信託服務</a>
              <a href="#cases" onClick={() => setMenuOpen(false)} className="text-base font-medium text-slate-700 py-2 border-b border-slate-50">真實案例</a>
              <a href="#membership" onClick={() => setMenuOpen(false)} className="text-base font-medium text-slate-700 py-2 border-b border-slate-50">會員等級</a>
              <a href="#faq" onClick={() => setMenuOpen(false)} className="text-base font-medium text-slate-700 py-2 border-b border-slate-50">常見問題</a>
              <a href="#contact" onClick={() => setMenuOpen(false)} className="text-base font-medium text-slate-700 py-2 border-b border-slate-50">聯絡我們</a>
            </nav>
            <button 
              onClick={() => { setMenuOpen(false); handlePlaceholderClick("預約專屬諮詢"); }} 
              className="w-full btn-gold text-center font-semibold"
            >
              預約專屬諮詢
            </button>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center bg-[#071426] text-white overflow-hidden">
        {/* 背景圖片及漸變遮罩 */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663428880536/SiDUtyNsHUfgNGHiRqWWfq/hero_banner-niwTcGZ9UiKQt6bt9KbC3d.webp" 
            alt="DILLIZ Hong Kong Harbour Dusk View" 
            className="w-full h-full object-cover opacity-45 transform scale-105 animate-pulse duration-[10s]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071426] via-[#071426]/90 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#071426] via-transparent to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-sm mb-6">
              <Shield size={14} className="text-[var(--gold)]" />
              <span className="text-xs font-semibold tracking-widest text-slate-200 uppercase">
                香港持牌信託服務公司 · 牌照 TC010540
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight font-serif">
              因為你，才值得擁有
              <span className="block text-2xl md:text-3xl font-light text-slate-300 font-sans tracking-wide mt-3">
                Build Trust with Dilliz, Shape your future
              </span>
            </h1>

            <p className="text-lg text-slate-300 mb-10 leading-relaxed font-light max-w-2xl">
              帝力斯資本信託有限公司（Dilliz Capital Trust Company Limited）總部設於香港，是一家根據香港《打擊洗錢及恐怖分子資金籌集條例》（第 615 章）註冊的持牌信託服務公司。我們專注為全球高淨值客戶提供客製化信託解決方案。
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#services" className="btn-gold text-center font-semibold tracking-wider flex items-center justify-center gap-2">
                探索信託方案 <ArrowRight size={16} />
              </a>
              <a href="#about" className="btn-outline-gold text-center font-semibold tracking-wider hover:bg-white/5">
                關於帝力斯信託
              </a>
            </div>
          </div>
        </div>

        {/* 底部微小捲動提示 */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2 opacity-70 animate-bounce">
          <span className="text-[10px] tracking-[0.25em] text-slate-400 uppercase">往下捲動</span>
          <ChevronDown size={14} className="text-[var(--gold)]" />
        </div>
      </section>

      {/* 關於我們 (About Us) */}
      <section id="about" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            {/* 左側文字 */}
            <div className="lg:col-span-7">
              <span className="text-xs font-bold tracking-[0.25em] text-[var(--gold)] uppercase block mb-3">關於我們</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1E36] mb-8 font-serif">
                為何選擇 Dilliz Capital Trust？
              </h2>
              
              <div className="space-y-6 text-slate-600 leading-relaxed font-light">
                <p>
                  帝力斯資本信託有限公司（Dilliz Capital Trust Company Limited）總部設於香港，是一家根據香港《打擊洗錢及恐怖分子資金籌集條例》（第 615 章）註冊的持牌信託服務公司（牌照號碼：<strong>TC010540</strong>），以及根據香港《受託人條例》（第 29 章）註冊的信託公司。
                </p>
                <p>
                  我們專注為客戶提供定制化信託解決方案，旨在成為您最值得信賴的信託公司。我們的服務涵蓋資產託管、風險隔離、稅務優化及財富傳承，為每位客戶量身定制解決方案，確保您的財富在嚴格合規框架下穩健運作、世代相傳。
                </p>
              </div>

              {/* 使命、理念、定位 */}
              <div className="grid md:grid-cols-3 gap-8 mt-12 pt-12 border-t border-slate-100">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-sm bg-blue-50 flex items-center justify-center text-[#0B1E36]">
                    <Shield size={20} />
                  </div>
                  <h3 className="font-bold text-lg text-[#0B1E36] font-serif">使命</h3>
                  <p className="text-sm text-slate-500 font-light leading-relaxed">保護並傳承每一位客戶的財富，超越世代。</p>
                </div>
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-sm bg-amber-50 flex items-center justify-center text-[var(--gold)]">
                    <Award size={20} />
                  </div>
                  <h3 className="font-bold text-lg text-[#0B1E36] font-serif">理念</h3>
                  <p className="text-sm text-slate-500 font-light leading-relaxed">以客戶為本，信任為橋樑，創新為動力。</p>
                </div>
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-sm bg-slate-50 flex items-center justify-center text-slate-700">
                    <Globe size={20} />
                  </div>
                  <h3 className="font-bold text-lg text-[#0B1E36] font-serif">定位</h3>
                  <p className="text-sm text-slate-500 font-light leading-relaxed">簡易靈活的管理方式，長期守護您的財富。</p>
                </div>
              </div>
            </div>

            {/* 右側圖片 */}
            <div className="lg:col-span-5 relative">
              <div className="border border-slate-200 p-3 bg-white shadow-xl rounded-sm">
                <img 
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663428880536/SiDUtyNsHUfgNGHiRqWWfq/trust_concept-ntRyoHQMCmdhN7ZWDmDD8t.webp" 
                  alt="Dilliz Trust Document Concept" 
                  className="w-full h-auto object-cover rounded-sm"
                />
              </div>
              {/* 裝飾性金色框 */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b-2 border-l-2 border-[var(--gold)] -z-10 opacity-40"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 border-t-2 border-r-2 border-[#0B1E36] -z-10 opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 我們的服務 (Our Services) */}
      <section id="services" className="py-24 bg-slate-50 border-y border-slate-100 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-[0.25em] text-[var(--gold)] uppercase block mb-3">專業方案</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1E36] mb-4 font-serif">我們提供的服務</h2>
            <div className="w-12 h-[2px] bg-[var(--gold)] mx-auto mb-6"></div>
            <p className="text-slate-500 font-light">
              帝力斯資本信託提供多樣化、跨司法管轄區的財富管理與託管方案，協助您靈活配置全球資產，實現資產增值與穩健傳承。
            </p>
          </div>

          {/* 服務 Tab 切換 */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {(Object.keys(services) as Array<keyof typeof services>).map((key) => {
              const ServiceIcon = services[key].icon;
              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-sm text-sm font-medium transition-all duration-300 ${
                    activeTab === key
                      ? "bg-[#0B1E36] text-white shadow-md"
                      : "bg-white text-slate-600 border border-slate-200 hover:border-[#0B1E36] hover:text-[#0B1E36]"
                  }`}
                >
                  <ServiceIcon size={16} />
                  <span>{services[key].title.split("|")[0].trim()}</span>
                </button>
              );
            })}
          </div>

          {/* Tab 內容展示 */}
          <div className="bg-white border border-slate-100 shadow-xl rounded-sm overflow-hidden transition-all duration-500">
            <div className="grid lg:grid-cols-12">
              {/* 左側詳情 */}
              <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold tracking-widest text-[var(--gold)] uppercase block mb-2">
                    {services[activeTab].subtitle}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#0B1E36] mb-6 font-serif">
                    {services[activeTab].title}
                  </h3>
                  <p className="text-slate-600 font-light leading-relaxed mb-8">
                    {services[activeTab].description}
                  </p>

                  <h4 className="font-bold text-slate-800 mb-4 font-serif flex items-center gap-2">
                    <span className="w-1.5 h-4 bg-[var(--gold)] inline-block"></span>
                    核心方案包括：
                  </h4>
                  <ul className="space-y-4">
                    {services[activeTab].solutions.map((sol, index) => (
                      <li key={index} className="flex gap-3 items-start">
                        <div className="w-5 h-5 rounded-full bg-amber-50 text-[var(--gold)] flex items-center justify-center mt-0.5 shrink-0">
                          <Check size={12} />
                        </div>
                        <div>
                          <h5 className="font-semibold text-slate-800 text-sm">{sol.title}</h5>
                          <p className="text-xs text-slate-500 font-light mt-1">{sol.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-10 pt-6 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <p className="text-xs text-slate-400 italic max-w-md">
                    {services[activeTab].footer}
                  </p>
                  <button 
                    onClick={() => handlePlaceholderClick(services[activeTab].title.split("|")[0].trim())}
                    className="btn-gold text-xs font-semibold py-2 px-4 shrink-0 flex items-center gap-1.5"
                  >
                    立即諮詢專屬方案 <ArrowRight size={12} />
                  </button>
                </div>
              </div>

              {/* 右側圖片 */}
              <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full">
                <img 
                  src={services[activeTab].image} 
                  alt={services[activeTab].title} 
                  className="w-full h-full object-cover absolute inset-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E36]/50 to-transparent lg:bg-gradient-to-r lg:from-[#0B1E36]/20 lg:to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 真實情境 · 真實風險 · 專業方案 (Cases Section) */}
      <section id="cases" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-[0.25em] text-[var(--gold)] uppercase block mb-3">真實情境</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1E36] mb-4 font-serif">真實風險 · 專業方案</h2>
            <div className="w-12 h-[2px] bg-[var(--gold)] mx-auto mb-6"></div>
            <p className="text-slate-500 font-light">
              Dilliz Capital Trust 協助客戶預見潛在風險，並提供專業的解決方案，確保財富在各種情境下都能穩健傳承。
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cases.map((c, index) => {
              const CaseIcon = c.icon;
              return (
                <div key={index} className="card-premium flex flex-col justify-between group">
                  <div>
                    <div className="w-12 h-12 rounded-sm bg-slate-50 text-[#0B1E36] group-hover:bg-[#0B1E36] group-hover:text-white transition-all duration-300 flex items-center justify-center mb-6">
                      <CaseIcon size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-[#0B1E36] mb-4 font-serif">{c.title}</h3>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <span className="text-[10px] font-bold tracking-wider text-red-600 uppercase block mb-1">潛在風險情境</span>
                        <p className="text-xs text-slate-500 font-light leading-relaxed">{c.scenario}</p>
                      </div>
                      <div>
                        <span className="text-[10px] font-bold tracking-wider text-blue-600 uppercase block mb-1">建議方案</span>
                        <p className="text-xs text-slate-600 font-medium leading-relaxed">{c.solution}</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <span className="text-[10px] font-bold tracking-wider text-green-600 uppercase block mb-1">預期結果</span>
                    <p className="text-xs text-slate-700 font-semibold">{c.result}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 會員等級 (Membership Section) */}
      <section id="membership" className="py-24 bg-slate-50 border-t border-slate-100 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-[0.25em] text-[var(--gold)] uppercase block mb-3">專屬特權</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1E36] mb-4 font-serif">會員等級比較</h2>
            <div className="w-12 h-[2px] bg-[var(--gold)] mx-auto mb-6"></div>
            <p className="text-slate-500 font-light">
              我們為不同資產實力的客戶提供多層次的會員等級，每一級別均享有量身定制的專屬金融服務與禮遇。
            </p>
          </div>

          {/* 會員等級卡片 */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {membershipTiers.map((tier, index) => (
              <div 
                key={index} 
                className={`border rounded-sm p-6 flex flex-col justify-between transition-all duration-300 ${tier.bg} ${tier.border} ${
                  tier.highlight ? "shadow-xl ring-2 ring-[var(--gold)] scale-102" : "shadow-sm hover:shadow-md"
                }`}
              >
                <div>
                  {tier.highlight && (
                    <span className="bg-[var(--gold)] text-white text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-sm mb-4 inline-block">
                      最受歡迎
                    </span>
                  )}
                  <h3 className={`text-lg font-bold font-serif mb-1 ${tier.name.includes("私享") ? "text-[var(--gold)]" : "text-[#0B1E36]"}`}>
                    {tier.name}
                  </h3>
                  <p className="text-xs text-slate-400 font-light mb-6">{tier.level}</p>
                  
                  <div className="space-y-4 pt-6 border-t border-slate-200/50">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-400">1. 定期產品</span>
                      <span className="font-semibold">{tier.services.deposit}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-400">2. 聯動信用卡</span>
                      <span className="font-semibold">{tier.services.credit}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-400">3. 全球賬戶</span>
                      <span className="font-semibold">{tier.services.global}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-400">4. CS 專員服務</span>
                      <span className="font-semibold">{tier.services.vip}</span>
                    </div>
                    <div className="flex flex-col gap-1 text-xs pt-2">
                      <span className="text-slate-400">5. 賬單服務備註</span>
                      <span className="font-medium italic text-[11px]">{tier.services.concierge}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-200/50">
                  <button 
                    onClick={() => handlePlaceholderClick(`申請加入 ${tier.name.split("(")[0].trim()}`)}
                    className={`w-full py-2 px-4 rounded-sm text-xs font-semibold tracking-wider transition-all duration-300 ${
                      tier.name.includes("私享")
                        ? "bg-[var(--gold)] text-white hover:bg-[var(--gold-hover)]"
                        : tier.highlight
                        ? "bg-[#0B1E36] text-white hover:bg-slate-800"
                        : "bg-white text-slate-700 border border-slate-300 hover:bg-slate-50"
                    }`}
                  >
                    立即申請加入
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 常見問題 (FAQ Section) */}
      <section id="faq" className="py-24 bg-white relative">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-[0.25em] text-[var(--gold)] uppercase block mb-3">知識庫</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1E36] mb-4 font-serif">常見問題 Q & A</h2>
            <div className="w-12 h-[2px] bg-[var(--gold)] mx-auto mb-6"></div>
            <p className="text-slate-500 font-light">
              深入了解信託的運作機制與法律保障，幫助您做出更明智的財富決策。
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="border border-slate-100 rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 bg-slate-50/50 hover:bg-slate-50 flex justify-between items-center text-left transition-colors"
                >
                  <span className="font-semibold text-slate-800 text-sm md:text-base font-serif flex gap-3">
                    <span className="text-[var(--gold)] font-sans">Q{index + 1}.</span>
                    {faq.q}
                  </span>
                  <ChevronDown 
                    size={16} 
                    className={`text-slate-400 transition-transform duration-300 ${openFaq === index ? "rotate-180" : ""}`} 
                  />
                </button>
                
                {openFaq === index && (
                  <div className="px-6 py-5 bg-white border-t border-slate-50 text-xs md:text-sm text-slate-600 leading-relaxed font-light whitespace-pre-line animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 聯絡我們 (Contact Section) */}
      <section id="contact" className="py-24 bg-[#071426] text-white relative overflow-hidden">
        {/* 裝飾性網格背景 */}
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16">
            {/* 左側聯絡資訊 */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-bold tracking-[0.25em] text-[var(--gold)] uppercase block mb-3">聯絡我們</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">開始您的財富傳承之旅</h2>
                <p className="text-slate-400 font-light leading-relaxed">
                  不論是資產保護、遺產規劃，或是離岸賬戶設立，我們的專家團隊隨時準備為您量身定制最合適的解決方案。歡迎隨時與我們聯絡。
                </p>
              </div>

              <div className="space-y-6">
                <a 
                  href="https://wa.me/85265286838" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-sm hover:bg-white/10 transition-colors group"
                >
                  <div className="w-10 h-10 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block">WhatsApp 專線</span>
                    <span className="text-sm font-semibold tracking-wider text-slate-200">+852 6528 6838</span>
                  </div>
                  <ExternalLink size={12} className="ml-auto text-slate-500" />
                </a>

                <a 
                  href="mailto:info@dilliztrust.com" 
                  className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-sm hover:bg-white/10 transition-colors group"
                >
                  <div className="w-10 h-10 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block">電子郵件</span>
                    <span className="text-sm font-semibold text-slate-200">info@dilliztrust.com</span>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-sm">
                  <div className="w-10 h-10 bg-amber-500/20 text-[var(--gold)] rounded-full flex items-center justify-center">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block">總部地址</span>
                    <span className="text-xs text-slate-200 leading-relaxed block">
                      Unit I, 17/F, MG Tower, 133 Hoi Bun Road, Kwun Tong, Kowloon, Hong Kong SAR
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 右側預約諮詢表單 */}
            <div className="lg:col-span-7">
              <div className="bg-white text-slate-800 p-8 md:p-10 rounded-sm shadow-2xl border border-slate-100">
                <h3 className="text-2xl font-bold text-[#0B1E36] mb-2 font-serif">線上預約諮詢</h3>
                <p className="text-xs text-slate-400 mb-6">請填寫以下資訊，我們的專屬客戶經理將於 24 小時內與您聯絡。</p>
                
                <form onSubmit={(e) => { e.preventDefault(); handlePlaceholderClick("預約提交"); }} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-600">您的姓名 *</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="例如：王先生 / 陳女士" 
                        className="w-full border border-slate-200 rounded-sm px-4 py-2.5 text-sm focus:outline-none focus:border-[#0B1E36]"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-600">聯絡電話 / WhatsApp *</label>
                      <input 
                        type="tel" 
                        required 
                        placeholder="例如：+852 9123 4567" 
                        className="w-full border border-slate-200 rounded-sm px-4 py-2.5 text-sm focus:outline-none focus:border-[#0B1E36]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-600">電子郵件 *</label>
                    <input 
                      type="email" 
                      required 
                      placeholder="example@yourdomain.com" 
                      className="w-full border border-slate-200 rounded-sm px-4 py-2.5 text-sm focus:outline-none focus:border-[#0B1E36]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-600">感興趣的服務項目</label>
                    <select className="w-full border border-slate-200 rounded-sm px-4 py-2.5 text-sm bg-white focus:outline-none focus:border-[#0B1E36]">
                      <option value="custody">託管服務 (Custody Services)</option>
                      <option value="asset">資產規劃 (Asset Structuring)</option>
                      <option value="offshore">離岸銀行設立服務 (Offshore Banking)</option>
                      <option value="card">資產聯動信用卡 (Asset Link Credit Card)</option>
                      <option value="bill">智能帳單支付服務 (International Bill Payment)</option>
                      <option value="other">其他客製化信託服務</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-600">諮詢詳情 / 備註</label>
                    <textarea 
                      rows={4} 
                      placeholder="請簡單描述您的資產管理需求，以便我們為您指派最合適的顧問。" 
                      className="w-full border border-slate-200 rounded-sm px-4 py-2.5 text-sm focus:outline-none focus:border-[#0B1E36]"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full btn-gold font-semibold py-3 text-sm tracking-widest uppercase flex items-center justify-center gap-2 mt-4"
                  >
                    提交預約申請 <ArrowRight size={16} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 頁尾 (Footer) */}
      <footer className="bg-[#040D1C] text-slate-400 py-16 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12 mb-12">
            {/* 品牌資訊 */}
            <div className="lg:col-span-5 space-y-6">
              <a href="#" className="flex items-center">
                <img 
                  src="/manus-storage/IMG_3906_7699ca83.JPG" 
                  alt="DILLIZ CAPITAL TRUST Logo" 
                  className="h-16 w-auto object-contain brightness-110"
                />
              </a>
              <p className="text-xs text-slate-400 font-light leading-relaxed max-w-sm">
                帝力斯資本信託有限公司為全球客戶提供安全、合規且高度保密的財富管理與信託託管解決方案。因為你，才值得擁有。
              </p>
              <div className="text-xs text-slate-500">
                信託或公司服務提供者牌照號碼: <strong className="text-slate-300">TC010540</strong>
              </div>
            </div>

            {/* 快速連結 */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-white font-bold text-sm tracking-wider font-serif">快速連結</h4>
              <ul className="space-y-2.5 text-xs">
                <li><a href="#about" className="hover:text-[var(--gold)] transition-colors">關於我們</a></li>
                <li><a href="#services" className="hover:text-[var(--gold)] transition-colors">信託服務</a></li>
                <li><a href="#cases" className="hover:text-[var(--gold)] transition-colors">真實案例</a></li>
                <li><a href="#membership" className="hover:text-[var(--gold)] transition-colors">會員等級</a></li>
                <li><a href="#faq" className="hover:text-[var(--gold)] transition-colors">常見問題 Q&A</a></li>
              </ul>
            </div>

            {/* 聲明與合規 */}
            <div className="lg:col-span-4 space-y-4">
              <h4 className="text-white font-bold text-sm tracking-wider font-serif">免責聲明與合規聲明</h4>
              <p className="text-[10px] text-slate-500 leading-relaxed font-light">
                本網站所載資料僅供參考，不構成任何投資、稅務或法律建議。信託設立及資產配置需符合相關司法管轄區的法律與監管要求。帝力斯資本信託有限公司嚴格遵守香港《打擊洗錢及恐怖分子資金籌集條例》（第 615 章）及其他適用法規。
              </p>
            </div>
          </div>

          {/* 底部版權 */}
          <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
            <div>
              &copy; {new Date().getFullYear()} DILLIZ CAPITAL TRUST LIMITED. 保留所有權利。
            </div>
            <div className="flex gap-6">
              <span className="hover:text-slate-300 cursor-pointer" onClick={() => handlePlaceholderClick("隱私權政策")}>隱私權政策</span>
              <span className="hover:text-slate-300 cursor-pointer" onClick={() => handlePlaceholderClick("服務條款")}>服務條款</span>
              <span className="hover:text-slate-300 cursor-pointer" onClick={() => handlePlaceholderClick("合規政策")}>合規政策</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
