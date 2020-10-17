const MONTHS = [
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

var today = new Date()
var date = new Date()
date.setDate(1)
var maxDate = new Date()
maxDate.setDate(1)
maxDate.setMonth(maxDate.getMonth() + 3)

var dayToEventMap = {}

var prev = document.getElementById("prev")
var next = document.getElementById("next")
prev.addEventListener('click', (e) => {
  if (date > today) {
    date.setMonth(date.getMonth() - 1)
    setMonth()
    setDays()
  }
})
next.addEventListener('click', (e) => {
  if (date < maxDate) {
    date.setMonth(date.getMonth() + 1)
    setMonth()
    setDays()
  }
})

function elt(type, ...children) {
  let node = document.createElement(type);
  for (let child of children) {
    if (typeof child != "string" || typeof child != "number") node.appendChild(child);
    else node.appendChild(document.createTextNode(child));
  }
  return node;
}

function setMonth() {
  if (date < today) {
    prev.className = ""
  } 
  else if (date >= maxDate) {
    next.className = ""
  }
  else {
    prev.className = "pointer"
    next.className = "pointer"
  }
  document.getElementById("monthHeader").innerHTML = `
    ${MONTHS[date.getMonth()]}<br>
      <span style="font-size:18px">  
        ${date.getFullYear()} 
      </span>
    `;
}

// function hasEvent(date) {
//   //events is a global variable in gapi.js
//   for(let i in events) {
//     let other = new Date(Date.parse(events[i].start.dateTime))
//     let isSameDay = other.getDate() === date.getDate() 
//         &&  other.getMonth() === date.getMonth() 
//         &&  other.getFullYear() === date.getFullYear()
    
//     if(isSameDay) {
//       return true;
//     }
//   }
//   return false;
// }

function isCurrentMonth(d = new Date()) {
  return (d.getMonth() == today.getMonth() && d.getFullYear() == today.getFullYear())
}

async function setDays() {
  dayToEventMap = {}
  let daysList = document.getElementById("daysList").getElementsByTagName("td")
  let iterator = new Date(date.getMonth() + 1 + "/1/" + date.getFullYear())
  let offset = iterator.getDay() - 1;

  for (let i in daysList) {
    daysList[i].innerHTML = ""
  }
  
  while (iterator.getMonth() === date.getMonth()) {
    daysList[iterator.getDate() + offset].innerHTML = iterator.getDate()
    daysList[iterator.getDate() + offset].className = "" // resets active and event cells when month changes
    iterator.setDate(iterator.getDate() + 1)
  }

  if (isCurrentMonth(date)) {
    daysList[today.getDate() + offset].className = "active";
  }

  for (let i in events) {
    let start = new Date(Date.parse(events[i].start.dateTime))
    if (start.getMonth() == date.getMonth() && start.getFullYear() == date.getFullYear()) {
      daysList[start.getDate() + offset].className = "event"
      if (dayToEventMap[start.getDate()] == undefined) {
        dayToEventMap[start.getDate()] = []
      }
      dayToEventMap[start.getDate()].push(events[i])
      daysList[start.getDate() + offset].addEventListener('click', (e) => {
        let key = e.target.innerHTML
        //Some functionality to show selected date. There is a bug. The date shows up as the first and not the one selected.
        let availableTimes = elt("div");
        dayToEventMap[key].forEach(event => {
          let timeSlot = elt("div");
          timeSlot.innerHTML = `
            ${new Date(event.start.dateTime).toLocaleTimeString()} - ${new Date(event.end.dateTime).toLocaleTimeString()}
            <button class="btn btn-secondary" onclick="onReserve(${i})">Reserve</button>
          `;
          availableTimes.appendChild(timeSlot)
        });
        document.getElementById("selectedDate").appendChild(availableTimes);
      })
    }
  }
}

function onReserve(i) {
  console.log(events[i])
}

window.addEventListener('load', (event) => {
  setMonth()
  // setDays() // This is now being called in the gapi.js "listUpcomingEvents" function
});
