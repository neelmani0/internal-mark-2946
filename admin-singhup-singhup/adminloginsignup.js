/** 
let regurl = "http://127.0.0.1:9090/admin";
let logurl = "http://127.0.0.1:9090/login";

let usr = localStorage.getItem("usr") || [];
console.log(usr)


const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});
signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});


let nameInp = document.getElementById("name");
let emailInp = document.getElementById("email");
let pws = document.getElementById("pws");
let signupBtn = document.querySelector("#signupBtn");
let signinBtn = document.querySelector("#signinBtn");

// signupBtn
let arr = [];
signupBtn.addEventListener("click", (e) => {

    e.preventDefault();
    let obj = {
        userName: nameInp.value,
        email: emailInp.value,
        password: pws.value
    }
    arr.push(obj)
        // registerUser(userName, email, password);
    alert("User Register");
    console.log("hello")
    localStorage.setItem("usr", JSON.stringify(arr))
})

let loginmail = document.getElementById("loginmail");
let loginpwd = document.getElementById("loginpwd")
var flag = false;
signinBtn.addEventListener("click", (e) => {
    e.preventDefault()
    for (let i = 0; i < usr.length; i++) {
        if (usr[i].email == loginmail.value && usr[i].password == loginpwd.value) {
            flag = true
        }

    }
    console.log(loginmail.value, loginpwd.value)
    if (flag == true) {
        alert("login succesful")
    } else {
        alert("wrong email or password")
    }

})

**/


// let storedData = JSON.parse(localStorage.getItem("details")) || []


const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');

const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});
signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});


let signupForm = document.getElementById("form1");
let nameInp = document.getElementById("name");
let emailInp = document.getElementById("email");
let passwordInp = document.getElementById("password")

let database = JSON.parse(localStorage.getItem("userdetails"))
if (database === null) {
    database = []
}

signupForm.addEventListener("submit", (e) => {
    // e.preventDefault();

    let userdata = {
        user: nameInp.value,
        email: emailInp.value,
        password: passwordInp.value,
    }

    database.push(userdata);
    localStorage.setItem("userdetails", JSON.stringify(database))
})












let loginForm = document.getElementById("form2");
let head = document.getElementById("head")
let emailInput = document.getElementById("email-log")
let passwordInput = document.getElementById("password-log")

//   let lsData = JSON.parse(localStorage.getItem("userdetails"));
//   if (lsData === null) {
//     lsData = []
//   }
//   console.log(lsData)

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let storeData = JSON.parse(localStorage.getItem("data"))
    if (storeData == null) {
        storeData = []
    }


    let formData = {
        email1: emailInput.value,
        password1: passwordInput.value,
    }
    storeData.push(formData)
        // localStorage.setItem("userdetails", JSON.stringify(lsData))

    checkData(database, storeData)
})

function checkData(lsData, storeData) {

    for (let i = 0; i < lsData.length; i++) {
        console.log(lsData[i])
        if (lsData[i].email == storeData[i].email1 && lsData[i].password == storeData[i].password1) {
            alert("Signin Succesfull")
            window.location.href = "http://127.0.0.1:5500/AdminDashbord.html"
        } else {
            alert("wrong credentials")
        }
    }

}