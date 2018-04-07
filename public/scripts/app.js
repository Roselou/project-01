


$(document).ready(function(){
console.log('js is working')



// var allExh = [];

$.ajax ({
	method: 'GET',
	url: '/api/artists',
	success: handleSuccess,
	error: handleError
});

$.ajax({
	method: 'GET',
	url: '/api/exhibitions',
	success: function(allMyExh){
		console.log('getting', allMyExh);
		renderExhibition(allMyExh);
	}
})

$('#mainForm').on('submit', 'editExh',function(event){

	event.preventDefault();
	var newExh = $(this).serialize();
	console.log(newExh);
	$(this).trigger('reset');
	$.ajax({
		method: 'POST',
		url: '/api/exhibitions', 
		data: newExh,
		success: function onCreateSuccess(createdExhibition){
			console.log('posting', createdExhibition);
				renderExhibition(createdExhibition)
				console.log(renderExhibition);
		},
		error: handlePostError
	});
});


$('.sample-exhibitions').on('click', '#updateBtn', function(event){	
		event.preventDefault();

	debugger
	// var editForm = $(this).siblings();
  	var exhId = $(this).data('id');
  	console.log('editForm to edit', exhId);

  	debugger
	$(this).parent().append(`
	<form data-id="exhId" id="edit-form">
   	 <div class="form-group">
   	 	 <div class="form-group">
   			 <label for="exhibition-title">Exhibition Title</label>
   			 <input type="text" value="exhId.title" class="form-control"  data-id="exhibitionTitle" name="title" placeholder="ex: Art in the Age of the Internet">
 		 </div>
     	  <div class="form-group">
   			 <label for="exhibition-statement" >Exhibition Statement</label>
   			 <input type="text" value="exhId.statement" class="form-control" data-id= "exhibitionStatement" name="statement" placeholder="Describe Exhibition Statement">
 		 </div>
      <button type="submit" class="btn btn-outline-dark" id = "update-btn" data-id= "${exhId}" >Update Exhibition</button>
   	 </div>	
  	</form>	
	`)
	console.log('updating', updatedExhibition);
});

$('.sample-exhibitions').on('submit', '#edit-form', function(event){
	event.preventDefault();
	var exhId = $(this).data('id');

	console.log('*************', exhId);
	var formData = $(this).serialize();
	debugger
	// $(this).trigger('reset');
	$.ajax({
		method: 'PUT',
		url: '/api/exhibitions/' + exhId, 
		data: formData,
		success: function onUpdateSuccess(updatedExhibition){
			console.log('updating', updatedExhibition);
				
		},
		error: handlePostError
	});
})


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


function renderExhibition(exhibitionObj){
	for (var i = 0; i < exhibitionObj.length; i++){
		var createdExhibitions = (`
		  	<div class="card">
		      <h5 class="card-header">${exhibitionObj[i].title}</h5>
		      <div class="card-body">
		        <h5 class="card-title">${exhibitionObj[i].artists[0].name},
		        ${exhibitionObj[i].artists[1].name}, ${exhibitionObj[i].artists[2].name}</h5>

		        <h5 class="card-title">${exhibitionObj[i].location.location}</h5>
		        <p class="card-text">${exhibitionObj[i].statement}</p>
		        <a type = "submit" data-id="${exhibitionObj[i]._id}" id = "updateBtn" class="btn btn-primary">Update</a>
		        <a type = "submit" data-id="${exhibitionObj[i]._id}" id ="deleteBtn" class="btn btn-primary">Delete</a>
		      </div>

		    </div>
		    </div>
	    `)
     $('.sample-exhibitions').append(createdExhibitions);
	};
	//return exhibitionObj;
}




















