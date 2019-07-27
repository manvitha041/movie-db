
$.ajax({
  url:
    "https://api.themoviedb.org/3/trending/movie/week?api_key=d642b0816f29d948f7e39b683ef3d6ef",
  type: "GET",
  dataType: "JSON",
  success: function(result) {
    for (var i = 0; i < result.results.length; i++) {
      $(".container").append(`<div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
  <div class="tile">
    <img src=${"https://image.tmdb.org/t/p/w370_and_h556_bestv2" +
      result.results[i].poster_path} class="tile-img-top" alt="...">
      <div class="tile-body">
        <div class="tile-title">
         <span class="outer-ring">${result.results[i].vote_average *
           10}<sup>%</sup></span> 
           <div class="wrapper">
             <a class="tile-name" href="#">${result.results[i].original_title}</a>
             <span class="tile-date">${result.results[i].release_date}</span>
           </div>
      </div>
      <div class="tile-text">
        <p class="overview">${result.results[i].overview}</p>
      </div>
      <div class="view-more">
        <a class="movie-info" href ="#">MORE INFO</a>
      </div>
      </div>
  </div>
</div>`);
    }
  },
  error: function(result) {
    debugger;
  }
});
