describe('empty spec', () => {
  it('passes', () => {
   cy.visit('https://www.medicoverhospitals.in/hospitals/maharashtra/nashik/')
   //cy.contains('Telangana').click()
   cy.contains('Rate Us').click()
  })
})