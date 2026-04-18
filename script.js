/**
 * NEXUS Premium Online Market - Frontend Logic
 * Architecture: Data -> State -> UI Render -> Event Listeners
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. DATA (Mock Database) ---
    const productsDB = [
        { id: 1, name: 'iPhone 15 Pro Max', price: 1199, category: 'phone', image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&q=80&w=500', rating: 4.8, reviews: 234, sale: false },
        { id: 2, name: 'MacBook Pro 16" M3 Max', price: 3499, category: 'laptop', image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=500', rating: 4.9, reviews: 189, sale: true, salePercent: 15 },
        { id: 3, name: 'PlayStation 5 Digital', price: 499, category: 'gaming', image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&q=80&w=500', rating: 4.7, reviews: 567, sale: true, salePercent: 10 },
        { id: 4, name: 'AirPods Pro 2', price: 249, category: 'audio', image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&q=80&w=500', rating: 4.6, reviews: 892, sale: false },
        { id: 5, name: 'Keychron Q1 Pro', price: 199, category: 'gaming', image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&q=80&w=500', rating: 4.5, reviews: 145, sale: false },
        { id: 6, name: 'Apple Watch Ultra 2', price: 799, category: 'phone', image: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?auto=format&fit=crop&q=80&w=500', rating: 4.8, reviews: 421, sale: true, salePercent: 20 },
        { id: 7, name: 'LG UltraGear 4K 27"', price: 699, category: 'gaming', image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=500', rating: 4.7, reviews: 278, sale: false },
        { id: 8, name: 'Sony WH-1000XM5', price: 399, category: 'audio', image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=500', rating: 4.9, reviews: 645, sale: true, salePercent: 12 },
        { id: 9, name: 'iPad Pro 12.9" M2', price: 1099, category: 'phone', image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&q=80&w=500', rating: 4.8, reviews: 356, sale: false },
        { id: 10, name: 'ASUS ROG Laptop', price: 1899, category: 'laptop', image: 'https://images.unsplash.com/photo-1588872657840-218e412ee62e?auto=format&fit=crop&q=80&w=500', rating: 4.7, reviews: 234, sale: true, salePercent: 18 },
        { id: 11, name: 'Beats Studio Pro', price: 349, category: 'audio', image: 'https://images.unsplash.com/photo-1487215078519-e21cc028cb29?auto=format&fit=crop&q=80&w=500', rating: 4.6, reviews: 523, sale: false },
        { id: 12, name: 'Nintendo Switch OLED', price: 349, category: 'gaming', image: 'https://images.unsplash.com/photo-1535871365182-611eddfe69a5?auto=format&fit=crop&q=80&w=500', rating: 4.8, reviews: 789, sale: true, salePercent: 8 }
    ];

    // Автомобили
    const autoProducts = [
        { id: 101, name: 'BMW M5 Competition', price: 125000, category: 'sport', image: 'https://images.unsplash.com/photo-1553882900-d5160ca3fc10?auto=format&fit=crop&q=80&w=500', rating: 4.9, reviews: 456, sale: true, salePercent: 5 },
        { id: 102, name: 'Tesla Model 3', price: 45000, category: 'electric', image: 'https://images.unsplash.com/photo-1560958089-b8a63019b94f?auto=format&fit=crop&q=80&w=500', rating: 4.8, reviews: 892, sale: false },
        { id: 103, name: 'Mercedes-Benz C63', price: 98000, category: 'luxury', image: 'https://images.unsplash.com/photo-1567818735868-e71b99932e29?auto=format&fit=crop&q=80&w=500', rating: 4.7, reviews: 234, sale: true, salePercent: 8 },
        { id: 104, name: 'Porsche 911 Carrera', price: 110000, category: 'sport', image: 'https://images.unsplash.com/photo-1552820728-8ac41f1ce891?auto=format&fit=crop&q=80&w=500', rating: 4.9, reviews: 567, sale: false },
        { id: 105, name: 'Audi A8', price: 89000, category: 'luxury', image: 'https://images.unsplash.com/photo-1525231131265-26d000ce2e6a?auto=format&fit=crop&q=80&w=500', rating: 4.6, reviews: 345, sale: true, salePercent: 10 },
        { id: 106, name: 'Toyota Corolla', price: 28000, category: 'family', image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80&w=500', rating: 4.5, reviews: 1200, sale: false },
        { id: 107, name: 'Range Rover Sport', price: 95000, category: 'suv', image: 'https://images.unsplash.com/photo-1606611013016-969c19d27081?auto=format&fit=crop&q=80&w=500', rating: 4.8, reviews: 678, sale: true, salePercent: 12 },
        { id: 108, name: 'Lamborghini Huracán', price: 220000, category: 'sport', image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&q=80&w=500', rating: 4.9, reviews: 289, sale: false }
    ];

    // Мебель
    const furnitureProducts = [
        { id: 201, name: 'Диван Vittorio', price: 4500, category: 'sofa', image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80&w=500', rating: 4.7, reviews: 345, sale: true, salePercent: 20 },
        { id: 202, name: 'Стол обеденный', price: 1200, category: 'table', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=500', rating: 4.6, reviews: 234, sale: false },
        { id: 203, name: 'Кровать King Size', price: 2800, category: 'bed', image: 'https://images.unsplash.com/photo-1540932239986-310128078ceb?auto=format&fit=crop&q=80&w=500', rating: 4.8, reviews: 567, sale: true, salePercent: 15 },
        { id: 204, name: 'Книжный шкаф', price: 890, category: 'storage', image: 'https://images.unsplash.com/photo-1533090161108-e7b2b3ef036c?auto=format&fit=crop&q=80&w=500', rating: 4.5, reviews: 123, sale: false },
        { id: 205, name: 'Кресло офисное', price: 650, category: 'chair', image: 'https://images.unsplash.com/photo-1598301257942-4f419db7a4d4?auto=format&fit=crop&q=80&w=500', rating: 4.4, reviews: 456, sale: true, salePercent: 25 },
        { id: 206, name: 'Комод винтаж', price: 1500, category: 'storage', image: 'https://images.unsplash.com/photo-1565182999555-2142414b9970?auto=format&fit=crop&q=80&w=500', rating: 4.7, reviews: 189, sale: false },
        { id: 207, name: 'Журнальный столик', price: 450, category: 'table', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=500', rating: 4.6, reviews: 278, sale: true, salePercent: 30 },
        { id: 208, name: 'Шезлонг', price: 780, category: 'lounge', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=500', rating: 4.5, reviews: 345, sale: false }
    ];

    // Одежда
    const fashionProducts = [
        { id: 301, name: 'Куртка кожаная', price: 320, category: 'jackets', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=500', rating: 4.7, reviews: 567, sale: true, salePercent: 15 },
        { id: 302, name: 'Джинсы классические', price: 89, category: 'jeans', image: 'https://images.unsplash.com/photo-1542272604-787c62d465d1?auto=format&fit=crop&q=80&w=500', rating: 4.6, reviews: 892, sale: false },
        { id: 303, name: 'Свитер шерстяной', price: 129, category: 'sweaters', image: 'https://images.unsplash.com/photo-1556821552-9c037cb4f32a?auto=format&fit=crop&q=80&w=500', rating: 4.5, reviews: 345, sale: true, salePercent: 20 },
        { id: 304, name: 'Платье вечернее', price: 280, category: 'dresses', image: 'https://images.unsplash.com/photo-1595777707802-221d5c1c7d70?auto=format&fit=crop&q=80&w=500', rating: 4.8, reviews: 456, sale: false },
        { id: 305, name: 'Кроссовки спортивные', price: 149, category: 'shoes', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=500', rating: 4.7, reviews: 678, sale: true, salePercent: 25 },
        { id: 306, name: 'Рубашка хлопковая', price: 79, category: 'shirts', image: 'https://images.unsplash.com/photo-1596362692841-42d11863f706?auto=format&fit=crop&q=80&w=500', rating: 4.4, reviews: 234, sale: false },
        { id: 307, name: 'Туфли кожаные', price: 199, category: 'shoes', image: 'https://images.unsplash.com/photo-1543163521-9145f9ef45ff?auto=format&fit=crop&q=80&w=500', rating: 4.6, reviews: 389, sale: true, salePercent: 10 },
        { id: 308, name: 'Шарф шелковый', price: 69, category: 'accessories', image: 'https://images.unsplash.com/photo-1520763185298-1b434c919eba?auto=format&fit=crop&q=80&w=500', rating: 4.5, reviews: 167, sale: false }
    ];

    // Каталоги по категориям
    const catalogs = {
        tech: productsDB,
        auto: autoProducts,
        furniture: furnitureProducts,
        fashion: fashionProducts
    };

    let currentStore = 'tech'; // Текущий магазин

    // --- 2. STATE MANAGEMENT ---
    let cart = JSON.parse(localStorage.getItem('nexus_cart')) || [];
    let wishlist = JSON.parse(localStorage.getItem('nexus_wishlist')) || [];
    let currentCategory = 'all';
    let currentSearchQuery = '';
    let currentSort = 'popular';
    let maxPrice = 5000;
    
    // Обновлять maxPrice в зависимости от магазина
    const getPriceRangeForStore = (store) => {
        const ranges = { tech: 5000, auto: 250000, furniture: 5000, fashion: 500 };
        return ranges[store] || 5000;
    };

    // --- 3. DOM ELEMENTS ---
    const elements = {
        loader: document.getElementById('loader'),
        productsGrid: document.getElementById('productsGrid'),
        dealsGrid: document.getElementById('dealsGrid'),
        cartToggleBtn: document.getElementById('cartToggle'),
        cartSidebar: document.getElementById('cartSidebar'),
        cartOverlay: document.getElementById('cartOverlay'),
        closeCartBtn: document.getElementById('closeCart'),
        cartItemsContainer: document.getElementById('cartItems'),
        cartBadge: document.getElementById('cartBadge'),
        cartTotalSum: document.getElementById('cartTotalSum'),
        
        wishlistToggleBtn: document.getElementById('wishlistToggle'),
        wishlistSidebar: document.getElementById('wishlistSidebar'),
        wishlistOverlay: document.getElementById('wishlistOverlay'),
        closeWishlistBtn: document.getElementById('closeWishlist'),
        wishlistItemsContainer: document.getElementById('wishlistItems'),
        wishlistBadge: document.getElementById('wishlistBadge'),
        addAllToCartBtn: document.querySelector('.add-all-to-cart-btn'),
        
        burgerMenu: document.getElementById('burgerMenu'),
        nav: document.getElementById('nav'),
        header: document.getElementById('header'),
        categoryBtns: document.querySelectorAll('.filter-btn'),
        searchInput: document.getElementById('searchInput'),
        sortSelect: document.getElementById('sortSelect'),
        priceRange: document.getElementById('priceRange'),
        priceValue: document.getElementById('priceValue')
    };

    // --- 4. INITIALIZATION ---
    const init = () => {
        setTimeout(() => {
            elements.loader.style.opacity = '0';
            setTimeout(() => elements.loader.style.display = 'none', 500);
            triggerFadeIn();
        }, 800);

        const currentCatalog = catalogs[currentStore];
        renderProducts(currentCatalog);
        renderDeals(currentCatalog);
        updateCartUI();
        updateWishlistUI();
        setupEventListeners();
        maxPrice = getPriceRangeForStore(currentStore);
        elements.priceValue.textContent = `Макс: $${maxPrice}`;
    };

    // --- 5. HELPER FUNCTIONS ---
    const generateStars = (rating) => {
        const full = Math.floor(rating);
        const half = rating % 1 >= 0.5 ? 1 : 0;
        let stars = '';
        for (let i = 0; i < full; i++) stars += '★';
        if (half) stars += '½';
        return stars;
    };

    const getSalePrice = (product) => {
        return product.sale ? Math.round(product.price * (1 - product.salePercent / 100)) : product.price;
    };

    const isInWishlist = (productId) => wishlist.some(item => item.id === productId);

    // --- 6. RENDER FUNCTIONS ---
    
    // Рендер каталога
    const renderProducts = (productsToRender) => {
        elements.productsGrid.innerHTML = '';
        
        if (productsToRender.length === 0) {
            elements.productsGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--color-text-muted);">Товары не найдены.</p>';
            return;
        }

        productsToRender.forEach(product => {
            const card = document.createElement('div');
            card.className = `product-card fade-in visible ${product.sale ? 'on-sale' : ''}`;
            card.dataset.id = product.id;
            
            const salePrice = getSalePrice(product);
            const priceHtml = product.sale 
                ? `<span class="original-price" style="text-decoration: line-through; color: var(--color-text-muted); font-size: 0.9rem;">$${product.price}</span><span style="color: var(--color-accent); margin-left: 5px;">$${salePrice}</span>`
                : `$${product.price}`;
            
            card.innerHTML = `
                <button class="wishlist-heart ${isInWishlist(product.id) ? 'active' : ''}" data-id="${product.id}" aria-label="Добавить в избранное">♥</button>
                ${product.sale ? `<div class="deal-badge">-${product.salePercent}%</div>` : ''}
                <div class="product-img-wrapper">
                    <img src="${product.image}" alt="${product.name}" loading="lazy">
                </div>
                <div class="product-info">
                    <div class="product-rating">
                        <span class="star">${generateStars(product.rating)}</span>
                        <span>(${product.reviews})</span>
                    </div>
                    <span class="product-category">${product.category}</span>
                    <h3 class="product-title">${product.name}</h3>
                    <div class="product-bottom">
                        <span class="product-price">${priceHtml}</span>
                        <button class="add-to-cart" data-id="${product.id}" aria-label="Добавить в корзину">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>
                        </button>
                    </div>
                </div>
            `;
            elements.productsGrid.appendChild(card);
        });
    };

    // Рендер горячих предложений
    const renderDeals = (catalog = null) => {
        const currentCatalog = catalog || catalogs[currentStore];
        const deals = currentCatalog.filter(p => p.sale);
        elements.dealsGrid.innerHTML = '';
        
        deals.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card fade-in visible on-sale';
            card.dataset.id = product.id;
            
            const salePrice = getSalePrice(product);
            
            card.innerHTML = `
                <button class="wishlist-heart ${isInWishlist(product.id) ? 'active' : ''}" data-id="${product.id}">♥</button>
                <div class="deal-badge">-${product.salePercent}%</div>
                <div class="product-img-wrapper">
                    <img src="${product.image}" alt="${product.name}" loading="lazy">
                </div>
                <div class="product-info">
                    <div class="product-rating">
                        <span class="star">${generateStars(product.rating)}</span>
                        <span>(${product.reviews})</span>
                    </div>
                    <h3 class="product-title">${product.name}</h3>
                    <div class="product-bottom">
                        <span class="product-price">
                            <span style="text-decoration: line-through; color: var(--color-text-muted); font-size: 0.9rem;">$${product.price}</span>
                            <span style="color: var(--color-accent); margin-left: 5px;">$${salePrice}</span>
                        </span>
                        <button class="add-to-cart" data-id="${product.id}">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>
                        </button>
                    </div>
                </div>
            `;
            elements.dealsGrid.appendChild(card);
        });
    };

    // Рендер корзины
    const updateCartUI = () => {
        elements.cartItemsContainer.innerHTML = '';
        let total = 0;
        let count = 0;

        cart.forEach(item => {
            total += getSalePrice(item) * item.quantity;
            count += item.quantity;

            const cartEl = document.createElement('div');
            cartEl.className = 'cart-item';
            cartEl.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-info">
                    <div class="cart-item-title">${item.name}</div>
                    <div class="cart-item-price">$${getSalePrice(item)} x ${item.quantity}</div>
                    <span class="remove-item" data-id="${item.id}">Удалить</span>
                </div>
                <div class="cart-item-controls">
                    <button class="qty-minus" data-id="${item.id}">−</button>
                    <span class="cart-item-qty">${item.quantity}</span>
                    <button class="qty-plus" data-id="${item.id}">+</button>
                </div>
            `;
            elements.cartItemsContainer.appendChild(cartEl);
        });

        elements.cartTotalSum.textContent = `$${total.toLocaleString()}`;
        elements.cartBadge.textContent = count;
        
        elements.cartBadge.style.transform = 'scale(1.3)';
        setTimeout(() => elements.cartBadge.style.transform = 'scale(1)', 200);

        localStorage.setItem('nexus_cart', JSON.stringify(cart));
    };

    // Рендер избранного
    const updateWishlistUI = () => {
        elements.wishlistItemsContainer.innerHTML = '';
        
        if (wishlist.length === 0) {
            elements.wishlistItemsContainer.innerHTML = '<p style="text-align: center; color: var(--color-text-muted); padding: 20px;">Избранное пусто</p>';
        } else {
            wishlist.forEach(item => {
                const wishEl = document.createElement('div');
                wishEl.className = 'wishlist-item';
                wishEl.innerHTML = `
                    <img src="${item.image}" alt="${item.name}">
                    <div class="wishlist-item-info">
                        <div class="wishlist-item-name">${item.name}</div>
                        <div class="wishlist-item-price">$${getSalePrice(item)}</div>
                    </div>
                    <span class="remove-wishlist" data-id="${item.id}">✕</span>
                `;
                elements.wishlistItemsContainer.appendChild(wishEl);
            });
        }

        elements.wishlistBadge.textContent = wishlist.length;
        localStorage.setItem('nexus_wishlist', JSON.stringify(wishlist));
    };


    // --- 7. LOGIC & HANDLERS ---

    const addToCart = (productId) => {
        const product = productsDB.find(p => p.id === productId);
        if (!product) return;

        const existingItem = cart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        updateCartUI();
        openCart();
    };

    const removeFromCart = (productId) => {
        cart = cart.filter(item => item.id !== productId);
        updateCartUI();
    };

    const updateCartQty = (productId, delta) => {
        const item = cart.find(i => i.id === productId);
        if (item) {
            item.quantity = Math.max(1, item.quantity + delta);
            updateCartUI();
        }
    };

    const toggleWishlist = (productId) => {
        const product = productsDB.find(p => p.id === productId);
        if (!product) return;

        const index = wishlist.findIndex(item => item.id === productId);
        if (index > -1) {
            wishlist.splice(index, 1);
        } else {
            wishlist.push({ ...product });
        }
        
        updateWishlistUI();
        document.querySelectorAll(`.wishlist-heart[data-id="${productId}"]`).forEach(btn => {
            btn.classList.toggle('active');
        });
    };

    const removeFromWishlist = (productId) => {
        wishlist = wishlist.filter(item => item.id !== productId);
        updateWishlistUI();
        document.querySelectorAll(`.wishlist-heart[data-id="${productId}"]`).forEach(btn => {
            btn.classList.remove('active');
        });
    };

    const addAllWishlistToCart = () => {
        wishlist.forEach(item => {
            if (!cart.find(c => c.id === item.id)) {
                cart.push({ ...item, quantity: 1 });
            }
        });
        updateCartUI();
        closeWishlist();
        openCart();
    };

    const openCart = () => {
        elements.cartSidebar.classList.add('active');
        elements.cartOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    const closeCart = () => {
        elements.cartSidebar.classList.remove('active');
        elements.cartOverlay.classList.remove('active');
        document.body.style.overflow = '';
    };

    const openWishlist = () => {
        elements.wishlistSidebar.classList.add('active');
        elements.wishlistOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    const closeWishlist = () => {
        elements.wishlistSidebar.classList.remove('active');
        elements.wishlistOverlay.classList.remove('active');
        document.body.style.overflow = '';
    };

    // Применение фильтров и сортировки
    const applyFilters = () => {
        let filtered = catalogs[currentStore];

        // Фильтр по категории
        if (currentCategory !== 'all') {
            filtered = filtered.filter(p => p.category === currentCategory);
        }

        // Фильтр по цене
        filtered = filtered.filter(p => getSalePrice(p) <= maxPrice);

        // Фильтр по поиску
        if (currentSearchQuery.trim() !== '') {
            filtered = filtered.filter(p => p.name.toLowerCase().includes(currentSearchQuery.toLowerCase()));
        }

        // Сортировка
        switch(currentSort) {
            case 'price-low':
                filtered.sort((a, b) => getSalePrice(a) - getSalePrice(b));
                break;
            case 'price-high':
                filtered.sort((a, b) => getSalePrice(b) - getSalePrice(a));
                break;
            case 'rating':
                filtered.sort((a, b) => b.rating - a.rating);
                break;
            case 'popular':
            default:
                filtered.sort((a, b) => b.reviews - a.reviews);
        }

        renderProducts(filtered);
    };

    const triggerFadeIn = () => {
        const fadeElements = document.querySelectorAll('.fade-in:not(.visible)');
        fadeElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) {
                el.classList.add('visible');
            }
        });
    };

    // --- 8. EVENT LISTENERS ---
    const setupEventListeners = () => {
        // Переключение между магазинами
        document.querySelectorAll('.category-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const newStore = e.target.dataset.category;
                if (newStore !== currentStore) {
                    currentStore = newStore;
                    currentCategory = 'all';
                    currentSearchQuery = '';
                    currentSort = 'popular';
                    maxPrice = getPriceRangeForStore(currentStore);
                    
                    // Обновить все элементы фильтра и отобразить товары
                    elements.priceRange.max = maxPrice;
                    elements.priceRange.value = maxPrice;
                    elements.priceValue.textContent = `Макс: $${maxPrice}`;
                    elements.searchInput.value = '';
                    elements.sortSelect.value = 'popular';
                    
                    renderProducts(catalogs[currentStore]);
                    renderDeals(catalogs[currentStore]);
                    
                    // Обновить активную ссылку
                    document.querySelectorAll('.category-link').forEach(l => l.classList.remove('active'));
                    e.target.classList.add('active');
                }
            });
        });

        // Корзина
        elements.productsGrid.addEventListener('click', (e) => {
            const btn = e.target.closest('.add-to-cart');
            if (btn) addToCart(parseInt(btn.dataset.id));
        });

        elements.dealsGrid.addEventListener('click', (e) => {
            const btn = e.target.closest('.add-to-cart');
            if (btn) addToCart(parseInt(btn.dataset.id));
        });

        // Избранное
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('wishlist-heart')) {
                toggleWishlist(parseInt(e.target.dataset.id));
            }
        });

        // Управление корзиной
        elements.cartToggleBtn.addEventListener('click', openCart);
        elements.closeCartBtn.addEventListener('click', closeCart);
        elements.cartOverlay.addEventListener('click', closeCart);

        elements.cartItemsContainer.addEventListener('click', (e) => {
            if (e.target.classList.contains('remove-item')) {
                removeFromCart(parseInt(e.target.dataset.id));
            } else if (e.target.classList.contains('qty-minus')) {
                updateCartQty(parseInt(e.target.dataset.id), -1);
            } else if (e.target.classList.contains('qty-plus')) {
                updateCartQty(parseInt(e.target.dataset.id), 1);
            }
        });

        // Избранное
        elements.wishlistToggleBtn.addEventListener('click', openWishlist);
        elements.closeWishlistBtn.addEventListener('click', closeWishlist);
        elements.wishlistOverlay.addEventListener('click', closeWishlist);

        elements.wishlistItemsContainer.addEventListener('click', (e) => {
            if (e.target.classList.contains('remove-wishlist')) {
                removeFromWishlist(parseInt(e.target.dataset.id));
            }
        });

        elements.addAllToCartBtn.addEventListener('click', addAllWishlistToCart);

        // Мобильное меню
        elements.burgerMenu.addEventListener('click', () => {
            elements.nav.classList.toggle('active');
            const spans = elements.burgerMenu.querySelectorAll('span');
            if (elements.nav.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });

        // Фильтры категорий
        elements.categoryBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                elements.categoryBtns.forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                currentCategory = e.target.dataset.category;
                applyFilters();
            });
        });

        // Поиск
        elements.searchInput.addEventListener('input', (e) => {
            currentSearchQuery = e.target.value;
            applyFilters();
        });

        // Сортировка
        elements.sortSelect.addEventListener('change', (e) => {
            currentSort = e.target.value;
            applyFilters();
        });

        // Фильтр по цене
        elements.priceRange.addEventListener('input', (e) => {
            maxPrice = parseInt(e.target.value);
            elements.priceValue.textContent = `Макс: $${maxPrice}`;
            applyFilters();
        });

        // Скролл эффекты
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                elements.header.classList.add('scrolled');
            } else {
                elements.header.classList.remove('scrolled');
            }
            triggerFadeIn();
        });
        
        // Закрытие меню при клике на ссылки
        elements.nav.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                elements.nav.classList.remove('active');
                elements.burgerMenu.querySelectorAll('span').forEach(s => s.style = '');
            });
        });
    };

    // --- 9. ADVANCED ANIMATIONS ---
    
    // Parallax эффект при скролле
    const parallaxEffect = () => {
        const heroBg = document.querySelector('.hero-bg');
        const scrolled = window.scrollY;
        if (heroBg) {
            heroBg.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    };

    // Mouse tracking parallax для карточек
    const setupCardParallax = () => {
        document.addEventListener('mousemove', (e) => {
            const cards = document.querySelectorAll('.product-card');
            cards.forEach(card => {
                const rect = card.getBoundingClientRect();
                const cardCenterX = rect.left + rect.width / 2;
                const cardCenterY = rect.top + rect.height / 2;
                
                const mouseX = e.clientX - cardCenterX;
                const mouseY = e.clientY - cardCenterY;
                
                const rotateX = (mouseY / rect.height) * 2;
                const rotateY = (mouseX / rect.width) * 2;
                
                card.style.setProperty('--rotX', `${rotateX}deg`);
                card.style.setProperty('--rotY', `${rotateY}deg`);
                
                // Только применяем если нужно
                if (Math.abs(rotateX) > 0.1 || Math.abs(rotateY) > 0.1) {
                    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                }
            });
        });
        
        // Reset на mouse leave
        document.addEventListener('mouseleave', () => {
            const cards = document.querySelectorAll('.product-card');
            cards.forEach(card => {
                card.style.transform = 'none';
            });
        });
    };

    // Стаггированная анимация товаров при загрузке
    const staggerAnimateCards = () => {
        const cards = document.querySelectorAll('.product-card');
        cards.forEach((card, index) => {
            card.style.animation = `none`;
            card.offsetHeight; // Trigger reflow
            card.style.animation = `slideInUp 0.6s ease-out ${index * 0.05}s both`;
        });
    };

    // Добавим CSS для slideInUp
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
        @keyframes slideInUp {
            from {
                opacity: 0;
                transform: translateY(40px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(styleSheet);

    // Анимация счётчика в корзине
    const animateCartCounter = () => {
        const badge = elements.cartBadge;
        const currentValue = parseInt(badge.textContent);
        badge.style.animation = `counterFlip 0.5s ease-out`;
        
        setTimeout(() => {
            badge.style.animation = 'none';
        }, 500);
    };

    // Ripple эффект на кнопках
    const setupRippleEffect = () => {
        document.addEventListener('click', (e) => {
            if (e.target.matches('button')) {
                const ripple = document.createElement('span');
                const rect = e.target.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.cssText = `
                    position: absolute;
                    left: ${x}px;
                    top: ${y}px;
                    width: ${size}px;
                    height: ${size}px;
                    background: rgba(255,255,255,0.6);
                    border-radius: 50%;
                    transform: scale(0);
                    animation: rippleAnimation 0.6s ease-out;
                    pointer-events: none;
                `;
                e.target.style.position = 'relative';
                e.target.style.overflow = 'hidden';
                e.target.appendChild(ripple);
                
                setTimeout(() => ripple.remove(), 600);
            }
        });
    };

    // Glow эффект на focus
    const setupGlowEffect = () => {
        const inputs = document.querySelectorAll('input, select');
        inputs.forEach(input => {
            input.addEventListener('focus', function() {
                this.style.boxShadow = '0 0 20px rgba(229, 9, 20, 0.6), inset 0 0 10px rgba(229, 9, 20, 0.2)';
                this.style.transition = 'all 0.3s ease';
            });
            
            input.addEventListener('blur', function() {
                this.style.boxShadow = '';
            });
        });
    };

    // Floating эффект для элементов
    const setupFloatingElements = () => {
        const floating = document.querySelectorAll('.deal-badge, .wishlist-heart');
        floating.forEach((el, i) => {
            el.style.animation = `float${i % 2} 3s ease-in-out infinite`;
        });
    };

    // Добавим float анимации
    const floatSheet = document.createElement('style');
    floatSheet.textContent = `
        @keyframes float0 {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
        }
        @keyframes float1 {
            0%, 100% { transform: translateY(-5px); }
            50% { transform: translateY(5px); }
        }
        @keyframes counterFlip {
            0% { transform: scale(1.5) rotateZ(0deg); opacity: 0; }
            50% { transform: scale(0.8) rotateZ(180deg); opacity: 1; }
            100% { transform: scale(1) rotateZ(360deg); opacity: 1; }
        }
    `;
    document.head.appendChild(floatSheet);

    // Scroll animation trigger
    const observeElements = () => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    entry.target.style.animation = 'slideInUp 0.8s ease-out';
                }
            });
        }, { threshold: 0.1 });
        
        document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
    };

    // Инициализация всех анимаций при загрузке
    const initAnimations = () => {
        setTimeout(() => {
            staggerAnimateCards();
            setupCardParallax();
            setupRippleEffect();
            setupGlowEffect();
            setupFloatingElements();
            observeElements();
            
            window.addEventListener('scroll', parallaxEffect, { passive: true });
        }, 1000);
    };

    // Запуск приложения
    init();
    initAnimations();
});
