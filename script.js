// 간단한 인터랙션용 JS
// 실제 기능은 제한적이지만, 모바일 앱 느낌을 살리기 위해 만든 코드입니다.

document.querySelectorAll('.action-btn, .icon-btn, .nav-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    btn.style.transform = 'scale(0.96)';
    setTimeout(() => {
      btn.style.transform = '';
    }, 120);
  });
});

document.querySelectorAll('.nav-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.nav-btn').forEach((n) => n.classList.remove('active'));
    btn.classList.add('active');

    if (btn.classList.contains('plus')) {
      alert('새 게시물을 업로드하는 화면을 만들 수 있어요.');
    }
  });
});

document.querySelectorAll('.story').forEach((story) => {
  story.addEventListener('click', () => {
    alert('스토리 상세 화면으로 연결할 수 있어요.');
  });
});

document.querySelectorAll('.post').forEach((post) => {
  post.addEventListener('dblclick', () => {
    const heart = post.querySelector('.action-btn');
    if (heart) {
      heart.textContent = '♥';
      heart.style.color = '#ff5b8a';
    }
  });
});
