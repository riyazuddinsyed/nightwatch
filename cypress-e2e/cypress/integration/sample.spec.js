describe('sample run', function(){

    it('runs', function(){
        cy.visit('https://google.ca');
        cy.get('img[alt="Google"]').should('be.visible');
    });
});