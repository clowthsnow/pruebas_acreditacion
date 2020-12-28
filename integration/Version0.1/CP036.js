describe('CP036',function(){
    it('Lista de Recursos', function(){
        cy.visit('/login');
        cy.get('#__BVID__11').type('acreditacionunsa@unsa.edu.pe');
        cy.get('#__BVID__13').type('Acreditac10n2020');
        cy.get('.btn').click();
        cy.wait(3000);
        cy.get('[aria-rowindex="1"] > [aria-colindex="5"] > :nth-child(1) > .container > .btn').click()
        cy.get('.card > .row > :nth-child(2) > .btn').click()
        
        cy.get('thead > tr > [aria-colindex="1"] > div').should('contain','Plan de Estudios')
        cy.get('thead > tr > [aria-colindex="2"] > div').should('contain','Acción')

    });
    
});