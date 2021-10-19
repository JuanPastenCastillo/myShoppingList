const cointainerEnterNewItemsDOM = document.querySelector(".containerEnterNewItems")
const pDOM = document.querySelector("p")
const inputDOM = document.querySelector("input")
const buttonDOM = document.querySelector("button")

const theListContainerDOM = document.querySelector(".listContainer")
const listItemDOM = document.querySelector(".listItem")

window.addEventListener("load", () => {
 inputDOM.value = ""
 inputDOM.focus()
})

function isNumeric(n) {
 return { isNumber: !isNaN(parseFloat(n)) && isFinite(n), theNumber: n };
}

let createButtonToDeleteAll = document.createElement("button")
let textButton = document.createTextNode("DELETE ALL")
createButtonToDeleteAll.appendChild(textButton)
cointainerEnterNewItemsDOM.appendChild(createButtonToDeleteAll)
createButtonToDeleteAll.style.display = "none"


let howMuchInTheList = 5;

let addTheItem = function () {
 if (inputDOM.value === "") {
  inputDOM.style.backgroundColor = "red";
  inputDOM.focus()
 } else {

  let createNewElement = document.createElement("li")
  let textNewElement = document.createTextNode(inputDOM.value)
  createNewElement.appendChild(textNewElement)

  listItemDOM.appendChild(createNewElement)

  let createButtonToDelete = document.createElement("button")

  let textButton = document.createTextNode("DELETE")

  createButtonToDelete.appendChild(textButton)
  createNewElement.appendChild(createButtonToDelete)

  theListContainerDOM.children[0].textContent = "Your list here:"

  createButtonToDelete.addEventListener("click", () => {
   createNewElement.parentNode.removeChild(createNewElement)
   inputDOM.focus()

   if (listItemDOM.children.length === 0) {
    createButtonToDeleteAll.style.display = "none"
    theListContainerDOM.children[0].textContent = "Here you will see your list:"
   }

  })

  inputDOM.value = ""
  inputDOM.focus()
 }

 if (listItemDOM.children.length > howMuchInTheList) {
  listItemDOM.removeChild(listItemDOM.childNodes[0])
 }

 if (listItemDOM.children.length > 0) {
  createButtonToDeleteAll.style.display = "inline"

  createButtonToDeleteAll.addEventListener("click", () => {
   while (listItemDOM.firstChild) {
    listItemDOM.removeChild(listItemDOM.firstChild)
   }
   inputDOM.focus()
   createButtonToDeleteAll.style.display = "none"
   theListContainerDOM.children[0].textContent = "Here you will see your list:"
  })
 }
}


buttonDOM.addEventListener("click", addTheItem)

inputDOM.addEventListener("keydown", (e) => {
 inputDOM.style.backgroundColor = "white";
 if (e.key === "Enter") {
  addTheItem()
 }
})

function myFunction() {
 document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
 if (!event.target.matches('.dropbtn')) {
  var dropdowns = document.getElementsByClassName("dropdown-content");
  var i;
  for (i = 0;i < dropdowns.length;i++) {
   var openDropdown = dropdowns[i];
   if (openDropdown.classList.contains('show')) {
    openDropdown.classList.remove('show');
   }
  }
 }
}

const dropDownElementDOM = document.querySelectorAll(".dropDownElement")

for (const x of dropDownElementDOM) {
 x.addEventListener("click", (e) => {
  if (isNumeric(e.target.textContent)["isNumber"]) {
   howMuchInTheList = e.target.textContent
   cointainerEnterNewItemsDOM.children[0].children[0].textContent = `(${howMuchInTheList} items)`
  } else {
   let askToUser = prompt("How many items you want? Use only numbers", 1)
   if (isNumeric(askToUser)["isNumber"]) {
    if (isNumeric(askToUser)["theNumber"] > 0) {
     howMuchInTheList = askToUser
     cointainerEnterNewItemsDOM.children[0].children[0].textContent = `(${howMuchInTheList} items)`
    } else {
     alert("Your number is less or equal to 0")
    }
   } else {
    alert("Please, enter only numbers")
   }

  }
 })
}


