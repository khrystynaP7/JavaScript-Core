//Task 1
//$("a[href^='https://']").attr("target", "_blank");

//Task 2
//$("h2[class='head']").css('backgroundColor', 'green').find("[class='inner']").css('fontSize', '35px');

//Task 3
// $div = $('div')

// $.each( $div, function( key, value ) {
//   value.before("h3");
// });


$("div").insertBefore("h3");
$("h3+div").remove();
$.before("h3").remove("div")


//Task 4
//$("input").on("click", function() {this.addClass("checked")})