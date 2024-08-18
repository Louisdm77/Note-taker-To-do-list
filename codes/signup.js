const username = document.getElementById("validationDefault01");
const ID = document.getElementById("validationDefault02");
const email = document.getElementById("validationDefault03");
const password = document.getElementById("validationDefault04");
const login = document.querySelector(".login");
const signup = document.querySelector(".signin");
const createAccount = document.querySelector(".create");
const loginCont = document.querySelector(".cont");
const signupCont = document.querySelector(".conti");
const loginForm = document.querySelector(".log");
const signinForm = document.querySelector(".cre");
const logUsername = document.getElementById("validationDefault0");
const logPassword = document.getElementById("validationDefault1");

signinForm.addEventListener("submit", (e) => {
  e.preventDefault(); //prevent form default submission
  const jsonData = {
    name: username.value,
    id: ID.value,
    email: email.value,
    password: password.value,
  };
  let users = localStorage.getItem("users");
  if (users) {
    let usernameExists = false;
    users = JSON.parse(users);
    for (let x = 0; x < users.length; x++) {
      if (jsonData.name === users[x].name) {
        alert("username already exists");
        usernameExists = true;
        break;
      }
    }
    if (!usernameExists) {
      users.push(jsonData);
      window.location.href = "../index.html";
    }
  } else {
    users = [jsonData];
  }
  console.log(JSON.stringify(users));
  localStorage.setItem("users", JSON.stringify(users));
});
