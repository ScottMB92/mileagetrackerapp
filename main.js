var employeeName = document.querySelector('#input-name');
var employeeMileage = document.querySelector('#input-mileage');
var employeeForm = document.querySelector('#form');
var employeeListed = document.querySelector('#mileage-tracker');
var employeeDelete = document.querySelector("#delete-all");
var employeeArray = JSON.parse(localStorage.getItem('mileage-tracker')) || [];

function updateTracker(){
  employeeListed.innerHTML = '';
  for (var toBeDeleted in employeeArray) {
    var li = document.createElement('li');
    li.classList.add('list-group-item');
    var span = document.createElement('span');
    span.innerText = employeeArray[toBeDeleted];
    var deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.setAttribute('toBeDeleted',toBeDeleted); 
    deleteButton.classList.add('delete');
    deleteButton.classList.add('btn-primary');
    deleteButton.classList.add('delete-employee');
    li.appendChild(span);
    li.appendChild(deleteButton);
    employeeListed.appendChild(li);
  }
  localStorage.setItem('mileage-tracker',JSON.stringify(employeeArray));
}

function addToTracker(value){
  if (employeeName.value === "" || employeeMileage.value === "") return alert("Please input some data");
    employeeArray.unshift(employeeName.value + " has claimed back on " + employeeMileage.value + " miles this tax year");
    updateTracker();
    employeeName.value = "";
    employeeMileage.value = "";
}

function deleteFromTracker(toBeDeleted){
  if (confirm("Are you sure you want to delete this record?")) {
    employeeArray.splice(Number(toBeDeleted),1);
    updateTracker();
    employeeName.value = "";
    employeeMileage.value = "";
  }
  else {
    return;
  }
};

employeeForm.addEventListener('submit', event => {
  event.preventDefault();
  addToTracker(employeeName.value && employeeMileage.value);
  checkRecordTotal();
});

document.addEventListener('click', event => {
  var element = event.target;
  if (element.classList.contains('delete')){ 
    deleteFromTracker(element.getAttribute('toBeDeleted'));
    checkRecordTotal();
  }
});

employeeDelete.addEventListener('click', function() {
  if (confirm("Are you sure you want to delete all records?")) {
    localStorage.clear();
    location.reload();
  }
  else {
    return;
  }
});

function checkRecordTotal() {
  for (var i = 0; i < employeeArray.length; i++);
  document.getElementById('records').innerHTML = ("Showing " + i + " record(s)");
}

updateTracker();
checkRecordTotal();