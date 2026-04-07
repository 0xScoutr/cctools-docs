import type { Locale } from "./i18n";

/* ═══════════════════════════════════════════════════════════
   UI Strings — All static text in the interface, per locale.
   No need for external translation — these are handcrafted.
   ═══════════════════════════════════════════════════════════ */

const strings = {
  en: {
    // Header & Nav
    docs: "Docs",
    home: "Home",
    openApp: "Open App",
    openCCTools: "Open CCTools",
    twitterX: "Twitter/X",
    // Search
    searchPlaceholder: "Search documentation...",
    searchNoResults: "No results for",
    searchHint: "Type to search across all articles...",
    searchNavigate: "navigate",
    searchOpen: "open",
    searchClose: "close",
    // Home
    heroTitle: "How can we help?",
    heroSubtitle: "Find answers about CCTools, the Canton Network, your account, and more.",
    articlesAvailable: "articles available",
    article: "article",
    articles: "articles",
    // Contact CTA
    cantFind: "Can't find what you need?",
    cantFindSub: "Reach out and we'll help you out.",
    contactSupport: "Contact Support",
    // Article
    onThisPage: "On this page",
    previous: "Previous",
    next: "Next",
    nextSection: "Next section",
  },
  es: {
    docs: "Docs",
    home: "Inicio",
    openApp: "Abrir App",
    openCCTools: "Abrir CCTools",
    twitterX: "Twitter/X",
    searchPlaceholder: "Buscar en la documentación...",
    searchNoResults: "Sin resultados para",
    searchHint: "Escribe para buscar en todos los artículos...",
    searchNavigate: "navegar",
    searchOpen: "abrir",
    searchClose: "cerrar",
    heroTitle: "¿Cómo podemos ayudarte?",
    heroSubtitle: "Encuentra respuestas sobre CCTools, Canton Network, tu cuenta y más.",
    articlesAvailable: "artículos disponibles",
    article: "artículo",
    articles: "artículos",
    cantFind: "¿No encuentras lo que necesitas?",
    cantFindSub: "Contáctanos y te ayudaremos.",
    contactSupport: "Contactar Soporte",
    onThisPage: "En esta página",
    previous: "Anterior",
    next: "Siguiente",
    nextSection: "Siguiente sección",
  },
  pt: {
    docs: "Docs",
    home: "Início",
    openApp: "Abrir App",
    openCCTools: "Abrir CCTools",
    twitterX: "Twitter/X",
    searchPlaceholder: "Pesquisar na documentação...",
    searchNoResults: "Sem resultados para",
    searchHint: "Digite para pesquisar em todos os artigos...",
    searchNavigate: "navegar",
    searchOpen: "abrir",
    searchClose: "fechar",
    heroTitle: "Como podemos ajudar?",
    heroSubtitle: "Encontre respostas sobre CCTools, a Canton Network, sua conta e mais.",
    articlesAvailable: "artigos disponíveis",
    article: "artigo",
    articles: "artigos",
    cantFind: "Não encontrou o que precisa?",
    cantFindSub: "Entre em contato e te ajudaremos.",
    contactSupport: "Contatar Suporte",
    onThisPage: "Nesta página",
    previous: "Anterior",
    next: "Próximo",
    nextSection: "Próxima seção",
  },
  zh: {
    docs: "文档",
    home: "首页",
    openApp: "打开应用",
    openCCTools: "打开CCTools",
    twitterX: "Twitter/X",
    searchPlaceholder: "搜索文档...",
    searchNoResults: "没有找到结果",
    searchHint: "输入以搜索所有文章...",
    searchNavigate: "导航",
    searchOpen: "打开",
    searchClose: "关闭",
    heroTitle: "我们能帮您什么？",
    heroSubtitle: "查找有关CCTools、Canton Network、您的账户等的答案。",
    articlesAvailable: "篇文章",
    article: "篇文章",
    articles: "篇文章",
    cantFind: "找不到您需要的内容？",
    cantFindSub: "联系我们，我们会帮助您。",
    contactSupport: "联系支持",
    onThisPage: "本页目录",
    previous: "上一篇",
    next: "下一篇",
    nextSection: "下一节",
  },
};

export type UIStrings = typeof strings["en"];

export function getUIStrings(locale: Locale): UIStrings {
  return strings[locale] || strings.en;
}
