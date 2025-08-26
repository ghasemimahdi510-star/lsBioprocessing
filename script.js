// Data for all chapters and appendices
const chapters = [
    { id: '1', title: 'فصل اول - مقدمه ای بر فرآیندهای تولید در مقیاس وسیع', answersUrl: 'https://drive.google.com/drive/folders/1odDoVm3mFc4jz6wazkdK25fa1Q2Np00p?usp=sharing', filesUrl: 'https://drive.google.com/drive/folders/1D0UNrqHW2mNsOBZ_ZN-pucEYaD5sp1UY?usp=drive_link' },
    { id: '2', title: 'فصل دوم - زیرساخت‌های فرآیند بالادستی: از سویه تا محیط کشت', answersUrl: 'https://drive.google.com/drive/folders/1odDoVm3mFc4jz6wazkdK25fa1Q2Np00p?usp=sharing', filesUrl: 'https://drive.google.com/drive/folders/1_qhrt4PvSvpMTte_5mI0aHTx2FnxtZUY?usp=drive_link' },
    { id: '3', title: 'فصل سوم - قلب فرآیند : بیوراکتور و طراحی آن در مقیاس صنعتی', answersUrl: 'https://drive.google.com/drive/folders/1odDoVm3mFc4jz6wazkdK25fa1Q2Np00p?usp=sharing', filesUrl: 'https://drive.google.com/drive/folders/1k-U-vsg1qNvdcJO50khXrWLLYd2gHeiy?usp=drive_link' },
    { id: '4', title: 'فصل چهارم - کنترل فرآیند زیستی؛ چگونه یک بیوراکتور را زنده نگه داریم؟', answersUrl: 'https://drive.google.com/drive/folders/1odDoVm3mFc4jz6wazkdK25fa1Q2Np00p?usp=sharing', filesUrl: 'https://drive.google.com/drive/folders/1pxkTD0aQ8AOxLImMmNcsiWqMIy_jY1PL?usp=drive_link' },
    { id: '5', title: 'فصل پنجم - عملیات پایین‌دستی ، از جداسازی تا خالص‌سازی', answersUrl: 'https://drive.google.com/drive/folders/1odDoVm3mFc4jz6wazkdK25fa1Q2Np00p?usp=sharing', filesUrl: 'https://drive.google.com/drive/folders/1slC2POV-Ez9vtiLPi9ZsHWLwOhqqu-Bm?usp=drive_link' },
    { id: '6', title: 'فصل ششم - پایدارسازی، خشک‌سازی و نگهداری محصولات', answersUrl: 'https://drive.google.com/drive/folders/1odDoVm3mFc4jz6wazkdK25fa1Q2Np00p?usp=sharing', filesUrl: 'https://drive.google.com/drive/folders/1lZzJXkNY0O_XQhzyp4kjrwuvANbI54J6?usp=drive_link' },
    { id: '7', title: 'فصل هفتم - تضمین کیفیت، اعتبارسنجی و GMP در تولید زیستی ', answersUrl: 'https://drive.google.com/drive/folders/1odDoVm3mFc4jz6wazkdK25fa1Q2Np00p?usp=sharing', filesUrl: 'https://drive.google.com/drive/folders/1kzlLcMeNz_1X0r_GNA-YTMOfMlRCiUBo?usp=drive_link' },
    { id: '8', title: 'فصل هشتم - فناوری‌ های نوین واکسن سازی در مقیاس صنعتی', answersUrl: 'https://drive.google.com/drive/folders/1odDoVm3mFc4jz6wazkdK25fa1Q2Np00p?usp=sharing', filesUrl: 'https://drive.google.com/drive/folders/1iigaxUgCZfUsHYBJRjApHDfGkyBPn0kv?usp=drive_link' },
    { id: '9', title: 'فصل نهم - ایمنی زیستی و مدیریت پسماند در فرآیندهای زیستی صنعتی', answersUrl: 'https://drive.google.com/drive/folders/1odDoVm3mFc4jz6wazkdK25fa1Q2Np00p?usp=sharing', filesUrl: 'https://drive.google.com/drive/folders/1vWaZ42ia7VZvy4_evl9S1XK_ZtwKvSmG?usp=drive_link' },
    { id: '10', title: 'فصل دهم - آینده تولید زیستی: چالش‌ها و فناوری‌های نوین', answersUrl: 'https://drive.google.com/drive/folders/1odDoVm3mFc4jz6wazkdK25fa1Q2Np00p?usp=sharing', filesUrl: 'https://drive.google.com/drive/folders/1y2CGdeF8Iy55E5e7koZJON5OBpDeLeKH?usp=drive_link' },
    { id: 'appendixA', title: 'پیوست A - طراحی مهندسی بیوراکتور: اصول، جنس سازه و اجزای کلیدی', answersUrl: 'https://drive.google.com/drive/folders/1odDoVm3mFc4jz6wazkdK25fa1Q2Np00p?usp=sharing', filesUrl: 'https://drive.google.com/drive/folders/1mz8cV7sEPoFR04lhM8vj_qNdtw1oPS0G?usp=drive_link', isAppendix: true },
    { id: 'appendixB', title: 'پیوست B - طراحی، ساخت و بهره‌برداری از یک بیوراکتور ساده', answersUrl: 'https://drive.google.com/drive/folders/1odDoVm3mFc4jz6wazkdK25fa1Q2Np00p?usp=sharing', filesUrl: 'https://drive.google.com/drive/folders/1Oa5pLSv7tZo1sPTaUoIYXiR8gzYixbuR?usp=drive_link', isAppendix: true }
];

document.addEventListener('DOMContentLoaded', function() {
    initializeMainPage();
    initializeChapterDropdown();
    preloadImages();
});

function initializeMainPage() {
    const chapterCards = document.querySelectorAll('.chapter-card');
    const modal = document.getElementById('chapter-modal');
    const closeBtn = document.querySelector('.close-btn');
    
    chapterCards.forEach(card => {
        card.addEventListener('click', function() {
            if (this.classList.contains('references-card')) {
                window.location.href = 'references.html';
                return;
            }
            
            const chapterId = this.dataset.chapter;
            if (chapterId) {
                openChapterModal(chapterId);
            }
        });
    });
    
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
    
    if (videoBtn) {
        videoBtn.onclick = function() {
            // منطق اصلاح‌شده برای ساخت نام فایل
            const filename = (chapter.isAppendix) ? `${chapterId}.html` : `chapter${chapterId}.html`;
            window.location.href = filename;
        };
    }
    
    if (answersBtn && chapter.answersUrl) {
        answersBtn.href = chapter.answersUrl;
    }
    
    if (filesBtn && chapter.filesUrl) {
        filesBtn.href = chapter.filesUrl;
    }
    
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

function initializeChapterDropdown() {
    const dropdownBtn = document.getElementById('chapters-dropdown-btn');
    const dropdownMenu = document.getElementById('chapters-dropdown-menu');
    
    if (!dropdownBtn || !dropdownMenu) {
        return;
    }
    
    dropdownMenu.innerHTML = '';
    
    chapters.forEach(chapter => {
        const item = document.createElement('a');
        // منطق اصلاح‌شده برای ساخت نام فایل
        const filename = (chapter.isAppendix) ? `${chapter.id}.html` : `chapter${chapter.id}.html`;
        item.href = filename;
        item.className = 'dropdown-item';
        item.textContent = chapter.title;
        
        const currentPage = window.location.pathname.split('/').pop();
        if (currentPage === filename) {
            item.classList.add('current');
        }
        
        dropdownMenu.appendChild(item);
    });
    
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
    
    document.addEventListener('click', function(e) {
        if (!dropdownBtn.contains(e.target) && !dropdownMenu.contains(e.target)) {
            dropdownMenu.style.display = 'none';
            dropdownBtn.classList.remove('active');
        }
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            dropdownMenu.style.display = 'none';
            dropdownBtn.classList.remove('active');
        }
    });
}

function preloadImages() {
    chapters.forEach(chapter => {
        const img = new Image();
        img.src = `images/chapter${chapter.id}.jpg`;
    });
}
