const testData = require("../fixtures/CP020.json");
describe('CP020',function(){
    beforeEach(function(){
        cy.visit('/login');
        cy.get('#__BVID__11').type('acreditacionunsa@unsa.edu.pe');
        cy.get('#__BVID__13').type('Acreditac10n2020');
        cy.get('.btn').click();
        cy.wait(3000);
    });   
    //Iteracion del dataset de pruebas
    
    Object.keys(testData).forEach((key) => {
        
        var conocimiento=testData[key]['conocimiento'];
        var resultado=testData[key]['resultado'];

        it("Crear conocimiento de examen de entrada - " + key, function () {
            cy.visit('/Portfolio/1/ViewCourses/1/entranceExamination/report');
            cy.wait(1000);
            if(key<7){
                cy.get(':nth-child(2) > :nth-child(2) > .btn').click();
                if(conocimiento != ''){
                    cy.get('[class=form-control]').eq(0).type(conocimiento);
                }
                cy.wait(3000);
                cy.get('#create-knowledge-modal___BV_modal_footer_ > .btn-primary').click();
                if(resultado === 'Examen de entrada'){
                    cy.wait(1000);
                    cy.get('#main').should('contain','Examen de entrada');
                }
                else{
                    cy.get(':nth-child(2) > .col-12').should('contain',conocimiento);
                }
            }else{
                cy.get(':nth-child(2) > :nth-child(2) > .btn').should('be.disabled');
            }
        });
    });
});