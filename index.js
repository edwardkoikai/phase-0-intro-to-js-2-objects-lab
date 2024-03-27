// Write your solution in this file!
const employee = {
    name: "Edward Hawkins",
    streetAddress: "Moscow 14th Avenue"
}
function updateEmployeeWithKeyAndValue(employee, key , value ){
    return {
        ...employee,
        [key]: value,
    }
}
function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value; //Why are we using bracket notation here?
  
    return obj;
  }
 const newEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee, "name", "Caesar");

 function deleteFromEmployeeByKey(employee, key){
    const postEmployee = {...employee};
    delete postEmployee[key];
    return postEmployee
 }
 function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee.name ;
    return employee
 }


