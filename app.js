var settings = {
	"async": true,
	"crossDomain": true,
    "url": "https://api-football-v1.p.rapidapi.com/v2/teams/league/${league}",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "api-football-v1.p.rapidapi.com",
		"x-rapidapi-key": "72f03356e7mshc5b62ede1c4de43p1d3551jsnd2152fddfbf2"
	}
}



// "https://api-football-v1.p.rapidapi.com/v2/teams/league/2"

$('#button').on('click', (event) => {
	event.preventDefault()
	
	const league = $('input').val();

	$.ajax({
		"async": true,
		"crossDomain": true,
		"url": `https://api-football-v1.p.rapidapi.com/v2/teams/league/${league}`,
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "api-football-v1.p.rapidapi.com",
			"x-rapidapi-key": "72f03356e7mshc5b62ede1c4de43p1d3551jsnd2152fddfbf2"
		}
	}).done(function (response) {
		console.log(response);

		// $('#team').html(response.api.teams[3].name)
		// $('#country').html(response.api.teams[3].country)
		// $('#logo').html(`<img src = "${response.api.teams[3].logo}" width="150px">`)

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