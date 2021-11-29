/// <reference types="cypress" />

context('Mileage Tracker Tests', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000')
    })
  
     it('updateTracker() - Test that checks the name field functions correctly', () => {
      cy.get('#input-name')
        .type('Scott Boulter').should('have.value', 'Scott Boulter')
  
     })

     it('updateTracker() - Test that checks the mileage field functions correctly', () => {
        cy.get('#input-mileage')
          .type('5000').should('have.value', '5000')
    
      })
    
      it('addToTracker() - Test that checks a new employee can be added to the employeeArray array', () => {
        cy.get('#input-name')
        .type('Scott Boulter').should('have.value', 'Scott Boulter')
        .get('#input-mileage')
        .type('5000').should('have.value', '5000')

        cy.get('button[type=submit]')
        .click()

      })

      it('deleteFromTracker() - Test that checks an object can be deleted from the employeeArray array', () => {
        cy.get('#input-name')
        .type('Scott Boulter').should('have.value', 'Scott Boulter')
        .get('#input-mileage')
        .type('5000').should('have.value', '5000')

        cy.get('button[type=submit]')
        .click()

        cy.get('#mileage-tracker')
        .find('.delete')
        .click()

      })

      it('employeeDelete.addEventListener - Test that checks all objects can be deleted from the employeeArray array sucessfully', () => {
        cy.get('#input-name')
        .type('Scott Boulter').should('have.value', 'Scott Boulter')
        .get('#input-mileage')
        .type('5000').should('have.value', '5000')

        cy.get('button[type=submit]')
        .click()

        cy.get('#input-name')
        .type('David Murphy').should('have.value', 'David Murphy')
        .get('#input-mileage')
        .type('7500').should('have.value', '7500')

        cy.get('button[type=submit]')
        .click()

        cy.get('#input-name')
        .type('Rick Grimes').should('have.value', 'Rick Grimes')
        .get('#input-mileage')
        .type('10000').should('have.value', '10000')

        cy.get('button[type=submit]')
        .click()

        cy.get('#input-name')
        .type('Negan Smith').should('have.value', 'Negan Smith')
        .get('#input-mileage')
        .type('15000').should('have.value', '15000')

        cy.get('button[type=submit]')
        .click()

        cy.get('#delete-all')
        
        .click()

      })
    })