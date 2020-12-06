const testData = require("../fixtures/CP057.json");
describe('CPO57', function(){
    beforeEach(function(){
        cy.visit('/login');
        cy.get('#__BVID__11').type('acreditacionunsa@unsa.edu.pe');
        cy.get('#__BVID__13').type('Acreditac10n2020');
        cy.get('.btn').click();
        cy.wait(3000);
    });

    Object.keys(testData).forEach((key)=>{
        var nombre = testData[key]['nombre'];
        var resultado = testData[key]['resultado'];
        it('Crear Areas de Formacion - '+key, function(){
            cy.visit('process/1/studyPlan/3/formationArea/add');
            cy.wait(2000);
            var itemList =0;
            if(nombre!=''){
                cy.get('#input-1').type(nombre);
            }else{
                itemList++;
            }
            cy.get('.ml-3').click();
            cy.wait(2000);

            if(resultado == 'exito'){
                cy.get('.swal-title').should('contain', 'Area de formacion Creado Exitosamente!');
            }else if(resultado =='duplicado'){
                cy.get('.swal-text').should('contain','Ya existe una area de formación con ese nombre');
            }else if(resultado == 'nombre longitud'){ 
                cy.get('.msg').should('contain','Mínimo 2 y máximo 32 caracteres');
            }else if(resultado == 'caracter invalido'){
                cy.get('.msg').should('contain','No es un caracter válido');
            }
            /*else if(resultado == 'campo'){
                cy.get('#input-1').should('contain','Complete este campo');
            }*/
        })
    })
})