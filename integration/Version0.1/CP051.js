const testData = require("../fixtures/CP051.json");
describe('CP051',function(){
    before(function(){
       
        cy.visit('/login');
        cy.get('#__BVID__11').type('acreditacionunsa@unsa.edu.pe');
        cy.get('#__BVID__13').type('Acreditac10n2020');
        cy.get('.btn').click();
        cy.wait(3000);
        cy.visit('/process/1/studyPlan/1/studentResult/1/detail');
        cy.wait(1000);
    });   
    //Iteracion del dataset de pruebas
    
    Object.keys(testData).forEach((key) => {
        
        var eliminar=testData[key]['eliminar'];
        var resultado=testData[key]['resultado'];

        it("Eliminar criterio del resultado del estudiante - " + key, function () {
            //Presionamos el boton de eliminar
            cy.wait(3000);
            cy.get('[aria-rowindex="3"] > [aria-colindex="8"] > :nth-child(1) > .container > .row > :nth-child(2) > .btn').click();
             
            //Opciones para eliminar o cancelar
            if(eliminar != 'no'){           
                cy.get('.btn-primary').click();  
            }else{
                cy.get('#delete-modal___BV_modal_footer_ > .btn-secondary').click();   
            }

            //Confirmamos el mensaje de eliminación
            if (resultado == 'Criterio Eliminado Exitosamente!'){
                cy.get('.swal-modal').should('contain', 'Criterio Eliminado Exitosamente!')
            }

        });
    });
});