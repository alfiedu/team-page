const profileCards = document.querySelectorAll('.profile-card');


window.addEventListener('DOMContentLoaded', () => {
  profileCards.forEach((el, i) => {
    if (i === 0 || i === 1) {
      el.classList.add('fade-in')
    } 
  })
})

window.addEventListener('scroll', (e) => {
  profileCards.forEach((el, i) => {
 
   if (document.documentElement.scrollTop > 200) {
      if (i === 2 || i === 3) {
        el.classList.add('fade-in');
        el.classList.remove('fade-out');
      };
    } else {
      if (i === 2 || i === 3) {
        el.classList.replace('fade-in', 'fade-out');
      };
    }
    
    if (document.documentElement.scrollTop > 500) {
        if (i === 4 || i === 5) {
          el.classList.add('fade-in')
          el.classList.remove('fade-out')
        };
    } else {
        if (i === 4 || i === 5) {
          el.classList.replace('fade-in', 'fade-out');
        };
    }

   
   
  });
})