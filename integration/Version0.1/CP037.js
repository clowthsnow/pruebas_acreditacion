describe('CP037',function(){
    it('Detalle de Recurso', function(){
        cy.visit('/login');
        cy.get('#__BVID__11').type('acreditacionunsa@unsa.edu.pe');
        cy.get('#__BVID__13').type('Acreditac10n2020');
        cy.get('.btn').click();
        cy.wait(3000);

        //cy.get('[href="#/process/list"]').click();
        cy.get('[aria-rowindex="1"] > [aria-colindex="5"] > :nth-child(1) > .container > .btn').click()
        cy.wait(1000)
        //cy.get('[href="#/process/1/studyPlan/list"]').click()
        cy.get('.card > .row > :nth-child(2) > .btn').click()
        cy.get('[aria-rowindex="1"] > [aria-colindex="2"] > :nth-child(1) > .container > .btn').click()

        cy.get(':nth-child(1) > .col-sm-3').should('contain', 'Nombre')
        cy.get(':nth-child(2) > .col-sm-3').should('contain', 'Descripción')
        cy.get(':nth-child(3) > .col-sm-3').should('contain', 'Responsable')
        cy.get(':nth-child(4) > .col-sm-3').should('contain', 'Porcentaje')
        cy.get(':nth-child(5) > .col-sm-3').should('contain', 'Malla Curricular')
        cy.get(':nth-child(6) > .col-sm-3').should('contain', 'Áreas de formación')
        cy.get(':nth-child(7) > .col-sm-3').should('contain', 'Competencias')
        cy.get(':nth-child(8) > .col-sm-3').should('contain', 'Resultados del estudiante')
        cy.get(':nth-child(9) > .col-sm-3').should('contain', 'Sumilla')
        cy.get(':nth-child(10) > .col-sm-3').should('contain', 'Match Cursos vs Resultados')
        cy.get(':nth-child(11) > .col-sm-3').should('contain', 'Match Cursos vs Competencias')
        cy.get(':nth-child(12) > .col-sm-3').should('contain', 'Match Competencias vs Resultados')
        
    });
});