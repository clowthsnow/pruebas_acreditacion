const testData = require("../fixtures/CP007.json");
describe('CP002',function(){
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
            }else{
                cy.wait(2000);
                cy.get('#app').should('contain',resultado);
            }
            

        });
    });
});