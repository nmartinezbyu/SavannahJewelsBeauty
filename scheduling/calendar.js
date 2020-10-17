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

function hasEvent(date) {
  //events is a global variable in gapi.js
  for(let i in events) {
    let other = new Date(Date.parse(events[i].start.dateTime))
    let isSameDay = other.getDate() === date.getDate() 
        &&  other.getMonth() === date.getMonth() 
        &&  other.getFullYear() === date.getFullYear()
    
    if(isSameDay) {
      return true;
    }
  }
  return false;
}

function setDays(date = new Date()) {
  console.log(events);
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
    if(hasEvent(iterator) === true) {
      node.className = "event"
      
      node.addEventListener('click', () => {
        //Some functionality to show selected date. There is a bug. The date shows up as the first and not the one selected.
        let divDate = document.createElement("div");
        divDate.innerHTML = iterator.getMonth() + "/" + iterator.getDate() + "/" + iterator.getFullYear();
        document.getElementById("selectedDate").appendChild(divDate);
      })
    }
    daysList.appendChild(node)

    iterator.setDate(iterator.getDate() + 1)
  }
}

window.addEventListener('load', (event) => {
  setMonth()
  //setDays() This is now being called in the gapi.js "listUpcomingEvents" function
});
