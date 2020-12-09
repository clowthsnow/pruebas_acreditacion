const testData = require("../fixtures/CP039.json");
describe('CP039',function(){
    beforeEach(function(){
        cy.visit('/login');
        cy.get('#__BVID__11').type('acreditacionunsa@unsa.edu.pe');
        cy.get('#__BVID__13').type('Acreditac10n2020');
        cy.get('.btn').click();
        cy.wait(3000);
    });   
    //Iteracion del dataset de pruebas
    
    Object.keys(testData).forEach((key) => {
        
        var eliminar=testData[key]['eliminar'];
        var resultado=testData[key]['resultado'];

        it("Eliminar Recurso - " + key, function () {
            cy.visit('/process/1/studyPlan/1/detail');
            cy.wait(3000);
            cy.get('.col-12 > :nth-child(2) > .btn').click();            
            if(eliminar != 'no'){
                cy.get('.btn-success').click();
                cy.get('.swal-title').should('contain',resultado);
            }else{
                cy.get('#delete-studyPlan-modal___BV_modal_footer_ > .btn-danger').click();
                cy.get('#main').should('contain',resultado);
            }
        });
    });
});