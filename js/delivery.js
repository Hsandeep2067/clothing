// Delivery Page Functionality
document.addEventListener('DOMContentLoaded', function() {
    setupTrackingForm();
    setupFAQAccordion();
    setupScrollAnimations();
    setupProcessSteps();
});

// Tracking Form Handling
function setupTrackingForm() {
    const trackingForm = document.getElementById('trackingForm');
    
    if (trackingForm) {
        trackingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleTrackingSubmission();
        });
    }
}

function handleTrackingSubmission() {
    const trackingNumber = document.getElementById('trackingNumber').value.trim();
    
    if (!trackingNumber) {
        showNotification('Please enter a tracking number', 'error');
        return;
    }
    
    // Validate tracking number format (STH-YYYY-XXXXXX)
    const trackingRegex = /^STH-\d{4}-\d{6}$/;
    if (!trackingRegex.test(trackingNumber)) {
        showNotification('Please enter a valid tracking number (e.g., STH-2024-001234)', 'error');
        return;
    }
    
    // Simulate tracking lookup
    const trackBtn = document.querySelector('.track-btn');
    const originalText = trackBtn.innerHTML;
    
    trackBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Tracking...';
    trackBtn.disabled = true;
    
    setTimeout(() => {
        // Simulate tracking result
        const trackingResult = simulateTrackingResult(trackingNumber);
        showTrackingResult(trackingResult);
        
        trackBtn.innerHTML = originalText;
        trackBtn.disabled = false;
    }, 2000);
}

function simulateTrackingResult(trackingNumber) {
    // Simulate different tracking states
    const states = [
        {
            status: 'Order Confirmed',
            location: 'Warehouse',
            description: 'Your order has been confirmed and is being prepared for shipping.',
            date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toLocaleDateString(),
            icon: 'fas fa-check-circle',
            color: '#28a745'
        },
        {
            status: 'Processing',
            location: 'Processing Center',
            description: 'Your order is being processed and quality checked.',
            date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toLocaleDateString(),
            icon: 'fas fa-cog',
            color: '#ffc107'
        },
        {
            status: 'In Transit',
            location: 'Colombo Distribution Center',
            description: 'Your package is on its way to your location.',
            date: new Date().toLocaleDateString(),
            icon: 'fas fa-truck',
            color: '#17a2b8'
        }
    ];
    
    return {
        trackingNumber: trackingNumber,
        estimatedDelivery: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toLocaleDateString(),
        currentStatus: states[2],
        history: states
    };
}

function showTrackingResult(result) {
    // Create tracking result modal
    const modal = document.createElement('div');
    modal.className = 'tracking-modal';
    modal.innerHTML = `
        <div class="tracking-modal-content">
            <div class="tracking-modal-header">
                <h3>Tracking Result</h3>
                <button class="close-modal-btn">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="tracking-info">
                <div class="tracking-number">
                    <strong>Tracking Number:</strong> ${result.trackingNumber}
                </div>
                <div class="estimated-delivery">
                    <strong>Estimated Delivery:</strong> ${result.estimatedDelivery}
                </div>
            </div>
            <div class="tracking-status">
                <div class="current-status">
                    <div class="status-icon" style="color: ${result.currentStatus.color}">
                        <i class="${result.currentStatus.icon}"></i>
                    </div>
                    <div class="status-details">
                        <h4>${result.currentStatus.status}</h4>
                        <p>${result.currentStatus.location}</p>
                        <p>${result.currentStatus.description}</p>
                        <small>${result.currentStatus.date}</small>
                    </div>
                </div>
            </div>
            <div class="tracking-history">
                <h4>Tracking History</h4>
                <div class="history-timeline">
                    ${result.history.map((item, index) => `
                        <div class="timeline-item ${index === result.history.length - 1 ? 'active' : ''}">
                            <div class="timeline-icon" style="color: ${item.color}">
                                <i class="${item.icon}"></i>
                            </div>
                            <div class="timeline-content">
                                <h5>${item.status}</h5>
                                <p>${item.location}</p>
                                <small>${item.date}</small>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
    
    // Add modal styles if not already present
    if (!document.getElementById('tracking-modal-styles')) {
        const styles = document.createElement('style');
        styles.id = 'tracking-modal-styles';
        styles.textContent = `
            .tracking-modal {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.5);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 10000;
                opacity: 0;
                transition: opacity 0.3s ease;
            }
            
            .tracking-modal.show {
                opacity: 1;
            }
            
            .tracking-modal-content {
                background: white;
                border-radius: 15px;
                max-width: 600px;
                width: 90%;
                max-height: 80vh;
                overflow-y: auto;
                transform: translateY(20px);
                transition: transform 0.3s ease;
            }
            
            .tracking-modal.show .tracking-modal-content {
                transform: translateY(0);
            }
            
            .tracking-modal-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 20px 25px;
                border-bottom: 1px solid #e1e5e9;
            }
            
            .tracking-modal-header h3 {
                margin: 0;
                color: #333;
            }
            
            .close-modal-btn {
                background: none;
                border: none;
                font-size: 20px;
                color: #666;
                cursor: pointer;
                padding: 5px;
                border-radius: 5px;
                transition: background-color 0.2s ease;
            }
            
            .close-modal-btn:hover {
                background-color: #f0f0f0;
            }
            
            .tracking-info {
                padding: 20px 25px;
                background: #f8f9fa;
            }
            
            .tracking-number,
            .estimated-delivery {
                margin-bottom: 10px;
            }
            
            .tracking-status {
                padding: 25px;
                border-bottom: 1px solid #e1e5e9;
            }
            
            .current-status {
                display: flex;
                align-items: flex-start;
                gap: 15px;
            }
            
            .status-icon {
                font-size: 24px;
                margin-top: 5px;
            }
            
            .status-details h4 {
                margin: 0 0 5px 0;
                color: #333;
            }
            
            .status-details p {
                margin: 0 0 5px 0;
                color: #666;
            }
            
            .status-details small {
                color: #999;
            }
            
            .tracking-history {
                padding: 25px;
            }
            
            .tracking-history h4 {
                margin: 0 0 20px 0;
                color: #333;
            }
            
            .history-timeline {
                position: relative;
            }
            
            .timeline-item {
                display: flex;
                align-items: flex-start;
                gap: 15px;
                margin-bottom: 20px;
                opacity: 0.6;
            }
            
            .timeline-item.active {
                opacity: 1;
            }
            
            .timeline-icon {
                font-size: 18px;
                margin-top: 2px;
            }
            
            .timeline-content h5 {
                margin: 0 0 5px 0;
                color: #333;
                font-size: 14px;
            }
            
            .timeline-content p {
                margin: 0 0 5px 0;
                color: #666;
                font-size: 13px;
            }
            
            .timeline-content small {
                color: #999;
                font-size: 12px;
            }
            
            @media (max-width: 768px) {
                .tracking-modal-content {
                    width: 95%;
                    margin: 20px;
                }
                
                .tracking-modal-header,
                .tracking-info,
                .tracking-status,
                .tracking-history {
                    padding: 15px 20px;
                }
            }
        `;
        document.head.appendChild(styles);
    }
    
    document.body.appendChild(modal);
    
    // Show modal
    setTimeout(() => modal.classList.add('show'), 100);
    
    // Close modal functionality
    const closeBtn = modal.querySelector('.close-modal-btn');
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('show');
        setTimeout(() => modal.remove(), 300);
    });
    
    // Close on outside click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
            setTimeout(() => modal.remove(), 300);
        }
    });
}

// FAQ Accordion (reused from contact.js)
function setupFAQAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        question.addEventListener('click', function() {
            const isActive = item.classList.contains('active');
            
            // Close all other FAQ items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    const otherAnswer = otherItem.querySelector('.faq-answer');
                    const otherIcon = otherItem.querySelector('.faq-question i');
                    otherAnswer.style.maxHeight = '0';
                    otherIcon.style.transform = 'rotate(0deg)';
                }
            });
            
            // Toggle current item
            if (isActive) {
                item.classList.remove('active');
                answer.style.maxHeight = '0';
                question.querySelector('i').style.transform = 'rotate(0deg)';
            } else {
                item.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + 'px';
                question.querySelector('i').style.transform = 'rotate(180deg)';
            }
        });
    });
}

// Process Steps Animation
function setupProcessSteps() {
    const processSteps = document.querySelectorAll('.process-step');
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
    });
    
    processSteps.forEach(step => observer.observe(step));
}

// Scroll Animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.shipping-card, .process-step, .area-category, .tracking-feature');
    animateElements.forEach(el => observer.observe(el));
}

// Enhanced notification function
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${getNotificationIcon(type)}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Add styles if not already present
    if (!document.getElementById('delivery-notification-styles')) {
        const styles = document.createElement('style');
        styles.id = 'delivery-notification-styles';
        styles.textContent = `
            .notification {
                position: fixed;
                top: 20px;
                right: 20px;
                background: white;
                border-radius: 8px;
                box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
                padding: 16px 20px;
                display: flex;
                align-items: center;
                gap: 12px;
                z-index: 10000;
                max-width: 400px;
                transform: translateX(100%);
                transition: transform 0.3s ease;
                border-left: 4px solid #667eea;
            }
            
            .notification.show {
                transform: translateX(0);
            }
            
            .notification-success {
                border-left-color: #28a745;
            }
            
            .notification-error {
                border-left-color: #dc3545;
            }
            
            .notification-info {
                border-left-color: #17a2b8;
            }
            
            .notification-content {
                display: flex;
                align-items: center;
                gap: 8px;
                flex: 1;
            }
            
            .notification-content i {
                font-size: 16px;
            }
            
            .notification-success .notification-content i {
                color: #28a745;
            }
            
            .notification-error .notification-content i {
                color: #dc3545;
            }
            
            .notification-info .notification-content i {
                color: #17a2b8;
            }
            
            .notification-close {
                background: none;
                border: none;
                color: #666;
                cursor: pointer;
                padding: 4px;
                border-radius: 4px;
                transition: background-color 0.2s ease;
            }
            
            .notification-close:hover {
                background-color: #f0f0f0;
            }
            
            @media (max-width: 768px) {
                .notification {
                    top: 10px;
                    right: 10px;
                    left: 10px;
                    max-width: none;
                    transform: translateY(-100%);
                }
                
                .notification.show {
                    transform: translateY(0);
                }
            }
        `;
        document.head.appendChild(styles);
    }
    
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => notification.classList.add('show'), 100);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

function getNotificationIcon(type) {
    switch (type) {
        case 'success':
            return 'fa-check-circle';
        case 'error':
            return 'fa-exclamation-circle';
        case 'info':
        default:
            return 'fa-info-circle';
    }
}

// Shipping card hover effects
document.addEventListener('DOMContentLoaded', function() {
    const shippingCards = document.querySelectorAll('.shipping-card');
    
    shippingCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// Process step hover effects
document.addEventListener('DOMContentLoaded', function() {
    const processSteps = document.querySelectorAll('.process-step');
    
    processSteps.forEach(step => {
        step.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        step.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});
