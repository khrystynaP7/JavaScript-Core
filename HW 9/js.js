//Task 1
//$("a[href^='https://']").attr("target", "_blank");

//Task 2
//$("h2[class='head']").css('backgroundColor', 'green').find("[class='inner']").css('fontSize', '35px');

//Task 3
// $("h3+div:first").insertBefore("h3:first");
// $("h3+div:last").insertBefore("h3:last");

//Task 4
let i = 0
let $inputs = $('input')
$('input').each(function(index) {
	$(this).on('click', function(){
	    $(this).attr('checked', 'checked'); 
	    i++;
	    if (i >= 3) {
			$('input').prop('disabled', true)
		}
	});
})
