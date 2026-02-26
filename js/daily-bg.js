// 所有背景图片的路径数组（根据你的实际情况修改）
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
  // 继续添加更多图片...
];

// 基于当前日期选择一张图片（保证同一天内固定）
function getTodaysBg() {
  const now = new Date();
  // 生成一个基于日期的唯一索引：用年月日拼接成数字
  const dayKey = now.getFullYear() * 10000 + (now.getMonth() + 1) * 100 + now.getDate();
  const index = dayKey % bgImages.length; // 取模得到图片索引
  return bgImages[index];
}

// 设置背景
document.body.style.backgroundImage = `url(${getTodaysBg()})`;
document.body.style.backgroundRepeat = 'no-repeat';
document.body.style.backgroundAttachment = 'fixed';
document.body.style.backgroundPosition = 'center center';
document.body.style.backgroundSize = 'cover';