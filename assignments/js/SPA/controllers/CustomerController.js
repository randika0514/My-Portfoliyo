$("#btnCusSave").click(function (){

    let customerID = $("#txtCustomerId").val();
    let customerName = $("#txtCustomerName").val();
    let customerAddress = $("#txtCustomerAddress").val();
    let customerSalary = $("#txtCustomerSalary").val();

    var customerObject = {
        id:customerID,
        name:customerName,
        address:customerAddress,
        salary:customerSalary
    }

    customers.push(customerObject);

    loadAllCustomer();
});

function loadAllCustomer(){
    $("#tblCustomer").empty();

    for (var customer of customers){
        var row = `<tr><td>${customer.id}</td><td>${customer.name}</td><td>${customer.address}</td><td>${customer.salary}</td></tr>`;
        $("#tblCustomer").append(row);
    }
}

function searchCustomer(cusId) {
    for (let customer of customers){
        if (customer.id == cusId){
            return customer;
        }
    }
    return null;
}

function updateCustomer(customerId){
    let customer = searchCustomer(customerId);
    if (customer != null){
        customer.id = $("#txtCustomerId").val();
        customer.name = $("#txtCustomerName").val();
        customer.address = $("#txtCustomerAddress").val();
        customer.salary = $("#txtCustomerSalary").val();

        loadAllCustomer();
        return true;
    }else {
        return false;
    }
}

$("#btnCusUpdate").click(function (){
    let customerID = $("#txtCustomerId").val();
    let response = upda
});

