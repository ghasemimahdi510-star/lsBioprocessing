// chapter navigation data
const chapters = [
    { id: '1', title: 'فصل اول - مقدمه ای بر فرآیندهای تولید در مقیاس وسیع' },
    { id: '2', title: 'فصل دوم - زیرساخت‌های فرآیند بالادستی: از سویه تا محیط کشت' },
    { id: '3', title: 'فصل سوم - قلب فرآیند : بیوراکتور و طراحی آن در مقیاس صنعتی' },
    { id: '4', title: 'فصل چهارم - کنترل فرآیند زیستی؛ چگونه یک بیوراکتور را زنده نگه داریم؟' },
    { id: '5', title: 'فصل پنجم - عملیات پایین‌دستی ، از جداسازی تا خالص‌سازی' },
    { id: '6', title: 'فصل ششم - پایدارسازی، خشک‌سازی و نگهداری محصولات' },
    { id: '7', title: 'فصل هفتم - تضمین کیفیت، اعتبارسنجی و GMP در تولید زیستی' },
    { id: '8', title: 'فصل هشتم - فناوری‌ های نوین واکسن سازی در مقیاس صنعتی' },
    { id: '9', title: 'فصل نهم - ایمنی زیستی و مدیریت پسماند در فرآیندهای زیستی صنعتی' },
    { id: '10', title: 'فصل دهم - آینده تولید زیستی: چالش‌ها و فناوری‌های نوین' },
    // Corrected IDs for appendices
    { id: 'appendixA', title: 'پیوست A - طراحی مهندسی بیوراکتور: اصول، جنس سازه و اجزای کلیدی' },
    { id: 'appendixB', title: 'پیوست B - طراحی، ساخت و بهره‌برداری از یک بیوراکتور ساده' }
];

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing chapter dropdown...');
    initializeChapterDropdown();
});

// Initialize chapter dropdown
function initializeChapterDropdown() {
    const dropdownBtn = document.getElementById('chapters-dropdown-btn');
    const dropdownMenu = document.getElementById('chapters-dropdown-menu');

    if (!dropdownBtn || !dropdownMenu) {
        console.error('Dropdown elements not found');
        return;
    }

    dropdownMenu.innerHTML = '';

    chapters.forEach(chapter => {
        const item = document.createElement('a');
        
        // منطق اصلاح‌شده برای ساخت نام فایل
        let filename;
        if (chapter.id.length <= 2) { // اگر ID عددی است (مثلا '1' تا '10')
            filename = `chapter${chapter.id}.html`;
        } else { // اگر ID متنی است (مثلا 'appendixA')
            filename = `${chapter.id}.html`;
        }
        
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