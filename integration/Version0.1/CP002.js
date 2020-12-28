const testData = require("../fixtures/CP002.json");
describe('CP002',function(){
    beforeEach(function(){
        cy.visit('/login');
        cy.get('#__BVID__11').type('acreditacionunsa@unsa.edu.pe');
        cy.get('#__BVID__13').type('Acreditac10n2020');
        cy.get('.btn').click();
        cy.wait(3000);
        //cy.get('.icon_menu').click();
        cy.get('[href="#/users/list"]').click();
        cy.get(':nth-child(2) > .nav-link').click();
    });   
    //Iteracion del dataset de pruebas
    
    Object.keys(testData).forEach((key) => {
        var email=testData[key]['email'];
        var nombre=testData[key]['nombre'];
        var apellido=testData[key]['apellido'];
        var proceso=testData[key]['proceso'];
        var rol=testData[key]['rol'];
        var resultado=testData[key]['resultado'];

        it("Crear usuario - " + key, function () {
            
            var item=0;
            if(nombre != ''){
                cy.get('[class=form-control]').eq(item).type(nombre);
                //cy.get('#__BVID__91').type(nombre);
            }else{
                item++;
            }
            if(apellido != ''){
                cy.get('[class=form-control]').eq(item).type(apellido);
                //cy.get('#__BVID__93').type(apellido);
            }else{
                item++;
            }
            if(email != ''){
                cy.get('[class=form-control]').eq(item).type(email);
                //cy.get('#__BVID__95').type(email);
            }

            var pos=0;
            if(proceso != ''){
                cy.get('[class=custom-select]').eq(pos).select(proceso);
                pos++;
                cy.wait(2000);
                if(rol != ''){
                    cy.get('[class=custom-select]').eq(pos).select(rol);
                }
            }
            
            cy.get('.ml-3').click();
            
            if(resultado === 'exitoso'){
                cy.wait(6000);
                cy.get('.swal-title').should('contain','Usuario Creado Exitosamente');
            }else if(resultado === 'No se registro el usuario'){
                cy.wait(6000);
                cy.get('.swal-title').should('contain','No se registro el usuario');
            }
            else{
                cy.get('#main').should('contain',resultado);
            }
            

        });
    });
});