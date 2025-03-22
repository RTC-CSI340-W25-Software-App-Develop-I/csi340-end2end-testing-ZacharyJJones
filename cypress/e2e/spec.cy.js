/* eslint-disable no-undef */
describe("template spec", () => {
	beforeEach(() => {
		cy.visit("http://localhost:3000/");
	});

	it("Submits a new restaurant", () => {
		const testData = {
			name: "JoMcDurgy",
			address: "1800 SW Jorgen Dr. Seatac, WA",
			phone: "223-454-8655",
			// email: "jofamous@durgys.com",
			cuisine: "southern",
			rating: "4.87",
		};

		cy.get('[data-cy="input-name"]').type(testData.name);
		cy.get('[data-cy="input-address"]').type(testData.address);
		cy.get('[data-cy="input-phone"]').type(testData.phone);
		cy.get('[data-cy="input-cuisine"]').type(testData.cuisine);
		cy.get('[data-cy="input-rating"]').type(testData.rating);
		cy.get('[data-cy="rating-form"]').submit();

		// Validate restaurant added to list
		cy.get("[data-cy=" + testRestaurantName + "]").within(() => {
			cy.contains("li", testData.address).should("be.visible");
			cy.contains("li", testData.phone).should("be.visible");
			cy.contains("li", testData.cuisine).should("be.visible");
			cy.contains("li", testData.rating).should("be.visible");
		});
	});
});
