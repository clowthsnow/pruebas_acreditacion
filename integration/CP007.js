const testData = require("../fixtures/CP007.json");
describe('CP007',function(){
    beforeEach(function(){
        cy.visit('/login');
        cy.get('.redirec').click();
        cy.wait(2000);
    });   
    //Iteracion del dataset de pruebas

    Object.keys(testData).forEach((key) => {
        var email=testData[key]['email'];
        var resultado=testData[key]['resultado'];
        var opcion = testData[key]['opcion'];

        it("Recuperar cuenta de usuario - " + key, function () {

            if(email != ''){
                cy.get('[class=form-control]').eq(0).type(email);
                //cy.get('#__BVID__95').type(email);
            }
            if(opcion === 1){
                cy.get('.btn-success').click();
            }else{
                cy.get('.btn-danger').click();
            }
            
            if(resultado === 'exitoso'){
                cy.wait(4000);
                cy.get('.swal-title').should('contain','Se envió un correo a su email para recuperar la contraseña');
                cy.wait(1000);
                cy.get('.swal-button').click();
                cy.visit('/ResetPassword/MTM/5m9-51947dd03b304536e364');
                cy.wait(4000);
                cy.get('.form-control').eq(0).type('12345678');
                cy.get('.form-control').eq(1).type('12345678');
                cy.get('.btn').click();
                cy.wait(4000);
                cy.get('.swal-title').should('contain','Cambio de contraseña exitoso');
            }else{
                cy.wait(2000);
                cy.get('#app').should('contain',resultado);
            }
            

        });
    });
});