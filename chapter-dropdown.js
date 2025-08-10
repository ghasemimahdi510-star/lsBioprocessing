// Chapter navigation data
const chapters = [
    { id: 1, title: 'فصل اول - مقدمه ای بر فرآیندهای تولید در مقیاس وسیع' },
    { id: 2, title: 'فصل دوم - زیرساخت‌های فرآیند بالادستی' },
    { id: 3, title: 'فصل سوم - طراحی و مهندسی بیوراکتور' },
    { id: 4, title: 'فصل چهارم - کنترل و نظارت فرآیند' },
    { id: 5, title: 'فصل پنجم - فرآیندهای جداسازی پایین‌دستی' },
    { id: 6, title: 'فصل ششم - خالص‌سازی محصول' },
    { id: 7, title: 'فصل هفتم - کنترل کیفیت و استاندارسازی' },
    { id: 8, title: 'فصل هشتم - اقتصاد فرآیند و مقیاس‌گذاری' },
    { id: 9, title: 'فصل نهم - ایمنی زیستی و مدیریت پسماند' },
    { id: 10, title: 'فصل دهم - آینده تولید زیستی' },
    { id: 11, title: 'پیوست الف - طراحی مهندسی بیوراکتور' },
    { id: 12, title: 'پیوست ب - طراحی، ساخت و بهره‌برداری' }
];

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing chapter dropdown...');
    initializeChapterDropdown();
    loadEmbeddedVideo();
    setupActionButtons();
});

// Initialize chapter dropdown
function initializeChapterDropdown() {
    const dropdownBtn = document.getElementById('chapters-dropdown-btn');
    const dropdownMenu = document.getElementById('chapters-dropdown-menu');
    
    if (!dropdownBtn || !dropdownMenu) {
        console.error('Dropdown elements not found');
        return;
    }
    
    // Clear existing menu
    dropdownMenu.innerHTML = '';
    
    // Create dropdown items
    chapters.forEach(chapter => {
        const item = document.createElement('a');
        item.href = `chapter${chapter.id}.html`;
        item.className = 'dropdown-item';
        item.textContent = chapter.title;
        
        // Highlight current chapter
        const currentPage = window.location.pathname.split('/').pop();
        if (currentPage === `chapter${chapter.id}.html`) {
            item.classList.add('current');
        }
        
        dropdownMenu.appendChild(item);
    });
    
    // Toggle dropdown on button click
    dropdownBtn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const isOpen = dropdownMenu.style.display === 'block';
        
        if (isOpen) {
            dropdownMenu.style.display = 'none';
            dropdownBtn.classList.remove('active');
        } else {
            dropdownMenu.style.display = 'block';
            dropdownBtn.classList.add('active');
        }
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!dropdownBtn.contains(e.target) && !dropdownMenu.contains(e.target)) {
            dropdownMenu.style.display = 'none';
            dropdownBtn.classList.remove('active');
        }
    });
    
    // Close dropdown on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            dropdownMenu.style.display = 'none';
            dropdownBtn.classList.remove('active');
        }
    });
}

// Load embedded video
function loadEmbeddedVideo() {
    const videoContainer = document.getElementById('video-container');
    if (!videoContainer) return;
    
    // Create embedded video HTML
    const videoHTML = `
        <style>
            .h_iframe-aparat_embed_frame{position:relative;}
            .h_iframe-aparat_embed_frame .ratio{display:block;width:100%;height:auto;}
            .h_iframe-aparat_embed_frame iframe{position:absolute;top:0;left:0;width:100%;height:100%;}
        </style>
        <div class="h_iframe-aparat_embed_frame">
            <span style="display: block;padding-top: 57%"></span>
            <iframe src="https://www.aparat.com/video/video/embed/videohash/mmwoxfg/vt/frame" allowFullScreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>
        </div>
    `;
    
    videoContainer.innerHTML = videoHTML;
}

// Setup action buttons
function setupActionButtons() {
    const buttons = ['aparat-btn', 'youtube-btn', 'download-btn'];
    
    buttons.forEach(buttonId => {
        const button = document.getElementById(buttonId);
        if (button) {
            button.href = 'https://google.com';
            button.addEventListener('click', function(e) {
                e.preventDefault();
                window.open('https://google.com', '_blank');
            });
        }
    });
}