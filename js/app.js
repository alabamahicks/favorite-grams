var dummyResult1 = {
	source: 'http://dummyResult1',
	title: 'dummyResult1',
	thumbnail: img,
	notes: ""
};

var dummyResult2 = {
	source: 'http://dummyResult2',
	title: 'dummyResult2',
	thumbnail: img,
	notes: ""
};

var dummyResult3 = {
	source: 'http://dummyResult3',
	title: 'dummyResult3',
	thumbnail: img,
	notes: ""
};

var dummyResult4 = {
	source: 'http://dummyResult4',
	title: 'dummyResult4',
	thumbnail: img,
	notes: ""
};

var dummyResult5 = {
	source: 'http://dummyResult5',
	title: 'dummyResult5',
	thumbnail: img,
	notes: ""
};

var dummyResults = [dummyResult1, dummyResult2, dummyResult3, dummyResult4, dummyResult5];


function populateResults(){
	//take away all the previous results

	//put in all the new results (dummyResults)

}


$(document).ready(function () {
	event.preventDefault();
	var searchInput = $('#searchCriteria').val();
	getRequest(searchInput);
});


//$( document ).ready(function() {
//
//	//not need any listeners???
//
//	//$(document).on('click', 'li.addedItem'.each, function (e) {
//	//	//$(this).click(function (e) {
//	//		//TOGGLES CHECKED
//	//		//if ($(e.target).hasClass("checked")) {
//	//		//	$(e.target).removeClass("checked");
//	//		//} else {
//	//		//	//else add it
//	//		//	$(e.target).addClass("checked");
//	//		//}
//	//	//});
//	//});
//
//});

////UPON ENTER (13)
//$( document ).keydown(function( event ){
//	if (event.which == 13 ){
//		addOne($('input.entry-box').val());
//	}
//});








