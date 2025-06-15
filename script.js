window.addEventListener('DOMContentLoaded', function() {
  var heroImg = document.querySelector('.hero-image');
  var heroTitle = document.querySelector('.hero-title');
  var heroSub = document.querySelector('.hero-sub');

  // 写真をフェードイン
  if (heroImg) {
    setTimeout(function() {
      heroImg.classList.add('visible');
    }, 200);
  }
  // タイトルをスライド＋フェードイン
  if (heroTitle) {
    setTimeout(function() {
      heroTitle.classList.add('visible');
    }, 1200);
  }
  // サブテキストをスライド＋フェードイン
  if (heroSub) {
    setTimeout(function() {
      heroSub.classList.add('visible');
    }, 1600);
  }
}); 