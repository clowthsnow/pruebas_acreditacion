describe('CP015',function(){
    it('Detalle de fases', function(){
        cy.visit('/login');
        cy.get('#__BVID__11').type('acreditacionunsa@unsa.edu.pe');
        cy.get('#__BVID__13').type('Acreditac10n2020');
        cy.get('.btn').click();
        cy.wait(3000);
        //cy.get('.icon_menu').click();
        cy.get('[href="#/process/list"]').click();
        cy.get('[aria-rowindex="3"] > [aria-colindex="5"] > :nth-child(1) > .container > .btn').click();
        cy.wait(1000);
        cy.get(':nth-child(1) > [aria-colindex="4"] > :nth-child(1) > .container > .btn').click();
        cy.wait(1000);
        cy.get('#main').should('contain','Detalles de la fase')
        .and('contain','Nombre')
        .and('contain','Descripción')
        .and('contain','Estado')
    });
});