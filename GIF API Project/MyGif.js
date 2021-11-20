const app = {};

app.key = 'QzGhAk0Kwe1Qtx5CgOz7Ew41aOTFqSRf';

app.displayImages = function(gifs) {
  gifs.forEach(function(gif) {
    const gifHtml = `
      <div class="gif-box">
        <div class="img-box">
          <img src="${gif.images.original_still.url}" alt="${gif.title}"
        </div>
        <p class="gif-title">${gif.title}</p>
      </div>`;

    $('.results').append(gifHtml);
  });
};

app.getImages = function(query) {
  $.ajax({
    url: `http://api.giphy.com/v1/gifs/search`,
    method: 'GET',
    dataType: 'json',
    data: {
      api_key: app.key,
      q: query,
      format: 'json',
    },
  }).then(function(result) {
    $('.results').empty();
    app.displayImages(result.data);
  });
};

app.init = function() {
  $('form').on('submit', function (event) {
    event.preventDefault();
    const selection = $('input').val();
    app.getImages(selection);
  });
};

$(function () {
  app.init();
});




