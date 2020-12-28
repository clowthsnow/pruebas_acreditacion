describe('CP012',function(){
    it('Eliminacion de procesos - no', function(){
        cy.visit('/login');
        cy.get('#__BVID__11').type('acreditacionunsa@unsa.edu.pe');
        cy.get('#__BVID__13').type('Acreditac10n2020');
        cy.get('.btn').click();
        cy.wait(3000);
        cy.visit('/process/3/detail');
        cy.wait(1000);
        cy.get(':nth-child(4) > .btn').click();
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
        cy.visit('/process/3/detail');
        cy.wait(1000);
        cy.get('.text-right > .btn').click();
        cy.wait(1000);

        //si
        cy.get('#delete-process-modal___BV_modal_footer_ > .btn-primary').click();
        cy.get('#main').should('contain', 'Detalles del proceso');
    });
});