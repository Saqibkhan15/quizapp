var signupForm = document.getElementById('signupForm');
var loginForm = document.getElementById('loginForm');
var formTitle = document.getElementById('formTitle');

signupForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var formData = new FormData(signupForm);
    var name = formData.get('name');
    var email = formData.get('email');
    var password = formData.get('password');

    var userData = {
        name: name,
        email: email,
        password: password
    };

    localStorage.setItem('userData', JSON.stringify(userData));
    
    Swal.fire({
        icon: "success",
        title: "Success",
        text: "Signup successful!"
    }).then(function () {
        signupForm.classList.add('hidden');
        loginForm.classList.remove('hidden');
        formTitle.textContent = 'Login';
    });
});

loginForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var formData = new FormData(loginForm);
    var email = formData.get('email');
    var password = formData.get('password');
    var userData = JSON.parse(localStorage.getItem('userData'));

    if (userData && userData.email === email && userData.password === password) {
        Swal.fire({
            icon: "success",
            text: "Login successful!"
        }).then(function () {
            window.location.href = "home.html";
        });
    } else {
        Swal.fire({
            icon: "error",
            text: "Email or password is incorrect"
        });
    }
});
