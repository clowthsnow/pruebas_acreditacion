describe('CP054',function(){
    it('Detalle de Competencia', function(){
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

        var comp = cy.get('[aria-rowindex="1"] > [aria-colindex="3"] > :nth-child(1) > .container > .btn');
        if (comp != null){
            cy.get('[aria-rowindex="1"] > [aria-colindex="3"] > :nth-child(1) > .container > .btn').click();
            cy.get(':nth-child(1) > .col-sm-3').should('contain', 'Nombre');
            cy.get(':nth-child(2) > .col-sm-3').should('contain', 'Descripción');
        }else {
            cy.visit('/process/1/studyPlan/1/competence/list');
        }
    });
});