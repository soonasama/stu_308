// 부드러운 스크롤 네비게이션
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// 스킬 카드 상세 정보 표시
function showSkillDetail(element) {
    element.style.background = 'linear-gradient(135deg, var(--primary-color), var(--accent-color))';
    element.style.color = 'white';
    const h3 = element.querySelector('h3');
    const p = element.querySelector('p');
    if (h3) h3.style.color = 'white';
    if (p) p.style.color = 'rgba(255, 255, 255, 0.9)';
}

function hideSkillDetail(element) {
    element.style.background = 'var(--bg-light)';
    element.style.color = 'var(--text-dark)';
    const h3 = element.querySelector('h3');
    const p = element.querySelector('p');
    if (h3) h3.style.color = 'var(--primary-color)';
    if (p) p.style.color = 'var(--text-light)';
}

// 폼 제출 처리
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name && email && message) {
                alert(`감사합니다, ${name}님!\n메시지를 받았습니다.`);
                this.reset();
            }
        });
    }
});

// 스크롤 시 활성화 표시
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight / 2) {
            // 섹션이 뷰포트 중간에 올 때 처리
        }
    });
});

// 페이지 로드 시 초기화
window.addEventListener('load', function() {
    console.log('포트폴리오 페이지가 로드되었습니다!');
});