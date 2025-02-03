document.addEventListener("DOMContentLoaded", function() {
    const scrollLeftButton = document.querySelector('.swapper__btn-left');
    const scrollRightButton = document.querySelector('.swapper__btn-right');
    const scrollContainer = document.querySelector('.swapper__container');
  
    scrollLeftButton.addEventListener('click', function() {
      scrollContainer.scrollBy({
        left: -500,
        behavior: 'smooth'
      });
      updateScrollButtons();
    });
  
    scrollRightButton.addEventListener('click', function() {
      scrollContainer.scrollBy({
        left: 500,
        behavior: 'smooth'
      });
      updateScrollButtons();
    });
    scrollContainer.addEventListener('scroll', updateScrollButtons);
    updateScrollButtons();
    function updateScrollButtons() {
        const containerWidth = scrollContainer.scrollWidth;
        const containerVisibleWidth = scrollContainer.clientWidth;
        const scrollPosition = scrollContainer.scrollLeft;
    
        if (scrollPosition <= 1) {
          scrollLeftButton.style.display = 'none';
        } else {
          scrollLeftButton.style.display = 'block';
        }
    
        if (scrollPosition + containerVisibleWidth >= containerWidth - 1) {
          scrollRightButton.style.display = 'none';
        } else {
          scrollRightButton.style.display = 'block';
        }
      }

  });