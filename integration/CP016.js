const testData = require("../fixtures/CP016.json");
describe('CP016',function(){
    beforeEach(function(){
        cy.visit('/login');
        cy.get('#__BVID__11').type('acreditacionunsa@unsa.edu.pe');
        cy.get('#__BVID__13').type('Acreditac10n2020');
        cy.get('.btn').click();
        cy.wait(3000);
        //cy.get('.icon_menu').click();
        /*cy.get('[href="#/process/list"]').click();
        cy.get('[aria-rowindex="3"] > [aria-colindex="5"] > :nth-child(1) > .container > .btn').click();
        cy.wait(1000);
        cy.get('.text-right > .btn').click();
        cy.wait(2000);*/
        cy.visit('/phase/1/detail');
        cy.wait(1000);
        cy.get(':nth-child(3) > .btn').click();
        cy.wait(2000);
    });   
    //Iteracion del dataset de pruebas
    
    Object.keys(testData).forEach((key) => {
        var nombre=testData[key]['nombre'];
        var descripcion=testData[key]['descripcion'];
        var resultado=testData[key]['resultado'];

        it("Modificar fase - " + key, function () {
            
            if(nombre != ''){
                cy.get('#input-1').clear();
                cy.get('#input-1').type(nombre);
            }else{
                cy.get('#input-1').clear();
            }
            if(descripcion != ''){
                cy.get('#input-2').clear();
                cy.get('#input-2').type(descripcion);
            }else{
                cy.get('#input-2').clear();
            }
            
            
            cy.get('.btn-success').click();
            
            if(resultado === 'exitoso'){
                cy.wait(2000);
                cy.get('.swal-title').should('contain','Fase Actualizada Exitosamente!');
                cy.get('.swal-button').click();
                cy.wait(1000);
                cy.get('#main').should('contain',nombre);
            }else if(resultado === 'No se editó la fase'){
                cy.wait(3000);
                cy.get('.swal-title').should('contain','No se editó la fase');
            }
            else{
                cy.get('#main').should('contain',resultado);
            }
        });
    });
});