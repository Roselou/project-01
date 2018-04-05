


$(document).ready(function(){
console.log('js is working')

$.ajax ({
	method: 'GET',
	url: '/api/artists',
	success: handleSuccess,
	error: handleError
});



$('#create-btn').on('click', function(e){
	e.preventDefault();
	$.ajax({
		method: 'POST',
		url: 'api/exhibitions', 
		data: $(this).serialize(),
		success: function(createdExhibition){
			renderExhibition(createdExhibition);
		},
		error: handlePostError
	});
	$(this).trigger('reset');
});



//DO NOT TOUCH 
});

function handleSuccess(artists){
	//console.log(artists)
	artistsInForm(artists);

}
	
function handleError(exhibitions){
	console.log('there has been an errerererere:', err);
}

function handlePostError(errs){
	console.log("there has been an errerrrererererererere:", err);
}

function artistsInForm(exhibition){
	console.log('rendering artists', exhibition);
	//debugger
	// var arrayOfArtists = exhibition.artists.map(function(eachArtist){
	// 	return `${eachArtist.name} - ${eachArtist.medium}`;
	// });
	//var formattedArtists = arrayOfArtists.join(', ')
	// var htmlTo

	var artists = exhibition
	artists.forEach(function(artist){
		var namesAppendForm1 = (
				`
       	 		<option> ${artist.name} </option>
       			`
       			);
		$('#artist1').append(namesAppendForm1);
		$('#artist2').append(namesAppendForm1);
		$('#artist3').append(namesAppendForm1);


	});
}

function renderExhibition(exhibition) {
  console.log(exhibition.title)
  var exhibition = exhibition.map(function(exhibitionArr){

  var title = exhibition.title
  var artist = exhibition.artists
  var location = exhibition.location
  var statement = exhibition.statement

  $('.sample-exhibitions').append(sampleExhibitions)

  
});
}





















