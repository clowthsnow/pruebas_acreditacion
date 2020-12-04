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
        it('Crear Resultados del Estudiante - '+key, function(){
            cy.visit('/process/1/studyPlan/1/studentResult/add');
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
            cy.get('.btn-success').click();
            cy.wait(2000);

            if(resultado == 'exito'){
                cy.get('.swal-title').should('contain', 'Resultado de Estudiante Creado Exitosamente!');
            }else if(resultado =='duplicado'){
                cy.get('.swal-title').should('contain','El Resultado de Estudiante no se ha creado');
            }else{ 
                //cy.get('#__BVID__78').should('contain','Mínimo 2 y máximo 32 caracteres');
            }
        })
    })

    /* beforeEach(function(){
        
    }) */
})