// $(function() {});

$(document).ready(function () {

    $("#loan-amount").click(function() {
        $("#loan-label").css("color", "black");
    });

    $("#apr").click(function() {
        $("#apr-label").css("color", "black");
    });



    // Attach a click listener to the calculate! button
    $("#submit").click(function () {

        // Grab the values from the text input boxes.
        var loanAmount = $("#loan-amount").val();
        var apr = $("#apr").val();

        // Try to convert the input values into JavaScript Numbers. Will give Nan if unable to convert.
        //loanAmount = parseInt(loanAmount);
        loanAmount = parseFloat(loanAmount);
        //apr = parseInt(apr);  // SHOULD BE FLOAT to include decimals(pennies)
        apr = parseFloat(apr);

        //console.log(apr);

        var error = "none";

        if (isNaN(loanAmount)) {
            error = "loan";
        } else if (isNaN(apr)) {
            error = "apr";
        }

        // Equation for finding out the interest for the "first" month.
        var interestPrice = loanAmount * ((apr / 100)/ 12);

        // Remove any extra decimal places and keep only up to hundredth place.
        interestPrice = interestPrice.toFixed(2);  // .toFixed rounds up a value to the 2 decimal point

        // Build the message we are going to send to the webpage.
        var resultsText = "You will owe an extra $" + interestPrice + " after 1 month.<br /> (Monthly Compounding Interest) ";

        // "Update" the contents of the paragraph with the string we built.
        if (error == "none") {
            $('#result-value').html(resultsText);
        } else if (error == "loan") { 
            $("#result-value").html("The value you provided for your loan is not a valid number!");
            $("#loan-label").css("color", "red");
        } else if (error == "apr") {
            $('#result-value').html("The value you provided for your APR percentage is not a valid number!");
            $("#apr-label").css("color", "red");
        }
        
        /*$("#result-value").html(resultsText);
        console.log(loanAmount, apr);*/

    });
});