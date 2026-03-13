const container = document.querySelector('.container');
const loginLink = document.querySelector('.SignInLink');
const registerLink = document.querySelector('.SignUpLink');

registerLink.addEventListener('click', (e) => {
    e.preventDefault();
    container.classList.add('active');
});

loginLink.addEventListener('click', (e) => {
    e.preventDefault();
    container.classList.remove('active');
});

// EYE TOGGLE
document.getElementById('togglePassword').addEventListener('click', function () {
    const f = document.getElementById('pass1');
    f.type = f.type === 'password' ? 'text' : 'password';
    this.classList.toggle('bi-eye'); this.classList.toggle('bi-eye-slash');
});
document.getElementById('togglePassword2').addEventListener('click', function () {
    const f = document.getElementById('pass2');
    f.type = f.type === 'password' ? 'text' : 'password';
    this.classList.toggle('bi-eye'); this.classList.toggle('bi-eye-slash');
});
// ====== BUTTON DODGE SYSTEM (WORKS FOR BOTH FORMS) ======

document.querySelectorAll('.form-box form').forEach(form => {

    const btn = form.querySelector('.btn');
    const inputs = form.querySelectorAll('input[required]');

    function allFilled() {
        return [...inputs].every(input => input.value.trim() !== '');
    }

    function moveButton() {
        if (allFilled()) return;

        const parent = btn.parentElement;
        const parentRect = parent.getBoundingClientRect();
        const btnRect = btn.getBoundingClientRect();

        const maxX = parentRect.width - btnRect.width;
        const maxY = parentRect.height - btnRect.height;

        const randomX = Math.random() * maxX - (maxX / 2);
        const randomY = Math.random() * maxY - (maxY / 2);

        btn.style.transform = `translate(${randomX}px, ${randomY}px)`;
    }

    function validate() {
        if (allFilled()) {
            btn.disabled = false;
            btn.style.transform = 'translate(0,0)';
        } else {
            btn.disabled = true;
        }
    }

    btn.addEventListener('mouseover', moveButton);
    btn.addEventListener('touchstart', moveButton);
    form.addEventListener('input', validate);

    validate(); // initialize state
});


function showMsg() {
    const isEmpty = uname.value === '' || pass.value === '';



    if (isEmpty) {
        btn.disabled = true;
        msg.innerText = 'Please fill the input fields before proceeding';
        msg.style.color = 'rgb(218 49 49)';
    } else {
        btn.disabled = false;
        msg.innerText = 'Great! Now you can proceed';
        msg.style.color = '#92ff92';
        btn.classList.add('no-shift');
        // Reset button position
        btn.classList.remove('shift-left', 'shift-right', 'shift-top', 'shift-bottom');
    }
}
//forgot password jsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
document.getElementById('forgotLink').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('forgotOverlay').classList.add('active');
});

document.getElementById('forgotClose').addEventListener('click', function () {
    document.getElementById('forgotOverlay').classList.remove('active');
});

document.getElementById('forgotOverlay').addEventListener('click', function (e) {
    if (e.target === this) this.classList.remove('active');
});
// SEND OTP → SHOW STEP 2
document.getElementById('sendOtpBtn').addEventListener('click', function () {
    document.getElementById('step1').style.display = 'none';
    document.getElementById('step2').style.display = 'block';
});
// OTP AUTO-ADVANCE + BACKSPACE
document.querySelectorAll('.otp-input').forEach((input, index, inputs) => {
    input.addEventListener('input', function () {
        if (this.value.length === 1 && index < inputs.length - 1) inputs[index + 1].focus();
    });
    input.addEventListener('keydown', function (e) {
        if (e.key === 'Backspace' && this.value === '' && index > 0) inputs[index - 1].focus();
    });
});