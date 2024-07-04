/* eslint-disable no-undef */
/// <reference types="Cypress" />

const pokemon = {
    id: 'smp-SM109',
    name: 'Pikachu',
    type: 'Lightning',
}

it('should display the searchbar', () => {
    cy.visit('localhost:3000');
    cy.get('input[type="text"]').should('exist');
});

it('should search for a pokemon', () => {
    cy.visit('localhost:3000');
    cy.get('input[type="text"]').type(pokemon.name);
    cy.get('button[type="submit"]').click();
    cy.contains(pokemon.name).should('exist');
});

it('should display the pokemon details', () => {

    cy.visit(`localhost:3000/pokemon?id=${pokemon.id}`);
    cy.contains(pokemon.id).should('exist');
    cy.contains(pokemon.name).should('exist');
    cy.contains(pokemon.type).should('exist');
})

it('should load a modal', () => {
    cy.visit(`localhost:3000/pokemon?id=${pokemon.id}`);
    cy.get('li').contains('Agility').click()
    cy.get('#modal-overlay').should('exist');
})