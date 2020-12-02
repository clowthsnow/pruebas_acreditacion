const testData = require("../fixtures/CP022.json");
describe('CP022',function(){
    beforeEach(function(){
        //cy.request('POST', '/login', { name: 'acreditacionunsa@unsa.edu.pe', password:'Acreditac10n2020' })
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
            cy.visit('/process/1/studyPlan/list');
            cy.wait(3000);
            cy.get('[aria-rowindex="4"] > [aria-colindex="2"] > :nth-child(1) > .container > .btn').click();
            cy.wait(1000);
            cy.visit('/process/1/studyPlan/4/detail');
            if(eliminar != 'no'){
                //cy.get('#infoModalundefined___BV_modal_footer_ > .btn-secondary').click();
                //cy.get('#main').should('contain',resultado);
            }else{
                //cy.get('#infoModalundefined___BV_modal_footer_ > .btn-primary').click();
                //cy.get('#main').should('contain',resultado);
            }
        });
    });
});