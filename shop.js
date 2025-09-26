// Shop Page Functionality
let filteredProducts = [];
let currentPage = 1;
let productsPerPage = 12;
let currentView = 'grid';

// Filter states
let selectedCategories = [];
let selectedSubcategories = [];
let selectedRatings = [];
let selectedAvailability = [];
let priceRange = { min: 0, max: 5000 };

// Initialize shop page
document.addEventListener('DOMContentLoaded', function() {
    initializeShop();
    setupEventListeners();
    loadProducts();
    setupRandomGallery();
});

function initializeShop() {
    // Check URL parameters for category filter
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    const subcategory = urlParams.get('subcategory');
    const search = urlParams.get('search');
    
    if (category) {
        selectedCategories = [category];
        // Check the corresponding checkbox
        const checkbox = document.querySelector(`input[value="${category}"]`);
        if (checkbox) checkbox.checked = true;
        
        // Show vehicle subcategories if vehicles category is selected
        if (category === 'vehicles') {
            const vehicleSubcategories = document.getElementById('vehicleSubcategories');
            if (vehicleSubcategories) vehicleSubcategories.style.display = 'block';
        }
        
        // Show sports subcategories if sports category is selected
        if (category === 'sports') {
            const sportsSubcategories = document.getElementById('sportsSubcategories');
            if (sportsSubcategories) sportsSubcategories.style.display = 'block';
        }
        
        // Handle subcategory if specified
        if (subcategory) {
            selectedSubcategories = [subcategory];
            const subcategoryCheckbox = document.querySelector(`input[value="${subcategory}"]`);
            if (subcategoryCheckbox) subcategoryCheckbox.checked = true;
        }
        
        // Hide gallery since filter is applied
        hideRandomGallery();
    } else {
        // Show gallery initially if no category filter
        showRandomGallery();
    }
    
    if (search) {
        const searchInput = document.getElementById('searchInput');
        if (searchInput) searchInput.value = search;
        performSearch(search);
    }
    
    // Initialize price range (only if elements exist)
    const priceRangeInput = document.getElementById('priceRange');
    const maxPriceInput = document.getElementById('maxPrice');
    const minPriceInput = document.getElementById('minPrice');
    
    if (priceRangeInput && maxPriceInput) {
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
    }
    
    if (minPriceInput) {
        minPriceInput.addEventListener('input', function() {
            priceRange.min = parseInt(this.value) || 0;
            applyFilters();
        });
    }
}

function setupEventListeners() {
    // Category filters
    document.querySelectorAll('.category-filter').forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                selectedCategories.push(this.value);
                // Show subcategory options for vehicles
                if (this.value === 'vehicles') {
                    const vehicleSubcategories = document.getElementById('vehicleSubcategories');
                    if (vehicleSubcategories) vehicleSubcategories.style.display = 'block';
                }
                // Show subcategory options for sports
                if (this.value === 'sports') {
                    const sportsSubcategories = document.getElementById('sportsSubcategories');
                    if (sportsSubcategories) sportsSubcategories.style.display = 'block';
                }
            } else {
                selectedCategories = selectedCategories.filter(cat => cat !== this.value);
                // Hide subcategory options for vehicles and clear subcategory selections
                if (this.value === 'vehicles') {
                    const vehicleSubcategories = document.getElementById('vehicleSubcategories');
                    if (vehicleSubcategories) vehicleSubcategories.style.display = 'none';
                    // Clear vehicle subcategory selections
                    selectedSubcategories = selectedSubcategories.filter(sub => sub !== 'cars' && sub !== 'bikes');
                    document.querySelectorAll('.subcategory-filter[data-parent="vehicles"]').forEach(sub => {
                        sub.checked = false;
                    });
                }
                // Hide subcategory options for sports and clear subcategory selections
                if (this.value === 'sports') {
                    const sportsSubcategories = document.getElementById('sportsSubcategories');
                    if (sportsSubcategories) sportsSubcategories.style.display = 'none';
                    // Clear sports subcategory selections
                    selectedSubcategories = selectedSubcategories.filter(sub => sub !== 'wwe' && sub !== 'sporty');
                    document.querySelectorAll('.subcategory-filter[data-parent="sports"]').forEach(sub => {
                        sub.checked = false;
                    });
                }
            }
            applyFilters();
        });
    });
    
    // Subcategory filters
    document.querySelectorAll('.subcategory-filter').forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                selectedSubcategories.push(this.value);
            } else {
                selectedSubcategories = selectedSubcategories.filter(sub => sub !== this.value);
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
    
    // Cart and Wishlist functionality - get elements from script.js scope
    const cartBtn = document.getElementById('cartBtn');
    const cartSidebar = document.getElementById('cartSidebar');
    const closeCart = document.getElementById('closeCart');
    const checkoutBtn = document.getElementById('checkoutBtn');
    const wishlistBtn = document.getElementById('wishlistBtn');
    const wishlistSidebar = document.getElementById('wishlistSidebar');
    const closeWishlist = document.getElementById('closeWishlist');
    
    // Cart functionality - only if elements exist
    if (cartBtn && cartSidebar && closeCart && checkoutBtn) {
        console.log('Setting up cart event listeners in shop.js...');
        cartBtn.addEventListener('click', toggleCart);
        closeCart.addEventListener('click', toggleCart);
        checkoutBtn.addEventListener('click', proceedToCheckout);
    } else {
        console.log('Cart elements missing:', { cartBtn: !!cartBtn, cartSidebar: !!cartSidebar, closeCart: !!closeCart, checkoutBtn: !!checkoutBtn });
    }

    // Wishlist functionality - only if elements exist
    if (wishlistBtn && wishlistSidebar && closeWishlist) {
        console.log('Setting up wishlist event listeners in shop.js...');
        wishlistBtn.addEventListener('click', toggleWishlist);
        closeWishlist.addEventListener('click', toggleWishlist);
    } else {
        console.log('Wishlist elements missing:', { wishlistBtn: !!wishlistBtn, wishlistSidebar: !!wishlistSidebar, closeWishlist: !!closeWishlist });
    }
    
    // Close sidebars when clicking outside - only if elements exist
    if (cartSidebar || wishlistSidebar) {
        console.log('Setting up sidebar close event listeners in shop.js...');
        document.addEventListener('click', function(e) {
            if (cartSidebar && !cartSidebar.contains(e.target) && cartBtn && !cartBtn.contains(e.target)) {
                cartSidebar.classList.remove('active');
            }
            if (wishlistSidebar && !wishlistSidebar.contains(e.target) && wishlistBtn && !wishlistBtn.contains(e.target)) {
                wishlistSidebar.classList.remove('active');
            }
        });
    }
}

function loadProducts() {
    // Use the products array from script.js
    filteredProducts = [...products];
    applyFilters();
}

function applyFilters() {
    let filtered = [...products];
    let hasActiveFilters = false;
    
    // Apply category filter
    if (selectedCategories.length > 0) {
        filtered = filtered.filter(product => selectedCategories.includes(product.category));
        hasActiveFilters = true;
    }
    
    // Apply subcategory filter (only if categories are selected)
    if (selectedSubcategories.length > 0) {
        filtered = filtered.filter(product => {
            // Special handling for sports category
            if (selectedCategories.includes('sports')) {
                // If sports category is selected and WWE subcategory is selected, show only WWE products
                if (selectedSubcategories.includes('wwe') && product.subcategory === 'wwe') {
                    return product.category === 'sports' && product.subcategory === 'wwe';
                }
                // If sports category is selected and sporty subcategory is selected, show only sporty products
                if (selectedSubcategories.includes('sporty') && product.subcategory === 'sporty') {
                    return product.category === 'sports' && product.subcategory === 'sporty';
                }
                // If sports category is selected but no specific subcategory, show all sports products
                else if (!selectedSubcategories.includes('wwe') && !selectedSubcategories.includes('sporty')) {
                    return product.category === 'sports';
                }
                // If WWE subcategory is selected, only show WWE products
                else if (selectedSubcategories.includes('wwe')) {
                    return product.subcategory === 'wwe';
                }
                // If sporty subcategory is selected, only show sporty products
                else {
                    return product.subcategory === 'sporty';
                }
            }
            // For other categories with subcategories (like vehicles)
            else if (product.subcategory) {
                return selectedSubcategories.includes(product.subcategory);
            }
            // If product doesn't have subcategory but is in a category with subcategories, don't show it when subcategories are selected
            return false;
        });
        hasActiveFilters = true;
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
        hasActiveFilters = true;
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
        hasActiveFilters = true;
    }
    
    filteredProducts = filtered;
    currentPage = 1;
    renderProducts();
    updateProductsCount();
    
    // Show/hide random gallery based on filter state
    if (hasActiveFilters || selectedCategories.length > 0) {
        hideRandomGallery();
    } else {
        showRandomGallery();
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
    
    // Clear subcategory filters
    document.querySelectorAll('.subcategory-filter').forEach(checkbox => {
        checkbox.checked = false;
    });
    selectedSubcategories = [];
    
    // Hide vehicle subcategories
    const vehicleSubcategories = document.getElementById('vehicleSubcategories');
    if (vehicleSubcategories) vehicleSubcategories.style.display = 'none';
    
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
    
    // Reset price range (only if elements exist)
    const priceRangeInput = document.getElementById('priceRange');
    const minPriceInput = document.getElementById('minPrice');
    const maxPriceInput = document.getElementById('maxPrice');
    
    if (priceRangeInput) priceRangeInput.value = 5000;
    if (minPriceInput) minPriceInput.value = '';
    if (maxPriceInput) maxPriceInput.value = 5000;
    priceRange = { min: 0, max: 5000 };
    
    // Clear search
    const searchInput = document.getElementById('searchInput');
    if (searchInput) searchInput.value = '';
    
    // Apply filters
    applyFilters();
    
    // Show random gallery
    showRandomGallery();
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
    
    // Hide random gallery when searching
    hideRandomGallery();
    
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
    
    // Use size-based pricing if available, otherwise use default price
    const defaultSize = product.defaultSize || 'M';
    const currentPrice = product.sizes ? product.sizes[defaultSize].price : product.price;
    const currentOriginalPrice = product.sizes ? product.sizes[defaultSize].originalPrice : product.originalPrice;
    const discount = currentOriginalPrice > currentPrice ? 
        Math.round(((currentOriginalPrice - currentPrice) / currentOriginalPrice) * 100) : 0;
    
    // Create size dropdown options
    let sizeDropdownOptions = '';
    if (product.sizes) {
        Object.keys(product.sizes).forEach(size => {
            const selected = size === defaultSize ? 'selected' : '';
            sizeDropdownOptions += `<option value="${size}" ${selected}>${size}</option>`;
        });
    }
    
    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}" onclick="zoomImage('${product.image}', '${product.name}')" style="cursor: zoom-in;">
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
                <span class="stock-status">In Stock</span>
                ${product.sizes ? `
                <div class="size-dropdown-container">
                    <select class="size-dropdown" data-product-id="${product.id}">
                        ${sizeDropdownOptions}
                    </select>
                </div>
                ` : ''}
            </div>
            ${product.specifications ? `
            <div class="product-specs">
                <span class="spec-item">${product.specifications.style}</span>
                <span class="spec-item">${product.specifications.gender}</span>
                <span class="spec-item">${product.specifications.color}</span>
            </div>
            ` : ''}
            <div class="product-price">
                <span class="current-price" data-product-id="${product.id}">Rs. ${currentPrice.toLocaleString()}</span>
                ${currentOriginalPrice > currentPrice ? 
                    `<span class="original-price" data-product-id="${product.id}">Rs. ${currentOriginalPrice.toLocaleString()}</span>` : ''}
            </div>
        </div>
        <div class="product-actions">
            <button class="add-to-cart-btn" onclick="addToCartWithSize(${product.id})">
                <i class="fas fa-shopping-cart"></i>
                Add to Cart
            </button>
        </div>
    `;
    
    // Add event listener for size dropdown
    const sizeDropdown = card.querySelector('.size-dropdown');
    if (sizeDropdown) {
        sizeDropdown.addEventListener('change', function() {
            const selectedSize = this.value;
            const productId = parseInt(this.dataset.productId);
            
            // Update price
            updateProductPriceInShop(productId, selectedSize, card);
        });
    }
    
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

// Helper functions for size selection and cart functionality
function updateProductPriceInShop(productId, selectedSize, cardElement) {
    const product = products.find(p => p.id === productId);
    if (!product || !product.sizes) return;
    
    const sizeData = product.sizes[selectedSize];
    if (!sizeData) return;
    
    // Update price displays for this product card
    const currentPriceElement = cardElement.querySelector('.current-price');
    const originalPriceElement = cardElement.querySelector('.original-price');
    
    if (currentPriceElement) {
        currentPriceElement.textContent = `Rs. ${sizeData.price.toLocaleString()}`;
    }
    if (originalPriceElement) {
        originalPriceElement.textContent = `Rs. ${sizeData.originalPrice.toLocaleString()}`;
    }
}

function addToCartWithSize(productId) {
    const productCard = document.querySelector(`[data-product-id="${productId}"]`);
    const sizeDropdown = productCard ? productCard.querySelector('.size-dropdown') : null;
    const selectedSize = sizeDropdown ? sizeDropdown.value : null;
    
    // Use the addToCart function from script.js with size parameter
    if (typeof addToCart === 'function') {
        addToCart(productId, 1, selectedSize);
        
        // Show confirmation with size information
        const product = products.find(p => p.id === productId);
        if (product && selectedSize) {
            const sizeData = product.sizes[selectedSize];
            if (sizeData) {
                const message = `${product.name} (Size: ${selectedSize}) added to cart - Rs. ${sizeData.price.toLocaleString()}`;
                if (typeof showNotification === 'function') {
                    showNotification(message, 'success');
                }
            }
        }
    } else {
        console.error('addToCart function not found');
    }
}

// Image zoom functionality
function zoomImage(imageUrl, productName) {
    // Create zoom modal
    const zoomModal = document.createElement('div');
    zoomModal.className = 'image-zoom-modal';
    zoomModal.innerHTML = `
        <div class="zoom-modal-overlay" onclick="closeZoomModal(this.parentElement)">
            <div class="zoom-modal-content" onclick="event.stopPropagation()">
                <button class="close-zoom-btn" onclick="closeZoomModal(this.parentElement.parentElement.parentElement)">
                    <i class="fas fa-times"></i>
                </button>
                <img src="${imageUrl}" alt="${productName}" class="zoomed-image">
                <div class="zoom-image-title">${productName}</div>
            </div>
        </div>
    `;
    
    // Add modal to body
    document.body.appendChild(zoomModal);
    
    // Show modal with animation
    setTimeout(() => {
        zoomModal.classList.add('active');
    }, 10);
    
    // Close modal on Escape key
    document.addEventListener('keydown', function escapeHandler(e) {
        if (e.key === 'Escape') {
            closeZoomModal(zoomModal);
            document.removeEventListener('keydown', escapeHandler);
        }
    });
}

// Close zoom modal
function closeZoomModal(modal) {
    modal.classList.remove('active');
    setTimeout(() => {
        if (modal && modal.parentNode) {
            modal.parentNode.removeChild(modal);
        }
    }, 300);
}

// Random Gallery Setup
function setupRandomGallery() {
    const galleryTrack = document.getElementById('randomGalleryTrack');
    if (!galleryTrack) return;
    
    // Get random products for gallery display
    const randomProducts = getRandomProducts(12); // Display 12 random products
    
    // Create gallery items
    randomProducts.forEach(product => {
        const galleryItem = createGalleryItem(product);
        galleryTrack.appendChild(galleryItem);
    });
    
    // Duplicate items for seamless scrolling effect
    randomProducts.forEach(product => {
        const galleryItem = createGalleryItem(product);
        galleryTrack.appendChild(galleryItem);
    });
}

function getRandomProducts(count) {
    const shuffled = [...products].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function createGalleryItem(product) {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    
    // Calculate discount percentage
    const defaultSize = product.defaultSize || 'M';
    const currentPrice = product.sizes ? product.sizes[defaultSize].price : product.price;
    const currentOriginalPrice = product.sizes ? product.sizes[defaultSize].originalPrice : product.originalPrice;
    const discount = currentOriginalPrice > currentPrice ? 
        Math.round(((currentOriginalPrice - currentPrice) / currentOriginalPrice) * 100) : 0;
    
    item.innerHTML = `
        <img src="${product.image}" alt="${product.name}" onclick="zoomImage('${product.image}', '${product.name}')" style="cursor: zoom-in;">
        <div class="gallery-overlay">
            <h4>${product.name}</h4>
            <p>${product.category.toUpperCase()}</p>
            <div class="gallery-price">
                <span class="gallery-current-price">Rs. ${currentPrice.toLocaleString()}</span>
                ${discount > 0 ? `<span class="gallery-discount">-${discount}%</span>` : ''}
            </div>
            <button class="gallery-view-btn" onclick="quickView(${product.id})">
                <i class="fas fa-eye"></i> Quick View
            </button>
        </div>
        ${product.badge ? `<span class="gallery-badge ${product.badge.toLowerCase()}">${product.badge}</span>` : ''}
    `;
    
    return item;
}

// Function to hide gallery when filters are applied
function hideRandomGallery() {
    const gallery = document.getElementById('randomGallery');
    if (gallery) {
        gallery.style.display = 'none';
    }
}

// Function to show gallery when no filters are applied
function showRandomGallery() {
    const gallery = document.getElementById('randomGallery');
    if (gallery) {
        gallery.style.display = 'block';
    }
}
