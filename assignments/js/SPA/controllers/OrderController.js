function loadAllCustomerForOrder(){
    $("#selectCusId").empty();
    for (let customer of customers){
        $("#selectCusId").append(`<option>${customer.name}</option>`);
    }
}

function loadAllItemForOrder(){
    $("#selectItemCode").empty();
    for (let i of items){
        $("#selectItemCode").append(`<option>${i.code}</option>`);
    }
}