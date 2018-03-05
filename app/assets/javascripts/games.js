var currentGame = {};

$(document).ready(function() {
  $(".game-item").on("click", function() {
    currentGame.id = this.dataset.id;
    $.ajax({
      url: "/games/" + currentGame.id + "/characters",
      type: "GET",
      dataType: "JSON"
    }).done(function(characters) {
      var list = $("#characters");
      list.empty();
      characters.forEach(function(char) {
        var li =
          '<li data-character-id="' +
          char.id +
          '">' +
          char.name +
          " - " +
          char.power +
          "</li>";
        list.append(li);
      });
    });
  });
});
