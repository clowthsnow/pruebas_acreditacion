const testData = require("../fixtures/CP060.json");
describe('CPO60', function(){
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
        it('Eliminar area de formacion - '+key, function(){
            cy.visit('process/1/studyPlan/3/formationArea/list');
            cy.wait(2000);
            cy.get('[aria-rowindex="4"] > [aria-colindex="2"] > :nth-child(1) > .container > .btn').click();
            cy.wait(2000);
            cy.get('.text-center > .btn').click();
            cy.wait(2000);

            if(eliminar=="si"){
                cy.get('.btn-success').click();
                cy.get('.swal-title').should('contain', resultado)
            }else if(eliminar=="no"){
                cy.get('#delete-formationArea-modal___BV_modal_footer_ > .btn-danger').click();
                cy.get('h3').should('contain', resultado);
            }
        })
    })
})