describe('sample run', function(){

    it('runs', function(){
        cy.visit('https://coops-test.pathfinder.gov.bc.ca');
        cy.get('image[alt="Province of British Columbia Logo"]');
    });
});