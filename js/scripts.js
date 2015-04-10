var makeTriangle = function(side1, side2, side3) {

    var output = "";

    if (side1 + side2 < side3 || side2 + side3 < side1 || side1 + side3 < side2) {
        output = "This is not a triangle";
    } else if (side1 === side2 && side1 === side3) {
        output = "Equilateral";
    } else if (side1 === side2 || side2 === side3 || side1 === side3) {
        output = "Isosceles";
    } else if (side1 !== side2 && side1 !== side3 && side2 !== side3) {
        output = "Scalene";
    }

    return output;

};

$(document).ready(function() {
    $("form#triangle").submit(function(event) {
        var side1 = $("input#side1").val();
        var side2 = $("input#side2").val();
        var side3 = $("input#side3").val();
        var result = makeTriangle(side1, side2, side3);

        $(".newtriangle").text(result);

        $("#result").show();
        event.preventDefault();
    });
});
