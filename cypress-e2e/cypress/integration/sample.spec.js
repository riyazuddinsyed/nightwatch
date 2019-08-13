describe('sample run', function(){

    it('runs', function(){
        cy.visit('https://google.ca');
        cy.get('image[alt="Google"]').should('be.visible');
    });
});