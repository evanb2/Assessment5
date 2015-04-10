describe("makeTriangle", function() {
    it("returns false if the user inputs a non-triangle", function() {
        expect(makeTriangle(2, 2, 8)).to.equal("False");
    });
});
