const translations = {
    en: {
        navAbout: "About",
        navMenu: "Menu",
        navAtmosphere: "Atmosphere",
        navReserve: "Reserve a Table",
        navReserveDesktop: "Reserve a Table",
        heroTitle: "Kissa",
        heroSubtitle: "slow mornings, good coffee",
        heroReserve: "Reserve a Table",
        aboutTitle: "Our Story",
        aboutP1: "Inspired by the quiet side-streets of Tokyo, Kissa is a sanctuary from the bustling world. We believe in the beauty of slowness, pouring each cup with deliberate care and intention.",
        aboutP2: "Our space is designed to feel like a warm embrace, where the aroma of freshly ground beans mingles with the soft hum of quiet conversations.",
        aboutP3: "Whether you're seeking a solitary moment of reflection or a cozy gathering with friends, Kissa offers a gentle pause in your day.",
        menuTitle: "Menu",
        menuCoffee: "Coffee",
        menuPourOver: "Pour Over",
        menuPourOverDesc: "Single origin, slowly dripped",
        menuEspresso: "Espresso",
        menuEspressoDesc: "Rich and balanced",
        menuMacchiato: "Macchiato",
        menuMacchiatoDesc: "A dash of steamed milk",
        menuLatte: "Latte",
        menuLatteDesc: "Smooth microfoam",
        menuTea: "Tea",
        menuSencha: "Sencha",
        menuSenchaDesc: "First-flush Japanese green tea",
        menuMatcha: "Matcha Latte",
        menuMatchaDesc: "Ceremonial grade, whisked to order",
        menuHojicha: "Hojicha",
        menuHojichaDesc: "Roasted green tea, low caffeine",
        menuEarlGrey: "Earl Grey",
        menuEarlGreyDesc: "Classic bergamot blend",
        menuFood: "Food",
        menuToast: "Thick Toast",
        menuToastDesc: "Salted butter & azuki bean paste",
        menuCheesecake: "Cheesecake",
        menuCheesecakeDesc: "Basque style, caramelized top",
        menuSandwich: "Egg Sandwich",
        menuSandwichDesc: "Fluffy tamagoyaki on milk bread",
        menuPudding: "Pudding",
        menuPuddingDesc: "Classic custard, dark caramel",
        atmosphereTitle: "Atmosphere",
        atmosphereQuote: "\"A gentle pocket of time where the light falls softly and the coffee speaks quietly.\"",
        visitTitle: "Visit Us",
        visitHours: "Hours",
        visitMonday: "Monday",
        visitClosed: "Closed",
        visitWeekday: "Tuesday - Friday",
        visitWeekend: "Saturday - Sunday",
        visitLocation: "Location",
        footerCopyright: "© 2026 Kissa. All rights reserved."
    },
    jp: {
        navAbout: "私たちについて",
        navMenu: "メニュー",
        navAtmosphere: "雰囲気",
        navReserve: "席を予約する",
        navReserveDesktop: "席を予約する",
        heroTitle: "Kissa",
        heroSubtitle: "穏やかな朝、おいしいコーヒー",
        heroReserve: "席を予約する",
        aboutTitle: "ストーリー",
        aboutP1: "東京の静かな路地裏にインスピレーションを得た「Kissa」は、喧騒から離れたサンクチュアリです。ゆっくりと流れる時間の美しさを信じ、一杯ずつ丁寧に、想いを込めて淹れています。",
        aboutP2: "挽きたての豆の香りと、静かな会話の柔らかいざわめきが交じり合う、温かい抱擁のような空間を目指しました。",
        aboutP3: "一人で物思いに耽りたい時も、友人と心地よい時を過ごしたい時も、「Kissa」はあなたの1日に穏やかな休息を提供します。",
        menuTitle: "メニュー",
        menuCoffee: "コーヒー",
        menuPourOver: "プアオーバー",
        menuPourOverDesc: "シングルオリジン、ゆっくりとドリップ",
        menuEspresso: "エスプレッソ",
        menuEspressoDesc: "豊かでバランスの取れた味わい",
        menuMacchiato: "マキアート",
        menuMacchiatoDesc: "スチームミルクを少し添えて",
        menuLatte: "ラテ",
        menuLatteDesc: "滑らかなマイクロフォーム",
        menuTea: "お茶",
        menuSencha: "煎茶",
        menuSenchaDesc: "一番摘み日本茶",
        menuMatcha: "抹茶ラテ",
        menuMatchaDesc: "注文ごとに点てる抹茶",
        menuHojicha: "ほうじ茶",
        menuHojichaDesc: "カフェイン少なめのほうじ茶",
        menuEarlGrey: "アールグレイ",
        menuEarlGreyDesc: "クラシックなベルガモットブレンド",
        menuFood: "フード",
        menuToast: "厚切りトースト",
        menuToastDesc: "塩バターと小倉あん",
        menuCheesecake: "チーズケーキ",
        menuCheesecakeDesc: "表面を焦がしたバスク風",
        menuSandwich: "たまごサンド",
        menuSandwichDesc: "ミルクパンに挟んだふわふわの卵焼き",
        menuPudding: "プリン",
        menuPuddingDesc: "昔ながらのカスタード、ほろ苦いカラメル",
        atmosphereTitle: "雰囲気",
        atmosphereQuote: "「光が柔らかく降り注ぎ、コーヒーが静かに語りかける、穏やかな時間のポケット」",
        visitTitle: "店舗情報",
        visitHours: "営業時間",
        visitMonday: "月曜日",
        visitClosed: "定休日",
        visitWeekday: "火曜日 - 金曜日",
        visitWeekend: "土曜日 - 日曜日",
        visitLocation: "アクセス",
        footerCopyright: "© 2026 Kissa. All rights reserved."
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // 1. Sticky Nav Behavior
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const navItems = navLinks.querySelectorAll('a');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
            document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
        });

        // Close menu when clicking a link
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // Language Toggle
    function setLanguage(lang) {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });
        
        const btnEn = document.getElementById('lang-en');
        const btnJp = document.getElementById('lang-jp');
        
        if (btnEn && btnJp) {
            btnEn.style.color = lang === 'en' ? 'var(--color-terracotta)' : 'var(--color-espresso)';
            btnEn.style.fontWeight = lang === 'en' ? '600' : '400';
            btnJp.style.color = lang === 'jp' ? 'var(--color-terracotta)' : 'var(--color-espresso)';
            btnJp.style.fontWeight = lang === 'jp' ? '600' : '400';
        }
        
        document.documentElement.lang = lang;
    }

    const btnEn = document.getElementById('lang-en');
    const btnJp = document.getElementById('lang-jp');
    
    if (btnEn) btnEn.addEventListener('click', () => setLanguage('en'));
    if (btnJp) btnJp.addEventListener('click', () => setLanguage('jp'));

    // 2. Intersection Observer for Fade-in Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));
});
