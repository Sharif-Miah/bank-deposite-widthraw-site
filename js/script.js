document.getElementById('submit-btn').addEventListener('click', function () {

    const emailFild = document.getElementById('user-email');
    const email = emailFild.value;

    const passwordFild = document.getElementById('user-password');
    const password = passwordFild.value;


    if (email === 'farhan@gmail.com' && password === 'farhan123') {
        window.location.href = 'http://127.0.0.1:5500/js/bankIndite.html'
    } else {
        alert('It is not a valid user Text')
    }


})