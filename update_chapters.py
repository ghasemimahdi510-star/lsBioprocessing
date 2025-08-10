#!/usr/bin/env python3
import re

# دیکشنری عناوین فصل‌ها (بدون تغییر)
chapters = {
    1: "مشاهده ویدئو آشنایی با فصل اول - مقدمه ای بر فرآیندهای تولید در مقیاس وسیع",
    2: "مشاهده ویدئو آشنایی با فصل دوم - زیرساخت‌های فرآیند بالادستی",
    3: "مشاهده ویدئو آشنایی با فصل سوم - طراحی و مهندسی بیوراکتور",
    4: "مشاهده ویدئو آشنایی با فصل چهارم - کنترل و نظارت فرآیند",
    5: "مشاهده ویدئو آشنایی با فصل پنجم - فرآیندهای جداسازی پایین‌دستی",
    6: "مشاهده ویدئو آشنایی با فصل ششم - خالص‌سازی محصول",
    7: "مشاهده ویدئو آشنایی با فصل هفتم - کنترل کیفیت و استاندارسازی",
    8: "مشاهده ویدئو آشنایی با فصل هشتم - اقتصاد فرآیند و مقیاس‌گذاری",
    9: "مشاهده ویدئو آشنایی با فصل نهم - ایمنی زیستی و مدیریت پسماند",
    10: "مشاهده ویدئو آشنایی با فصل دهم - آینده تولید زیستی",
    11: "مشاهده ویدئو آشنایی با پیوست الف - طراحی مهندسی بیوراکتور",
    12: "مشاهده ویدئو آشنایی با پیوست ب - طراحی، ساخت و بهره‌برداری"
}

# نوار نویگیشن با لوگو (بدون تغییر)
new_nav_content = '''<nav class="video-nav">
        <a href="index.html" class="nav-btn home-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9,22 9,12 15,12 15,22"></polyline>
            </svg>
            صفحه اصلی
        </a>
    
        <div class="nav-logo-container">
            <img src="new-logo.png" alt="Logo" class="nav-logo">
        </div>

        <div class="chapters-dropdown">
            <button id="chapters-dropdown-btn" class="nav-btn chapters-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="8" y1="6" x2="21" y2="6"></line>
                    <line x1="8" y1="12" x2="21" y2="12"></line>
                    <line x1="8" y1="18" x2="21" y2="18"></line>
                    <line x1="3" y1="6" x2="3.01" y2="6"></line>
                    <line x1="3" y1="12" x2="3.01" y2="12"></line>
                    <line x1="3" y1="18" x2="3.01" y2="18"></line>
                </svg>
                فهرست فصل‌ها
                <svg class="dropdown-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="6,9 12,15 18,9"></polyline>
                </svg>
            </button>
            
            <div id="chapters-dropdown-menu" class="dropdown-menu">
                </div>
        </div>
    </nav>'''

# محتوای فوتر (بدون تغییر)
footer_content = '''
    <footer class="site-footer">
        <div class="footer-content">
            <div class="footer-logo">
                <img src="logo footer.png" alt="لوگو">
            </div>
            
            <div class="footer-section">
                <p class="copyright">© ۱۴۰۴ | تمامی حقوق طراحی و توسعه این وب‌سایت متعلق به صاحب اثر می‌باشد.</p>
                <p class="content-desc">محتوای علمی و چندرسانه‌ای با بهره‌گیری از منابع معتبر گردآوری و مستندسازی شده است.</p>
                <p class="contact-desc">برای مکاتبات رسمی یا کسب اطلاعات بیشتر، لطفاً از طریق نشانی زیر در ارتباط باشید:</p>
                <p class="email">✉️ ghasemimahdi510@gmail.com</p>
                <p class="developer">طراحی و توسعه با عشق ❤️ توسط مهدی قاسمی</p>
            </div>
        </div>
    </footer>'''

# به‌روزرسانی فایل‌های فصل‌ها (از ۲ تا ۱۲)
for chapter_num in range(2, 13):
    filename = f"chapter{chapter_num}.html"
    
    try:
        with open(filename, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # جایگزینی نوار نویگیشن قدیمی با جدید (بدون تغییر)
        content = re.sub(
            r'<nav class="video-nav">.*?</nav>', 
            new_nav_content,                       
            content,
            flags=re.DOTALL                        
        )

        # محتوای جدید بخش ویدیو (بدون تغییر)
        new_video_section = f'''<div class="video-content">
        <h1 class="video-main-title">{chapters[chapter_num]}</h1>
        
        <div class="video-container">
            <div id="video-container" class="video-frame">
                </div>
        </div>

        <div class="video-actions">
            <a id="aparat-btn" href="#" class="action-btn primary-btn" target="_blank">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polygon points="5,3 19,12 5,21"></polygon>
                </svg>
                مشاهده در آپارات
            </a>
            <a id="youtube-btn" href="#" class="action-btn secondary-btn" target="_blank">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                    <polygon points="9.75,15.02 15.5,11.75 9.75,8.48"></polygon>
                </svg>
                مشاهده در یوتیوب
            </a>
            <a id="download-btn" href="#" class="action-btn download-btn" target="_blank">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7,10 12,15 17,10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                دانلود ویدئو
            </a>
        </div>
    </div>'''
        
        # جایگزینی بخش ویدیو (بدون تغییر)
        pattern_to_replace = r'<div class="video-content">.*?<div class="video-actions">.*?</div>\s*</div>'
        
        content = re.sub(
            pattern_to_replace,
            new_video_section,
            content,
            flags=re.DOTALL
        )
        
        # =======================================================
        # === خط اصلاح شده برای جلوگیری از تکرار فوتر ===
        # =======================================================
        # به جای چک کردن کل محتوای فوتر، فقط یک نشانه منحصر به فرد را چک می‌کنیم
        if '<footer class="site-footer">' not in content:
            content = content.replace(
                '   <script src="chapter-dropdown.js"></script>',
                footer_content + '\n\n    <script src="chapter-dropdown.js"></script>'
            )
        
        # نوشتن محتوای به‌روزشده در فایل
        with open(filename, 'w', encoding='utf-8') as f:
            f.write(content)
            
        print(f"Updated {filename}")
        
    except FileNotFoundError:
        print(f"File {filename} not found")
    except Exception as e:
        print(f"Error updating {filename}: {e}")

print("\nUpdate process completed successfully!")
