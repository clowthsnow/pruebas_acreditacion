const testData = require("../fixtures/CP043.json");
describe('CPO43', function(){
    beforeEach (function(){
        cy.visit('/login');
        cy.get('#__BVID__11').type('acreditacionunsa@unsa.edu.pe');
        cy.get('#__BVID__13').type('Acreditac10n2020');
        cy.get('.btn').click();
        cy.wait(3000);
    });

    Object.keys(testData).forEach((key)=>{
        var nombre = testData[key]['nombre'];
        var descripcion = testData[key]['descripción'];
        var accion = testData[key]['accion'];
        it('Ver lista de Resultados del Estudiante - '+key, function(){
            cy.visit('/process/1/studyPlan/'+key+'/detail');
            cy.wait(2000);
            cy.get(':nth-child(8) > .col-sm-7 > .btn').click();
            cy.wait(500);
            cy.get('.card-body > .text-left').should('contain', nombre);
            cy.get('.card-body > .text-left').should('contain', accion);
            cy.get('.card-body > .text-left').should('contain', descripcion);
        })
    })
})