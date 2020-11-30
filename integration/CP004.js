describe('CP004',function(){
    it('Detalle de usuarios', function(){
        cy.visit('/login');
        cy.get('#__BVID__11').type('acreditacionunsa@unsa.edu.pe');
        cy.get('#__BVID__13').type('Acreditac10n2020');
        cy.get('.btn').click();
        cy.wait(3000);
        //cy.get('.icon_menu').click();
        cy.get('[href="#/users/list"]').click();
        cy.get('[aria-rowindex="1"] > [aria-colindex="6"] > :nth-child(1) > .container > .btn').first().click();
        cy.wait(1000);
        cy.get('#main').should('contain','Perfil de usuario')
        .and('contain','Nombre')
        .and('contain','Apellido')
        .and('contain','Email')
        .and('contain','Rol')
        .and('contain','Estado');
        //foto.and('contain','Acción'); 
    });
});