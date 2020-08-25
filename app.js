$('form').on('submit', (event) => {
    event.preventDefault()

    // const team = $('input').val();

    $.ajax({
      url: `https://www.scorebat.com/video-api/v1/`,
    }).then((data) => {
      console.log(data[50]);
      $('#match').html(data[50].title)
      $('#comp').html(data[50].competition.name)
      $('#date').html(data[50].date)
      $('#video').html(data[50].url)
    
    },
    () => {
        console.log('bad request')
    });
})

// `http://omdbapi.com/?apikey=53aa2cd6&t=${movie}`




