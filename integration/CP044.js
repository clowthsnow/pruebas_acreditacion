describe('CP044', function(){
    it('Ver detalle de Resultado de Estudiante',function(){
        cy.visit('/login');
        cy.get('#__BVID__11').type('acreditacionunsa@unsa.edu.pe');
        cy.get('#__BVID__13').type('Acreditac10n2020');
        cy.get('.btn').click();
        cy.wait(2000);
        cy.visit('/process/1/studyPlan/1/studentResult/3/detail');
        cy.wait(2000);
        cy.get(':nth-child(1) > .col-sm-3').should('contain', "Nombre")
        .and(':nth-child(2) > .col-sm-3').should('contain', "Descripción");
    })
});