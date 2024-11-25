document.getElementById('switch-to-signup').addEventListener('click', function() {
    document.getElementById('login-form').classList.remove('active');
    document.getElementById('signup-form').classList.add('active');
});

document.getElementById('switch-to-login').addEventListener('click', function() {
    document.getElementById('signup-form').classList.remove('active');
    document.getElementById('login-form').classList.add('active');
});

document.getElementById('login-btn').addEventListener('click', function() {
    alert('Đăng nhập thành công!');
    window.location.href = 'index-logined.html';
});

document.getElementById('signup-btn').addEventListener('click', function() {
    alert('Đăng ký thành công!');
    window.location.href = 'index-logined.html';
});

document.getElementById('signup-btn').addEventListener('click', function() {
    alert('Đăng ký thành công!');
    window.location.href = 'index-logined.html';
});
