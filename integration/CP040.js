describe('CP040',function(){
    it("Detalle de sumilla", function () {
        cy.visit('/login');
        cy.get('#__BVID__11').type('acreditacionunsa@unsa.edu.pe');
        cy.get('#__BVID__13').type('Acreditac10n2020');
        cy.get('.btn').click();
        cy.wait(3000);
        cy.visit('/process/1/studyPlan/3/detail');
        cy.wait(1000);
        cy.get(':nth-child(9) > .col-sm-7 > .btn').click();
        cy.wait(1000);
        cy.get('[aria-rowindex="1"] > [aria-colindex="2"] > :nth-child(1) > .container > .mr-1').click();
        cy.wait(1000);
        cy.get('#info-modal___BV_modal_body_').should('contain','Descripcion:')
        .and('contain','Contenido:');
    });
});