const testData = require("../fixtures/CP056.json");
describe('CPO56', function(){
    beforeEach (function(){
        cy.visit('/login');
        cy.get('#__BVID__11').type('acreditacionunsa@unsa.edu.pe');
        cy.get('#__BVID__13').type('Acreditac10n2020');
        cy.get('.btn').click();
        cy.wait(3000);
    });

    Object.keys(testData).forEach((key)=>{
        var eliminar = testData[key]['eliminar'];
        var resultado = testData[key]['resultado'];
        it('Eliminar Competencia - '+key, function(){
            cy.visit('/process/1/studyPlan/3/competence/list');
            cy.wait(2000);
            cy.get('[aria-rowindex="5"] > [aria-colindex="3"] > :nth-child(1) > .container > .btn').click();
            cy.wait(2000);
            cy.get('.text-center > .btn').click();
            cy.wait(2000);

            if(eliminar=="si"){
                cy.get('.btn-primary').click();
                cy.get('.swal-title').should('contain', resultado)
            }else if(eliminar=="no"){
                cy.get('#delete-competence-modal___BV_modal_footer_ > .btn-secondary').click();
                cy.get('.col-4 > h2').should('contain', resultado);
            }
        })
    })
})