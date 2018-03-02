
$(".recipes.index").ready(function() {
  if ($(".recipes.index").length) {
    $("#recipes").empty()
    $.getJSON("/recipes", function(data){
      $.each(data, function(i, recipe) {
        content = '<tr>'
        content += '<td>' + recipe.name + '</td>';
        content += '<td>' + '<a href="/recipes/' + recipe.id + '">Show</a></td>'
        current_user_text = $.ajax({
                          type: "GET",
                          url: "/recipes/" + recipe.id + "/is_current_user",
                          async: false
                          }).responseText;
        var current_user = JSON.parse(current_user_text);
        if (current_user.response == true) {
          content += '<td>' + '<a href="/recipes/' + recipe.id + '/edit">Edit</a></td>'
        } else {
          content += '<td></td>'
        }
        content += '<td>' + '<a href="/recipes/' + recipe.id + ' data-method="DELETE">Delete</a></td>'
        content += '</tr>'
        $(content).appendTo("#recipes");
      });
    });
  };
});

$(document).ready(function() {
  if ($(".recipes.index").length) {
    $("#quick_meals").empty()
    $.getJSON("/recipes", function(data){
      $.each(data, function(i, recipe) {
        if (recipe.duration <= 30) {
          content = '<tr>'
          content += '<td>' + recipe.name + '</td>';
          content += '<td>' + '<a href="/recipes/' + recipe.id + '">Show</a></td>'
          current_user_text = $.ajax({
                            type: "GET",
                            url: "/recipes/" + recipe.id + "/is_current_user",
                            async: false
                            }).responseText;
          var current_user = JSON.parse(current_user_text);
          if (current_user.response == true) {
            content += '<td>' + '<a href="/recipes/' + recipe.id + '/edit">Edit</a></td>'
          } else {
            content += '<td></td>'
          }
          content += '<td>' + '<a href="/recipes/' + recipe.id + ' data-method="DELETE">Delete</a></td>'
          content += '</tr>'
          $(content).appendTo("#quick_meals");
        }
      });
    });
  };
});

$(document).ready(function() {
  if ($(".recipes.show").length) {
    $("#recipeIngredients").empty()
    $("#recipeComments").empty()
    recipe_string = "/recipes/" + $('h1').data("id");
    $.getJSON(recipe_string, function(recipe){
      $(".recipeName").text(recipe.name);
      $(".recipeInstructions").text(recipe.instructions);
      $(".recipeDuration").text(recipe.duration);
      $.each(recipe.recipe_ingredients, function(key, element){
        var recipe_ingredient = element
        content = '<tr>'
        content += '<td>' + recipe_ingredient.ingredient_name + '</td>';
        content += '<td>' + recipe_ingredient.quantity + '</td>';
        content += '<td>' + recipe_ingredient.unit+ '</td>';
        content += '</tr>'
        $(content).appendTo("#recipeIngredients");
      });
      $.each(recipe.comments, function(key, element){
        var comment = new Comment(element);
        comment.displayComment();
      });
    });
  };
});

function Comment(data) {
  this.id = data.id;
  this.recipe_id = data.recipe_id
  this.user_id = data.user_id
  this.body = data.body;
  this.user_email = data.user_email
}

Comment.prototype.displayComment = function() {
  var content = "" ;
  content += "<p><hr><b>User:</b> " + this.user_email + "</p><p><b>Comment:</b> " + this.body + "</p>";
  $("#recipeComments").append(content);
}
