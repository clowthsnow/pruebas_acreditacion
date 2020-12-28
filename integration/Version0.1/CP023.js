const testData = require("../fixtures/CP023.json");
describe('CP023',function(){
    beforeEach(function(){
        cy.visit('/login');
        cy.get('#__BVID__11').type('acreditacionunsa@unsa.edu.pe');
        cy.get('#__BVID__13').type('Acreditac10n2020');
        cy.get('.btn').click();
        cy.wait(3000);
    });   
    //Iteracion del dataset de pruebas
    
    Object.keys(testData).forEach((key) => {
        var archivo=testData[key]['archivo'];
        var resultado=testData[key]['resultado'];

        it("Informe de examen de entrada - " + key, function () {
            cy.visit('/Portfolio/1/ViewCourses/1/entranceExamination/report');
            cy.wait(1000);
            if(archivo != ''){
                cy.get('[class=excel-upload-input]').attachFile(archivo);
            }
            cy.wait(4000);            
            if(resultado === 'Archivo guardado'){
                cy.wait(5000);
                cy.get('.py-3 > :nth-child(3)').should('contain','Ya se ha subido un archivo.');
            }
            else{
                cy.get('.py-3 > :nth-child(3)').should('contain','Listado de alumnos');
            }
        });
    });
});