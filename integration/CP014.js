describe('CP014',function(){
    it('Listar Fases de un proceso', function(){
        cy.visit('/login');
        cy.get('#__BVID__11').type('acreditacionunsa@unsa.edu.pe');
        cy.get('#__BVID__13').type('Acreditac10n2020');
        cy.get('.btn').click();
        cy.wait(3000);
        //cy.get('.icon_menu').click();
        cy.get('[href="#/process/list"]').click();
        cy.get('[aria-rowindex="3"] > [aria-colindex="5"] > :nth-child(1) > .container > .btn').click();
        cy.wait(1000);
        cy.get('#main').should('contain','Detalles del proceso')
        .and('contain','Nombre')
        .and('contain','Porcentaje')
        .and('contain','Estado')
        .and('contain','Proceso')
        .and('contain','Acción');
    });
});