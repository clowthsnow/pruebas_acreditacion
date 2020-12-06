const testData = require("../fixtures/CP055.json");
describe('CPO55', function(){
    beforeEach (function(){
        cy.visit('/login');
        cy.get('#__BVID__11').type('acreditacionunsa@unsa.edu.pe');
        cy.get('#__BVID__13').type('Acreditac10n2020');
        cy.get('.btn').click();
        cy.wait(3000);
    });

    Object.keys(testData).forEach((key)=>{
        var nombre = testData[key]['nombre'];
        var descripcion =testData[key]['descripcion'];
        var resultado = testData[key]['resultado'];
        it('Modificar compentencia - '+key, function(){
            cy.visit('/process/1/studyPlan/3/competence/list');
            cy.wait(2000);
            cy.get('[aria-rowindex="4"] > [aria-colindex="3"] > :nth-child(1) > .container > .btn').click();
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
            if(descripcion!=''){
                cy.get('#input-2').clear();
                cy.get('#input-2').type(descripcion);
            }else{
                itemList++;
            }
            
            cy.wait(2000);
            
            if(resultado == 'exito'){                
                cy.get('.btn-success').click();
                cy.wait(2000);
                cy.get('.swal-modal').should('contain', 'Competencia Actualizado Exitosamente!');
            }else if(resultado =='duplicado'){
                cy.get('.btn-success').click();
                cy.wait(2000);
                cy.get('.swal-text').should('contain','Ya existe una competencia con ese nombre');
            }else if(resultado == 'nombre longitud'){ 
                cy.get('#__BVID__119 > .bv-no-focus-ring > .msg').should('contain', 'Mínimo 2 y máximo 32 caracteres');
            }else if(resultado == 'completa este campo'){
                cy.get('.btn-success').click();
                cy.wait(2000);
                cy.get('#__BVID__119 > .bv-no-focus-ring > .msg').should('contain', 'Completa este campo');
            }else if(resultado == 'descripcion invalida'){
                cy.get('#__BVID__121 > .bv-no-focus-ring > .msg').should('contain','No es un caracter válido')
            }else if(resultado == 'descripcion longitud'){
                cy.get('#__BVID__121 > .bv-no-focus-ring > .msg').should('contain','Mínimo 1 caracteres y Máximo 320 caracteres')
            }
        }) 
    })

})