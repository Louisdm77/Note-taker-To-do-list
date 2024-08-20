const login = document.querySelector(".login");
const signup = document.querySelector(".signin");
const createAccount = document.querySelector(".create");
const loginCont = document.querySelector(".cont");
const signupCont = document.querySelector(".conti");
const loginForm = document.querySelector(".log");
const signinForm = document.querySelector(".cre");
const userNameInput = document.getElementById("validationDefault0");
const passwordInput = document.getElementById("validationDefault1");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("called");
  const accounts = localStorage.getItem("users");
  // console.log(accounts);
  if (accounts) {
    let userAccounts = JSON.parse(accounts); // collect data from localstorage and change to normal object
    // console.log(userAccounts);
    let passwordCorrect = false;
    let accountFound = false;

    for (let x = 0; x < userAccounts.length; x++) {
      //loop through array of objects that has been parsed
      if (userNameInput.value === userAccounts[x].name) {
        accountFound = true;
        if (accountFound) {
          if (passwordInput.value === userAccounts[x].password) {
            // alert("correct details");

            passwordCorrect = true;
            window.location.href = "codes/todohome.html";

            localStorage.setItem("loggedInUser", userNameInput.value);
            localStorage.setItem("loggedInEmail", userAccounts[x].email);
            localStorage.setItem("loggedInId", userAccounts[x].id);
            break;
          }
        }
        console.log(userAccounts);
      }
      if (accountFound && !passwordCorrect) {
        alert("The password you entered is incorrect. Please try again.");
      }
    }
    if (!accountFound && !passwordCorrect) {
      console.log("incorrect");
      alert(
        "The username or password you entered is incorrect. Please try again."
      );
    }
  }
});
