const namee = document.querySelector(".name");
const toDo = document.querySelector(".form-control");
const hours = document.querySelector(".form-contro");
const add = document.querySelector(".btn");
const toDoForm = document.querySelector(".needs-validation");
const user = localStorage.getItem("loggedInUser");
const userMail = localStorage.getItem("loggedInEmail");
const userId = localStorage.getItem("loggedInId");
const itemNum = document.querySelector(".num");
let serialNum = 0;
namee.innerText = `${user}`;
const table = document.querySelector(".tab");
let cell2;
let all;
let cleared;
const profile = document.querySelector(".prof");
const profileBtn = document.querySelector(".profile");
const details = document.querySelector(".details");
const cancelBtn = document.querySelector(".cancel");
let username = document.querySelector(".namee");
let email = document.querySelector(".email");
let id = document.querySelector(".id");
const clearAllBtn = document.querySelector(".clearBtn");
const filter = document.querySelector(".filter");
let filterVal;
const logoutBtn = document.querySelector(".logout");
if (!table) {
  table = document.createElement("tbody");
}
toDoForm.addEventListener("submit", (e) => {
  serialNum++;
  e.preventDefault();
  console.log("yay");

  const toDoData = toDo.value;
  const toDoHours = hours.value;

  if (toDoData && toDoHours) {
    let seconds = toDoHours * 3600;
    function countDown() {
      const hours = Math.floor(seconds / 3600);
      const minutes = Math.floor((seconds % 3600) / 60);
      const secondsRemaining = seconds % 60;
      seconds--; // decrement seconds

      if (seconds <= 0) {
        clearInterval(timeOut);
      }
      return `${hours}:${minutes}:${secondsRemaining}`;
    }

    const timeOut = setInterval(() => {
      cell3.textContent = countDown();
    }, 1000);

    itemNum.textContent = serialNum;
    const row = document.createElement("tr");

    const cell1 = document.createElement("td");
    cell1.textContent = "-";

    cell2 = document.createElement("td");
    cell2.style.overflowWrap = "break-word";
    cell2.style.width = "300px";
    cell2.style.overflow = "hidden";
    let maxval = 100;
    cleared = "";
    all = "";
    for (let x = 0; x < toDoData.length; x++) {
      all += toDoData[x];
      if (x <= maxval) {
        cleared += toDoData[x];
      }
    }
    cleared += "...";
    cell2.textContent = cleared;

    const cell3 = document.createElement("td");

    const cell4 = document.createElement("td");
    const delet = document.createElement("button");
    delet.textContent = "Delete";
    delet.style.border = "none";
    delet.style.backgroundColor = "red";
    cell4.appendChild(delet);

    const cell5 = document.createElement("td");
    const preview = document.createElement("button");
    preview.textContent = "Preview";
    cell5.appendChild(preview);

    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
    row.appendChild(cell4);
    row.appendChild(cell5);
    table.appendChild(row);

    toDo.value = "";
    toDoHours.value = "";
  }
});
document.addEventListener("click", (e) => {
  if (e.target.textContent === "Delete") {
    e.target.parentNode.parentNode.remove();
    serialNum--;
    itemNum.textContent = serialNum;
  }
});

document.addEventListener("click", (e) => {
  if (e.target.textContent === "Preview") {
    cell2 = e.target.parentNode.parentNode.querySelector("td:nth-child(2)");
    cell2.textContent = all;
    e.target.textContent = "Hide";
  } else if (e.target.textContent === "Hide") {
    cell2 = e.target.parentNode.parentNode.querySelector("td:nth-child(2)");
    cell2.textContent = cleared;
    e.target.textContent = "Preview";
  }
});

username.textContent = `${user}`;
email.textContent = `${userMail}`;
id.textContent = `${userId}`;

profileBtn.addEventListener("click", () => {
  profileBtn.classList.add("hidden");
  details.classList.remove("hidden");
});
cancelBtn.addEventListener("click", () => {
  details.classList.add("hidden");
  profileBtn.classList.remove("hidden");
});

clearAllBtn.addEventListener("click", () => {
  table.innerHTML = "";
  serialNum = 0;
  itemNum.textContent = serialNum;
});
document.querySelector("body").addEventListener("click", (e) => {
  if (e.target !== profileBtn && !details.contains(e.target)) {
    details.classList.add("hidden");
    profileBtn.classList.remove("hidden");
    console.log("clicked");
  }
});
filter.addEventListener("input", (e) => {
  filterVal = e.target.value.toLowerCase();
  const tableRows = table.querySelectorAll("tr");
  tableRows.forEach((row) => {
    if (row.textContent.toLowerCase().includes(filterVal)) {
      row.style.display = "table-row";
    } else {
      row.style.display = "none";
    }
  });
});

logoutBtn.addEventListener("click", () => {
  let userss = localStorage.getItem("users");
  let logName = localStorage.getItem("loggedInUser");
  let logMail = localStorage.getItem("loggedInEmail");
  let logId = localStorage.getItem("loggedInId");
  console.log("yy");
  loggedInAcct = JSON.parse(userss);

  for (let x = 0; x < loggedInAcct.length; x++) {
    if (loggedInAcct[x].name === logName) {
      localStorage.removeItem(logName);
      localStorage.removeItem(logMail);
      localStorage.removeItem(logId);

      break;
    }
  }
  window.location.href = "../index.html";
  localStorage.setItem("users", JSON.stringify(loggedInAcct));
});
