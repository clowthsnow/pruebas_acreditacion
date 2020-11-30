describe('CP010',function(){
    it('Detalle de procesos', function(){
        cy.visit('/login');
        cy.get('#__BVID__11').type('acreditacionunsa@unsa.edu.pe');
        cy.get('#__BVID__13').type('Acreditac10n2020');
        cy.get('.btn').click();
        cy.wait(3000);
        //cy.get('.icon_menu').click();
        cy.get('[href="#/process/list"]').click();
        cy.get('[aria-rowindex="4"] > [aria-colindex="5"] > :nth-child(1) > .container > .btn').click();
        cy.wait(1000);
        cy.get('#main').should('contain','Detalles del proceso')
        .and('contain','Nombre')
        .and('contain','Descripción')
        .and('contain','Fecha de inicio')
        .and('contain','Responsable')
        .and('contain','Estado');
    });
});