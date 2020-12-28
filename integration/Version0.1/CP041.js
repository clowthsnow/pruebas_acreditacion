const testData = require("../fixtures/CP041.json");
describe('CP041',function(){
    beforeEach(function(){
        cy.visit('/login');
        cy.get('#__BVID__11').type('acreditacionunsa@unsa.edu.pe');
        cy.get('#__BVID__13').type('Acreditac10n2020');
        cy.get('.btn').click();
        cy.wait(3000);
        
    });   
    //Iteracion del dataset de pruebas
    
    Object.keys(testData).forEach((key) => {
        
        var descripcion=testData[key]['descripcion'];
        var contenido=testData[key]['contenido'];
        var resultado=testData[key]['resultado'];

        it("Modificar sumilla - " + key, function () {
            cy.visit('/process/1/studyPlan/3/sommeliers/list');
            cy.wait(2000);
            cy.get('[aria-rowindex="1"] > [aria-colindex="2"] > :nth-child(1) > .container > .btn-secondary > .bi-pencil-square').click();
            //cy.get('[class=form-control]').clear();
            cy.get('#description').clear();
            cy.get('#contenid').clear();
            if(descripcion != ''){
                cy.get('#description').type(descripcion);
            }
            if(contenido != ''){
                cy.get('#contenid').type(contenido);
            }
            cy.wait(3000);
            cy.get('.btn-primary').click();
            if(resultado === 'Exitoso'){
                cy.wait(1000);
                cy.get('.swal-title').should('contain','Sumilla Actualizada Correctamente');
            }
            else{
                cy.get('.swal-title').should('contain','Datos incorrectos');
            
            }
        });
    });
});