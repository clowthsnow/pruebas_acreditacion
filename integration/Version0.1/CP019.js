const testData = require("../fixtures/CP019.json");
describe('CP019',function(){
    beforeEach(function(){
        cy.visit('/login');
        cy.get('#__BVID__11').type('acreditacionunsa@unsa.edu.pe');
        cy.get('#__BVID__13').type('Acreditac10n2020');
        cy.get('.btn').click();
        cy.wait(3000);
        cy.visit('/Portfolio/1/ViewCourses/1/entranceExamination/solution');
        cy.wait(1000);
    });   
    //Iteracion del dataset de pruebas
    
    Object.keys(testData).forEach((key) => {
        var archivo=testData[key]['archivo'];
        var resultado=testData[key]['resultado'];

        it("Cargar solucion de examen de entrada - " + key, function () {
            cy.log(archivo);
            if(archivo != ''){
                cy.get('.custom-file-label').attachFile(archivo, { subjectType: 'drag-n-drop' });
            }
            cy.wait(4000);
            //cy.get('.btn-success').click();
            cy.get('.col-3 > .btn').click();
            
            if(resultado === 'Archivo guardado'){
                cy.wait(10000);
                cy.get('.swal-title').should('contain','El archivo se ha guardado correctamente');
                cy.get('.swal-button').click();
                cy.wait(1000);
                cy.get('#main').should('contain',resultado);
            }
            else{
                cy.get('.swal-title').should('contain','Debe seleccionar un archivo');
            }
        });
    });
});