var makeTriangle = function(side1, side2, side3) {

    var output = "Your Triangle is ";

    if (side1 + side2 < side3 || side2 + side3 < side1 || side1 + side3 < side2
        || side1 === 0 ||side2 === 0 || side3 ===0) {
        output = "This is not a triangle!";
    } else if (side1 === side2 && side1 === side3) {
        output += "Equilateral.";
    } else if (side1 === side2 || side2 === side3 || side1 === side3) {
        output += "Isosceles.";
    } else {
        output += "Scalene.";
    }

    return output;

};

$(document).ready(function() {
    $("#side1").focus();
    $("form#triangle").submit(function(event) {
        var side1 = parseInt($("input#side1").val());
        var side2 = parseInt($("input#side2").val());
        var side3 = parseInt($("input#side3").val());
        var result = makeTriangle(side1, side2, side3);

        $(".newtriangle").text(result);

        $("#result").show();
        event.preventDefault();
    });
});
