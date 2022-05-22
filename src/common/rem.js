

// 初始化 root font-size
function initRem() {
  const { documentElement } = document;
  const resizeEvent = 'orientationchange' in window
    ? 'orientationchange'
    : 'resize';

  function reCalcRootValue () {
    const { clientWidth } = documentElement;
    if (!clientWidth) {
      return;
    }
    documentElement.style.fontSize = 100 * (clientWidth / 375) + 'px';
  }

  window.addEventListener(resizeEvent, reCalcRootValue, false);
  document.addEventListener('DOMContentLoaded', reCalcRootValue, false);
}


initRem();