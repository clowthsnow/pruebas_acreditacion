const testData = require("../fixtures/CP065.json");
describe('CPO65', function(){
    beforeEach (function(){
        cy.visit('/login');
        cy.get('#__BVID__11').type('acreditacionunsa@unsa.edu.pe');
        cy.get('#__BVID__13').type('Acreditac10n2020');
        cy.get('.btn').click();
        cy.wait(2000);
        
    });

    Object.keys(testData).forEach((key)=>{
        var nombre = testData[key]['Nombre'];
        var respuesta = testData[key]['respuesta'];
        var resultado = testData[key]['resultado'];
        it('Crear sub area de formación - '+key, function(){
            cy.wait(2000);
            cy.visit('/process/1/studyPlan/1/formationArea/1/detail');
            cy.wait(2000);
            cy.visit('/process/1/studyPlan/1/formationArea/1/detail');
            cy.wait(1000);
            cy.get('.col-sm-7 > .btn').click();
            cy.wait(500);
            

            var itemList = 0;
            if(nombre !=""){
                cy.get('#name-subArea').type(nombre);
                cy.wait(1000);
            }else{
                itemList++;
            }
            if(resultado == "correcto"){
                cy.get('.btn-primary').click();
                cy.get('.swal-modal').should('contain', respuesta);
            }
            if(resultado == "duplicado"){
                cy.get('.btn-primary').click();
                cy.get('.swal-modal').should('contain', respuesta[0])
                .and('contain', respuesta[1]);
            }
            if(resultado == "nombre long max"|| resultado == "nombre long min" || resultado == "vacio"){
                cy.get('#create-subArea-modal___BV_modal_body_').should('contain', respuesta);
            }
            if(resultado == "nombre char"){
                cy.get('#create-subArea-modal___BV_modal_body_').should('contain', respuesta);
            }
        })
    })
})