const namee = document.querySelector(".name");
const toDo = document.querySelector(".form-control");
const hours = document.querySelector(".form-contro");
const add = document.querySelector(".btn");
const toDoForm = document.querySelector(".needs-validation");
const user = localStorage.getItem("loggedInUser");
const itemNum = document.querySelector(".num");
let serialNum = 0;
namee.innerText = `${user}`;
const table = document.querySelector(".tab");
let cell2;
let all;
let cleared;

if (!table) {
  table = document.createElement("tbody");
}
toDoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("yay");

  const toDoData = toDo.value;
  const toDoHours = hours.value;

  if (toDoData && toDoHours) {
    serialNum += 1;
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
    cell1.textContent = serialNum;

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
