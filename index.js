$("#video").hide();
$("#show").click(function () {
  let date = $("#date").val();
  $.ajax({
    url: `https://api.nasa.gov/planetary/apod?api_key=SwCU3TEljvxDSa21ExdbTbCj7UKssHtLPjRZFGLC&date=${date}`,
    type: "GET",
    success: function (date) {
      console.log(date);
      $("#title").text(date.title);
      $("#image").attr("src", date.url);
      $("#description").text(date.explanation);
      if (date.media_type == "video") {
        $("#video").attr("src", date.url).show();
        $("#image").hide();
      } else if (date.media_type == "image") {
        $("#image").attr("src", date.url).show();
        $("#video").hide();
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
  } else {
    image.html(
      `<iframe class="vd" src="${output.url}autoplay=1&mute=1"></iframe>`
    );
  }
}
