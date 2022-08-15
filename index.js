// Write your solution in this file!
const employee = {
    name: "Janice",
    streetAddress: "18 Wimbly Way"
};

function updateEmployeeWithKeyAndValue(obj, key, value) {
    const updatedEmployee = {
        ...obj,[key]: value,
    }
    return updatedEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
}

function deleteFromEmployeeByKey(obj, key) {
    const deletedEmployee = {...obj};

    delete deletedEmployee[key];

    return deletedEmployee;
}

function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key];
    return obj;
}