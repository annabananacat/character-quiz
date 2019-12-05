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
        result1 = 0;
      } else if (secondaryCharacter === "Regular sized Rudy") {
        result1 = 1;
      } else if (secondaryCharacter === "Jimmy Pesto, Jr.") {
        result1 = 2;
      } else if (secondaryCharacter === "Courtney Wheeler") {
        result1 = 3;
			}

    var result2;
      if (burgerTopping === "pickles") {
        result2 = 0;
      } else if (burgerTopping === "cheese") {
        result2 = 1;
      } else if (burgerTopping === "peanut butter") {
        result2 = 2;
      } else if (burgerTopping === "onion rings") {
        result2 = 3;
  		}

    var result3;
      if (favoriteAccessory === "glasses") {
        result3 = 0;
      } else if (favoriteAccessory === "bunny ears") {
        result3 = 1;
      } else if (favoriteAccessory === "hair barrette") {
        result3 = 2;
      } else if (favoriteAccessory === "fart machine") {
        result3 = 3;
      }

    var result4;
      if (favoriteActivity === "singing") {
        result4 = 0;
      } else if (favoriteActivity === "pranks") {
        result4 = 1;
      } else if (favoriteActivity === "dancing") {
        result4 = 2;
      } else if (favoriteActivity === "playing the keyboard") {
        result4 = 3;
      }

    var result5 = result1 + result2 + result3 + result4;

    var result;
      if (result5 <= 1) {
        result = "Linda";
      } else if (result5 > 1 && result5 <= 4) {
        result = "Louise";
      } else if (result5 > 4 && result5 <= 8) {
        result = "Tina";
      } else if (result5 > 8 && result5 <=12) {
        result = "Gene";
      }

		$("#output").text(result);
	});
});
