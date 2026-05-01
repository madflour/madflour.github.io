console.log('daily-bg.js loaded');

const bgImages = [
    '/images/bg/1.jpg',
    '/images/bg/2.jpg',
    '/images/bg/3.jpg',
    '/images/bg/4.jpg',
    '/images/bg/5.jpg',
    '/images/bg/6.jpg',
    '/images/bg/7.jpg',
    '/images/bg/8.jpg',
    '/images/bg/9.jpg',
    '/images/bg/10.jpg',
    '/images/bg/11.jpg',
    '/images/bg/12.jpg',
    '/images/bg/13.jpg',
    '/images/bg/14.jpg',
    '/images/bg/15.jpg',
    '/images/bg/16.jpg',
    '/images/bg/17.jpg',
    '/images/bg/18.jpg',
    '/images/bg/19.jpg',
    '/images/bg/20.jpg',
    '/images/bg/21.jpg',
    '/images/bg/22.jpg',
    '/images/bg/23.jpg',
    '/images/bg/24.jpg',
    '/images/bg/25.jpg',
    '/images/bg/26.jpg',
    '/images/bg/27.jpg',
    '/images/bg/28.jpg',
    '/images/bg/29.jpg',
    '/images/bg/30.jpg',
    '/images/bg/31.jpg',
];

function getTodaysBg() {
    const today = new Date().getDate();
    const index = today - 1;
    return bgImages[index];
}

// 设置背景
const bgUrl = getTodaysBg();
document.body.style.backgroundImage = `url(${bgUrl})`;
document.body.style.backgroundRepeat = 'no-repeat';
document.body.style.backgroundAttachment = 'fixed';
document.body.style.backgroundPosition = 'center center';
document.body.style.backgroundSize = 'cover';