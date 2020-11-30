describe('CP006',function(){
    it('Eliminar usuario - No', function(){
        cy.visit('/login');
        cy.get('#__BVID__11').type('acreditacionunsa@unsa.edu.pe');
        cy.get('#__BVID__13').type('Acreditac10n2020');
        cy.get('.btn').click();
        cy.wait(3000);
        //cy.get('.icon_menu').click();
        cy.get('[href="#/users/list"]').click();
        cy.get('[aria-rowindex="5"] > [aria-colindex="6"] > :nth-child(1) > .container > .btn').click();
        cy.wait(1000);
        cy.get('.text-center.col > .btn').click();
        //no
        cy.get('#delete-user-modal___BV_modal_footer_ > .btn-secondary').click();
        cy.get('#main').should('contain','Perfil de usuario');
    });
    it('Eliminar usuario - Si', function(){
        cy.visit('/login');
        cy.get('#__BVID__11').type('acreditacionunsa@unsa.edu.pe');
        cy.get('#__BVID__13').type('Acreditac10n2020');
        cy.get('.btn').click();
        cy.wait(3000);
        //cy.get('.icon_menu').click();
        cy.get('[href="#/users/list"]').click();
        cy.get('[aria-rowindex="5"] > [aria-colindex="6"] > :nth-child(1) > .container > .btn').first().click();
        cy.wait(1000);
        cy.get('.text-center.col > .btn').click();
        cy.get('.btn-primary').click();
        cy.get('.swal-title').should('contain','Usuario Eliminado Exitosamente!');
    });
});