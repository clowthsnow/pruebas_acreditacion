describe('CP053',function(){
    it('Listado de Competencias', function(){
        cy.visit('/login');
        cy.get('#__BVID__11').type('acreditacionunsa@unsa.edu.pe');
        cy.get('#__BVID__13').type('Acreditac10n2020');
        cy.get('.btn').click();
        cy.wait(3000);

        cy.get('[aria-rowindex="1"] > [aria-colindex="5"] > :nth-child(1) > .container > .btn').click();
        cy.wait(1000);

        cy.get('[href="#/process/1/studyPlan/list"]').click();
        cy.get('[aria-rowindex="3"] > [aria-colindex="2"] > :nth-child(1) > .container > .btn').click();
        cy.get(':nth-child(7) > .col-sm-7 > .btn').click();
        cy.wait(1000);

        cy.get('thead > tr > [aria-colindex="1"] > div').should('contain', 'Competencias');
        cy.get('thead > tr > [aria-colindex="2"] > div').should('contain', 'Descripcion');
        cy.get('thead > tr > [aria-colindex="3"] > div').should('contain', 'Acción');

    });
});