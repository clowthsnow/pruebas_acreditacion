describe('CP066',function(){
    it('Listar subarea de formacion', function(){
        cy.visit('/login');
        cy.get('#__BVID__11').type('acreditacionunsa@unsa.edu.pe');
        cy.get('#__BVID__13').type('Acreditac10n2020');
        cy.get('.btn').click();
        cy.wait(3000);
        //cy.get('.icon_menu').click();
        cy.visit('/process/1/studyPlan/2/formationArea/list');
        cy.wait(1000);
        cy.get('[aria-rowindex="1"] > [aria-colindex="2"] > :nth-child(1) > .container > .btn').click();
        cy.wait(1000);
        cy.get('#main').should('contain','Detalles del Area de Formacion')
        .and('contain','Sub-Area')
        .and('contain','Sub-Area de Formacion');
    });
});