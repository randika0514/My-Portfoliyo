function loadAllCustomerForOrder(){
    $("#selectCusID").empty();
    for (let customer of customers){
        $("#selectCusID").append(`<option>${customer.id}</option>`);
    }
}

function loadAllItemForOrder(){
    $("#selectItemCode").empty();
    for (let i of items){
        $("#selectItemCode").append(`<option>${i.code}</option>`);
    }
}