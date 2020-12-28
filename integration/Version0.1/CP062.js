const testData = require("../fixtures/CP062.json");
describe('CPO62', function(){
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
        var departamento = testData[key]['departamento'];
        var semestre = testData[key]['semestre'];
        var creditos = testData[key]['creditos'];
        var prereq = testData[key]['prereq'];
        var ht = testData[key]['ht'];
        var hs = testData[key]['hs'];
        var htp = testData[key]['htp'];
        var hp = testData[key]['hp'];
        var hl = testData[key]['hl'];
        var resultado = testData[key]['resultado'];
        it('Ver Detalle de Curso - '+key, function(){
            cy.wait(2000);
            cy.visit('/process/1/studyPlan/1/detail');
            cy.wait(2000);
            cy.visit('/process/1/curriculum/1/list');
            cy.wait(2000);
            cy.get('[aria-rowindex="'+(key)+'"] > [aria-colindex="2"] > :nth-child(1) > .container > .btn').click();
            cy.wait(1000);
            cy.get('.justify-content-md-center > .col').should('contain', codigo)
            .and('contain', nombre)
            .and('contain', departamento)
            .and('contain', semestre)
            .and('contain', creditos)
            .and('contain', prereq)
            .and('contain',ht)
            .and('contain',hs)
            .and('contain', htp)
            .and('contain',hp)
            .and('contain',hl)
        })
    })
})