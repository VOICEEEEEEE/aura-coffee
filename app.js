// Aura Specialty Coffee - Core Application Logic

const MENU_DATA = [
  // --- Фильтр & Альтернатива ---
  {
    id: 'ethiopia-v60',
    name: 'V60 Эфиопия Гуджи',
    category: 'filter',
    price: 360,
    sca: '88.5',
    volume: '250 мл',
    tags: ['Персик', 'Жасмин', 'Бергамот'],
    process: 'Натуральная',
    roast: 'Светлая',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80',
    description: 'Яркая чашка с шелковистым чайным телом, цитрусовой кислинкой бергамота и сладким послевкусием белого персика.'
  },
  {
    id: 'kenya-chemex',
    name: 'Кемекс Кения Ньери',
    category: 'filter',
    price: 390,
    sca: '89.0',
    volume: '300 мл',
    tags: ['Черная смородина', 'Красный грейпфрут', 'Тростниковый сахар'],
    process: 'Мытая',
    roast: 'Светлая',
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=600&q=80',
    description: 'Плотный фильтр с сочной кислотностью спелой смородины и глубокой карамельной сладостью.'
  },
  {
    id: 'coldbrew-tonic',
    name: 'Колд Брю Тоник & Юдзу',
    category: 'filter',
    price: 380,
    sca: '87.0',
    volume: '350 мл',
    tags: ['Освежающий', 'Юдзу', 'Каскара'],
    process: '18 часов мацерации',
    roast: 'Холодная экстракция',
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=600&q=80',
    description: '18-часовой колд брю на зерне из Руанды с крафтовым сухим тоником и пюре юдзу.'
  },
  {
    id: 'aeropress-colombia',
    name: 'Аэропресс Колумбия Розовый Бурбон',
    category: 'filter',
    price: 370,
    sca: '88.0',
    volume: '220 мл',
    tags: ['Маракуйя', 'Розовая гуава', 'Мед'],
    process: 'Анаэробная',
    roast: 'Светлая',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80',
    description: 'Взрыв тропических фруктов с кремовой текстурой благодаря быстрому завариванию под давлением.'
  },

  // --- Эспрессо & Черный ---
  {
    id: 'espresso-doppio',
    name: 'Эспрессо Доппио (Direct Trade)',
    category: 'espresso',
    price: 240,
    sca: '87.5',
    volume: '40 мл',
    tags: ['Темный шоколад', 'Спелая вишня', 'Фундук'],
    process: 'Мытая',
    roast: 'Средняя (Омни)',
    image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=600&q=80',
    description: 'Двойной шот на сорте Гватемала Антигуа. Плотное кремовое тело, баланс горького шоколада и вяленой вишни.'
  },
  {
    id: 'flat-white',
    name: 'Флэт Уайт',
    category: 'espresso',
    price: 320,
    sca: '87.0',
    volume: '200 мл',
    tags: ['Двойной ристретто', 'Глянцевая пенка', 'Карамель'],
    process: 'Классика',
    roast: 'Средняя',
    image: 'https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=600&q=80',
    description: 'Насыщенный кофейный вкус на двойном шоте ристретто с тонким бархатным слоем взбитого цельного молока.'
  },
  {
    id: 'cortado',
    name: 'Кортадо',
    category: 'espresso',
    price: 280,
    sca: '87.5',
    volume: '130 мл',
    tags: ['Испанская подача', 'Баланс 1:1', 'Ореховый'],
    process: 'Классика',
    roast: 'Средняя',
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=600&q=80',
    description: 'Идеальная пропорция 1:1 эспрессо и шелковистого молока в граненом стеклянном бокале Gibraltar.'
  },

  // --- С молоком & Авторские ---
  {
    id: 'lavender-raf',
    name: 'Лавандово-Черничный Раф',
    category: 'milk',
    price: 390,
    sca: 'Авторский',
    volume: '300 мл',
    tags: ['Крымская лаванда', 'Сливки 10%', 'Лесные ягоды'],
    process: 'Взбивание в питчере',
    roast: 'Авторский рецепт',
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=600&q=80',
    description: 'Нежнейший сливочный раф, настоянный на цветках натуральной лаванды с сиропом из протертой черники.'
  },
  {
    id: 'miso-caramel-latte',
    name: 'Латте Соленая Мисо-Карамель',
    category: 'milk',
    price: 410,
    sca: 'Шеф-напиток',
    volume: '350 мл',
    tags: ['Умами карамель', 'Светлая паста мисо', 'Кокосовый сахар'],
    process: 'Авторский соус',
    roast: 'Средняя',
    image: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&w=600&q=80',
    description: 'Глубокий вкус соленой домашней карамели с нотой умами из японской пасты мисо и шелковистым молоком.'
  },
  {
    id: 'ceremonial-matcha',
    name: 'Матча Удзи на Овсяном молоке',
    category: 'milk',
    price: 420,
    sca: 'Grade A',
    volume: '300 мл',
    tags: ['Киото', 'Овсяное Barista', 'Антиоксиданты'],
    process: 'Взбито бамбуковым венчиком',
    roast: 'Органический чай',
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=600&q=80',
    description: 'Церемониальный зеленый чай первого весеннего сбора из региона Удзи со шведским овсяным молоком.'
  },

  // --- Зерно в пачках 250г ---
  {
    id: 'beans-ethiopia',
    name: 'Зерно: Эфиопия Гуджи Хамбела (250г)',
    category: 'beans',
    price: 980,
    sca: '88.5',
    volume: 'Пачка 250г',
    tags: ['Бергамот', 'Жасмин', 'Красный апельсин'],
    process: 'Dry Natural',
    roast: 'Светлая (Фильтр)',
    image: 'https://images.unsplash.com/photo-1587734195503-904fca47e0e9?auto=format&fit=crop&w=600&q=80',
    description: 'Фермерский микролот с высоты 2100м над уровнем моря. Поражает чистотой цветочного букета и сладостью.'
  },
  {
    id: 'beans-kenya',
    name: 'Зерно: Кения Ньери Тегу АА (250г)',
    category: 'beans',
    price: 1150,
    sca: '89.2',
    volume: 'Пачка 250г',
    tags: ['Ежевика', 'Ревень', 'Шиповник'],
    process: 'Washed Double Fermentation',
    roast: 'Светлая (Фильтр)',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=600&q=80',
    description: 'Классический кенийский профиль с яркой сочной кислотностью и нотами спелых северных ягод.'
  },
  {
    id: 'beans-colombia-geisha',
    name: 'Зерно: Колумбия Ла Пальма Гейша (250г)',
    category: 'beans',
    price: 1850,
    sca: '90.5',
    volume: 'Пачка 250г (Лимит)',
    tags: ['Цветы апельсина', 'Манго', 'Медовая дыня'],
    process: 'Lactic Natural',
    roast: 'Светлая (Микролот)',
    image: 'https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?auto=format&fit=crop&w=600&q=80',
    description: 'Абсолютный чемпионский лот разновидности Geisha. Чрезвычайно сложный, шелковистый и парфюмерный кофе.'
  },
  {
    id: 'beans-brazil',
    name: 'Зерно: Бразилия Серрадо Эспрессо (250г)',
    category: 'beans',
    price: 820,
    sca: '85.5',
    volume: 'Пачка 250г',
    tags: ['Какао', 'Жареный миндаль', 'Тростниковый сахар'],
    process: 'Pulped Natural',
    roast: 'Средняя (Под Эспрессо)',
    image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=600&q=80',
    description: 'Надежная база под эспрессо и домашние рожковые кофемашины: низкая кислотность, бархатистая плотность и орехи.'
  },

  // --- Выпечка & Десерты ---
  {
    id: 'almond-croissant',
    name: 'Круассан с миндальным франжипаном',
    category: 'bakery',
    price: 340,
    sca: 'Крафт',
    volume: '140 г',
    tags: ['Французское масло 84%', 'Лепестки миндаля', 'Ромовый сироп'],
    process: 'Пекарня Aura',
    roast: 'Выпекаем в 7:30 утра',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80',
    description: 'Слоеный классический круассан двойной выпечки с начинкой из нежного миндального крема и хрустящей корочкой.'
  },
  {
    id: 'basque-cheesecake',
    name: 'Сан-Себастьянский баскский чизкейк',
    category: 'bakery',
    price: 390,
    sca: 'Крафт',
    volume: '170 г',
    tags: ['Карамельная корочка', 'Нежный крем-сыр', 'Бурбонская ваниль'],
    process: 'Пекарня Aura',
    roast: 'Шеф-кондитер',
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=600&q=80',
    description: 'Жженый снаружи и шелковистый, тающий в центре чизкейк с натуральной мадагаскарской ванилью.'
  },
  {
    id: 'cinnamon-pecan-roll',
    name: 'Булочка с цейлонской корицей и пеканом',
    category: 'bakery',
    price: 310,
    sca: 'Крафт',
    volume: '150 г',
    tags: ['Цейлонская корица', 'Кленовый сироп', 'Орех пекан'],
    process: 'Пекарня Aura',
    roast: 'Каждое утро',
    image: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=600&q=80',
    description: 'Пышное бриошное тесто, ароматная цейлонская корица, карамелизированный орех пекан и крем-чиз.'
  }
];

// Application Global State
const state = {
  cart: [],
  selectedCategory: 'all',
  searchQuery: '',
  theme: localStorage.getItem('aura-theme') || 'light',
  promoCode: '',
  discountPercent: 0,
  
  // Timer State
  timer: {
    intervalId: null,
    seconds: 0,
    isRunning: false
  },

  // Quiz State
  quizAnswers: {
    brewPreference: null,
    flavorProfile: null,
    brewMethod: null
  }
};

// DOM Utilities
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMenu();
  initCart();
  initQuiz();
  initBrewCalculator();
  initReservation();
  initSmoothScroll();
  initLucide();
  initRoastCountdown();
});

function initLucide() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// ----------------- THEME CONTROLLER -----------------
function initTheme() {
  document.documentElement.setAttribute('data-theme', state.theme);
  updateThemeIcon();

  const themeToggle = $('#theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', state.theme);
      localStorage.setItem('aura-theme', state.theme);
      updateThemeIcon();
      showToast(state.theme === 'dark' ? 'Включена тема Dark Roast 🌙' : 'Включена светлая тема ☀️');
    });
  }
}

function updateThemeIcon() {
  const iconContainer = $('#theme-icon-container');
  if (!iconContainer) return;
  if (state.theme === 'dark') {
    iconContainer.innerHTML = `<i data-lucide="sun" class="w-5 h-5 text-amber-400"></i>`;
  } else {
    iconContainer.innerHTML = `<i data-lucide="moon" class="w-5 h-5 text-stone-700"></i>`;
  }
  initLucide();
}

// ----------------- MENU & CATALOG -----------------
function initMenu() {
  renderMenu();

  // Category filter tabs
  const filterButtons = $$('.filter-tab-btn');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      filterButtons.forEach(b => b.classList.remove('active', 'bg-[#D97736]', 'text-white'));
      filterButtons.forEach(b => b.classList.add('bg-stone-100', 'text-stone-700', 'dark:bg-stone-800', 'dark:text-stone-300'));
      
      btn.classList.add('active', 'bg-[#D97736]', 'text-white');
      btn.classList.remove('bg-stone-100', 'text-stone-700', 'dark:bg-stone-800', 'dark:text-stone-300');
      
      state.selectedCategory = btn.dataset.category;
      renderMenu();
    });
  });

  // Search input
  const searchInput = $('#menu-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value.trim().toLowerCase();
      renderMenu();
    });
  }
}

function renderMenu() {
  const grid = $('#menu-grid');
  const emptyState = $('#menu-empty-state');
  if (!grid) return;

  const filtered = MENU_DATA.filter(item => {
    const matchCategory = state.selectedCategory === 'all' || item.category === state.selectedCategory;
    const matchSearch = state.searchQuery === '' ||
      item.name.toLowerCase().includes(state.searchQuery) ||
      item.description.toLowerCase().includes(state.searchQuery) ||
      item.tags.some(t => t.toLowerCase().includes(state.searchQuery));
    return matchCategory && matchSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = '';
    if (emptyState) emptyState.classList.remove('hidden');
    return;
  }

  if (emptyState) emptyState.classList.add('hidden');

  grid.innerHTML = filtered.map(item => {
    const isBeans = item.category === 'beans';
    return `
      <div class="card-hover bg-white dark:bg-[#1A120C] rounded-2xl overflow-hidden border border-stone-200 dark:border-stone-800 flex flex-col group">
        <div class="relative h-48 sm:h-52 overflow-hidden bg-stone-100 dark:bg-stone-900">
          <img 
            src="${item.image}" 
            alt="${item.name}" 
            loading="lazy"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div class="absolute top-3 left-3 flex flex-wrap gap-1.5">
            <span class="px-2.5 py-1 rounded-full text-xs font-semibold bg-stone-900/80 text-white backdrop-blur-md flex items-center gap-1">
              <i data-lucide="award" class="w-3 h-3 text-amber-400"></i> SCA ${item.sca}
            </span>
            <span class="px-2.5 py-1 rounded-full text-xs font-medium bg-[#D97736]/90 text-white backdrop-blur-md">
              ${item.volume}
            </span>
          </div>
          <div class="absolute bottom-2 right-2 text-xs text-stone-200 bg-stone-900/70 px-2 py-0.5 rounded backdrop-blur-sm">
            ${item.process}
          </div>
        </div>

        <div class="p-5 flex-1 flex flex-col justify-between">
          <div>
            <div class="flex items-start justify-between gap-2 mb-1.5">
              <h3 class="font-serif text-lg font-bold text-stone-900 dark:text-stone-100 group-hover:text-[#D97736] transition-colors">
                ${item.name}
              </h3>
            </div>
            
            <p class="text-xs text-stone-500 dark:text-stone-400 mb-3 line-clamp-2 leading-relaxed">
              ${item.description}
            </p>

            <div class="flex flex-wrap gap-1.5 mb-4">
              ${item.tags.map(tag => `
                <span class="text-[11px] font-medium px-2 py-0.5 rounded-md bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 border border-stone-200/50 dark:border-stone-700/50">
                  #${tag}
                </span>
              `).join('')}
            </div>
          </div>

          <div class="pt-3 border-t border-stone-100 dark:border-stone-800/80 flex items-center justify-between">
            <div>
              <span class="text-xs text-stone-400 block">Стоимость</span>
              <span class="text-lg font-bold text-stone-900 dark:text-stone-100">${item.price} ₽</span>
            </div>

            <button 
              onclick="addToCart('${item.id}')"
              class="btn-touch px-4 py-2 rounded-xl bg-[#D97736] hover:bg-[#C26325] text-white text-xs font-semibold flex items-center gap-2 cursor-pointer shadow-sm hover:shadow transition-all active:scale-95"
              aria-label="Добавить ${item.name} в корзину"
            >
              <i data-lucide="plus" class="w-4 h-4"></i>
              <span>В заказ</span>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  initLucide();
}

// ----------------- CART & DRAWER -----------------
function initCart() {
  const cartToggleBtn = $('#cart-toggle-btn');
  const cartCloseBtn = $('#cart-close-btn');
  const cartDrawer = $('#cart-drawer');
  const cartBackdrop = $('#cart-backdrop');
  const applyPromoBtn = $('#apply-promo-btn');
  const checkoutBtn = $('#checkout-btn');

  // Load cart from LocalStorage if exists
  const savedCart = localStorage.getItem('aura-cart');
  if (savedCart) {
    try {
      state.cart = JSON.parse(savedCart);
    } catch (e) {
      state.cart = [];
    }
  }
  updateCartUI();

  function openCart() {
    cartDrawer.classList.remove('translate-x-full');
    cartBackdrop.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
  }

  function closeCart() {
    cartDrawer.classList.add('translate-x-full');
    cartBackdrop.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }

  if (cartToggleBtn) cartToggleBtn.addEventListener('click', openCart);
  if (cartCloseBtn) cartCloseBtn.addEventListener('click', closeCart);
  if (cartBackdrop) cartBackdrop.addEventListener('click', closeCart);

  if (applyPromoBtn) {
    applyPromoBtn.addEventListener('click', () => {
      const input = $('#promo-input');
      const val = input.value.trim().toUpperCase();
      if (val === 'AURA10' || val === 'SWARM') {
        state.discountPercent = 10;
        state.promoCode = val;
        showToast('Промокод применен! Скидка 10% 🎉');
        updateCartUI();
      } else if (val === 'SPECIALTY20') {
        state.discountPercent = 20;
        state.promoCode = val;
        showToast('Супер-скидка 20% применена! 🔥');
        updateCartUI();
      } else {
        showToast('Неверный промокод (попробуйте AURA10)', 'error');
      }
    });
  }

  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      if (state.cart.length === 0) {
        showToast('Ваша корзина пуста', 'error');
        return;
      }
      
      // Complete Order Modal
      closeCart();
      const orderNumber = 'AUR-' + Math.floor(100000 + Math.random() * 900000);
      showOrderSuccessModal(orderNumber);
      
      // Reset cart
      state.cart = [];
      localStorage.removeItem('aura-cart');
      updateCartUI();
    });
  }
}

window.addToCart = function(id, options = {}) {
  const item = MENU_DATA.find(i => i.id === id);
  if (!item) return;

  const existing = state.cart.find(c => c.id === id);
  if (existing) {
    existing.quantity += 1;
  } else {
    state.cart.push({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      volume: item.volume,
      quantity: 1,
      grind: options.grind || null
    });
  }

  localStorage.setItem('aura-cart', JSON.stringify(state.cart));
  updateCartUI();
  showToast(`«${item.name}» добавлен в корзину!`);
};

window.updateCartQuantity = function(id, delta) {
  const index = state.cart.findIndex(c => c.id === id);
  if (index === -1) return;

  state.cart[index].quantity += delta;
  if (state.cart[index].quantity <= 0) {
    state.cart.splice(index, 1);
  }

  localStorage.setItem('aura-cart', JSON.stringify(state.cart));
  updateCartUI();
};

function updateCartUI() {
  const countBadge = $('#cart-count-badge');
  const cartItemsContainer = $('#cart-items-container');
  const cartEmptyState = $('#cart-empty-state');
  const cartSummarySection = $('#cart-summary-section');
  const subtotalEl = $('#cart-subtotal');
  const discountRow = $('#cart-discount-row');
  const discountAmountEl = $('#cart-discount-amount');
  const totalEl = $('#cart-total');

  const totalCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);

  if (countBadge) {
    countBadge.textContent = totalCount;
    if (totalCount > 0) {
      countBadge.classList.remove('scale-0');
      countBadge.classList.add('scale-100');
    } else {
      countBadge.classList.add('scale-0');
    }
  }

  if (state.cart.length === 0) {
    if (cartItemsContainer) cartItemsContainer.innerHTML = '';
    if (cartEmptyState) cartEmptyState.classList.remove('hidden');
    if (cartSummarySection) cartSummarySection.classList.add('hidden');
    return;
  }

  if (cartEmptyState) cartEmptyState.classList.add('hidden');
  if (cartSummarySection) cartSummarySection.classList.remove('hidden');

  let subtotal = 0;

  if (cartItemsContainer) {
    cartItemsContainer.innerHTML = state.cart.map(item => {
      const itemSum = item.price * item.quantity;
      subtotal += itemSum;
      return `
        <div class="flex items-center gap-3 p-3 rounded-xl bg-stone-50 dark:bg-stone-900/60 border border-stone-200 dark:border-stone-800">
          <img src="${item.image}" alt="${item.name}" class="w-14 h-14 object-cover rounded-lg flex-shrink-0" />
          <div class="flex-1 min-w-0">
            <h4 class="text-xs font-bold text-stone-900 dark:text-stone-100 truncate">${item.name}</h4>
            <span class="text-[11px] text-stone-500 dark:text-stone-400">${item.volume}</span>
            <div class="text-xs font-semibold text-[#D97736] mt-0.5">${item.price} ₽</div>
          </div>
          <div class="flex items-center gap-2 bg-white dark:bg-stone-800 px-2 py-1 rounded-lg border border-stone-200 dark:border-stone-700">
            <button 
              onclick="updateCartQuantity('${item.id}', -1)"
              class="w-6 h-6 flex items-center justify-center text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 font-bold cursor-pointer"
              aria-label="Уменьшить"
            >-</button>
            <span class="text-xs font-semibold w-4 text-center">${item.quantity}</span>
            <button 
              onclick="updateCartQuantity('${item.id}', 1)"
              class="w-6 h-6 flex items-center justify-center text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 font-bold cursor-pointer"
              aria-label="Увеличить"
            >+</button>
          </div>
        </div>
      `;
    }).join('');
  }

  const discountAmount = Math.round(subtotal * (state.discountPercent / 100));
  const finalTotal = subtotal - discountAmount;

  if (subtotalEl) subtotalEl.textContent = `${subtotal} ₽`;
  if (totalEl) totalEl.textContent = `${finalTotal} ₽`;

  if (state.discountPercent > 0 && discountRow && discountAmountEl) {
    discountRow.classList.remove('hidden');
    discountAmountEl.textContent = `-${discountAmount} ₽ (${state.discountPercent}%)`;
  } else if (discountRow) {
    discountRow.classList.add('hidden');
  }

  initLucide();
}

function showOrderSuccessModal(orderId) {
  const modal = $('#order-modal');
  const orderNumberSpan = $('#order-modal-id');
  if (orderNumberSpan) orderNumberSpan.textContent = orderId;
  if (modal) modal.classList.remove('hidden');
}

window.closeOrderModal = function() {
  const modal = $('#order-modal');
  if (modal) modal.classList.add('hidden');
};

// ----------------- COFFEE FLAVOR QUIZ -----------------
function initQuiz() {
  const quizCards = $$('.quiz-option-btn');
  const quizResultSection = $('#quiz-result');
  const resetQuizBtn = $('#reset-quiz-btn');

  quizCards.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const step = btn.dataset.step;
      const value = btn.dataset.value;

      // Unselect siblings
      const parent = btn.closest('.quiz-step-options');
      parent.querySelectorAll('.quiz-option-btn').forEach(b => {
        b.classList.remove('border-[#D97736]', 'bg-amber-50', 'dark:bg-amber-950/30', 'ring-2', 'ring-[#D97736]');
      });

      btn.classList.add('border-[#D97736]', 'bg-amber-50', 'dark:bg-amber-950/30', 'ring-2', 'ring-[#D97736]');
      state.quizAnswers[step] = value;

      checkQuizComplete();
    });
  });

  if (resetQuizBtn) {
    resetQuizBtn.addEventListener('click', () => {
      state.quizAnswers = { brewPreference: null, flavorProfile: null, brewMethod: null };
      $$('.quiz-option-btn').forEach(b => {
        b.classList.remove('border-[#D97736]', 'bg-amber-50', 'dark:bg-amber-950/30', 'ring-2', 'ring-[#D97736]');
      });
      if (quizResultSection) quizResultSection.classList.add('hidden');
      $('#quiz-steps-container').classList.remove('hidden');
    });
  }
}

function checkQuizComplete() {
  const { brewPreference, flavorProfile, brewMethod } = state.quizAnswers;
  if (brewPreference && flavorProfile && brewMethod) {
    calculateQuizRecommendation();
  }
}

function calculateQuizRecommendation() {
  const { flavorProfile, brewMethod } = state.quizAnswers;
  let recommendedItem = null;

  if (flavorProfile === 'floral-citrus') {
    recommendedItem = MENU_DATA.find(i => i.id === 'beans-ethiopia');
  } else if (flavorProfile === 'berries-juicy') {
    recommendedItem = MENU_DATA.find(i => i.id === 'beans-kenya');
  } else if (flavorProfile === 'tropical-sweet') {
    recommendedItem = MENU_DATA.find(i => i.id === 'beans-colombia-geisha');
  } else {
    recommendedItem = MENU_DATA.find(i => i.id === 'beans-brazil');
  }

  const resultContainer = $('#quiz-recommendation-content');
  if (resultContainer && recommendedItem) {
    resultContainer.innerHTML = `
      <div class="flex flex-col md:flex-row items-center gap-6 p-6 rounded-2xl bg-amber-50/60 dark:bg-amber-950/20 border border-[#D97736]/30">
        <img src="${recommendedItem.image}" alt="${recommendedItem.name}" class="w-28 h-28 md:w-36 md:h-36 object-cover rounded-xl shadow-md" />
        <div class="flex-1 text-center md:text-left">
          <div class="inline-flex items-center gap-1 text-xs font-bold text-[#D97736] uppercase tracking-wider mb-1">
            <i data-lucide="sparkles" class="w-3.5 h-3.5"></i> Идеальное совпадение: 99.4%
          </div>
          <h3 class="font-serif text-xl md:text-2xl font-bold text-stone-900 dark:text-stone-100 mb-2">
            ${recommendedItem.name}
          </h3>
          <p class="text-sm text-stone-600 dark:text-stone-400 mb-4 leading-relaxed">
            ${recommendedItem.description}
          </p>
          <div class="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
            ${recommendedItem.tags.map(t => `<span class="px-2.5 py-1 bg-white dark:bg-stone-800 text-xs font-semibold rounded-lg text-stone-800 dark:text-stone-200 border border-stone-200 dark:border-stone-700">#${t}</span>`).join('')}
          </div>
          <div class="flex items-center justify-center md:justify-start gap-4">
            <span class="text-xl font-bold text-stone-900 dark:text-stone-100">${recommendedItem.price} ₽</span>
            <button 
              onclick="addToCart('${recommendedItem.id}')"
              class="px-5 py-2.5 rounded-xl bg-[#D97736] hover:bg-[#C26325] text-white text-xs font-bold flex items-center gap-2 cursor-pointer shadow-sm transition-all"
            >
              <i data-lucide="shopping-bag" class="w-4 h-4"></i> Добавить лот в корзину
            </button>
          </div>
        </div>
      </div>
    `;
    initLucide();
  }

  $('#quiz-steps-container').classList.add('hidden');
  $('#quiz-result').classList.remove('hidden');
}

// ----------------- BREW CALCULATOR & LIVE TIMER -----------------
function initBrewCalculator() {
  const gramsInput = $('#brew-grams');
  const ratioSelect = $('#brew-ratio');
  const methodSelect = $('#brew-method');
  const totalWaterEl = $('#calc-total-water');
  const bloomWaterEl = $('#calc-bloom-water');
  const grindNoteEl = $('#calc-grind-note');

  function calculate() {
    const grams = parseFloat(gramsInput.value) || 15;
    const ratio = parseFloat(ratioSelect.value) || 16;
    const totalWater = Math.round(grams * ratio);
    const bloomWater = Math.round(grams * 3);

    if (totalWaterEl) totalWaterEl.textContent = `${totalWater} мл`;
    if (bloomWaterEl) bloomWaterEl.textContent = `${bloomWater} г`;

    if (methodSelect && grindNoteEl) {
      if (methodSelect.value === 'v60') {
        grindNoteEl.textContent = 'Средний помол (крупинки как морская соль), вода 93°C';
      } else if (methodSelect.value === 'aeropress') {
        grindNoteEl.textContent = 'Средне-мелкий помол (чуть крупнее эспрессо), вода 88-90°C';
      } else {
        grindNoteEl.textContent = 'Крупный помол, вода 94°C, время экстракции 4:00';
      }
    }
  }

  if (gramsInput) gramsInput.addEventListener('input', calculate);
  if (ratioSelect) ratioSelect.addEventListener('change', calculate);
  if (methodSelect) methodSelect.addEventListener('change', calculate);

  calculate();

  // Timer Controls
  const timerDisplay = $('#timer-display');
  const timerStartBtn = $('#timer-start-btn');
  const timerResetBtn = $('#timer-reset-btn');
  const timerStepLabel = $('#timer-step-label');

  function formatTime(sec) {
    const m = Math.floor(sec / 60).toString().padStart(2, '0');
    const s = (sec % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  }

  function updateTimerStep(sec) {
    if (!timerStepLabel) return;
    if (sec < 45) {
      timerStepLabel.textContent = '1. Блум (предсмачивание) — аккуратно смочите всё зерно и дайте выйти газам';
      timerStepLabel.className = 'text-xs font-semibold text-amber-600 dark:text-amber-400';
    } else if (sec < 90) {
      timerStepLabel.textContent = '2. Первый пролив круговыми движениями от центра к краям';
      timerStepLabel.className = 'text-xs font-semibold text-sky-600 dark:text-sky-400';
    } else if (sec < 150) {
      timerStepLabel.textContent = '3. Финальный пролив до полного объема воды';
      timerStepLabel.className = 'text-xs font-semibold text-emerald-600 dark:text-emerald-400';
    } else {
      timerStepLabel.textContent = 'Экстракция завершена! Дайте каплям стечь и перемешайте сервер.';
      timerStepLabel.className = 'text-xs font-bold text-[#D97736]';
    }
  }

  if (timerStartBtn) {
    timerStartBtn.addEventListener('click', () => {
      if (state.timer.isRunning) {
        clearInterval(state.timer.intervalId);
        state.timer.isRunning = false;
        timerStartBtn.innerHTML = `<i data-lucide="play" class="w-4 h-4"></i> Продолжить`;
      } else {
        state.timer.isRunning = true;
        timerStartBtn.innerHTML = `<i data-lucide="pause" class="w-4 h-4"></i> Пауза`;
        state.timer.intervalId = setInterval(() => {
          state.timer.seconds += 1;
          timerDisplay.textContent = formatTime(state.timer.seconds);
          updateTimerStep(state.timer.seconds);
        }, 1000);
      }
      initLucide();
    });
  }

  if (timerResetBtn) {
    timerResetBtn.addEventListener('click', () => {
      clearInterval(state.timer.intervalId);
      state.timer.isRunning = false;
      state.timer.seconds = 0;
      timerDisplay.textContent = '00:00';
      if (timerStartBtn) timerStartBtn.innerHTML = `<i data-lucide="play" class="w-4 h-4"></i> Старт пролива`;
      if (timerStepLabel) timerStepLabel.textContent = 'Нажмите Старт перед первым заливом воды';
      initLucide();
    });
  }
}

// ----------------- TABLE & CUPPING RESERVATION -----------------
function initReservation() {
  const form = $('#reservation-form');
  const modal = $('#booking-success-modal');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<i data-lucide="loader-2" class="w-4 h-4 animate-spin"></i> Подтверждаем...`;
      initLucide();

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        initLucide();

        const name = $('#reserve-name').value;
        const date = $('#reserve-date').value;
        const time = $('#reserve-time').value;
        const type = $('#reserve-type').value;

        $('#booking-modal-details').textContent = `${type}: ${name}, ${date} в ${time}`;
        if (modal) modal.classList.remove('hidden');
        form.reset();
      }, 700);
    });
  }
}

window.closeBookingModal = function() {
  const modal = $('#booking-success-modal');
  if (modal) modal.classList.add('hidden');
};

// ----------------- ROAST COUNTDOWN BADGE -----------------
function initRoastCountdown() {
  const badge = $('#roast-live-badge');
  if (!badge) return;
  // Dynamic live pulse update
  badge.innerHTML = `<span class="inline-block w-2 h-2 rounded-full bg-emerald-500 mr-2 status-pulse"></span> Следующая обжарка в четверг (через 1 дн 14 ч)`;
}

// ----------------- TOAST NOTIFICATIONS -----------------
function showToast(message, type = 'info') {
  const toastContainer = $('#toast-container');
  if (!toastContainer) return;

  const toast = document.createElement('div');
  toast.className = `flex items-center gap-2.5 px-4 py-3 rounded-xl shadow-lg border text-xs font-semibold transition-all duration-300 transform translate-y-2 opacity-0 ${
    type === 'error'
      ? 'bg-rose-50 dark:bg-rose-950/80 text-rose-800 dark:text-rose-200 border-rose-200 dark:border-rose-800'
      : 'bg-stone-900/90 text-white border-stone-700 backdrop-blur-md'
  }`;

  const iconName = type === 'error' ? 'alert-circle' : 'check-circle';
  toast.innerHTML = `
    <i data-lucide="${iconName}" class="w-4 h-4 flex-shrink-0 ${type === 'error' ? 'text-rose-500' : 'text-[#D97736]'}"></i>
    <span>${message}</span>
  `;

  toastContainer.appendChild(toast);
  initLucide();

  requestAnimationFrame(() => {
    toast.classList.remove('translate-y-2', 'opacity-0');
  });

  setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-2');
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// ----------------- SMOOTH SCROLL & NAVIGATION -----------------
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (!targetId) return;

      if (targetId === '#' || targetId === '#top') {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
        return;
      }

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();

        // If cart drawer is open, close it smoothly first
        const cartDrawer = document.getElementById('cart-drawer');
        const cartBackdrop = document.getElementById('cart-backdrop');
        if (cartDrawer && !cartDrawer.classList.contains('translate-x-full')) {
          cartDrawer.classList.add('translate-x-full');
          if (cartBackdrop) cartBackdrop.classList.add('hidden');
          document.body.classList.remove('overflow-hidden');
        }

        const headerHeight = 88;
        const targetTop = targetEl.getBoundingClientRect().top + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: Math.max(0, targetTop),
          behavior: 'smooth'
        });

        if (history.pushState) {
          history.pushState(null, null, targetId);
        }
      }
    });
  });

  // Floating Back to Top Button
  const scrollTopBtn = document.getElementById('scroll-to-top-btn');
  if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 350) {
        scrollTopBtn.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
        scrollTopBtn.classList.add('opacity-100', 'translate-y-0');
      } else {
        scrollTopBtn.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
        scrollTopBtn.classList.remove('opacity-100', 'translate-y-0');
      }
    }, { passive: true });

    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}

