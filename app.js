var settings = {
	async: true,
	crossDomain: true,
	url: "https://api-football-v1.p.rapidapi.com/v2/teams/league/${league}",
	method: "GET",
	headers: {
	  "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
	  "x-rapidapi-key": "72f03356e7mshc5b62ede1c4de43p1d3551jsnd2152fddfbf2",
	},
  };
  // Carousel
  let currentImgIndex = 0;
  let highestIndex = $(".carousel-images").children().length - 1;
  //next button
  $(".next").on("click", () => {
	event.preventDefault();
	console.log("next was clicked");
	//hide the current image
	$(".carousel-images").children().eq(currentImgIndex).css("display", "none");
	//wrap the carousel back to zero if on the last image:
	if (currentImgIndex < highestIndex) {
	  currentImgIndex++;
	} else {
	  currentImgIndex = 0;
	}
	//display the next image
	$(".carousel-images").children().eq(currentImgIndex).css("display", "block");
  });
  //previous button
  $(".previous").on("click", () => {
	event.preventDefault();
	console.log("previous was clicked");
	//hide the current image
	$(".carousel-images").children().eq(currentImgIndex).css("display", "none");
	//wrap the carousel back to zero if on the last image:
	if (currentImgIndex > 0) {
	  currentImgIndex--;
	} else {
	  currentImgIndex = highestIndex;
	}
	//display the previous image
	$(".carousel-images").children().eq(currentImgIndex).css("display", "block");
  });
  // Selector
  $(".leaguelogo").on("click", (event) => {
	event.preventDefault();
	const league = $(".carousel-images")
	  .children()
	  .eq(currentImgIndex)
	  .attr("id");
	$.ajax({
	  async: true,
	  crossDomain: true,
	  url: `https://api-football-v1.p.rapidapi.com/v2/teams/league/${league}`,
	  method: "GET",
	  headers: {
		"x-rapidapi-host": "api-football-v1.p.rapidapi.com",
		"x-rapidapi-key": "72f03356e7mshc5b62ede1c4de43p1d3551jsnd2152fddfbf2",
	  },
	}).done(function (response) {
	  console.log(response);
	  $(".middle").empty();
	  for (i = 0; i < response.api.teams.length; i++) {
		const mydiv = $("<div>").attr("class", "squad");
		mydiv.text(response.api.teams[i].name);
		$(".middle").append(mydiv);
	  }
	  // modal
	  const teams = $(".squad");
	  console.log(teams);
	  // teams.on("click", () => {
	  //   console.log("I was clicked");
	  $(".squad").click(function () {
		const teamsIndex = $(this).index();
		console.log(teamsIndex);
		modal.style.display = "block";
		$(".modalname").html(
		  "<b>Name</b> -  " + response.api.teams[teamsIndex].name
		);
		$(".modalfounded").html(
		  "<b>Founded</b> -  " + response.api.teams[teamsIndex].founded
		);
		$(".modalvenue").html(
		  "<b>Stadium</b> -  " + response.api.teams[teamsIndex].venue_name
		);
		$(".modalcity").html(
		  "<b>City</b> -  " + response.api.teams[teamsIndex].venue_city
		);
		$(".modalcountry").html(
		  "<b>Nation</b> -  " + response.api.teams[teamsIndex].country
		);
		$(".modallogo").html(
		  `<img src = "${response.api.teams[teamsIndex].logo}" width="150px">`
		);
	  });
	  //close on X
	  span.onclick = function () {
		modal.style.display = "none";
	  };
	  //close outside of modal
	  window.onclick = function (event) {
		if (event.target == modal) {
		  modal.style.display = "none";
		}
	  };
	});
  });
  // });
  // Get the modal
  var modal = document.getElementById("myModal");
  // Get the button that opens the modal
  var btn = document.getElementById("myBtn");
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
	modal.style.display = "none";
  };
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
	if (event.target == modal) {
	  modal.style.display = "none";
	}
  };
  // GRAVEYARD \\
  // "https://api-football-v1.p.rapidapi.com/v2/teams/league/2"
  // Modal
  // $('#team').html(response.api.teams[3].name)
  // $('#country').html(response.api.teams[3].country)
  // $('#logo').html(`<img src = "${response.api.teams[3].logo}" width="150px">`)
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