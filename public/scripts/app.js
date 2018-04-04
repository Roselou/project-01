var sampleExhibition = [
	{
		title: 'Art in the Age of the Internet',
		artists: ['Hito Steyerl', 'Shigeko Kubota', 'Pipilotti Rist'],
		location: ['The Hammer'],
		statement: 'Art in the Age of the Internet, 1989 to Today examines how the internet has radically changed the field of art, especially in its production, distribution, and reception. The exhibition comprises a broad range of works across a variety of mediums—including painting, performance, photography, sculpture, video, and web-based projects—that all investigate the extensive effects of the internet on artistic practice and contemporary culture. Themes explored in the exhibition include emergent ideas of the body and notions of human enhancement; the internet as a site of both surveillance and resistance; the circulation and control of images and information; possibilities for new subjectivities, communities, and virtual worlds; and new economies of visibility initiated by social media.'
	},
	{
		title: 'Future Conscious',
		artists: ['Alicja Kwade', 'Alina Szapocznicow', 'Sophie Calle'],
		location: ['SF MOMA'],
		statement: 'Creating a safe space, real or imaginary that explicitly relates the relationship between time and space of that reflects upon our current political situation without being overly involved in the duress we currently face'
	}
]


$(document).ready(function(){
console.log('js is working')

$.ajax ({
	method: 'GET',
	url: '/api/artists',
	success: handleSuccess,
	error: handleError
});







//DO NOT TOUCH 
});

function handleSuccess(artists){
	//console.log(artists)
	renderExhibition(artists);

}
	
function handleError(exhibitions){

}

function renderExhibition(exhibition){
	console.log('rendering exhibition', exhibition);
	console.log(exhibition.artists);
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

	});
}



















