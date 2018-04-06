


$(document).ready(function(){
console.log('js is working')

var baseUrl =  '/api/exhibitions';

var allExh = [];

$.ajax ({
	method: 'GET',
	url: '/api/artists',
	success: handleSuccess,
	error: handleError
});

$.ajax({
	method: 'GET',
	url: 'api/exhibitions',
	success: function(allMyExh){
		console.log(allMyExh);
		pageExhibition(allMyExh);
	}
})

$('#mainForm').on('submit', function(e){
	e.preventDefault();
	// var form = $(this).serialize();
 //    var data = ($(this)).serialize()
	// var formData = form.serialize();
	var newExh = $(this).serialize();
	console.log(newExh);
	$(this).trigger('reset');
	$.ajax({
		method: 'POST',
		url: baseUrl, 
		data: newExh,
		success: function onCreateSuccess(createdExhibition){
			console.log(createdExhibition);
				// allExh.push(createdExhibition);
				renderExhibition(createdExhibition)
		},
		error: handlePostError
	});
	$(this).trigger('reset');
});

// $('#create-btn').on('click', function(e){
// 	e.preventDefault();
// 	var form = $(this).closest('form');
//     var data = ($(this)).serialize()
// 	var formData = form.serialize();
// 	var form = $('#mainForm');
// 	console.log(form)
// 	// debugger
// 	$(this).trigger('reset');
// 	$.ajax({
// 		method: 'POST',
// 		url: $(form).attr('action'), 
// 		data: formData,
// 		success: function(createdExhibition){
// 			renderExhibition(createdExhibition);
// 		},
// 		error: handlePostError
// 	});
// 	$(this).trigger('reset');
// });



//DO NOT TOUCH - DOCUMENT.READY
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

function artistsInForm(artists){
	console.log('rendering artists', artists);
	//debugger
	// var arrayOfArtists = exhibition.artists.map(function(eachArtist){
	// 	return `${eachArtist.name} - ${eachArtist.medium}`;
	// });
	//var formattedArtists = arrayOfArtists.join(', ')
	// var htmlTo

	// var artists = exhibition
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

function pageExhibition(exhibition) {
  console.log('rendering exhibition samples', exhibition);
 //exhibition.forEach(function(eachExh){
			
	var displayedExhibitions = (`
	  	<div class="card">
	      <h5 class="card-header">${exhibition[0].title}</h5>
	      <div class="card-body">
	        <h5 class="card-title">${exhibition[0].artists[0].name},
	        ${exhibition[0].artists[1].name}, ${exhibition[0].artists[2].name}</h5>
	        <h5 class="card-title">${exhibition[0].location.location}</h5>
	        <p class="card-text">Art in the Age of the Internet, 1989 to Today examines how the internet has radically changed the field of art, especially in its production, distribution, and reception. The exhibition comprises a broad range of works across a variety of mediums—including painting, performance, photography, sculpture, video, and web-based projects—that all investigate the extensive effects of the internet on artistic practice and contemporary culture. Themes explored in the exhibition include emergent ideas of the body and notions of human enhancement; the internet as a site of both surveillance and resistance; the circulation and control of images and information; possibilities for new subjectivities, communities, and virtual worlds; and new economies of visibility initiated by social media.</p>
	        <a href="#" class="btn btn-primary">Update</a>
	        <a href="#" class="btn btn-primary">Delete</a>
	      </div>
	    </div>
	    </div>
	    <div class = "sample-exhibitions">
	      <div class="card">
	      <h5 class="card-header">${exhibition[1].title}</h5>
	      <div class="card-body">
	        <h5 class="card-title">${exhibition[1].artists[0].name}, 
	        ${exhibition[1].artists[1].name}, ${exhibition[1].artists[2].name}</h5>
	        <h5 class="card-title">${exhibition[1].location.location}</h5>
	        <p class="card-text">Creating a safe space, real or imaginary that explicitly relates the relationship between time and space of that reflects upon our current political situation without being overly involved in the duress we currently face.</p>
	        <a href="#" class="btn btn-primary">Update</a>
	        <a href="#" class="btn btn-primary">Delete</a>
	      </div>
	    </div>
    `)
	  return $('.sample-exhibitions').append(displayedExhibitions);
	//})
  
};

function renderExhibition(exhibition){
	var createdExhibitions = (`
	  	<div class="card">
	      <h5 class="card-header">${exhibition.title}</h5>
	      <div class="card-body">
	        <h5 class="card-title">${exhibition.artists.name},
	        ${exhibition.artists.name}, ${exhibition.artists.name}</h5>
	        <h5 class="card-title">${exhibition.location}</h5>
	        <p class="card-text">Art in the Age of the Internet, 1989 to Today examines how the internet has radically changed the field of art, especially in its production, distribution, and reception. The exhibition comprises a broad range of works across a variety of mediums—including painting, performance, photography, sculpture, video, and web-based projects—that all investigate the extensive effects of the internet on artistic practice and contemporary culture. Themes explored in the exhibition include emergent ideas of the body and notions of human enhancement; the internet as a site of both surveillance and resistance; the circulation and control of images and information; possibilities for new subjectivities, communities, and virtual worlds; and new economies of visibility initiated by social media.</p>
	        <a href="#" class="btn btn-primary">Update</a>
	        <a href="#" class="btn btn-primary">Delete</a>
	      </div>
	    </div>
	    </div>
	    <div class = "sample-exhibitions">
	      <div class="card">
	      <h5 class="card-header">${exhibition.title}</h5>
	      <div class="card-body">
	        <h5 class="card-title">${exhibition.artists.name}, 
	        ${exhibition.artists.name}, ${exhibition.artists.name}</h5>
	        <h5 class="card-title">${exhibition.location}</h5>
	        <p class="card-text">Creating a safe space, real or imaginary that explicitly relates the relationship between time and space of that reflects upon our current political situation without being overly involved in the duress we currently face.</p>
	        <a href="#" class="btn btn-primary">Update</a>
	        <a href="#" class="btn btn-primary">Delete</a>
	      </div>
	    </div>
    `)
    return $('.sample-exhibitions').prepend(createdExhibitions);
	//})


}




















