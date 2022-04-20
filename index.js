// Write your solution in this file!
const employee= {
    name: "name1",
    streetAddress: "adress1"
}

// func 1
function updateEmployeeWithKeyAndValue(obj, key, value){
    const newObj= {...obj};
    newObj[key]= value;
    return newObj;
}
updateEmployeeWithKeyAndValue(employee, "streetAddress", "11 Broadway")
console.log (employee)

// func 2

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    obj[key]= value;
    return obj;
}
destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "11 Broadway")
console.log (employee)

// func 3

function deleteFromEmployeeByKey(obj, key){
    const newObj= {...obj};
    delete newObj[key];
    return newObj;
}
deleteFromEmployeeByKey(employee, "streetAddress")
console.log (employee)

// func 4

function destructivelyDeleteFromEmployeeByKey(obj, key){
    delete obj[key];
    return obj;
}
destructivelyDeleteFromEmployeeByKey(employee, "streetAddress")
console.log (employee)