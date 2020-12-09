describe('CP009',function(){
    it('Listado de procesos', function(){
        cy.visit('/login');
        cy.get('#__BVID__11').type('acreditacionunsa@unsa.edu.pe');
        cy.get('#__BVID__13').type('Acreditac10n2020');
        cy.get('.btn').click();
        cy.wait(3000);
        //cy.get('.icon_menu').click();
        cy.get('.list-group-horizontal-md > .list-group-item').click();
        cy.get('#main').should('contain','Listado de Procesos')
        .and('contain','Nombre')
        .and('contain','Fecha de inicio')
        .and('contain','Responsable')
        .and('contain','Estado')
        .and('contain','Acción');        
    });
});