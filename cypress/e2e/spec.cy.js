describe('hello world landing page loads', () => {  
  beforeEach(() => {
    cy.visit('/')
  })

  it('has the boilerplate text', () => {
    cy.contains('Open up App.js')
  })

  it('displays the current system time', () => {
    cy.clock(new Date("2023-01-01T12:24:00"))
    cy.contains("12:24:00 PM")
  })
})