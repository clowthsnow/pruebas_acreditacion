const testData = require("../fixtures/CP001.json");
describe('CP001',function(){
    beforeEach(function(){
        cy.visit('/login');
    });   
    //Iteracion del dataset de pruebas
    Object.keys(testData).forEach((key) => {
        var email=testData[key]['email'];
        var password=testData[key]['contraseña'];
        var resultado=testData[key]['resultado'];
        it("Ingreso al sistema - " + key, function () {
            if(email != ''){
                cy.get('#__BVID__11').type(email);
            }
            if(password != ''){
                cy.get('#__BVID__13').type(password);
            }
            cy.get('.btn').click();
            if(resultado === 'exitoso'){
                cy.wait(3000);
                cy.get('#main').should('contain','Procesos');
            }else{
                cy.get('#app > :nth-child(1)').should('contain',resultado);
            }
            
        });
    });
});