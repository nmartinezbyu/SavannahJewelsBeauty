var date = new Date()

MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
]

function elt(type, ...children) {
  let node = document.createElement(type);
  for (let child of children) {
    if (typeof child != "string" || typeof child != "number") node.appendChild(child);
    else node.appendChild(document.createTextNode(child));
  }
  return node;
}

function setMonth(date = new Date()) {
  document.getElementById("monthHeader").innerHTML = `
    ${MONTHS[date.getMonth()]}<br>
      <span style="font-size:18px">  
        ${date.getFullYear()} 
      </span>
    `;
}

function setDays(date = new Date()) {
  let daysList = document.getElementById("daysList")
  let iterator = new Date(date.getMonth() + 1 + "/1/" + date.getFullYear())
  for (let i = 0; i < iterator.getDay(); i++) {
    daysList.appendChild(elt("li"))
  }
  while (iterator.getMonth() === date.getMonth()) {
    let node = elt("li")
    node.innerHTML = iterator.getDate().toString()
    if (iterator.getDate() == date.getDate()) {
      node.className = "active"
    }
    daysList.appendChild(node)

    iterator.setDate(iterator.getDate() + 1)
  }
}

window.addEventListener('load', (event) => {
  setMonth()
  setDays()
});
