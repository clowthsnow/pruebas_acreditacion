const testData = require("../fixtures/CP067.json");
describe('CP067',function(){
    beforeEach(function(){
        //cy.request('POST', '/login', { name: 'acreditacionunsa@unsa.edu.pe', password:'Acreditac10n2020' })
        cy.visit('/login');
        cy.get('#__BVID__11').type('acreditacionunsa@unsa.edu.pe');
        cy.get('#__BVID__13').type('Acreditac10n2020');
        cy.get('.btn').click();
        cy.wait(3000);

    });   
    //Iteracion del dataset de pruebas
    
    Object.keys(testData).forEach((key) => {
        
        var eliminar=testData[key]['eliminar'];
        var resultado=testData[key]['resultado'];

        it("Eliminar sub area de formacion - " + key, function () {
            cy.visit('/process/1/studyPlan/2/formationArea/1/detail');
            cy.wait(1000);
            cy.get(':nth-child(1) > [aria-colindex="2"] > :nth-child(1) > .container > .btn').click();
            if(eliminar == 'si'){
                cy.get('.btn-primary').click();
                cy.get('.swal-modal').should('contain',resultado);
            }else{
                cy.get('#delete-modal___BV_modal_footer_ > .btn-secondary').click();
                cy.get('#main').should('contain',resultado);
            }
        });
    });
});