const testData=require("../fixtures/CP061.json");

describe('CP061', function(){
    beforeEach(function(){
    
        cy.visit('/login');
        cy.get('#__BVID__11').type('acreditacionunsa@unsa.edu.pe');
        cy.get('#__BVID__13').type('Acreditac10n2020');
        cy.get('.btn').click();
        cy.wait(3000);
    });   
    //Iteracion del dataset de pruebas
    

    Object.keys(testData).forEach((key)=>{
        var curso=testData[key]['curso'];
        var nombre=testData[key]['nombre'];
        var semestre=testData[key]['semestre'];
        var departamento=testData[key]['departamento'];
        var creditos=testData[key]['creditos'];
        var area=testData[key]['area'];
        var subarea=testData[key]['subarea'];
        var prerequisito=testData[key]['prerequisito'];
        var tipo=testData[key]['tipo'];
        var horas_teoricas=testData[key]['horas_teoricas'];
        var horas_practicas=testData[key]['horas_practicas'];
        var horas_seminario=testData[key]['horas_seminario'];
        var horas_teorico_practicos=testData[key]['horas_teorico_practicos'];
        var horas_laboratorio=testData[key]['horas_laboratorio'];
        var electivo=testData[key]['electivo'];
        var resultado=testData[key]['resultado'];
    

        it('Agregar curso a la malla curricular - ' + key,function(){
            cy.visit('/process/1/curriculum/3/add');
            cy.wait(3000);
            
            /*cy.get('.col-sm-3 > .btn').click(); 
            var item=0;*/
            if(curso != ''){
                cy.get('#cod-curse').type(curso);
            }
            if(nombre != ''){
                cy.get('#name-curse').type(nombre);
            }
            if(semestre != ''){
                cy.get('#semestre-curse').type(semestre);
            }
            if(departamento != ''){
                cy.get('#input-3').select(departamento);
            }
            if(creditos != ''){
                cy.get('#cred').type(creditos);
            }
            if(area != ''){
                cy.get('.custom-select').eq(1).select(area);
            }
            cy.wait(1000);
            if(subarea != ''){
                cy.get('.custom-select').eq(2).select(subarea);
            }
            if(prerequisito != ''){
                cy.get('#input-4').select(prerequisito);
            }
            if(tipo != ''){
                cy.get('.custom-select').eq(4).select(tipo);
            }
            if(horas_teoricas != ''){
                cy.get('#ht').type(horas_teoricas);
            }
            if(horas_practicas != ''){
                cy.get('#hp').type(horas_practicas);
            }
            if(horas_seminario != ''){
                cy.get('#hs').type(horas_seminario);
            }
            if(horas_laboratorio != ''){
                cy.get('#hl').type(horas_laboratorio);
            }
            if(horas_teorico_practicos != ''){
                cy.get('#htp').type(horas_teorico_practicos);
            }
            if(electivo != ''){
                cy.get('.custom-select').eq(5).select(electivo);
            }
            cy.get('.ml-3').click();
            cy.wait(1000);
            if(resultado == 'Exitoso'){
            
                cy.get('.swal-title').should('contain','Curso Creado Exitosamente!');
            
            }else if(resultado == 'Ya existe un curso con ese código.'){
                cy.get('.swal-text').should('contain',resultado);
            }else{
                cy.get('#main').should('contain',resultado);
            }
            
        });
    });
});