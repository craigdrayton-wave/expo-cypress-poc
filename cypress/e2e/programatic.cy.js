describe('Test multiple scenarios programatically', () => {
    it('Test 1', () => {
        cy.fixture("scenarios.json")
        .its('scenarios')
        .then((scenarios) => {
            scenarios.forEach((scenario) => {
                expect(scenario.firstNumber + scenario.secondNumber).to.eq(scenario.expectedSum)
            })
        })
    })
})