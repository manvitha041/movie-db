$.ajax({
  url:
    "https://api.themoviedb.org/3/person/popular?api_key=d642b0816f29d948f7e39b683ef3d6ef&language=en-US&page=1",
  type: "GET",
  dataType: "JSON",
  success: function(result) {
    for (var i = 0; i < result.results.length; i++) {
      $(".container .media").append(`
        <div class="profile-card">
        <div class="person-photo">
          <img src=${"https://image.tmdb.org/t/p/w370_and_h556_bestv2" +
            result.results[i].profile_path} alt="" class="person-image  fade-img" />
        </div>
        <div class="person-desc">
          <h3 class="person-name">${result.results[i].name}</h3>
          <p class="details">${result.results[i].known_for[0].title
          }</p>
        </div>
      </div>
        `);
    }
  },
  error: function(result) {
    debugger;
  }
});
