

$( document ).ready(function() {

	$(document).on('click', 'li.addedItem'.each, function (e) {
		//$(this).click(function (e) {
			//TOGGLES CHECKED
			//if ($(e.target).hasClass("checked")) {
			//	$(e.target).removeClass("checked");
			//} else {
			//	//else add it
			//	$(e.target).addClass("checked");
			//}
		//});
	});

});

//UPON ENTER (13)
$( document ).keydown(function( event ){
	if (event.which == 13 ){
		addOne($('input.entry-box').val());
	}
});



//STOPPED USING STOPPED USING STOPPED USING STOPPED USING
//DELETE ONE
$( document ).keydown(function( event ){
	if (event.which == 46 || event.which == 8){
		//find a selected li, pass to deleteOne( selectedItem )
		$('#list li.selected').remove();
	}
});




