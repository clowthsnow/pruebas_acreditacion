const testData = require("../fixtures/CP022.json");
describe('CP022',function(){
    beforeEach(function(){
        //cy.request('POST', '/login', { name: 'acreditacionunsa@unsa.edu.pe', password:'Acreditac10n2020' })
        cy.visit('/login');
        cy.get('#__BVID__11').type('acreditacionunsa@unsa.edu.pe');
        cy.get('#__BVID__13').type('Acreditac10n2020');
        cy.get('.btn').click();
        cy.wait(3000);
        cy.visit('/ViewCourses/1/entranceExamination/report');
        cy.wait(1000);
    });   
    //Iteracion del dataset de pruebas
    
    Object.keys(testData).forEach((key) => {
        
        var eliminar=testData[key]['eliminar'];
        var resultado=testData[key]['resultado'];

        it("Eliminar conocimiento de examen de entrada - " + key, function () {
            cy.get(':nth-child(1) > [aria-colindex="3"] > .container > .btn-outline-danger').click();
            cy.get(':nth-child(1) > [aria-colindex="3"] > .container > .btn-outline-danger').click();
            //cy.get(':nth-child(1) > [aria-colindex="3"] > .container > .btn-outline-primary').click();
            //cy.get(':nth-child(2) > :nth-child(2) > .btn').click();
            
            if(eliminar != 'no'){
                cy.get('#infoModalundefined___BV_modal_footer_ > .btn-secondary').click();
                cy.get('#main').should('contain','Examen de entrada');
            }else{
                cy.get('#infoModalundefined___BV_modal_footer_ > .btn-primary').click();
                cy.get('#main').should('contain','Examen de entrada');
            }
        });
    });
});