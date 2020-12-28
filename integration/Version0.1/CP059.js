const testData = require("../fixtures/CP059.json");
describe('CPO59', function(){
    beforeEach (function(){
        cy.visit('/login');
        cy.get('#__BVID__11').type('acreditacionunsa@unsa.edu.pe');
        cy.get('#__BVID__13').type('Acreditac10n2020');
        cy.get('.btn').click();
        cy.wait(3000);
    });

    Object.keys(testData).forEach((key)=>{
        var nombre = testData[key]['nombre'];
        var resultado = testData[key]['resultado'];
        it('Modificar area de formacion - '+key, function(){
            cy.visit('process/1/studyPlan/3/formationArea/list');
            cy.wait(2000);
            cy.get('[aria-rowindex="4"] > [aria-colindex="2"] > :nth-child(1) > .container > .btn').click();
            cy.wait(2000);
            cy.get('.text-right > .btn').click();
            cy.wait(2000);

            var itemList =0;
            if(nombre!=''){
                cy.get('#input-1').clear();
                cy.get('#input-1').type(nombre);
            }else{
                itemList++;
            }           
            cy.wait(2000);
            
            if(resultado == 'exito'){                
                cy.get('.btn-success').click();
                cy.wait(2000);
                cy.get('.swal-modal').should('contain', 'Area de formacion Actualizado Exitosamente!');
            }else if(resultado == 'nombre longitud'){ 
                cy.get('.msg').should('contain', 'Mínimo 2 y máximo 32 caracteres');
            }else if(resultado == 'caracter invalido'){
                cy.get('.msg').should('contain','No es un caracter válido')
            }
            /*
            else if(resultado == 'vacio'){
                cy.get('.btn-success').click();
                cy.wait(2000);
                cy.get('#no hay esta parte').should('contain', 'Completa este campo');
            }
            */
        }) 
    })

})