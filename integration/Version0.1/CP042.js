const testData = require("../fixtures/CP042.json");
describe('CPO42', function(){
    beforeEach (function(){
        cy.visit('/login');
        cy.get('#__BVID__11').type('acreditacionunsa@unsa.edu.pe');
        cy.get('#__BVID__13').type('Acreditac10n2020');
        cy.get('.btn').click();
        cy.wait(3000);
    });

    Object.keys(testData).forEach((key)=>{
        var nombre = testData[key]['nombre'];
        var descripcion = testData[key]['descripcion'];
        var resultado = testData[key]['resultado'];
        it('Crear Resultado del Estudiante - '+key, function(){
            cy.visit('/process/1/studyPlan/1/studentResult/list');
            cy.wait(2000);
            cy.get('[aria-rowindex="1"] > [aria-colindex="3"] > :nth-child(1) > .container > .btn').click();
            cy.wait(2000);
            cy.get(':nth-child(2) > .nav-link').click();
            cy.wait(2000);
            var itemList =0;
            if(nombre!=''){
                cy.get('#input-1').type(nombre);
            }else{
                itemList++;
            }
            if(descripcion!=''){
                cy.get('#input-2').type(descripcion);
            }else{
                itemList++;
            }

            cy.wait(2000);

            if(resultado == 'exito'){                
                cy.get('.btn-success').click();
                cy.wait(2000);
                cy.get('.swal-modal').should('contain', 'Resultado de Estudiante Creado Exitosamente!');
            }else if(resultado =='duplicado'){ 
                cy.get('.btn-success').click();
                cy.wait(2000);
                cy.get('.swal-modal').should('contain','El Resultado de Estudiante no se ha creado');
            }else if(resultado == 'nombre longitud'){ 
                cy.get(':nth-child(2) > .container').should('contain', 'Mínimo 2 y máximo 32 caracteres');
            }else if(resultado == 'nombre caracter'){ 
                cy.get(':nth-child(2) > .container').should('contain', 'No es un caracter válido');
            }else if(resultado == 'descripcion longitud'){ 
                cy.get(':nth-child(2) > .container').should('contain', 'Mínimo 1 caracteres y Máximo 420 caracteres');
            }else if(resultado == 'descripcion caracter'){ 
                cy.get(':nth-child(2) > .container').should('contain', 'No es un caracter válido');
            }else if(resultado == 'nombre vacio'){ 
                cy.get('#input-1').clear();
                cy.get(':nth-child(2) > .container').should('contain', 'Mínimo 2 y máximo 32 caracteres');
            }
        })
    })
})