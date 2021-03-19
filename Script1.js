/////////////////////////////////     COLLAPSIBLE     ///////////////////////////////////////////

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}


//////////////////////////////////      Dropdown      ////////////////////////////////////////

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (e) {
    if (!e.target.matches('.dropbtn')) {
        var myDropdown = document.getElementById("myDropdown");
        if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
        }
    }
}
//////////////////////////////////////////////////////////////////////////

var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflow: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
    },
    loop: true
});

/////////////////////////////////////////////////////////////////

function getdelivery() {
    $.get('https://my-json-server.typicode.com/Overexm/mockjsonf/basket_s', function (resp, status, resp_obj) {
        console.log(status);
        let inpt2 = $('#div111').val();
        for (var i = 0; i < resp.length; i++) {
            $('#del1').html(function (ind, old_value) {
                if (inpt2 == resp[i].id) {
                    return resp[i].name;
                }
            })
            $('#del2').html(function (ind, old_value) {
                if (inpt2 == resp[i].id) {
                    return resp[i].inf;
                }
            })
            $('#del3').html(function (ind, old_value) {
                if (inpt2 == resp[i].id) {
                    $('#del3').attr('src', resp[i].url);
                }
            })
        }
    })
}
//////////////////////////////////////////////////////////

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    // trim to remove the whitespaces
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if (usernameValue === '') {
        setErrorFor(username, 'Username cannot be blank');
    } else {
        setSuccessFor(username);
    }

    if (emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Not a valid email');
    } else {
        setSuccessFor(email);
    }

    if (passwordValue === '') {
        setErrorFor(password, 'Password cannot be blank');
    } else if (!isPassword(passwordValue)) {
        setErrorFor(password, 'Password must contain at least 8 characters, 1 uppercase, 1lowercase, 1 special symbols')
    }
    else {
        setSuccessFor(password);
    }

    if (password2Value === '') {
        setErrorFor(password2, 'Password2 cannot be blank');
    } else if (passwordValue !== password2Value) {
        setErrorFor(password2, 'Passwords does not match');
    } else {
        setSuccessFor(password2);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(email) {
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
}

function isPassword(password) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/.test(password);
}





form.addEventListener('submit', function (e) {
    e.preventDefault()
    var name = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    fetch("https://my-json-server.typicode.com/Overexm/mockjson/get", {
        method: 'POST',
        body: JSON.stringify({
            name: name,
            email: email,
            password: password
        }),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    })
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data)
        })
})

////////////////////////////////////////

const form1 = document.getElementById('login');
const email1 = document.getElementById('lemail');
const password1 = document.getElementById('lpassword1');
var in1 = 0, la = 0, aa1 = 0, mo1 = 0;


form.addEventListener('submit', e => {
    e.preventDefault();
    loginEmail();
    loginPassword();
    validLoginEmail();
    validLoginPassword();
    checkAll();
});
function validLoginEmail() {
    $.get('https://my-json-server.typicode.com/Overexm/mockjson/get', function (inp, status) {
        for (var i = 0; i < inp.length; i++) {
            if (email1.value == inp[i].email1) {
                mo1 = 1;
            }
        }
    });
}
function validLoginPassword() {
    $.get('https://my-json-server.typicode.com/Overexm/mockjson/get', function (inp, status) {
        for (var i = 0; i < inp.length; i++) {
            if (password1.value == inp[i].password1) {
                aa1 = 1;
            }
        }
    });
}
function loginEmail() {
    const emailValue = email1.value.trim();
    if (emailValue === '') {
        setErrorFor(email1, 'Plaese enter email');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email1, ' Invalid email');
    } else {
        setSuccessFor(email1);
        in1 = 1;
    }
}
function loginPassword() {
    const passwordValue = password1.value.trim();
    if (passwordValue === '') {
        setErrorFor(password, 'Please enter password');
    } else if (!isPassword(passwordValue)) {
        setErrorFor(password1, 'Invalid password');
    } else {
        setSuccessFor(password1);
        la = 1;
    }
}
function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
    return false;
}
function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
    return true;
}
function isEmail(email1) {
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email1);
}
function isPassword(password1) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/.test(password1);
}
function checkAll() {
    loginEmail();
    loginPassword();
    validLoginEmail();
    validLoginPassword();
}
