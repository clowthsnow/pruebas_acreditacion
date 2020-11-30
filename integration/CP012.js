describe('CP012',function(){
    it('Eliminacion de procesos - no', function(){
        cy.visit('/login');
        cy.get('#__BVID__11').type('acreditacionunsa@unsa.edu.pe');
        cy.get('#__BVID__13').type('Acreditac10n2020');
        cy.get('.btn').click();
        cy.wait(3000);
        //cy.get('.icon_menu').click();
        cy.get('[href="#/process/list"]').click();
        cy.get('[aria-rowindex="1"] > [aria-colindex="5"] > :nth-child(1) > .container > .btn').click();
        cy.wait(1000);
        cy.get('.text-center > .btn').click();
        cy.wait(1000);
        //no
        cy.get('#delete-process-modal___BV_modal_footer_ > .btn-secondary').click();
        cy.get('#main').should('contain', 'Detalles del proceso');

    });
    it('Eliminacion de procesos - si', function(){
        cy.visit('/login');
        cy.get('#__BVID__11').type('acreditacionunsa@unsa.edu.pe');
        cy.get('#__BVID__13').type('Acreditac10n2020');
        cy.get('.btn').click();
        cy.wait(3000);
        //cy.get('.icon_menu').click();
        cy.get('[href="#/process/list"]').click();
        cy.get('[aria-rowindex="1"] > [aria-colindex="5"] > :nth-child(1) > .container > .btn').click();
        cy.wait(1000);
        cy.get('.text-center > .btn').click();
        cy.wait(1000);

        //si
        cy.get('.btn-primary').click();
        cy.get('#main').should('contain', 'Detalles del proceso');
    });
});