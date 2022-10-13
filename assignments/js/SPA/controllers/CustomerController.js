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


$("#btnCusUpdate").click(function (){
    let customerID = $("#txtCustomerId").val();
    let response = updateCustomer(customerID);
    if (response){
        alert("Updated Successfully.....!")
        setTextFieldValues("", "" , "", "");
    }else {
        alert("Update Unsuccessfully.....!")
    }
});


$("#btnCusDelete").click(function (){
   let deleteId = $("#txtCustomerId").val();
   let option = confirm("Do you want Delete Customer ID : "+deleteId);

   if (option){
       if (deleteCustomer(deleteId)) {
           alert("Customer Deleted Successfully.....!");
           setTextFieldValues("", "", "", "")
       }else {
           alert("Please Check the Customer ID")
       }
   }
});

/*--------------------------------------------------------*/

$("#txtCustomerId").on('keyup', function (event){
    if (event.code=="Enter"){
        let typedId = $("#txtCustomerId").val();
        let customer = searchCustomer(typedId);
        if (customer != null) {
            setTextFieldValues(customer.id, customer.name ,customer.address, customer.salary);
        }else {
            alert("Not Available.....!");
            setTextFieldValues("", "", "", "");
        }
    }
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

function setTextFieldValues(id, name, address, salary){
    $("#txtCustomerId").val(id);
    $("#txtCustomerName").val(name);
    $("#txtCustomerAddress").val(address);
    $("#txtCustomerSalary").val(salary);
}

function deleteCustomer(customerID){
    let customer = searchCustomer(customerID);
    if (customer != null){
        let indexNumber = customers.indexOf(customer);
        customers.splice(indexNumber, 1);
        loadAllCustomer();
        return true;
    }else {
        return false;
    }
}

