describe('CP048', function(){

    it('Listar criterios del resultado del estudiante', function(){
        cy.visit('/login');
        cy.get('#__BVID__11').type('acreditacionunsa@unsa.edu.pe');
        cy.get('#__BVID__13').type('Acreditac10n2020');
        cy.get('.btn').click();
        cy.wait(3000);
        //cy.get('.list-group-horizontal-md > .list-group-item').click();
        //cy.get('[aria-rowindex="1"] > [aria-colindex="5"] > :nth-child(1) > .container > .btn').click();
        //cy.get('.card > .row > :nth-child(2) > .btn').click();
        cy.visit('/process/1/studyPlan/1/studentResult/list');
        cy.get('[aria-rowindex="1"] > [aria-colindex="3"] > :nth-child(1) > .container > .btn').click();
        cy.get(':nth-child(2) > :nth-child(2) > [data-v-628acc34=""]').should('contain','Nombre')
        .and('contain', 'Descripcion')
        .and('contain','1 = Insatifactorio (25%)')
        .and('contain','2 = En proceso (50%)')
        .and('contain', '3 = Satisfactorio (75%)')
        .and('contain', '4 = Sobresaliente (100%)')
        .and('contain', 'Nivel')
        .and('contain', 'Acción');

    });

});