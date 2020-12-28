describe('CP003',function(){
    it('Listado de usuarios', function(){
        cy.visit('/login');
        cy.get('#__BVID__11').type('acreditacionunsa@unsa.edu.pe');
        cy.get('#__BVID__13').type('Acreditac10n2020');
        cy.get('.btn').click();
        cy.wait(3000);
        //cy.get('.icon_menu').click();
        cy.get('[href="#/users/list"]').click();
        cy.get('#main').should('contain','Listado de Usuarios')
        .and('contain','Nombre')
        .and('contain','Apellido')
        .and('contain','Correo')
        .and('contain','Rol')
        .and('contain','Estado')
        .and('contain','Acción');        
    });
});