const chapters = [
    {
        id: 1,
        title: 'فصل اول - مقدمه ای بر فرآیندهای تولید در مقیاس وسیع',
        videoUrl: 'https://www.aparat.com/v/ctdp2u5',
        answersUrl: 'https://docs.google.com/document/d/1Xl0yC1-1h6eR8Uo-1g_f6a_5sH_wE9/edit?usp=sharing',
        filesUrl: 'https://drive.google.com/drive/folders/1S-3c-4wV_f0dG6h8vY_5g2a_8a7o4k?usp=sharing'
    },
    {
        id: 2,
        title: 'فصل دوم - زیرساخت‌های فرآیند بالادستی',
        videoUrl: 'https://www.aparat.com/v/XXXXX2',
        answersUrl: 'https://docs.google.com/document/d/1example2/edit?usp=sharing',
        filesUrl: 'https://drive.google.com/drive/folders/1example2?usp=sharing'
    },
    {
        id: 3,
        title: 'فصل سوم - طراحی و مهندسی بیوراکتور',
        videoUrl: 'https://www.aparat.com/v/XXXXX3',
        answersUrl: 'https://docs.google.com/document/d/1example3/edit?usp=sharing',
        filesUrl: 'https://drive.google.com/drive/folders/1example3?usp=sharing'
    },
    {
        id: 4,
        title: 'فصل چهارم - کنترل و نظارت فرآیند',
        videoUrl: 'https://www.aparat.com/v/XXXXX4',
        answersUrl: 'https://docs.google.com/document/d/1example4/edit?usp=sharing',
        filesUrl: 'https://drive.google.com/drive/folders/1example4?usp=sharing'
    },
    {
        id: 5,
        title: 'فصل پنجم - فرآیندهای جداسازی پایین‌دستی',
        videoUrl: 'https://www.aparat.com/v/XXXXX5',
        answersUrl: 'https://docs.google.com/document/d/1example5/edit?usp=sharing',
        filesUrl: 'https://drive.google.com/drive/folders/1example5?usp=sharing'
    },
    {
        id: 6,
        title: 'فصل ششم - خالص‌سازی محصول',
        videoUrl: 'https://www.aparat.com/v/XXXXX6',
        answersUrl: 'https://docs.google.com/document/d/1example6/edit?usp=sharing',
        filesUrl: 'https://drive.google.com/drive/folders/1example6?usp=sharing'
    },
    {
        id: 7,
        title: 'فصل هفتم - کنترل کیفیت و استاندارسازی',
        videoUrl: 'https://www.aparat.com/v/XXXXX7',
        answersUrl: 'https://docs.google.com/document/d/1example7/edit?usp=sharing',
        filesUrl: 'https://drive.google.com/drive/folders/1example7?usp=sharing'
    },
    {
        id: 8,
        title: 'فصل هشتم - اقتصاد فرآیند و مقیاس‌گذاری',
        videoUrl: 'https://www.aparat.com/v/XXXXX8',
        answersUrl: 'https://docs.google.com/document/d/1example8/edit?usp=sharing',
        filesUrl: 'https://drive.google.com/drive/folders/1example8?usp=sharing'
    },
    {
        id: 9,
        title: 'فصل نهم - ایمنی زیستی و مدیریت پسماند',
        videoUrl: 'https://www.aparat.com/v/XXXXX9',
        answersUrl: 'https://docs.google.com/document/d/1example9/edit?usp=sharing',
        filesUrl: 'https://drive.google.com/drive/folders/1example9?usp=sharing'
    },
    {
        id: 10,
        title: 'فصل دهم - آینده تولید زیستی',
        videoUrl: 'https://www.aparat.com/v/XXXXX10',
        answersUrl: 'https://docs.google.com/document/d/1example10/edit?usp=sharing',
        filesUrl: 'https://drive.google.com/drive/folders/1example10?usp=sharing'
    },
    {
        id: 11,
        title: 'پیوست الف - طراحی مهندسی بیوراکتور',
        videoUrl: 'https://www.aparat.com/v/XXXXX11',
        answersUrl: 'https://docs.google.com/document/d/1example11/edit?usp=sharing',
        filesUrl: 'https://drive.google.com/drive/folders/1example11?usp=sharing',
        isAppendix: true
    },
    {
        id: 12,
        title: 'پیوست ب - طراحی، ساخت و بهره‌برداری',
        videoUrl: 'https://www.aparat.com/v/XXXXX12',
        answersUrl: 'https://docs.google.com/document/d/1example12/edit?usp=sharing',
        filesUrl: 'https://drive.google.com/drive/folders/1example12?usp=sharing',
        isAppendix: true
    }
];

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    initializeMainPage();
});

function initializeMainPage() {
    const chapterCards = document.querySelectorAll('.chapter-card');
    const modal = document.getElementById('chapter-modal');
    const closeBtn = document.querySelector('.close-btn');
    
    // Add click event to chapter cards
    chapterCards.forEach(card => {
        card.addEventListener('click', function() {
            // Check if this is the references card
            if (this.classList.contains('references-card')) {
                window.location.href = 'references.html';
                return;
            }
            
            const chapterId = parseInt(this.dataset.chapter);
            if (chapterId) {
                openChapterModal(chapterId);
            }
        });
    });
    
    // Close modal events
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }
    
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
    }
    
    // Escape key to close modal
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

function openChapterModal(chapterId) {
    const chapter = chapters.find(ch => ch.id === chapterId);
    if (!chapter) return;
    
    const modal = document.getElementById('chapter-modal');
    const modalTitle = document.getElementById('modal-title');
    const videoBtn = document.getElementById('video-btn');
    const answersBtn = document.getElementById('answers-btn');
    const filesBtn = document.getElementById('files-btn');
    
    if (modalTitle) modalTitle.textContent = chapter.title;
    
    // Set up video button
    if (videoBtn) {
        videoBtn.onclick = function() {
            window.location.href = `chapter${chapterId}.html`;
        };
    }
    
    // Set up answer sheet link
    if (answersBtn && chapter.answersUrl) {
        answersBtn.href = chapter.answersUrl;
    }
    
    // Set up files link
    if (filesBtn && chapter.filesUrl) {
        filesBtn.href = chapter.filesUrl;
    }
    
    // Show modal with animation
    if (modal) {
        modal.classList.add('active');
        modal.style.display = 'flex';
    }
}

function closeModal() {
    const modal = document.getElementById('chapter-modal');
    if (modal) {
        modal.classList.remove('active');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    }
}

// Add smooth scroll behavior
function smoothScrollTo(element) {
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });
}

// Add loading animation
function showLoading(element) {
    element.innerHTML = `
        <div class="loading-spinner"></div>
        <p>در حال بارگذاری...</p>
    `;
}

// Preload images for better performance
function preloadImages() {
    chapters.forEach(chapter => {
        const img = new Image();
        img.src = `images/chapter${chapter.id}.jpg`;
    });
}

// Initialize preloading after page load
window.addEventListener('load', preloadImages);