// Exercise #1: For Each Function

function forEach(array, operation) {
  for (let i=0; i< array.length; i++){
    operation(array[i])
  }
}

function addSalaries5000 (addMoney){ 
  newEmployeeSalaries.push(addMoney + 5000)
}


const employeeSalaries = [20005, 40000, 32000, 14500, 344000];
const newEmployeeSalaries = [];

// Using `forEach` function here

forEach(employeeSalaries, addSalaries5000)

console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 349000]
