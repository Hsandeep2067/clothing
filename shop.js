// Shop Page Functionality
let filteredProducts = [];
let currentPage = 1;
let productsPerPage = 12;
let currentView = 'grid';
let currentSort = 'default';

// Filter states
let selectedCategories = [];
let selectedRatings = [];
let selectedAvailability = [];
let priceRange = { min: 0, max: 5000 };

// Initialize shop page
document.addEventListener('DOMContentLoaded', function() {
    initializeShop();
    setupEventListeners();
    loadProducts();
});

function initializeShop() {
    // Check URL parameters for category filter
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    const search = urlParams.get('search');
    
    if (category) {
        selectedCategories = [category];
        // Check the corresponding checkbox
        const checkbox = document.querySelector(`input[value="${category}"]`);
        if (checkbox) checkbox.checked = true;
    }
    
    if (search) {
        document.getElementById('searchInput').value = search;
        performSearch(search);
    }
    
    // Initialize price range
    const priceRangeInput = document.getElementById('priceRange');
    const maxPriceInput = document.getElementById('maxPrice');
    
    priceRangeInput.addEventListener('input', function() {
        priceRange.max = parseInt(this.value);
        maxPriceInput.value = this.value;
        applyFilters();
    });
    
    maxPriceInput.addEventListener('input', function() {
        priceRange.max = parseInt(this.value) || 5000;
        priceRangeInput.value = this.value;
        applyFilters();
    });
    
    document.getElementById('minPrice').addEventListener('input', function() {
        priceRange.min = parseInt(this.value) || 0;
        applyFilters();
    });
}

function setupEventListeners() {
    // Category filters
    document.querySelectorAll('.category-filter').forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                selectedCategories.push(this.value);
            } else {
                selectedCategories = selectedCategories.filter(cat => cat !== this.value);
            }
            applyFilters();
        });
    });
    
    // Rating filters
    document.querySelectorAll('.rating-filter').forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                selectedRatings.push(parseInt(this.value));
            } else {
                selectedRatings = selectedRatings.filter(rating => rating !== parseInt(this.value));
            }
            applyFilters();
        });
    });
    
    // Availability filters
    document.querySelectorAll('.availability-filter').forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                selectedAvailability.push(this.value);
            } else {
                selectedAvailability = selectedAvailability.filter(avail => avail !== this.value);
            }
            applyFilters();
        });
    });
    
    // Clear filters
    document.getElementById('clearFiltersBtn').addEventListener('click', clearAllFilters);
    
    // Sort controls
    document.getElementById('sortSelect').addEventListener('change', function() {
        currentSort = this.value;
        applyFilters();
    });
    
    // View controls
    document.querySelectorAll('.view-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentView = this.dataset.view;
            updateProductsView();
        });
    });
    
    // Search functionality
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    
    searchBtn.addEventListener('click', function() {
        performSearch(searchInput.value);
    });
    
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch(this.value);
        }
    });
}

function loadProducts() {
    // Use the products array from script.js
    filteredProducts = [...products];
    applyFilters();
}

function applyFilters() {
    let filtered = [...products];
    
    // Apply category filter
    if (selectedCategories.length > 0) {
        filtered = filtered.filter(product => selectedCategories.includes(product.category));
    }
    
    // Apply price filter
    filtered = filtered.filter(product => 
        product.price >= priceRange.min && product.price <= priceRange.max
    );
    
    // Apply rating filter
    if (selectedRatings.length > 0) {
        filtered = filtered.filter(product => 
            selectedRatings.some(rating => product.rating >= rating)
        );
    }
    
    // Apply availability filter
    if (selectedAvailability.length > 0) {
        filtered = filtered.filter(product => {
            if (selectedAvailability.includes('sale')) {
                return product.originalPrice > product.price;
            }
            if (selectedAvailability.includes('new')) {
                return product.badge === 'New';
            }
            return true;
        });
    }
    
    // Apply sorting
    filtered = sortProducts(filtered, currentSort);
    
    filteredProducts = filtered;
    currentPage = 1;
    renderProducts();
    updateProductsCount();
}

function sortProducts(products, sortType) {
    const sorted = [...products];
    
    switch (sortType) {
        case 'price-low':
            return sorted.sort((a, b) => a.price - b.price);
        case 'price-high':
            return sorted.sort((a, b) => b.price - a.price);
        case 'rating':
            return sorted.sort((a, b) => b.rating - a.rating);
        case 'newest':
            return sorted.sort((a, b) => b.id - a.id);
        default:
            return sorted;
    }
}

function renderProducts() {
    const productsGrid = document.getElementById('productsGrid');
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const productsToShow = filteredProducts.slice(startIndex, endIndex);
    
    productsGrid.innerHTML = '';
    
    if (productsToShow.length === 0) {
        productsGrid.innerHTML = `
            <div class="no-products" style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;">
                <i class="fas fa-search" style="font-size: 48px; color: #ddd; margin-bottom: 20px;"></i>
                <h3>No products found</h3>
                <p>Try adjusting your filters or search terms</p>
                <button class="btn" onclick="clearAllFilters()">Clear All Filters</button>
            </div>
        `;
        return;
    }
    
    productsToShow.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
    
    updateProductsView();
    renderPagination();
}

function updateProductsView() {
    const productsGrid = document.getElementById('productsGrid');
    
    if (currentView === 'list') {
        productsGrid.classList.add('list-view');
    } else {
        productsGrid.classList.remove('list-view');
    }
}

function renderPagination() {
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    const paginationNumbers = document.getElementById('paginationNumbers');
    const prevBtn = document.getElementById('prevPageBtn');
    const nextBtn = document.getElementById('nextPageBtn');
    
    // Update prev/next buttons
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;
    
    // Clear existing pagination numbers
    paginationNumbers.innerHTML = '';
    
    if (totalPages <= 1) {
        return;
    }
    
    // Calculate range of page numbers to show
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, currentPage + 2);
    
    // Adjust range if we're near the edges
    if (currentPage <= 3) {
        endPage = Math.min(totalPages, 5);
    }
    if (currentPage >= totalPages - 2) {
        startPage = Math.max(1, totalPages - 4);
    }
    
    // Add page numbers
    for (let i = startPage; i <= endPage; i++) {
        const pageBtn = document.createElement('button');
        pageBtn.textContent = i;
        pageBtn.classList.toggle('active', i === currentPage);
        pageBtn.addEventListener('click', () => goToPage(i));
        paginationNumbers.appendChild(pageBtn);
    }
    
    // Add event listeners for prev/next buttons
    prevBtn.onclick = () => goToPage(currentPage - 1);
    nextBtn.onclick = () => goToPage(currentPage + 1);
}

function goToPage(page) {
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    if (page >= 1 && page <= totalPages) {
        currentPage = page;
        renderProducts();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function updateProductsCount() {
    const showingCount = Math.min(productsPerPage, filteredProducts.length - (currentPage - 1) * productsPerPage);
    const totalCount = filteredProducts.length;
    
    document.getElementById('showingCount').textContent = showingCount;
    document.getElementById('totalCount').textContent = totalCount;
}

function clearAllFilters() {
    // Clear category filters
    document.querySelectorAll('.category-filter').forEach(checkbox => {
        checkbox.checked = false;
    });
    selectedCategories = [];
    
    // Clear rating filters
    document.querySelectorAll('.rating-filter').forEach(checkbox => {
        checkbox.checked = false;
    });
    selectedRatings = [];
    
    // Clear availability filters
    document.querySelectorAll('.availability-filter').forEach(checkbox => {
        checkbox.checked = false;
    });
    selectedAvailability = [];
    
    // Reset price range
    document.getElementById('priceRange').value = 5000;
    document.getElementById('minPrice').value = '';
    document.getElementById('maxPrice').value = 5000;
    priceRange = { min: 0, max: 5000 };
    
    // Reset sort
    document.getElementById('sortSelect').value = 'default';
    currentSort = 'default';
    
    // Clear search
    document.getElementById('searchInput').value = '';
    
    // Apply filters
    applyFilters();
}

function performSearch(query) {
    if (!query.trim()) {
        applyFilters();
        return;
    }
    
    const searchTerm = query.toLowerCase();
    const searchResults = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm)
    );
    
    filteredProducts = searchResults;
    currentPage = 1;
    renderProducts();
    updateProductsCount();
    
    // Update URL with search parameter
    const url = new URL(window.location);
    url.searchParams.set('search', query);
    window.history.pushState({}, '', url);
}

// Enhanced product card creation for shop page
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.dataset.productId = product.id;
    
    const discount = product.originalPrice > product.price ? 
        Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;
    
    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}">
            ${product.badge ? `<span class="product-badge ${product.badge.toLowerCase()}">${product.badge}</span>` : ''}
            ${discount > 0 ? `<span class="discount-badge">-${discount}%</span>` : ''}
            <div class="product-overlay">
                <button class="quick-view-btn" onclick="quickView(${product.id})">
                    <i class="fas fa-eye"></i>
                </button>
                <button class="wishlist-btn" onclick="addToWishlist(${product.id})">
                    <i class="fas fa-heart"></i>
                </button>
            </div>
        </div>
        <div class="product-info">
            <h3 class="product-name">${product.name}</h3>
            <div class="product-rating">
                <div class="stars">
                    ${generateStars(product.rating)}
                </div>
                <span class="rating-text">(${product.reviews})</span>
            </div>
            <div class="product-price">
                <span class="current-price">Rs. ${product.price.toLocaleString()}</span>
                ${product.originalPrice > product.price ? 
                    `<span class="original-price">Rs. ${product.originalPrice.toLocaleString()}</span>` : ''}
            </div>
        </div>
        <div class="product-actions">
            <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                <i class="fas fa-shopping-cart"></i>
                Add to Cart
            </button>
        </div>
    `;
    
    return card;
}

// Generate star rating HTML
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    let starsHTML = '';
    
    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        starsHTML += '<i class="fas fa-star-half-alt"></i>';
    }
    
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<i class="far fa-star"></i>';
    }
    
    return starsHTML;
}
