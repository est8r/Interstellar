$("#show").click(function () {
  let date = $("#date").val();
  $.ajax({
    url: `https://api.nasa.gov/planetary/apod?api_key=SwCU3TEljvxDSa21ExdbTbCj7UKssHtLPjRZFGLC&date=${date}`,
    type: "GET",
    success: function (date) {
      console.log(date);
      $("#image").attr("src", date.url);
      $("#description").text(date.explanation);
      $("#title").text(date.title);
      if (date.media_type == "image") {
        $("#image").attr("src", date.url).show();
        $("#video").hide();
      } else if (date.media_type == "video") {
        $("#video").attr("src", date.url).show();
        $("#image").hide();
      }
    },
    error: function () {
      alert("Error, not found");
    },
  });
});

function calcu(output) {
  let image = $("#image");
  if (output.media_type == "image") {
    image.html(`<img class="img" src="${output.url}"/>`);
  }
}
