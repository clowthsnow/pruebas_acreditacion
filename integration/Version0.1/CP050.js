const testData=require("../fixtures/CP050.json");

describe('CP050', function(){
    beforeEach(function(){
       
        cy.visit('/login');
        cy.get('#__BVID__11').type('acreditacionunsa@unsa.edu.pe');
        cy.get('#__BVID__13').type('Acreditac10n2020');
        cy.get('.btn').click();
        cy.wait(3000);
    });   
    //Iteracion del dataset de pruebas
    

    Object.keys(testData).forEach((key)=>{
        var nombre=testData[key]['nombre'];
        var descripcion=testData[key]['descripcion'];
        var nivel_insatisfactorio=testData[key]['nivel_insatisfactorio'];
        var nivel_en_proceso=testData[key]['nivel_en_proceso'];
        var nivel_satisfactorio=testData[key]['nivel_satisfactorio'];
        var nivel_sobresaliente=testData[key]['nivel_sobresaliente'];
        var nivel_sugerido=testData[key]['nivel_sugerido'];
        var resultado=testData[key]['resultado'];
    

        it('Modificar Criterio de Resultado del Estudiante - ' + key,function(){
          
            cy.visit('/process/1/studyPlan/1/studentResult/1/detail');
            
            cy.wait(2000);
            
            cy.get('[aria-rowindex="3"] > [aria-colindex="8"] > :nth-child(1) > .container > .row > :nth-child(1) > .btn').click(); 
            cy.get('[class=form-control]').clear();

            var item=0;
            if(nombre != ''){
                cy.get('#name').type(nombre);
            }else{
                item++;
            }
            if(descripcion != ''){
                cy.get('#description').type(descripcion);
            }else{
                item++;
            }
            if(nivel_insatisfactorio != ''){
                cy.get('#level1').type(nivel_satisfactorio);
            }else{
                item++;
            }
            if(nivel_en_proceso != ''){
                cy.get('#level2').type(nivel_en_proceso);
            }else{
                item++;
            }
            if(nivel_satisfactorio != ''){
                cy.get('#level3').type(nivel_satisfactorio);
            }else{
                item++;
            }
            if(nivel_sobresaliente != ''){
                cy.get('#level4').type(nivel_sobresaliente);
            }else{
                item++;
            }
            if(nivel_sugerido == 'todos'){
               
                cy.get('.custom-control-input').should('not.be.visible').check({ force: true }).should('be.checked');

            }
                       
            cy.get('.btn-primary').click();
            cy.wait(1000);
            if(resultado == 'Exitoso'){
               
                cy.get('.swal-title').should('contain','Criterio Editado Exitosamente!');
              
            }else if(resultado == 'Duplicado'){
                cy.get('.swal-title').should('contain','No se creó el criterio');
            }
            
        });
    });
});