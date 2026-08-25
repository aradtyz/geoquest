

# 🗺️ GeoQuest

GeoQuest یک بازی اکتشافی تحت وب است که در آن بازیکن با سفر و گشت‌وگذار در مکان‌های مختلف، مکان‌های دیدنی را پیدا می‌کند و Badge مخصوص آن مکان را به دست می‌آورد.

## 🎮 ایده بازی

در GeoQuest:

- 🌍 در شهرها و مکان‌های مختلف جست‌وجو می‌کنی
- 📍 مکان‌های دیدنی را پیدا می‌کنی
- 🏅 برای هر مکان یک Badge دریافت می‌کنی
- 🏙️ باید Badgeهای یک شهر را کامل جمع کنی
- 🏆 در آینده سیستم پیشرفت و رتبه‌بندی هم اضافه می‌شود

## 🛠️ تکنولوژی‌ها

### Frontend
- HTML
- CSS
- JavaScript
- Leaflet
- OpenStreetMap

### Backend
- Node.js
- Express
- Render

## 📁 ساختار پروژه

```text
geo-quest/
├── index.html
├── home.html
├── maintenance.html
├── style.css
└── script.js

Backend پروژه در یک Repository جدا قرار دارد.

🚧 وضعیت پروژه

> در حال توسعه 🚀



ویژگی‌های فعلی:

[x] GitHub Pages

[x] Node.js Backend

[x] Health Check API

[x] Configuration API

[x] Maintenance Mode

[ ] صفحه اصلی کامل

[ ] نقشه تعاملی

[ ] سیستم مکان‌ها

[ ] سیستم Badge

[ ] پروفایل بازیکن

[ ] پنل Admin

[ ] سیستم حساب کاربری

[ ] Leaderboard


🔧 Backend

Backend از طریق Node.js و Express اجرا می‌شود.

Health Check

GET /api/health

Configuration

GET /api/config

نمونه پاسخ:

{
  "maintenance": true
}

🎯 هدف

هدف GeoQuest ساخت یک تجربه اکتشافی و بازی‌محور برای کشف مکان‌های واقعی و جمع‌آوری Badgeهای آن‌هاست.


---

GeoQuest © 2026

Made with ❤️ by Arad
