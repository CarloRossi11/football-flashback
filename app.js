var settings = {
	"async": true,
	"crossDomain": true,
    "url": "https://api-football-v1.p.rapidapi.com/v2/teams/league/2",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "api-football-v1.p.rapidapi.com",
		"x-rapidapi-key": "72f03356e7mshc5b62ede1c4de43p1d3551jsnd2152fddfbf2"
	}
}

$('#button').on('click', (event) => {
	event.preventDefault()
	
	// const team = $('input').val();

	$.ajax(settings).done(function (response) {
		console.log(response);

		$('#match').html(response.api.teams[3].name)


		});

})





    
//     $.ajax({
//         url: `https://api-football-v1.p.rapidapi.com/v2/leagues`,
//     }).then((data) => {
//         console.log(data);
//         $('#match').html(data[50].title)
//         $('#comp').html(data[50].competition.name)
//         $('#date').html(data[50].date)
//         $('#video').attr('href',data[50].url)
//         $('#video').text('game highlight')
//     },
//     () => {
//         console.log('bad request')
//     });


// const team = $('input').val();
// `http://omdbapi.com/?apikey=53aa2cd6&t=${movie}`