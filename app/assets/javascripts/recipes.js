
$(".recipes.index").ready(function() {
  if ($(".recipes.index").length) {
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
  };
});

$(document).ready(function() {
  if ($(".recipes.index").length) {
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
  };
});

$(document).ready(function() {
  if ($(".recipes.show").length) {
    $("#recipeIngredients").empty()
    recipe_string = "/recipes/" + $('h1').data("id");
    $.getJSON(recipe_string, function(recipe){
      $(".recipeName").text(recipe.name);
      $(".recipeInstructions").text(recipe.instructions);
      $(".recipeDuration").text(recipe.duration);
      $.each(recipe.recipe_ingredients, function(key, recipe_ingredient ){
        content = '<tr>'
        content = content + '<td>' + recipe_ingredient.ingredient_name + '</td>';
        content = content + '<td>' + recipe_ingredient.quantity + '</td>';
        content = content + '<td>' + recipe_ingredient.unit+ '</td>';
        content = content + '</tr>'
        $(content).appendTo("#recipeIngredients");
      });
    });
  };
});
