document.addEventListener('DOMContentLoaded', function () {
  const observer = new IntersectionObserver(
    (entries, observerInstance) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observerInstance.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  document.querySelectorAll('.section').forEach((section) => {
    observer.observe(section);
  });

  const contactForm = document.getElementById('contactForm');
  const formMessage = document.getElementById('formMessage');

  if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      if (!name || !email || !message) {
        return;
      }

      formMessage.style.display = 'block';
      formMessage.textContent = `감사합니다! ${name}님, 메시지를 받았습니다.`;
      contactForm.reset();
      setTimeout(() => {
        formMessage.style.display = 'none';
      }, 4500);
    });
  }
});

window.addEventListener('load', function () {
  console.log('포트폴리오 페이지가 로드되었습니다.');
});
