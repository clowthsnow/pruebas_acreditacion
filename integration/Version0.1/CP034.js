describe('CP034',function(){
    it('Búsqueda de procesos 1', function(){
        cy.visit('/login');
        cy.get('#__BVID__11').type('acreditacionunsa@unsa.edu.pe');
        cy.get('#__BVID__13').type('Acreditac10n2020');
        cy.get('.btn').click();
        cy.wait(3000);
        cy.get(':nth-child(3) > .btn').click();
        cy.get('#filterInput').type('epis');
        cy.get(':nth-child(2) > .custom-control-label').click();
        cy.get(':nth-child(3) > .custom-control-label').click();
        cy.get('#filterInput').clear();
        cy.get('#filterInput').type('cristian');
    });
    
    it('Búsqueda de procesos 2', function(){
        cy.visit('/login');
        cy.get('#__BVID__11').type('acreditacionunsa@unsa.edu.pe');
        cy.get('#__BVID__13').type('Acreditac10n2020');
        cy.get('.btn').click();
        cy.wait(3000);
        cy.get('#sortBySelect').select('name');
        cy.get('#sortBySelect').select('id_user');
        cy.get('#sortBySelect').select('started');
        cy.get('#sortBySelect').select('status');
    });

    it('Búsqueda de procesos 3', function(){
        cy.visit('/login');
        cy.get('#__BVID__11').type('acreditacionunsa@unsa.edu.pe');
        cy.get('#__BVID__13').type('Acreditac10n2020');
        cy.get('.btn').click();
        cy.wait(3000);
        cy.get('#perPageSelect').select('5');
        cy.get('#perPageSelect').select('10');
        cy.get('#perPageSelect').select('15');
    });

    it('Búsqueda de procesos 4', function(){
        cy.visit('/login');
        cy.get('#__BVID__11').type('acreditacionunsa@unsa.edu.pe');
        cy.get('#__BVID__13').type('Acreditac10n2020');
        cy.get('.btn').click();
        cy.wait(3000);
        cy.get('#perPageSelect').select('5');
        cy.get('#perPageSelect').select('10');
        cy.get('#perPageSelect').select('15');
    });
    
});