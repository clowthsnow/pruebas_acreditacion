const testData = require("../fixtures/CP013.json");
describe('CP013',function(){
    beforeEach(function(){
        cy.visit('/login');
        cy.get('#__BVID__11').type('acreditacionunsa@unsa.edu.pe');
        cy.get('#__BVID__13').type('Acreditac10n2020');
        cy.get('.btn').click();
        cy.wait(3000);
        //cy.get('.icon_menu').click();
        cy.get('[href="#/process/list"]').click();
        cy.get('[aria-rowindex="1"] > [aria-colindex="5"] > :nth-child(1) > .container > .btn').click();
        cy.wait(1000);
        cy.get('.col-sm-7 > .btn').click();
        cy.wait(1000);
        
    });   
    //Iteracion del dataset de pruebas
    
    Object.keys(testData).forEach((key) => {
        var nombre=testData[key]['nombre'];
        var descripcion=testData[key]['descripcion'];
        var resultado=testData[key]['resultado'];

        it("Crear fase - " + key, function () {

            if(nombre != ''){
                cy.get('#name-phase').type(nombre);
            }
            if(descripcion != ''){
                cy.get('#description-phase').type(descripcion);
            }
            
            
            cy.get('#create-phase-modal___BV_modal_footer_ > .btn-primary').click();
            
            if(resultado === 'exitoso'){
                cy.wait(2000);
                cy.get('.swal-title').should('contain','Fase Creada Exitosamente!');
                cy.get('.swal-button').click();
                cy.wait(1000);
                cy.get('#main').should('contain',nombre);
            }else if(resultado === 'No se creó la fase'){
                cy.wait(3000);
                cy.get('.swal-title').should('contain','No se creó la fase');
            }
            else{
                cy.get('#main').should('contain',resultado);
            }
        });
    });
});