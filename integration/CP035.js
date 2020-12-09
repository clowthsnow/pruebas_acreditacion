const testData=require("../fixtures/CP035.json");
describe('CP035', function(){
    beforeEach(function(){
        cy.visit('/login');
        cy.get('#__BVID__11').type('acreditacionunsa@unsa.edu.pe');
        cy.get('#__BVID__13').type('Acreditac10n2020');
        cy.get('.btn').click();
        cy.wait(3000);
    });

    Object.keys(testData).forEach((key)=>{
        var nombre=testData[key]['nombre'];
        var malla=testData[key]['nombre_malla'];
        var descripcion=testData[key]['descripcion'];
        var responsable=testData[key]['responsable'];
        var resultado=testData[key]['resultado'];

        it('Crear Recurso - ' + key,function(){
            cy.visit('/process/1/studyPlan/add');
            cy.wait(2000);
            var item=0;
            if(nombre != ''){
                cy.get('[class=form-control]').eq(item).type(nombre);
            }else{
                item++;
            }
            if(malla != ''){
                cy.get('[class=form-control]').eq(item).type(malla);
            }else{
                item++;
            }
            if(descripcion != ''){
                cy.get('[class=form-control]').eq(item).type(descripcion);
            }else{
                item++;
            }
            if(responsable != ''){
                cy.get('[class=custom-select]').select(responsable);
            }
            cy.get('.ml-3').click();
            cy.wait(1000);
            if(resultado == 'Exitoso'){
                cy.get('.swal-title').should('contain','Plan de Estudio Creado Exitosamente!');
            }else if(resultado == 'Duplicado'){
                cy.get('.swal-title').should('contain','No se creó el plan de estudio');
            }else{
                cy.get('#main').should('contain',resultado);
            }
        });
    });
});