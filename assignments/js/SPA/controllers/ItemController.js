$("#btnItemSave").click(function (){
   let itemCode = $("#txtItemCode").val();
   let itemName = $("#txtItemName").val();
   let itemQty = $("#txtItemQty").val();
   let itemPrice = $("#txtUnitPrice").val();

   var itemObject = {
       code:itemCode,
       name:itemName,
       qty:itemQty,
       price:itemPrice
   }

   items.push(itemObject);

   loadAllItem();

});


$("#btnItemUpdate").click(function (){
    let itemCode = $("#txtItemCode").val();
    let response = updateItem(itemCode);
    if (response){
        alert("Updated Successfully.....!");
        setItemTextFieldValues("", "" , "", "");
    }else {
        alert("Update Unsuccessfully.....!");
    }
});

$("#btnItemDelete").click(function () {
    let deleteItemCode = $("#txtItemCode").val();

    let option = confirm("Do you want Delete Customer ID : " + deleteItemCode);
    if (option){
        if (deleteItem(deleteItemCode)) {
            alert("Customer Successfully Deleted..");
            setItemTextFieldValues("", "", "", "");
        } else {
            alert("Please Check the Customer ID");
        }
    }
});

/*====================================*/

function loadAllItem(){
    $("#tblItem").empty();

    for (var item of items){
        var row = `<tr><td>${item.code}</td><td>${item.name}</td><td>${item.qty}</td><td>${item.price}</td></tr>`;
        $("#tblItem").append(row);
    }
}


function searchItem(itemCode){
    for (let item of items){
        if (item.code == itemCode){
            return item;
        }
    }
    return null;
}


function updateItem(itemCode){
    let item = searchItem(itemCode);
    if (item != null){
        item.code = $("#txtItemCode").val();
        item.name = $("#txtItemName").val();
        item.qty = $("#txtItemQty").val();
        item.price = $("#txtUnitPrice").val();

        loadAllItem();
        return true;
    }else {
        return false;
    }
}

function setItemTextFieldValues(code, name, qty, price){
    $("#txtItemCode").val(code);
    $("#txtItemName").val(name);
    $("#txtItemQty").val(qty);
    $("#txtUnitPrice").val(price);
}

$("#txtItemCode").on('keyup', function (event){
    if (event.code=="Enter"){
        let typedId = $("#txtItemCode").val();
        let item = searchItem(typedId);
        if (item != null) {
            setItemTextFieldValues(item.code, item.name ,item.qty, item.price);
        }else {
            alert("Not Available.....!");
            setItemTextFieldValues("", "", "", "");
        }
    }
});


function deleteItem(itemCode) {
    let item = searchItem(itemCode);
    if (item != null) {
        let indexNumber = items.indexOf(item);
        items.splice(indexNumber, 1);
        loadAllItem();
        return true;
    } else {
        return false;
    }
}