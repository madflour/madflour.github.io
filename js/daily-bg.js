console.log('daily-bg.js loaded');

const bgImages = [
    '/images/bg/bg-1.jpg',
    '/images/bg/bg-2.jpg',
    '/images/bg/bg-3.jpg',
    '/images/bg/bg-4.jpg',
    '/images/bg/bg-5.jpg',
    '/images/bg/bg-6.jpg',
    '/images/bg/bg-7.jpg',
    '/images/bg/bg-8.jpg',
    '/images/bg/bg-9.jpg',
    '/images/bg/bg-10.jpg',
    '/images/bg/bg-11.jpg',
    '/images/bg/bg-12.jpg',
    '/images/bg/bg-13.jpg',
    '/images/bg/bg-14.jpg',
    '/images/bg/bg-15.jpg',
    '/images/bg/bg-16.jpg',
    '/images/bg/bg-17.jpg',
    '/images/bg/bg-18.jpg',
    '/images/bg/bg-19.jpg',
    '/images/bg/bg-20.jpg',
    '/images/bg/bg-21.jpg',
    '/images/bg/bg-22.jpg',
    '/images/bg/bg-23.jpg',
    '/images/bg/bg-24.jpg',
    '/images/bg/bg-25.jpg',
    '/images/bg/bg-26.jpg',
    '/images/bg/bg-27.jpg',
    '/images/bg/bg-28.jpg',
    '/images/bg/bg-29.jpg',
    '/images/bg/bg-30.jpg'
];

function getTodaysBg() {
    const now = new Date();
    const dayKey = now.getFullYear() * 10000 + (now.getMonth() + 1) * 100 + now.getDate();
    const index = dayKey % bgImages.length;
    return bgImages[index];
}

// 设置背景
const bgUrl = getTodaysBg();
document.body.style.backgroundImage = `url(${bgUrl})`;
document.body.style.backgroundRepeat = 'no-repeat';
document.body.style.backgroundAttachment = 'fixed';
document.body.style.backgroundPosition = 'center center';
document.body.style.backgroundSize = 'cover';