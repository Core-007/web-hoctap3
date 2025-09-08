// Cập nhật ký tự trong textarea
document.addEventListener('DOMContentLoaded', function() {
    const messageTextarea = document.getElementById('message');
    if (messageTextarea) {
        const charCounter = messageTextarea.nextElementSibling;
        messageTextarea.addEventListener('input', function() {
            const charCount = this.value.length;
            charCounter.textContent = `${charCount}/500 ký tự`;
        });
    }
    
    // Xử lý active menu
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (currentPage === linkPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    // Xử lý form liên hệ
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Lấy dữ liệu từ form
            const formData = new FormData(this);
            const formObject = {};
            formData.forEach((value, key) => {
                formObject[key] = value;
            });
            
            // Ở đây bạn có thể thêm code để gửi dữ liệu đến server
            console.log('Form data:', formObject);
            
            // Hiển thị thông báo thành công
            alert('Cảm ơn bạn đã gửi liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể.');
            this.reset();
            
            // Reset character counter
            const charCounter = document.querySelector('.form-text');
            if (charCounter) {
                charCounter.textContent = '0/500 ký tự';
            }
        });
    }
    
    // Xử lý filter trên trang tài liệu
    const filterButtons = document.querySelectorAll('.filter-btn');
    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                const filter = this.getAttribute('data-filter');
                
                // Xóa active class từ tất cả buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Thêm active class cho button được click
                this.classList.add('active');
                
                // Lọc tài liệu
                filterMaterials(filter);
            });
        });
    }
});

// Hàm lọc tài liệu
function filterMaterials(filter) {
    const materials = document.querySelectorAll('.material-card');
    
    materials.forEach(material => {
        if (filter === 'all') {
            material.style.display = 'block';
        } else {
            const materialType = material.querySelector('.badge').textContent.toLowerCase();
            if (materialType.includes(filter)) {
                material.style.display = 'block';
            } else {
                material.style.display = 'none';
            }
        }
    });
}

// Hàm chia sẻ tài liệu
function shareMaterial(materialId, platform) {
    const url = `${window.location.origin}/materials.html?id=${materialId}`;
    let shareUrl;
    
    switch(platform) {
        case 'facebook':
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
            break;
        case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`;
            break;
        case 'linkedin':
            shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
            break;
        default:
            return;
    }
    
    window.open(shareUrl, '_blank', 'width=600,height=400');
}

// Hàm tải xuống tài liệu (mô phỏng)
function downloadMaterial(materialId, materialName) {
    // Hiển thị thông báo đang tải
    alert(`Đang tải xuống: ${materialName}`);
    
    // Trong thực tế, bạn sẽ chuyển hướng đến URL tải xuống thực
    // window.location.href = `/download/${materialId}`;
    
    // Tăng số lượt tải (trong giao diện)
    const downloadCount = document.querySelector(`[data-material="${materialId}"] .download-count`);
    if (downloadCount) {
        let count = parseInt(downloadCount.textContent);
        downloadCount.textContent = count + 1;
    }
}