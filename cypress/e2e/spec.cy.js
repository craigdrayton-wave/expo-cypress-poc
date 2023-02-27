describe('hello world landing page loads', () => {  
  beforeEach(() => {
    cy.visit('/')
  })

  it('has the boilerplate text', () => {
    cy.contains('Open up App.js')
  })
})