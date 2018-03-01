
$(document).ready(function() {
  $("#recipes").empty()
  $.getJSON("/recipes", function(data){
    $.each(data, function(i, recipe) {
      content = '<tr>'
      content = content + '<td>' + recipe.name + '</td>';
      content = content + '<td>' + '<a href="/recipes/' + recipe.id + '">Show</a></td>'
      current_user_text = $.ajax({
                        type: "GET",
                        url: "/recipes/" + recipe.id + "/is_current_user",
                        async: false
                        }).responseText;
      var current_user = JSON.parse(current_user_text);
      if (current_user.response == true) {
        content = content + '<td>' + '<a href="/recipes/' + recipe.id + '/edit">Edit</a></td>'
      } else {
        content = content + '<td></td>'
      }
      content = content + '<td>' + '<a href="/recipes/' + recipe.id + ' data-method="DELETE">Delete</a></td>'
      content = content + '</tr>'
      $(content).appendTo("#recipes");
    });
  });
});


$(document).ready(function() {
  $("#quick_meals").empty()
  $.getJSON("/recipes", function(data){
    $.each(data, function(i, recipe) {
      if (recipe.duration <= 30) {
        content = '<tr>'
        content = content + '<td>' + recipe.name + '</td>';
        content = content + '<td>' + '<a href="/recipes/' + recipe.id + '">Show</a></td>'
        current_user_text = $.ajax({
                          type: "GET",
                          url: "/recipes/" + recipe.id + "/is_current_user",
                          async: false
                          }).responseText;
        var current_user = JSON.parse(current_user_text);
        if (current_user.response == true) {
          content = content + '<td>' + '<a href="/recipes/' + recipe.id + '/edit">Edit</a></td>'
        } else {
          content = content + '<td></td>'
        }
        content = content + '<td>' + '<a href="/recipes/' + recipe.id + ' data-method="DELETE">Delete</a></td>'
        content = content + '</tr>'
        $(content).appendTo("#quick_meals");
      }
    });
  });
});
