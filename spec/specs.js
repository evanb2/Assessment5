describe("makeTriangle", function() {
    it("returns false if the user inputs a non-triangle", function() {
        expect(makeTriangle(2, 2, 8)).to.equal("False");
    });

    it("returns 'equilateral' if the user inputs 3 equal numbers", function() {
        expect(makeTriangle(8, 8, 8)).to.equal("Equilateral");
    });
});
