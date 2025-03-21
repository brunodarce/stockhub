const users = [
    { username: "admin", password: "1234" }
];

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMsg = document.getElementById("error-msg");

    //const user = users.find(user => user.username == "admin" && user.password == "123");
    const user = username == "admin" && password == "123" ? true : false;
    if (user) {
        localStorage.setItem("loggedIn", "true");
        window.location.href = "html/dashboard.html";
    } else {
        errorMsg.textContent = "Usuário ou senha incorretos!";
    }
}

function logout() {
    localStorage.removeItem("loggedIn");
    window.location.href = "html/index.html";
}

document.addEventListener("DOMContentLoaded", () => {
    if (window.location.pathname.includes("dashboard.html") && !localStorage.getItem("loggedIn")) {
        window.location.href = "html/index.html";
    }
});