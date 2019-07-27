$(document).ready(function() {
  getMovieData();
  getTvData();
});

function getMovieData() {
  $.ajax({
    url:
      "https://api.themoviedb.org/3/discover/movie?api_key=d642b0816f29d948f7e39b683ef3d6ef&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1",
    type: "GET",
    dataType: "JSON",
    success: function(result) {
      for (var i = 0; i < result.results.length; i++) {
        $("#movies").append(` <div
        class="item"
        style="background-image: url(${"https://image.tmdb.org/t/p/w1400_and_h450_face" +
          result.results[i].backdrop_path})"
      >
        <h1>${result.results[i].title}</h1>
        <span>${result.results[i].release_date}</span>
      </div>`);
      }

      renderMovieSlick();
    },
    error: function(result) {
      debugger;
    }
  });
}

function renderMovieSlick() {
  $("#movies").slick({
    /*autoplay: true,*/
    autospeed: 10,
    dots: true,
    infinite: true,
    arrows: true
  });
}

function getTvData() {
  $.ajax({
    url:
      "https://api.themoviedb.org/3/discover/tv?api_key=d642b0816f29d948f7e39b683ef3d6ef&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false",
    type: "GET",
    dataType: "JSON",
    success: function(result) {
      for (var i = 0; i < result.results.length; i++) {
        $("#tv").append(` <div
        class="item"
        style="background-image: url(${"https://image.tmdb.org/t/p/w1400_and_h450_face" +
          result.results[i].backdrop_path})"
      >
        <h1>${result.results[i].name}</h1>
        <span>${result.results[i].first_air_date}</span>
      </div>`);
      }

      renderTvSlick();
    },
    error: function(result) {
      debugger;
    }
  });
}

function renderTvSlick() {
  $("#tv").slick({
    /*autoplay: true,*/
    autospeed: 10,
    dots: true,
    infinite: true,
    arrows: true
  });
}
