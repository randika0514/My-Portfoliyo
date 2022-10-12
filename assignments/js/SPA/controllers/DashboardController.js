$("#dashboard").click(function (){
  $("#dashboardContent").css('display','block');
  $("#customerContent").css('display','none');
});

$("#customer").click(function (){
    $("#dashboardContent").css('display','none');
    $("#customerContent").css('display','block');
});