// business logic:


// user-interface logic:

$(document).ready(function() {
	$("form#character").submit(function(event) {
		event.preventDefault();
    var secondaryCharacter = $("input:radio[name=question1]:checked").val();
    var burgerTopping = $("input:radio[name=question2]:checked").val();
    var favoriteAccessory = $("input:radio[name=question3]:checked").val();
    var favoriteActivity = $("input:radio[name=question4]:checked").val();

    var result1;
      if (secondaryCharacter === "Gloria") {
        result1 = "Linda";
      } else if (secondaryCharacter === "Regular sized Rudy") {
        result1 = "Louise";
      } else if (secondaryCharacter === "Jimmy Pesto, Jr.") {
        result1 = "Tina";
      } else if (secondaryCharacter === "Courtney Wheeler") {
        result1 = "Gene";
			}

    var result2;
      if (burgerTopping === "pickles") {
        result2 = "Linda";
      } else if (burgerTopping === "cheese") {
        result2 = "Louise";
      } else if (burgerTopping === "peanut butter") {
        result2 = "Tina";
      } else if (burgerTopping === "onion rings") {
        result2 = "Gene";
  		}

    var result3;
      if (favoriteAccessory === "glasses") {
        result3 = "Linda";
      } else if (favoriteAccessory === "bunny ears") {
        result3 = "Louise";
      } else if (favoriteAccessory === "hair barrette") {
        result3 = "Tina";
      } else if (favoriteAccessory === "fart machine") {
        result3 = "Gene";
      }

    var result4;
      if (favoriteActivity === "singing") {
        result4 = "Linda";
      } else if (favoriteActivity === "pranks") {
        result4 = "Louise";
      } else if (favoriteActivity === "dancing") {
        result4 = "Tina";
      } else if (favoriteActivity === "playing the keyboard") {
        result4 = "Gene";
      }

    var result = (result1, result2, result3, result4)
		$("#output").text(result);
	});
});
