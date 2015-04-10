describe("makeTriangle", function() {
    it("returns false if the user inputs a non-triangle", function() {
        expect(makeTriangle(2, 2, 8)).to.equal("This is not a triangle");
    });

    it("returns 'Equilateral' if the user inputs 3 equal numbers", function() {
        expect(makeTriangle(8, 8, 8)).to.equal("Equilateral");
    });

    it("returns 'Isosceles' if the user inputs any 2 equal sides", function() {
        expect(makeTriangle(3, 3, 2)).to.equal("Isosceles");
    });

    // it("returns 'Scalene' if the user inputs any 2 equal sides", function() {
    //     expect(makeTriangle(3, 3, 2)).to.equal("Isosceles");
    // });
});
