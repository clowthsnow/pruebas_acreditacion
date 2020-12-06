const testData = require("../fixtures/CP058.json");
describe('CP058',function(){
    beforeEach(function(){
        cy.visit('/login');
        cy.get('#__BVID__11').type('acreditacionunsa@unsa.edu.pe');
        cy.get('#__BVID__13').type('Acreditac10n2020');
        cy.get('.btn').click();
        cy.wait(3000);
    });

    Object.keys(testData).forEach((key)=>{
        var visit = testData[key]['visit'];
        var nombre = testData[key]['nombre'];
        it('detallar un area de Formacion - '+key, function(){
            cy.visit(visit);
            cy.wait(1000);
            cy.get('.col-sm-9').should('contain', nombre)
            cy.get('.col-sm-7 > .btn').should('contain', "Crear Sub-Area de Formacion")
            cy.get('thead > tr > [aria-colindex="1"] > div').should('contain','Sub-Area')
            cy.get('thead > tr > [aria-colindex="2"] > div').should('contain','Acción')
        })       
    });
});