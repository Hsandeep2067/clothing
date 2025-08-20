// Product Data
const products = [
    // {
    //     id: 1,
    //     name: "GRATEFUL vehicles Design Back Printed T-Shirt",
    //     category: "vehicles",
    //     price: 2490,
    //     originalPrice: 2990,
    //     image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
    //     rating: 4.8,
    //     reviews: 45,
    //     badge: "Sale",
    //     description: "Beautiful vehicles design with premium cotton fabric"
    // },
    {
        id: 1,
        name: "BECOME BUTTERFLY Butterfly Design T-Shirt",
        category: "butterfly",
        price: 2490,
        originalPrice: 2990,
        image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        rating: 4.9,
        reviews: 32,
        badge: "Sale",
        description: "Elegant butterfly design perfect for women"
    },
    {
        id: 2,
        name: "DREAM FLIGHT Butterfly Design T-Shirt",
        category: "butterfly",
        price: 2490,
        originalPrice: 2990,
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        rating: 4.7,
        reviews: 28,
        badge: "Sale",
        description: "Dreamy butterfly design with soft fabric"
    },
    {
        id: 3,
        name: "MONEY Teddy Bear Back Printed T-Shirt",
        category: "teddy",
        price: 2490,
        originalPrice: 2990,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
        rating: 5.0,
        reviews: 67,
        badge: "Sale",
        description: "Cute teddy bear design for men and women"
    },
    {
        id: 4,
        name: "SELF LOVE IS THE BEST LOVE T-Shirt",
        category: "girls",
        price: 2490,
        originalPrice: 2990,
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        rating: 5.0,
        reviews: 89,
        badge: "Sale",
        description: "Empowering message with comfortable fit"
    },
    {
        id: 5,
        name: "BMW 1000RR Bike T-Shirt",
        category: "bike",
        price: 2490,
        originalPrice: 2990,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
        rating: 4.6,
        reviews: 23,
        badge: "Sale",
        description: "Premium quality unisex bike design"
    },
    {
        id: 6,
        name: "DUCATI PANIGALE Bike T-Shirt",
        category: "bike",
        price: 2490,
        originalPrice: 2990,
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        rating: 4.8,
        reviews: 34,
        badge: "Sale",
        description: "High-quality bike enthusiast design"
    },
    {
        id: 7,
        name: "HONDA CBR Bike T-Shirt",
        category: "bike",
        price: 2490,
        originalPrice: 2990,
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        rating: 4.5,
        reviews: 19,
        badge: "Sale",
        description: "Classic Honda CBR design"
    },
    {
        id: 8,
        name: "Mercedes-Benz C63 Vehicle T-Shirt",
        category: "vehicles",
        price: 2490,
        originalPrice: 2990,
        image: "images/vehicles/MERCEDES BENZ C63 - VR001.jpg",
        rating: 4.9,
        reviews: 52,
        badge: "New",
        description: "Performance-inspired C63 print for vehicle enthusiasts"
    },
    {
        id: 9,
        name: "Nissan GTR Nismo Vehicle T-Shirt",
        category: "vehicles",
        price: 2490,
        originalPrice: 2990,
        image: "images/vehicles/GTR Nismo - VR002.jpg",
        rating: 4.8,
        reviews: 47,
        badge: "New",
        description: "Iconic GTR Nismo silhouette with bold styling"
    },
    {
        id: 10,
        name: "Ayrton Senna 1988 Tribute T-Shirt",
        category: "vehicles",
        price: 2490,
        originalPrice: 2990,
        image: "images/vehicles/Senna 1988 - VR006.jpg",
        rating: 5.0,
        reviews: 65,
        badge: "New",
        description: "Legendary Senna tribute design for racing fans"
    },
    {
        id: 11,
        name: "Ford Mustang Vehicle T-Shirt",
        category: "vehicles",
        price: 2490,
        originalPrice: 2990,
        image: "images/vehicles/Ford Mustang - VR007.jpg",
        rating: 4.7,
        reviews: 39,
        badge: "New",
        description: "Classic Mustang profile for muscle car lovers"
    },
    {
        id: 12,
        name: "Toyota Supra MK4 Vehicle T-Shirt",
        category: "vehicles",
        price: 2490,
        originalPrice: 2990,
        image: "images/vehicles/Toyota Supra mk4 - VR009.jpg",
        rating: 4.9,
        reviews: 58,
        badge: "New",
        description: "JDM legend Supra MK4 design with clean lines"
    },
    {
        id: 13,
        name: "Honda Civic Type R Vehicle T-Shirt",
        category: "vehicles",
        price: 2490,
        originalPrice: 2990,
        image: "images/vehicles/Honda Type R - VR010.jpg",
        rating: 4.6,
        reviews: 26,
        badge: "New",
        description: "Track-ready Type R inspired streetwear"
    },
    {
        id: 14,
        name: "BYD Seal Vehicle T-Shirt",
        category: "vehicles",
        price: 2490,
        originalPrice: 2990,
        image: "images/vehicles/BYD SEAL - VR011.jpg",
        rating: 4.5,
        reviews: 18,
        badge: "New",
        description: "Modern EV aesthetic with minimalist lines"
    },
    {
        id: 15,
        name: "Ford GT Vehicle T-Shirt",
        category: "vehicles",
        price: 2490,
        originalPrice: 2990,
        image: "images/vehicles/Ford GT - VR012.jpg",
        rating: 4.7,
        reviews: 31,
        badge: "New",
        description: "Endurance racing icon rendered in bold graphic"
    },
    {
        id: 16,
        name: "McLaren P1 Vehicle T-Shirt",
        category: "vehicles",
        price: 2490,
        originalPrice: 2990,
        image: "images/vehicles/Mclaren P1 - VR013.jpg",
        rating: 4.8,
        reviews: 44,
        badge: "New",
        description: "Hybrid hypercar silhouette with dynamic flow"
    },
    {
        id: 17,
        name: "Pagani Zonda C12 Vehicle T-Shirt",
        category: "vehicles",
        price: 2490,
        originalPrice: 2990,
        image: "images/vehicles/The Pagani Zonda C1 - VR014.jpg",
        rating: 4.9,
        reviews: 53,
        badge: "New",
        description: "Exotic Zonda profile for supercar aficionados"
    },
    {
        id: 18,
        name: "Squid Game TV Series T-Shirt",
        category: "games",
        price: 2490,
        originalPrice: 2990,
        image: "images/film & tvseries/Squid Game - TR001.jpg",
        rating: 4.8,
        reviews: 41,
        badge: "New",
        description: "Iconic Squid Game design for Netflix series fans"
    },
    {
        id: 19,
        name: "Squid Game TV Series T-Shirt",
        category: "music",
        price: 2490,
        originalPrice: 2990,
        image: "images/sports/Squid Game - TR001.jpg",
        rating: 4.8,
        reviews: 41,
        badge: "New",
        description: "Iconic Squid Game design for Netflix series fans"
    }
];

// Cart and Wishlist Management
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

// DOM Elements
const cartBtn = document.getElementById('cartBtn');
const cartSidebar = document.getElementById('cartSidebar');
const closeCart = document.getElementById('closeCart');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const cartCount = document.getElementById('cartCount');
const checkoutBtn = document.getElementById('checkoutBtn');

const wishlistBtn = document.getElementById('wishlistBtn');
const wishlistSidebar = document.getElementById('wishlistSidebar');
const closeWishlist = document.getElementById('closeWishlist');
const wishlistItems = document.getElementById('wishlistItems');
const wishlistCount = document.getElementById('wishlistCount');

const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.getElementById('navMenu');

const featuredProducts = document.getElementById('featuredProducts');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    updateWishlistCount();
    loadFeaturedProducts();
    setupEventListeners();
    setupAnimations();
    setupScrollToTop();
});



// Event Listeners Setup
function setupEventListeners() {
    // Cart functionality
    cartBtn.addEventListener('click', toggleCart);
    closeCart.addEventListener('click', toggleCart);
    checkoutBtn.addEventListener('click', proceedToCheckout);

    // Wishlist functionality
    wishlistBtn.addEventListener('click', toggleWishlist);
    closeWishlist.addEventListener('click', toggleWishlist);

    // Search functionality
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    // Mobile menu
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);

    // Category cards
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', function() {
            const category = this.dataset.category;
            window.location.href = `shop.html?category=${category}`;
        });
    });

    // Close sidebars when clicking outside
    document.addEventListener('click', function(e) {
        if (!cartSidebar.contains(e.target) && !cartBtn.contains(e.target)) {
            cartSidebar.classList.remove('active');
        }
        if (!wishlistSidebar.contains(e.target) && !wishlistBtn.contains(e.target)) {
            wishlistSidebar.classList.remove('active');
        }
    });
}

// Cart Functions
function toggleCart() {
    cartSidebar.classList.toggle('active');
    if (cartSidebar.classList.contains('active')) {
        renderCart();
    }
}

function addToCart(productId, quantity = 1) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            ...product,
            quantity: quantity
        });
    }

    updateCartCount();
    saveCart();
    showNotification('Product added to cart!', 'success');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartCount();
    saveCart();
    renderCart();
    showNotification('Product removed from cart!', 'info');
}

function updateCartItemQuantity(productId, quantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        if (quantity <= 0) {
            removeFromCart(productId);
        } else {
            item.quantity = quantity;
            updateCartCount();
            saveCart();
            renderCart();
        }
    }
}

function renderCart() {
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
        cartTotal.textContent = 'රු0.00';
        return;
    }

    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <h4>${item.name}</h4>
                <p class="cart-item-price">රු${item.price.toLocaleString()}</p>
                <div class="cart-item-quantity">
                    <button class="quantity-btn minus" data-product-id="${item.id}" data-action="decrease">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn plus" data-product-id="${item.id}" data-action="increase">+</button>
                </div>
            </div>
            <button class="remove-cart-item" data-product-id="${item.id}">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `).join('');

    // Add event listeners for cart item buttons
    cartItems.querySelectorAll('.quantity-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent event bubbling
            const productId = parseInt(this.dataset.productId);
            const action = this.dataset.action;
            const item = cart.find(item => item.id === productId);
            
            if (item) {
                if (action === 'decrease') {
                    updateCartItemQuantity(productId, item.quantity - 1);
                } else if (action === 'increase') {
                    updateCartItemQuantity(productId, item.quantity + 1);
                }
            }
        });
    });

    cartItems.querySelectorAll('.remove-cart-item').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent event bubbling
            const productId = parseInt(this.dataset.productId);
            removeFromCart(productId);
        });
    });

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = `රු${total.toLocaleString()}`;
}

function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = count;
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Wishlist Functions
function toggleWishlist() {
    wishlistSidebar.classList.toggle('active');
    if (wishlistSidebar.classList.contains('active')) {
        renderWishlist();
    }
}

function addToWishlist(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    if (!wishlist.find(item => item.id === productId)) {
        wishlist.push(product);
        updateWishlistCount();
        saveWishlist();
        showNotification('Product added to wishlist!', 'success');
    } else {
        showNotification('Product already in wishlist!', 'info');
    }
}

function removeFromWishlist(productId) {
    wishlist = wishlist.filter(item => item.id !== productId);
    updateWishlistCount();
    saveWishlist();
    renderWishlist();
    showNotification('Product removed from wishlist!', 'info');
}

function renderWishlist() {
    if (wishlist.length === 0) {
        wishlistItems.innerHTML = '<p class="empty-wishlist">Your wishlist is empty</p>';
        return;
    }

    wishlistItems.innerHTML = wishlist.map(item => `
        <div class="wishlist-item">
            <img src="${item.image}" alt="${item.name}" class="wishlist-item-image">
            <div class="wishlist-item-details">
                <h4>${item.name}</h4>
                <p class="wishlist-item-price">රු${item.price.toLocaleString()}</p>
                <button class="add-to-cart-from-wishlist" data-product-id="${item.id}">
                    Add to Cart
                </button>
            </div>
            <button class="remove-wishlist-item" data-product-id="${item.id}">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `).join('');

    // Add event listeners for wishlist item buttons
    wishlistItems.querySelectorAll('.add-to-cart-from-wishlist').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent event bubbling
            const productId = parseInt(this.dataset.productId);
            addToCart(productId);
        });
    });

    wishlistItems.querySelectorAll('.remove-wishlist-item').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent event bubbling
            const productId = parseInt(this.dataset.productId);
            removeFromWishlist(productId);
        });
    });
}

function updateWishlistCount() {
    wishlistCount.textContent = wishlist.length;
}

function saveWishlist() {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
}

// Product Functions
function loadFeaturedProducts() {
    const featured = products.slice(0, 8); // Show first 8 products
    featuredProducts.innerHTML = featured.map(product => createProductCard(product)).join('');
    
    // Add event listeners for product card buttons
    featuredProducts.querySelectorAll('.wishlist-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const productId = parseInt(this.dataset.productId);
            addToWishlist(productId);
        });
    });

    featuredProducts.querySelectorAll('.quick-view-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const productId = parseInt(this.dataset.productId);
            quickView(productId);
        });
    });

    featuredProducts.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const productId = parseInt(this.dataset.productId);
            addToCart(productId);
        });
    });
}

function createProductCard(product) {
    const isInWishlist = wishlist.find(item => item.id === product.id);
    const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
    
    return `
        <div class="product-card" data-product-id="${product.id}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
                ${product.badge ? `<div class="product-badge">${product.badge} -${discount}%</div>` : ''}
                <div class="product-actions">
                    <button class="action-btn wishlist-btn" data-product-id="${product.id}" title="Add to Wishlist">
                        <i class="fas fa-heart ${isInWishlist ? 'text-danger' : ''}"></i>
                    </button>
                    <button class="action-btn quick-view-btn" data-product-id="${product.id}" title="Quick View">
                        <i class="fas fa-eye"></i>
                    </button>
                </div>
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <div class="product-rating">
                    <div class="stars">
                        ${generateStars(product.rating)}
                    </div>
                    <span class="rating-text">(${product.reviews})</span>
                </div>
                <div class="product-price">
                    <span class="current-price">රු${product.price.toLocaleString()}</span>
                    <span class="original-price">රු${product.originalPrice.toLocaleString()}</span>
                </div>
                <button class="add-to-cart" data-product-id="${product.id}">
                    Add to Cart
                </button>
            </div>
        </div>
    `;
}

function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    let stars = '';
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    return stars;
}

function quickView(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    // Create modal for quick view
    const modal = document.createElement('div');
    modal.className = 'quick-view-modal';
    modal.innerHTML = `
        <div class="modal-overlay">
            <div class="modal-content">
                <button class="close-modal">&times;</button>
                <div class="product-quick-view">
                    <div class="product-image">
                        <img src="${product.image}" alt="${product.name}">
                    </div>
                    <div class="product-details">
                        <h2>${product.name}</h2>
                        <div class="product-rating">
                            ${generateStars(product.rating)} (${product.reviews} reviews)
                        </div>
                        <p class="product-description">${product.description}</p>
                        <div class="product-price">
                            <span class="current-price">රු${product.price.toLocaleString()}</span>
                            <span class="original-price">රු${product.originalPrice.toLocaleString()}</span>
                        </div>
                        <div class="product-actions">
                            <button class="btn btn-primary modal-add-to-cart" data-product-id="${product.id}">
                                Add to Cart
                            </button>
                            <button class="btn btn-secondary modal-add-to-wishlist" data-product-id="${product.id}">
                                <i class="fas fa-heart"></i> Wishlist
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    
    // Add event listeners for modal buttons
    modal.querySelector('.modal-add-to-cart').addEventListener('click', function(e) {
        e.stopPropagation();
        const productId = parseInt(this.dataset.productId);
        addToCart(productId);
        document.body.removeChild(modal);
    });

    modal.querySelector('.modal-add-to-wishlist').addEventListener('click', function(e) {
        e.stopPropagation();
        const productId = parseInt(this.dataset.productId);
        addToWishlist(productId);
    });
    
    // Close modal functionality
    modal.querySelector('.close-modal').addEventListener('click', () => {
        document.body.removeChild(modal);
    });
    
    modal.querySelector('.modal-overlay').addEventListener('click', (e) => {
        if (e.target === modal.querySelector('.modal-overlay')) {
            document.body.removeChild(modal);
        }
    });
}

// Search Functions
function performSearch() {
    const query = searchInput.value.trim().toLowerCase();
    if (!query) return;

    const results = products.filter(product => 
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query)
    );

    if (results.length > 0) {
        // Store search results and redirect to shop page
        sessionStorage.setItem('searchResults', JSON.stringify(results));
        sessionStorage.setItem('searchQuery', query);
        window.location.href = 'shop.html';
    } else {
        showNotification('No products found for your search!', 'warning');
    }
}

// Mobile Menu Functions
function toggleMobileMenu() {
    mobileMenuBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
}

// Animation Functions
function setupAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.feature-card, .product-card, .category-card, .testimonial-card').forEach(el => {
        observer.observe(el);
    });
}

// Scroll to Top Function
function setupScrollToTop() {
    const scrollBtn = document.createElement('button');
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(scrollBtn);

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollBtn.classList.add('visible');
        } else {
            scrollBtn.classList.remove('visible');
        }
    });

    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Utility Functions
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${getNotificationIcon(type)}"></i>
            <span>${message}</span>
        </div>
    `;

    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

function getNotificationIcon(type) {
    switch (type) {
        case 'success': return 'check-circle';
        case 'error': return 'exclamation-circle';
        case 'warning': return 'exclamation-triangle';
        default: return 'info-circle';
    }
}

function proceedToCheckout() {
    if (cart.length === 0) {
        showNotification('Your cart is empty!', 'warning');
        return;
    }
    
    // Create WhatsApp message with cart details
    const whatsappMessage = createWhatsAppMessage();
    
    // WhatsApp API URL with the message
    const whatsappUrl = `https://wa.me/94772953138?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Redirect to WhatsApp
    window.open(whatsappUrl, '_blank');
    
    showNotification('Redirecting to WhatsApp...', 'success');
}

function createWhatsAppMessage() {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    let message = `🛒 *NEW ORDER*\n\n`;
    message += `Hello! I would like to place an order:\n\n`;
    
    // Add cart items
    cart.forEach((item, index) => {
        message += `${index + 1}. *${item.name}*\n`;
        message += `   Quantity: ${item.quantity}\n`;
        message += `   Price: රු${item.price.toLocaleString()}\n`;
        message += `   Subtotal: රු${(item.price * item.quantity).toLocaleString()}\n\n`;
    });
    
    message += `💰 *Total Amount: රු${total.toLocaleString()}*\n\n`;
    message += `Please provide:\n`;
    message += `• Delivery address\n`;
    message += `• Contact number\n`;
    message += `• Preferred delivery time\n\n`;
    message += `Thank you! 🙏`;
    
    return message;
}

// Add CSS for notifications and modals
const additionalStyles = `
    .notification {
        position: fixed;
        top: 20px;
        right: 20px;
        background: white;
        border-radius: 8px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        padding: 15px 20px;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    }

    .notification.show {
        transform: translateX(0);
    }

    .notification-success {
        border-left: 4px solid #28a745;
    }

    .notification-error {
        border-left: 4px solid #dc3545;
    }

    .notification-warning {
        border-left: 4px solid #ffc107;
    }

    .notification-info {
        border-left: 4px solid #17a2b8;
    }

    .notification-content {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .notification-content i {
        font-size: 18px;
    }

    .quick-view-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 10000;
    }

    .modal-overlay {
        background: rgba(0, 0, 0, 0.5);
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
    }

    .modal-content {
        background: white;
        border-radius: 15px;
        max-width: 800px;
        width: 100%;
        max-height: 90vh;
        overflow-y: auto;
        position: relative;
    }

    .close-modal {
        position: absolute;
        top: 15px;
        right: 15px;
        background: none;
        border: none;
        font-size: 24px;
        cursor: pointer;
        color: #666;
        z-index: 1;
    }

    .product-quick-view {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 30px;
        padding: 30px;
    }

    .product-quick-view .product-image img {
        width: 100%;
        height: 400px;
        object-fit: cover;
        border-radius: 10px;
    }

    .product-quick-view .product-details h2 {
        font-size: 24px;
        margin-bottom: 15px;
    }

    .product-quick-view .product-actions {
        display: flex;
        gap: 15px;
        margin-top: 20px;
    }

    .cart-item, .wishlist-item {
        display: flex;
        align-items: center;
        gap: 15px;
        padding: 15px 0;
        border-bottom: 1px solid #eee;
    }

    .cart-item-image, .wishlist-item-image {
        width: 60px;
        height: 60px;
        object-fit: cover;
        border-radius: 8px;
    }

    .cart-item-details, .wishlist-item-details {
        flex: 1;
    }

    .cart-item-details h4, .wishlist-item-details h4 {
        font-size: 14px;
        margin-bottom: 5px;
    }

    .cart-item-price, .wishlist-item-price {
        color: #667eea;
        font-weight: 600;
        margin-bottom: 5px;
    }

    .cart-item-quantity {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .cart-item-quantity button {
        width: 25px;
        height: 25px;
        border: 1px solid #ddd;
        background: white;
        border-radius: 4px;
        cursor: pointer;
    }

    .remove-cart-item, .remove-wishlist-item {
        background: none;
        border: none;
        color: #e74c3c;
        cursor: pointer;
        padding: 5px;
    }

    .add-to-cart-from-wishlist {
        background: #667eea;
        color: white;
        border: none;
        padding: 8px 12px;
        border-radius: 4px;
        cursor: pointer;
        font-size: 12px;
    }

    .empty-cart, .empty-wishlist {
        text-align: center;
        color: #666;
        padding: 40px 20px;
    }

    .text-danger {
        color: #e74c3c !important;
    }

    @media (max-width: 768px) {
        .product-quick-view {
            grid-template-columns: 1fr;
            gap: 20px;
            padding: 20px;
        }
    }
`;

// Inject additional styles
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);
