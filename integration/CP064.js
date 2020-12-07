const testData = require("../fixtures/CP064.json");
describe('CPO64', function(){
    beforeEach (function(){
        cy.visit('/login');
        cy.get('#__BVID__11').type('acreditacionunsa@unsa.edu.pe');
        cy.get('#__BVID__13').type('Acreditac10n2020');
        cy.get('.btn').click();
        cy.wait(2000);
        //Linea para funcionar sobre el error de ingreso al sistema
        cy.visit('/');
    });

    Object.keys(testData).forEach((key)=>{
        var eliminar = testData[key]['eliminar'];
        var resultado = testData[key]['resultado'];

        it('Eliminar curso de malla - '+key, function(){
            cy.wait(2000);
            cy.visit('/process/1/studyPlan/1/detail');
            cy.wait(2000);
            cy.visit('/process/1/curriculum/1/list');
            cy.wait(2000);
            cy.get('[aria-rowindex="1"] > [aria-colindex="2"] > :nth-child(1) > .container > .btn').click();
            cy.wait(1000);
            cy.get('.text-center > .btn').click();
            cy.wait(1000);
            if(eliminar=="si"){
                cy.get('.btn-primary').click();
                cy.get('.swal-modal').should('contain', resultado);
            }
            if(eliminar=="no"){
                cy.get('#delete-curse-modal___BV_modal_footer_ > .btn-secondary').click();
                cy.get('h2').should('contain', resultado);
            }
        })
    })
})