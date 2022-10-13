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

    customer.push(customerObject);

});

function loadAllCustomer(){
    $("#tblCustomer").empty();

    for (var customer of customer){
        var row = `<tr><td>${customer.id}</td><td>${customer.name}</td><td>${customer.address}</td><td>${customer.salary}</td></tr>`;
        $("#tblCustomer").append(row);
    }
}

