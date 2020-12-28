const testData = require("../fixtures/CP008.json");
describe('CP008',function(){
    beforeEach(function(){
        cy.visit('/login');
        cy.get('#__BVID__11').type('acreditacionunsa@unsa.edu.pe');
        cy.get('#__BVID__13').type('Acreditac10n2020');
        cy.get('.btn').click();
        cy.wait(3000);
        //cy.get('.icon_menu').click();
    });   
    //Iteracion del dataset de pruebas
    
    Object.keys(testData).forEach((key) => {
        var nombre=testData[key]['nombre'];
        var descripcion=testData[key]['descripcion'];
        var responsable=testData[key]['responsable'];
        var anio=testData[key]['anio'];
        var fecha=testData[key]['anio']+"-"+testData[key]['mes']+"-"+testData[key]['dia'];
        var hora=testData[key]['hora'];
        var minutos=testData[key]['minutos'];
        var resultado=testData[key]['resultado'];

        it("Crear proceso - " + key, function () {
            cy.visit('/process/add');
            cy.wait(1000);
            if(nombre != ''){
                cy.get('#input-1').type(nombre);
                //cy.get('#__BVID__91').type(nombre);
            }
            if(descripcion != ''){
                cy.get('#input-2').type(descripcion);
                //cy.get('#__BVID__93').type(apellido);
            }
            if(responsable != ''){
                cy.get('#input-3').select(responsable);
            }
            //Escoger fecha
            cy.get('#input-4__value_').click();
            var anioAct=2020;
            //var escogeFecha="#__BVID__85__cell-"+fecha+"_ > .btn";
            var i=anioAct-anio;
            
            if(i > 0){
                for(i; i>0;i--){
                    cy.get('[title="Previous year"] > div').click();
                }
            }else if(i<0){
                i=anio-anioAct;
                for(i; i>0;i--){
                    cy.get('[title="Next year"] > div').click();
                }
            }
            cy.wait(1000);
            var fs="[data-date="+fecha+"]";
            cy.get(fs).click()
            //escoger hora
            var j=0;
            hora++; // siempre sumar una hora mas 
            minutos++; //Siempre sumar un minuto mas
            cy.get('#input-5__value_').click();
            for(j; j<hora;j++){
                cy.get('.focus > [aria-label="Increment"]').click();
            }
            j=0;
            for(j; j<minutos;j++){
                cy.get('.b-time-minutes > [aria-label="Increment"]').click();
            }
            //Registrar
            cy.get('.ml-3').click();
            
            if(resultado === 'exitoso'){
                cy.wait(2000);
                cy.get('.swal-title').should('contain','Proceso Creado Exitosamente!');
                cy.get('.swal-button').click();
                cy.get('#main').should('contain',nombre);
            }else if(resultado === 'No se creó el proceso'){
                cy.wait(2000);
                cy.get('.swal-title').should('contain','No se creó el proceso');
            }
            else{
                cy.get('#main').should('contain',resultado);
            }
            

        });
    });
});