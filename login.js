/* ================================
   GET ELEMENTS
================================ */

const loginForm = document.getElementById("loginForm");

const signupForm = document.getElementById("signupForm");

const showSignup = document.getElementById("showSignup");

const showLogin = document.getElementById("showLogin");

const login = document.getElementById("login");

const signup = document.getElementById("signup");


/* ================================
   SHOW SIGNUP
================================ */

showSignup.addEventListener("click", function () {

    loginForm.classList.add("hidden");

    signupForm.classList.remove("hidden");

});


/* ================================
   SHOW LOGIN
================================ */

showLogin.addEventListener("click", function () {

    signupForm.classList.add("hidden");

    loginForm.classList.remove("hidden");

});


/* ================================
   SIGNUP
================================ */

signup.addEventListener("submit", function (event) {

    event.preventDefault();


    const name =
        document.getElementById("signupName").value.trim();

    const email =
        document.getElementById("signupEmail").value.trim();

    const password =
        document.getElementById("signupPassword").value;


    if (password.length < 6) {

        alert(
            "Password must contain at least 6 characters."
        );

        return;
    }


    /* Save user locally */

    const user = {

        name: name,

        email: email,

        password: password

    };


    localStorage.setItem(
        "ahsanUser",
        JSON.stringify(user)
    );


    alert(
        "Account created successfully! 🎉"
    );


    /* Clear form */

    signup.reset();


    /* Show login */

    signupForm.classList.add("hidden");

    loginForm.classList.remove("hidden");

});


/* ================================
   LOGIN
================================ */

login.addEventListener("submit", function (event) {

    event.preventDefault();


    const email =
        document.getElementById("loginEmail").value.trim();

    const password =
        document.getElementById("loginPassword").value;


    const savedUser =
        localStorage.getItem("ahsanUser");


    if (!savedUser) {

        alert(
            "No account found. Please create an account first."
        );

        return;
    }


    const user =
        JSON.parse(savedUser);


    if (
        email === user.email &&
        password === user.password
    ) {

        alert(
            "Login successful! Welcome " +
            user.name +
            " 🎉"
        );

        login.reset();

    } else {

        alert(
            "Invalid email or password ❌"
        );

    }

});


console.log(
    "Login & Signup JavaScript Connected Successfully!"
);