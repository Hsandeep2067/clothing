// Admin Panel JavaScript
class AdminPanel {
    constructor() {
        this.products = [];
        this.categories = [];
        this.orders = [];
        this.currentSection = 'dashboard';
        this.init();
    }

    init() {
        this.loadData();
        this.setupEventListeners();
        this.loadDashboardStats();
        this.loadProducts();
        this.loadCategories();
        this.loadOrders();
    }

    // Load data from localStorage or initialize with default data
    loadData() {
        // Load products
        const savedProducts = localStorage.getItem('adminProducts');
        if (savedProducts) {
            this.products = JSON.parse(savedProducts);
        } else {
            // Initialize with existing products from script.js if available
            this.products = this.getExistingProducts();
            this.saveProducts();
        }

        // Load categories
        const savedCategories = localStorage.getItem('adminCategories');
        if (savedCategories) {
            this.categories = JSON.parse(savedCategories);
        } else {
            this.categories = [
                { id: 1, name: 'GAMES', description: 'Video game themed t-shirts', icon: 'fas fa-gamepad', productCount: 0 },
                { id: 2, name: 'SPORTS', description: 'Sports themed t-shirts', icon: 'fas fa-futbol', productCount: 0 },
                { id: 3, name: 'FILM & TVSERIES', description: 'Movie and TV show themed t-shirts', icon: 'fas fa-tv', productCount: 0 },
                { id: 4, name: 'MUSIC', description: 'Music themed t-shirts', icon: 'fas fa-music', productCount: 0 },
                { id: 5, name: 'VEHICLES', description: 'Vehicle themed t-shirts', icon: 'fas fa-car', productCount: 0 }
            ];
            this.saveCategories();
        }

        // Load orders
        const savedOrders = localStorage.getItem('adminOrders');
        if (savedOrders) {
            this.orders = JSON.parse(savedOrders);
        } else {
            this.orders = [];
            this.saveOrders();
        }

        // Update product counts for categories
        this.updateCategoryProductCounts();
    }

    // Get existing products from the main script.js file
    getExistingProducts() {
        // This would normally fetch from the main products array
        // For now, we'll create a sample structure
        return [
            {
                id: 1,
                name: "Mercedes-Benz C63 Vehicle T-Shirt",
                category: "vehicles",
                price: 2490,
                originalPrice: 2990,
                image: "images/vehicles/MERCEDES BENZ C63 - VR001.jpg",
                rating: 4.9,
                reviews: 52,
                badge: "New",
                description: "Performance-inspired C63 print for vehicle enthusiasts",
                stock: 50,
                status: "active"
            }
        ];
    }

    // Save data to localStorage
    saveProducts() {
        localStorage.setItem('adminProducts', JSON.stringify(this.products));
    }

    saveCategories() {
        localStorage.setItem('adminCategories', JSON.stringify(this.categories));
    }

    saveOrders() {
        localStorage.setItem('adminOrders', JSON.stringify(this.orders));
    }

    // Setup event listeners
    setupEventListeners() {
        // Navigation
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const section = item.dataset.section;
                this.showSection(section);
            });
        });

        // Logout
        document.getElementById('logoutBtn').addEventListener('click', () => {
            this.logout();
        });

        // Product form
        document.getElementById('addProductForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.addProduct();
        });

        // Category form
        document.getElementById('addCategoryForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.addCategory();
        });

        // Edit product form
        document.getElementById('editProductForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.updateProduct();
        });

        // Search and filters
        document.getElementById('searchProducts').addEventListener('input', (e) => {
            this.filterProducts();
        });

        document.getElementById('categoryFilter').addEventListener('change', () => {
            this.filterProducts();
        });

        // Image preview
        document.getElementById('productImage').addEventListener('change', (e) => {
            this.previewImage(e.target, 'imagePreview');
        });

        document.getElementById('editProductImage').addEventListener('change', (e) => {
            this.previewImage(e.target, 'editImagePreview');
        });
    }

    // Show different sections
    showSection(sectionName) {
        // Hide all sections
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.remove('active');
        });

        // Remove active class from all nav items
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
        });

        // Show selected section
        document.getElementById(sectionName).classList.add('active');

        // Add active class to nav item
        document.querySelector(`[data-section="${sectionName}"]`).classList.add('active');

        this.currentSection = sectionName;

        // Load section-specific data
        switch (sectionName) {
            case 'dashboard':
                this.loadDashboardStats();
                break;
            case 'products':
                this.loadProducts();
                break;
            case 'categories':
                this.loadCategories();
                break;
            case 'orders':
                this.loadOrders();
                break;
        }
    }

    // Dashboard functionality
    loadDashboardStats() {
        const totalProducts = this.products.length;
        const totalOrders = this.orders.length;
        const totalCustomers = this.getUniqueCustomers();
        const totalRevenue = this.calculateTotalRevenue();

        document.getElementById('totalProducts').textContent = totalProducts;
        document.getElementById('totalOrders').textContent = totalOrders;
        document.getElementById('totalCustomers').textContent = totalCustomers;
        document.getElementById('totalRevenue').textContent = `රු${totalRevenue.toLocaleString()}`;
    }

    getUniqueCustomers() {
        const customers = new Set(this.orders.map(order => order.customerId));
        return customers.size;
    }

    calculateTotalRevenue() {
        return this.orders.reduce((total, order) => total + order.total, 0);
    }

    // Product management
    loadProducts() {
        const tbody = document.getElementById('productsTableBody');
        if (!tbody) return;

        tbody.innerHTML = this.products.map(product => `
            <tr>
                <td class="product-image-cell">
                    <img src="${product.image}" alt="${product.name}">
                </td>
                <td>
                    <strong>${product.name}</strong>
                    <br><small>${product.description}</small>
                </td>
                <td>
                    <span class="category-badge">${product.category.toUpperCase()}</span>
                </td>
                <td>
                    <strong>රු${product.price.toLocaleString()}</strong>
                    ${product.originalPrice > product.price ? `<br><small class="original-price">රු${product.originalPrice.toLocaleString()}</small>` : ''}
                </td>
                <td>
                    <span class="stock-badge ${product.stock > 10 ? 'in-stock' : product.stock > 0 ? 'low-stock' : 'out-of-stock'}">
                        ${product.stock}
                    </span>
                </td>
                <td>
                    <span class="status-badge ${product.status}">${product.status}</span>
                </td>
                <td>
                    <div class="product-actions">
                        <button class="btn btn-sm btn-primary" onclick="adminPanel.editProduct(${product.id})">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="btn btn-sm btn-danger" onclick="adminPanel.deleteProduct(${product.id})">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `).join('');
    }

    addProduct() {
        const formData = new FormData(document.getElementById('addProductForm'));
        
        const product = {
            id: Date.now(),
            name: formData.get('productName') || document.getElementById('productName').value,
            category: formData.get('productCategory') || document.getElementById('productCategory').value,
            price: parseInt(document.getElementById('productPrice').value),
            originalPrice: parseInt(document.getElementById('productOriginalPrice').value) || parseInt(document.getElementById('productPrice').value),
            rating: parseFloat(document.getElementById('productRating').value) || 0,
            reviews: parseInt(document.getElementById('productReviews').value) || 0,
            description: document.getElementById('productDescription').value || '',
            badge: document.getElementById('productBadge').value || '',
            stock: 50, // Default stock
            status: 'active',
            image: this.handleImageUpload(document.getElementById('productImage').files[0])
        };

        this.products.push(product);
        this.saveProducts();
        this.updateCategoryProductCounts();
        this.loadProducts();
        this.loadDashboardStats();
        
        this.showNotification('Product added successfully!', 'success');
        this.closeModal('addProductModal');
        this.resetForm('addProductForm');
    }

    editProduct(productId) {
        const product = this.products.find(p => p.id === productId);
        if (!product) return;

        // Populate edit form
        document.getElementById('editProductId').value = product.id;
        document.getElementById('editProductName').value = product.name;
        document.getElementById('editProductCategory').value = product.category;
        document.getElementById('editProductPrice').value = product.price;
        document.getElementById('editProductOriginalPrice').value = product.originalPrice;
        document.getElementById('editProductRating').value = product.rating;
        document.getElementById('editProductReviews').value = product.reviews;
        document.getElementById('editProductDescription').value = product.description;
        document.getElementById('editProductBadge').value = product.badge;

        // Show current image
        const imagePreview = document.getElementById('editImagePreview');
        imagePreview.innerHTML = `<img src="${product.image}" alt="${product.name}">`;

        this.showModal('editProductModal');
    }

    updateProduct() {
        const productId = parseInt(document.getElementById('editProductId').value);
        const productIndex = this.products.findIndex(p => p.id === productId);
        
        if (productIndex === -1) return;

        const updatedProduct = {
            ...this.products[productIndex],
            name: document.getElementById('editProductName').value,
            category: document.getElementById('editProductCategory').value,
            price: parseInt(document.getElementById('editProductPrice').value),
            originalPrice: parseInt(document.getElementById('editProductOriginalPrice').value),
            rating: parseFloat(document.getElementById('editProductRating').value),
            reviews: parseInt(document.getElementById('editProductReviews').value),
            description: document.getElementById('editProductDescription').value,
            badge: document.getElementById('editProductBadge').value
        };

        // Handle new image if uploaded
        const newImage = document.getElementById('editProductImage').files[0];
        if (newImage) {
            updatedProduct.image = this.handleImageUpload(newImage);
        }

        this.products[productIndex] = updatedProduct;
        this.saveProducts();
        this.updateCategoryProductCounts();
        this.loadProducts();
        this.loadDashboardStats();
        
        this.showNotification('Product updated successfully!', 'success');
        this.closeModal('editProductModal');
    }

    deleteProduct(productId) {
        if (confirm('Are you sure you want to delete this product?')) {
            this.products = this.products.filter(p => p.id !== productId);
            this.saveProducts();
            this.updateCategoryProductCounts();
            this.loadProducts();
            this.loadDashboardStats();
            
            this.showNotification('Product deleted successfully!', 'success');
        }
    }

    // Category management
    loadCategories() {
        const grid = document.getElementById('categoriesGrid');
        if (!grid) return;

        grid.innerHTML = this.categories.map(category => `
            <div class="category-card">
                <div class="category-header">
                    <div class="category-icon">
                        <i class="${category.icon}"></i>
                    </div>
                    <div class="category-info">
                        <h3>${category.name}</h3>
                        <p>${category.description}</p>
                        <small>${category.productCount} products</small>
                    </div>
                </div>
                <div class="category-actions">
                    <button class="btn btn-sm btn-primary" onclick="adminPanel.editCategory(${category.id})">
                        <i class="fas fa-edit"></i> Edit
                    </button>
                    <button class="btn btn-sm btn-danger" onclick="adminPanel.deleteCategory(${category.id})">
                        <i class="fas fa-trash"></i> Delete
                    </button>
                </div>
            </div>
        `).join('');
    }

    addCategory() {
        const name = document.getElementById('categoryName').value;
        const description = document.getElementById('categoryDescription').value;
        const icon = document.getElementById('categoryIcon').value;

        if (!name) {
            this.showNotification('Category name is required!', 'error');
            return;
        }

        const category = {
            id: Date.now(),
            name: name.toUpperCase(),
            description: description || '',
            icon: icon,
            productCount: 0
        };

        this.categories.push(category);
        this.saveCategories();
        this.loadCategories();
        
        this.showNotification('Category added successfully!', 'success');
        this.closeModal('addCategoryModal');
        this.resetForm('addCategoryForm');
    }

    editCategory(categoryId) {
        // Implementation for editing categories
        this.showNotification('Category editing feature coming soon!', 'info');
    }

    deleteCategory(categoryId) {
        const category = this.categories.find(c => c.id === categoryId);
        if (category.productCount > 0) {
            this.showNotification(`Cannot delete category with ${category.productCount} products!`, 'error');
            return;
        }

        if (confirm('Are you sure you want to delete this category?')) {
            this.categories = this.categories.filter(c => c.id !== categoryId);
            this.saveCategories();
            this.loadCategories();
            
            this.showNotification('Category deleted successfully!', 'success');
        }
    }

    // Order management
    loadOrders() {
        const tbody = document.getElementById('ordersTableBody');
        if (!tbody) return;

        if (this.orders.length === 0) {
            tbody.innerHTML = `
                <tr>
                    <td colspan="7" style="text-align: center; padding: 40px;">
                        <i class="fas fa-shopping-cart" style="font-size: 48px; color: #ccc; margin-bottom: 15px;"></i>
                        <p>No orders yet</p>
                    </td>
                </tr>
            `;
            return;
        }

        tbody.innerHTML = this.orders.map(order => `
            <tr>
                <td><strong>#${order.id}</strong></td>
                <td>${order.customerName}</td>
                <td>${order.items.length} items</td>
                <td><strong>රු${order.total.toLocaleString()}</strong></td>
                <td>
                    <span class="status-badge ${order.status}">${order.status}</span>
                </td>
                <td>${new Date(order.date).toLocaleDateString()}</td>
                <td>
                    <button class="btn btn-sm btn-primary" onclick="adminPanel.viewOrder(${order.id})">
                        <i class="fas fa-eye"></i>
                    </button>
                </td>
            </tr>
        `).join('');
    }

    viewOrder(orderId) {
        // Implementation for viewing order details
        this.showNotification('Order details feature coming soon!', 'info');
    }

    // Utility functions
    updateCategoryProductCounts() {
        this.categories.forEach(category => {
            category.productCount = this.products.filter(p => p.category === category.name.toLowerCase()).length;
        });
        this.saveCategories();
    }

    filterProducts() {
        const searchTerm = document.getElementById('searchProducts').value.toLowerCase();
        const categoryFilter = document.getElementById('categoryFilter').value;

        const filteredProducts = this.products.filter(product => {
            const matchesSearch = product.name.toLowerCase().includes(searchTerm) ||
                                product.description.toLowerCase().includes(searchTerm);
            const matchesCategory = !categoryFilter || product.category === categoryFilter;
            
            return matchesSearch && matchesCategory;
        });

        this.displayFilteredProducts(filteredProducts);
    }

    displayFilteredProducts(products) {
        const tbody = document.getElementById('productsTableBody');
        if (!tbody) return;

        if (products.length === 0) {
            tbody.innerHTML = `
                <tr>
                    <td colspan="7" style="text-align: center; padding: 40px;">
                        <i class="fas fa-search" style="font-size: 48px; color: #ccc; margin-bottom: 15px;"></i>
                        <p>No products found</p>
                    </td>
                </tr>
            `;
            return;
        }

        tbody.innerHTML = products.map(product => `
            <tr>
                <td class="product-image-cell">
                    <img src="${product.image}" alt="${product.name}">
                </td>
                <td>
                    <strong>${product.name}</strong>
                    <br><small>${product.description}</small>
                </td>
                <td>
                    <span class="category-badge">${product.category.toUpperCase()}</span>
                </td>
                <td>
                    <strong>රු${product.price.toLocaleString()}</strong>
                    ${product.originalPrice > product.price ? `<br><small class="original-price">රු${product.originalPrice.toLocaleString()}</small>` : ''}
                </td>
                <td>
                    <span class="stock-badge ${product.stock > 10 ? 'in-stock' : product.stock > 0 ? 'low-stock' : 'out-of-stock'}">
                        ${product.stock}
                    </span>
                </td>
                <td>
                    <span class="status-badge ${product.status}">${product.status}</span>
                </td>
                <td>
                    <div class="product-actions">
                        <button class="btn btn-sm btn-primary" onclick="adminPanel.editProduct(${product.id})">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="btn btn-sm btn-danger" onclick="adminPanel.deleteProduct(${product.id})">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `).join('');
    }

    handleImageUpload(file) {
        if (!file) return '';
        
        // In a real application, you would upload the file to a server
        // For now, we'll create a local URL
        return URL.createObjectURL(file);
    }

    previewImage(input, previewId) {
        const preview = document.getElementById(previewId);
        const file = input.files[0];
        
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                preview.innerHTML = `<img src="${e.target.result}" alt="Preview">`;
            };
            reader.readAsDataURL(file);
        }
    }

    // Modal functions
    showModal(modalId) {
        document.getElementById(modalId).classList.add('active');
    }

    closeModal(modalId) {
        document.getElementById(modalId).classList.remove('active');
    }

    resetForm(formId) {
        document.getElementById(formId).reset();
        document.getElementById('imagePreview').innerHTML = '';
        document.getElementById('editImagePreview').innerHTML = '';
    }

    // Notification system
    showNotification(message, type = 'info') {
        const container = document.getElementById('notificationContainer');
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        
        const icon = this.getNotificationIcon(type);
        
        notification.innerHTML = `
            <i class="notification-icon ${icon}"></i>
            <div class="notification-message">${message}</div>
        `;
        
        container.appendChild(notification);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            notification.remove();
        }, 5000);
    }

    getNotificationIcon(type) {
        switch (type) {
            case 'success': return 'fas fa-check-circle';
            case 'error': return 'fas fa-exclamation-circle';
            case 'warning': return 'fas fa-exclamation-triangle';
            default: return 'fas fa-info-circle';
        }
    }

    // Export functionality
    exportProducts() {
        const dataStr = JSON.stringify(this.products, null, 2);
        const dataBlob = new Blob([dataStr], {type: 'application/json'});
        
        const link = document.createElement('a');
        link.href = URL.createObjectURL(dataBlob);
        link.download = 'nexra-products.json';
        link.click();
        
        this.showNotification('Products exported successfully!', 'success');
    }

    // Settings
    saveSettings() {
        const settings = {
            storeName: document.getElementById('storeName').value,
            storeEmail: document.getElementById('storeEmail').value,
            storePhone: document.getElementById('storePhone').value,
            currency: document.getElementById('currency').value
        };
        
        localStorage.setItem('adminSettings', JSON.stringify(settings));
        this.showNotification('Settings saved successfully!', 'success');
    }

    loadSettings() {
        const savedSettings = localStorage.getItem('adminSettings');
        if (savedSettings) {
            const settings = JSON.parse(savedSettings);
            document.getElementById('storeName').value = settings.storeName || 'NEXTRA';
            document.getElementById('storeEmail').value = settings.storeEmail || 'admin@nexra.com';
            document.getElementById('storePhone').value = settings.storePhone || '077 295 3138';
            document.getElementById('currency').value = settings.currency || 'LKR';
        }
    }

    // Logout
    logout() {
        if (confirm('Are you sure you want to logout?')) {
            AdminLogin.logout();
        }
    }
}

// Global functions for onclick handlers
function showAddProductModal() {
    adminPanel.showModal('addProductModal');
}

function showAddCategoryModal() {
    adminPanel.showModal('addCategoryModal');
}

function closeModal(modalId) {
    adminPanel.closeModal(modalId);
}

function exportProducts() {
    adminPanel.exportProducts();
}

function saveSettings() {
    adminPanel.saveSettings();
}

// Initialize admin panel when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Check authentication first
    if (!AdminLogin.isAuthenticated()) {
        window.location.href = 'admin-login.html';
        return;
    }
    
    window.adminPanel = new AdminPanel();
    
    // Load settings
    adminPanel.loadSettings();
    
    // Add some sample data for demonstration
    if (adminPanel.products.length === 0) {
        adminPanel.products = [
            {
                id: 1,
                name: "Mercedes-Benz C63 Vehicle T-Shirt",
                category: "vehicles",
                price: 2490,
                originalPrice: 2990,
                image: "images/vehicles/MERCEDES BENZ C63 - VR001.jpg",
                rating: 4.9,
                reviews: 52,
                badge: "New",
                description: "Performance-inspired C63 print for vehicle enthusiasts",
                stock: 50,
                status: "active"
            },
            {
                id: 2,
                name: "Call of Duty Ghosts Game T-Shirt",
                category: "games",
                price: 2490,
                originalPrice: 2990,
                image: "images/games/Call of Duty Ghosts - VR001.jpg",
                rating: 4.8,
                reviews: 67,
                badge: "New",
                description: "Gaming excellence in comfortable wear",
                stock: 45,
                status: "active"
            }
        ];
        adminPanel.saveProducts();
        adminPanel.updateCategoryProductCounts();
    }
    
    // Add some sample orders for demonstration
    if (adminPanel.orders.length === 0) {
        adminPanel.orders = [
            {
                id: 1,
                customerName: "John Doe",
                customerId: "CUST001",
                items: [
                    { productId: 1, name: "Mercedes-Benz C63 Vehicle T-Shirt", quantity: 2, price: 2490 }
                ],
                total: 4980,
                status: "completed",
                date: new Date().toISOString()
            }
        ];
        adminPanel.saveOrders();
    }
    
    // Refresh displays
    adminPanel.loadProducts();
    adminPanel.loadCategories();
    adminPanel.loadOrders();
    adminPanel.loadDashboardStats();
});

// Add CSS for additional styling
const additionalStyles = `
    .category-badge {
        background: #e3f2fd;
        color: #1976d2;
        padding: 4px 8px;
        border-radius: 12px;
        font-size: 12px;
        font-weight: 500;
    }
    
    .stock-badge {
        padding: 4px 8px;
        border-radius: 12px;
        font-size: 12px;
        font-weight: 500;
    }
    
    .stock-badge.in-stock {
        background: #e8f5e8;
        color: #2e7d32;
    }
    
    .stock-badge.low-stock {
        background: #fff3e0;
        color: #f57c00;
    }
    
    .stock-badge.out-of-stock {
        background: #ffebee;
        color: #c62828;
    }
    
    .status-badge {
        padding: 4px 8px;
        border-radius: 12px;
        font-size: 12px;
        font-weight: 500;
        text-transform: capitalize;
    }
    
    .status-badge.active {
        background: #e8f5e8;
        color: #2e7d32;
    }
    
    .status-badge.inactive {
        background: #ffebee;
        color: #c62828;
    }
    
    .status-badge.completed {
        background: #e8f5e8;
        color: #2e7d32;
    }
    
    .status-badge.pending {
        background: #fff3e0;
        color: #f57c00;
    }
    
    .original-price {
        text-decoration: line-through;
        color: #999;
    }
`;

// Inject additional styles
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);
