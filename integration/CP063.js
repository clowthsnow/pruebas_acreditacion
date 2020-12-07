const testData = require("../fixtures/CP063.json");
describe('CPO63', function(){
    beforeEach (function(){
        cy.visit('/login');
        cy.get('#__BVID__11').type('acreditacionunsa@unsa.edu.pe');
        cy.get('#__BVID__13').type('Acreditac10n2020');
        cy.get('.btn').click();
        cy.wait(2000);
        //Linea para funcionar sobre el error de ingreso al sistema
        cy.visit('/');
    });

    Object.keys(testData).forEach((key)=>{
        var codigo = testData[key]['codigo'];
        var nombre = testData[key]['nombre'];
        var semestre = testData[key]['semestre'];
        var departamento = testData[key]['departamento'];
        var creditos = testData[key]['creditos'];
        var areas = testData[key]['areas'];
        var subarea = testData[key]['subarea'];
        var preR = testData[key]['preR'];
        var tipo= testData[key]['tipo'];
        var ht = testData[key]['ht'];
        var hs = testData[key]['hs'];
        var htp = testData[key]['htp'];
        var hp = testData[key]['hp'];
        var hl = testData[key]['hl'];
        var electivo = testData[key]['electivo'];
        var resultado = testData[key]['resultado'];
        var respuesta = testData[key]['respuesta'];

        it('Editar curso de malla - '+key, function(){
            cy.wait(2000);
            cy.visit('/process/1/studyPlan/1/detail');
            cy.wait(2000);
            cy.visit('/process/1/curriculum/1/list');
            cy.wait(2000);
            cy.get('[aria-rowindex="1"] > [aria-colindex="2"] > :nth-child(1) > .container > .btn').click();
            cy.wait(1000);
            cy.get('.text-right > .btn').click();
            cy.wait(1000);
            
            var itemList =0;
            if(codigo!=''){
                cy.get('#cod-curse').clear();
                cy.get('#cod-curse').type(codigo);
            }else{
                itemList++;
            }
            if(nombre!=''){
                cy.get('#name-curse').clear();
                cy.get('#name-curse').type(nombre);
            }else{
                itemList++;
            }
            if(semestre!=''){
                cy.get('#semestre-curse').clear();
                cy.get('#semestre-curse').type(semestre);
            }else{
                itemList++;
            }
            if(departamento!=''){
                cy.get('#input-3').select(departamento);
            }else{
                itemList++;
            }
            if(creditos!=''){
                cy.get('#cred').clear();
                cy.get('#cred').type(creditos);
            }else{
                itemList++;
            }
            if(areas!=''){
                cy.get('#__BVID__88 > .bv-no-focus-ring > #input-5').select(areas);
            }else{
                itemList++;
            }
            if(subarea!=''){
                cy.get('#__BVID__90 > .bv-no-focus-ring > #input-5').select(subarea);
            }else{
                itemList++;
            }
            if(preR!=''){
                cy.get('#__BVID__96 > .bv-no-focus-ring > #input-3').select(preR);
            }else{
                itemList++;
            }
            if(tipo!=''){
                cy.get('#__BVID__99').select(tipo);
            }else{
                itemList++;
            }
            if(ht!=''){
                cy.get('#ht').clear();
                cy.get('#ht').type(ht);
            }else{
                itemList++;
            }
            if(hs!=''){
                cy.get('#hs').clear();
                cy.get('#hs').type(hs);
            }else{
                itemList++;
            }
            if(htp!=''){
                cy.get('#htp').clear();
                cy.get('#htp').type(htp);
            }else{
                itemList++;
            }
            if(hp!=''){
                cy.get('#hp').clear();
                cy.get('#hp').type(hp);
            }else{
                itemList++;
            }
            if(hl!=''){
                cy.get('#hl').clear();
                cy.get('#hl').type(hl);
            }else{
                itemList++;
            }
            if(electivo!=''){
                cy.get('#__BVID__106').select(electivo);
            }else{
                itemList++;
            }

            if(resultado=="correcto"){
                cy.get('.btn-success').click();
                cy.get('.swal-modal').should('contain', respuesta);
            }
            if(resultado == "duplicado"){
                cy.get('.btn-success').click();
                cy.get('.swal-modal').should('contain', respuesta[0])
                .and('contain', respuesta[1]);
            }
            if(resultado == "codigo logitud"){
                cy.get('#__BVID__82').should('contain', respuesta);
            }
            if(resultado == 'nombre longitud mayor'|| resultado == "nombre longitud menor"){
                cy.get('#__BVID__84').should('contain', respuesta);
            }
            if("semestre max"==resultado || "semestre min"==resultado){
                cy.get('#__BVID__86').should('contain', respuesta);
            }
            if(resultado=="creditos max"|| resultado == "creditos min"){
                cy.get("#__BVID__94").should('contain', respuesta);
            }
            if("semestre char"==resultado){
                cy.get('#__BVID__86').should('contain', respuesta);
            }
            if(resultado == 'nombre char'){
                cy.get('#__BVID__84').should('contain', respuesta);
            }
            if(resultado == "codigo char"){
                cy.get('#__BVID__82').should('contain', respuesta);
            }
            if(resultado=="creditos char"){
                cy.get("#__BVID__94").should('contain', respuesta);
            }
        })
    })
})

