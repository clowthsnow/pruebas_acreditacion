describe('CP017',function(){
    it('Eliminacion de fase - no', function(){
        cy.visit('/login');
        cy.get('#__BVID__11').type('acreditacionunsa@unsa.edu.pe');
        cy.get('#__BVID__13').type('Acreditac10n2020');
        cy.get('.btn').click();
        cy.wait(3000);
        //cy.get('.icon_menu').click();
        cy.get('[href="#/process/list"]').click();
        cy.get('[aria-rowindex="3"] > [aria-colindex="5"] > :nth-child(1) > .container > .btn').click();
        cy.wait(1000);
        cy.get(':nth-child(3) > [aria-colindex="4"] > :nth-child(1) > .container > .btn').click();
        cy.wait(1000);
        cy.get(':nth-child(4) > .btn').click();
        //no
        cy.get('#delete-phase-modal___BV_modal_footer_ > .btn-secondary').click();
        cy.get('#main').should('contain','Detalles de la fase');
    });
    it('Eliminacion de fase - si', function(){
        cy.visit('/login');
        cy.get('#__BVID__11').type('acreditacionunsa@unsa.edu.pe');
        cy.get('#__BVID__13').type('Acreditac10n2020');
        cy.get('.btn').click();
        cy.wait(3000);
        //cy.get('.icon_menu').click();
        cy.get('[href="#/process/list"]').click();
        cy.get('[aria-rowindex="3"] > [aria-colindex="5"] > :nth-child(1) > .container > .btn').click();
        cy.wait(1000);
        cy.get(':nth-child(3) > [aria-colindex="4"] > :nth-child(1) > .container > .btn').click();
        cy.wait(1000);
        cy.get(':nth-child(4) > .btn').click();
        //si
        cy.get('.btn-primary').click();
        cy.get('.swal-title').should('contain', 'Fase Eliminado Exitosamente!');
    });
});