$("#dashboard").click(function (){
  $("#dashboardContent").css('display','block');
  $("#customerContent").css('display','none');
  $("#ItemContent").css('display','none');
});

$("#customer").click(function (){
    $("#dashboardContent").css('display','none');
    $("#customerContent").css('display','block');
    $("#ItemContent").css('display','none');
});

$("#item").click(function (){
    $("#ItemContent").css('display','block');
    $("#dashboardContent").css('display','none');
    $("#customerContent").css('display','none');
});