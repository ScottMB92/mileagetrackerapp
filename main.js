var fullName = document.querySelector(".employee");
var mileageData = document.querySelector(".mileagedata");
var list = document.querySelector(".employeelist");
var addEmployee = document.querySelector(".btnEmployee");
var deleteEmployees = document.querySelector(".btnDeleteAll");
var employeeList = [];

function getData(elements) {
  list.innerHTML = "";
  elements.forEach(e => {
    let newElement = document.createElement("li");
    newElement.innerHTML = e;
    newElement.classList.add("list-group-item");
    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.classList.add("btn-primary");
    deleteButton.classList.add("deleteButton");
    list.appendChild(deleteButton);
    list.appendChild(newElement);

    deleteButton.onclick = function() {
      if (confirm('Are you sure you want to delete this record?')) {
      newElement.remove();
      this.remove();
      localStorage.setItem("mylist", JSON.stringify(employeeList));
      }
      else {
        return;
      }
    };
  });
}

addEmployee.addEventListener("click", e => {
  if (fullName.value !== "" && mileageData.value !== "") {
    employeeList.unshift(fullName.value + " has claimed back on " + mileageData.value + " miles this tax year");
    fullName.value = "";
    mileageData.value = "";
    getData(employeeList);
    deleteEmployees.style.display = "block";
    localStorage.setItem("mylist", JSON.stringify(employeeList));
  } else {
    alert("Please input some data");
  }
});

let saved = localStorage.getItem("mylist");
if (saved) {
  employeeList = JSON.parse(localStorage.getItem("mylist"));
  getData(employeeList);
} else {
  deleteEmployees.style.display = "none";
}

deleteEmployees.addEventListener("click", function() {
if (confirm('Are you sure you want to delete all records?')) {
  localStorage.clear();
  list.innerHTML = "";
  employeeList = [];
  deleteEmployees.style.display = "none";
}
else {
  return;
}
});