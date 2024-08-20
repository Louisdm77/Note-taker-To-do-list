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
  let users = localStorage.getItem("users"); //initialize a var to get users from local storage

  if (users) {
    //if the var exist as a key in local storage,do this(note:always check if something exists when dealing with invisible data)

    let usernameExists = false; //this is for handling duplicate usernames

    users = JSON.parse(users); //when getting from a database, change the json file to a normal object

    for (let x = 0; x < users.length; x++) {
      //loop through the changed json file to check if the username exists
      if (jsonData.name === users[x].name) {
        // if it exists, alert the user it exists and update the existence var
        alert("username already exists");
        usernameExists = true;
        break; // always break the loop after an item has been found while looping
      }
    }
    if (!usernameExists) {
      //handle the opposite scenario of an inexistent username, allow the user name to be created
      users.push(jsonData); // push all the new details of the user data to the user key...remember,user is the object created from json
      window.location.href = "../index.html"; // redirect the user to the login page
    }
  } else {
    users = [jsonData]; // if users doesnt exists in the local storage,let the registration inputs be stored in an array of objects called users
  }
  console.log(JSON.stringify(users));
  localStorage.setItem("users", JSON.stringify(users)); // push the array of object to the local storage and make sure to change to a json string using JSON.stringify(object)
});
