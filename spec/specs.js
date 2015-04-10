describe("makeTriangle", function() {
    it("returns false if the user inputs a non-triangle", function() {
        expect(makeTriangle(2, 2, 8)).to.equal("This is not a triangle!");
    });

    it("returns 'Equilateral' if the user inputs 3 equal numbers", function() {
        expect(makeTriangle(8, 8, 8)).to.equal("Your Triangle is Equilateral.");
    });

    it("returns 'Isosceles' if the user inputs any 2 equal sides", function() {
        expect(makeTriangle(3, 3, 2)).to.equal("Your Triangle is Isosceles.");
    });

    it("returns 'Scalene' if the user inputs 3 unique sides", function() {
        expect(makeTriangle(3, 4, 2)).to.equal("Your Triangle is Scalene.");
    });

    it("returns 'Isosceles' if the user inputs any 2 equal sides", function() {
        expect(makeTriangle(3, 3, 4)).to.equal("Your Triangle is Isosceles.");
    });
});
