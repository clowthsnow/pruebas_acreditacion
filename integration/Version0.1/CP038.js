describe('CP038',function(){
    it('Editar de Recursos', function(){
        cy.visit('/login');
        cy.get('#__BVID__11').type('acreditacionunsa@unsa.edu.pe');
        cy.get('#__BVID__13').type('Acreditac10n2020');
        cy.get('.btn').click();
        cy.wait(3000);
        
        cy.get('[aria-rowindex="1"] > [aria-colindex="5"] > :nth-child(1) > .container > .btn').click();
        cy.wait(1500);

        cy.get('[href="#/process/1/studyPlan/list"]').click();
        cy.get('[aria-rowindex="1"] > [aria-colindex="2"] > :nth-child(1) > .container > .btn').click();

        // editar plan
        cy.get('.text-right > .btn').click();
        cy.wait(1500);

        cy.get('#__BVID__174 > .bv-no-focus-ring > #input-1').clear();
        cy.get('#__BVID__174 > .bv-no-focus-ring > #input-1').type('nuevo plan de estudio 2021');
        
        cy.get('#__BVID__176 > .bv-no-focus-ring > #input-1').clear();
        cy.get('#__BVID__176 > .bv-no-focus-ring > #input-1').type('nueva malla estudio 2021');
        
        cy.get('#input-2').clear();
        cy.get('#input-2').type('descripción actualizadaa');

        cy.get('#input-3').select('jchanila@unsa.edu.pe');
        
        cy.get('.btn-success').click(); 
        cy.get('.swal-button').click();

    });

    it('Editar de Recursos 2', function(){
        cy.visit('/login');
        cy.get('#__BVID__11').type('acreditacionunsa@unsa.edu.pe');
        cy.get('#__BVID__13').type('Acreditac10n2020');
        cy.get('.btn').click();
        cy.wait(3000);
        
        //cy.get('[href="#/process/list"]').click();
        cy.get('[aria-rowindex="1"] > [aria-colindex="5"] > :nth-child(1) > .container > .btn').click()
        cy.wait(1500);
        //cy.get('[href="#/process/1/studyPlan/list"]').click()
        cy.get('[href="#/process/1/studyPlan/list"]').click()
        cy.get('[aria-rowindex="1"] > [aria-colindex="2"] > :nth-child(1) > .container > .btn').click()

        // editar plan
        cy.get('.text-right > .btn').click();
        cy.wait(1500);

        cy.get('#__BVID__174 > .bv-no-focus-ring > #input-1').clear();
        cy.get('#__BVID__174 > .bv-no-focus-ring > #input-1').type('nuevo pl@n 3stud10');
        
        cy.get('#__BVID__176 > .bv-no-focus-ring > #input-1').clear();
        cy.get('#__BVID__176 > .bv-no-focus-ring > #input-1').type('nuev@ m@ll@ curriocular del año 2o21');
        
        cy.get('#input-2').clear();
        cy.get('#input-2').type('descripci0n actual1zad@');

        cy.get('#input-3').select('jchanila@unsa.edu.pe');
        
        cy.get('.btn-success').click();

    }); 

    it('Editar de Recursos 3', function(){
        cy.visit('/login');
        cy.get('#__BVID__11').type('acreditacionunsa@unsa.edu.pe');
        cy.get('#__BVID__13').type('Acreditac10n2020');
        cy.get('.btn').click();
        cy.wait(3000);
        
        //cy.get('[href="#/process/list"]').click();
        cy.get('[aria-rowindex="1"] > [aria-colindex="5"] > :nth-child(1) > .container > .btn').click()
        cy.wait(1500);
        //cy.get('[href="#/process/1/studyPlan/list"]').click()
        cy.get('[href="#/process/1/studyPlan/list"]').click()
        cy.get('[aria-rowindex="1"] > [aria-colindex="2"] > :nth-child(1) > .container > .btn').click()

        // editar plan
        cy.get('.text-right > .btn').click();
        cy.wait(1500);

        cy.get('#__BVID__174 > .bv-no-focus-ring > #input-1').clear();
        
        cy.get('#__BVID__176 > .bv-no-focus-ring > #input-1').clear();
        
        cy.get('#input-2').clear();

        //cy.get('#input-3').clear();
        
        cy.get('.btn-success').click();

    }); 

    it('Editar de Recursos 4', function(){
        cy.visit('/login');
        cy.get('#__BVID__11').type('acreditacionunsa@unsa.edu.pe');
        cy.get('#__BVID__13').type('Acreditac10n2020');
        cy.get('.btn').click();
        cy.wait(3000);
        
        //cy.get('[href="#/process/list"]').click();
        cy.get('[aria-rowindex="1"] > [aria-colindex="5"] > :nth-child(1) > .container > .btn').click()
        cy.wait(1500);
        //cy.get('[href="#/process/1/studyPlan/list"]').click()
        cy.get('[href="#/process/1/studyPlan/list"]').click()
        cy.get('[aria-rowindex="1"] > [aria-colindex="2"] > :nth-child(1) > .container > .btn').click()

        // editar plan
        cy.get('.text-right > .btn').click();
        cy.wait(1500);

        cy.get('#__BVID__174 > .bv-no-focus-ring > #input-1').clear();
        cy.get('#__BVID__174 > .bv-no-focus-ring > #input-1').type('n');
        
        cy.get('#__BVID__176 > .bv-no-focus-ring > #input-1').clear();
        cy.get('#__BVID__176 > .bv-no-focus-ring > #input-1').type('nueva malla curricular');
        
        cy.get('#input-2').clear();

        cy.get('#input-3').select('cccallom@unsa.edu.pe');
        
        cy.get('.btn-success').click();

    }); 

    it('Editar de Recursos 5', function(){
        cy.visit('/login');
        cy.get('#__BVID__11').type('acreditacionunsa@unsa.edu.pe');
        cy.get('#__BVID__13').type('Acreditac10n2020');
        cy.get('.btn').click();
        cy.wait(3000);
        
        cy.get('[aria-rowindex="1"] > [aria-colindex="5"] > :nth-child(1) > .container > .btn').click();
        cy.wait(1500);

        cy.get('[href="#/process/1/studyPlan/list"]').click();
        cy.get('[aria-rowindex="1"] > [aria-colindex="2"] > :nth-child(1) > .container > .btn').click();

        // editar plan
        cy.get('.text-right > .btn').click();
        cy.wait(1500);

        cy.get('#__BVID__174 > .bv-no-focus-ring > #input-1').clear();
        cy.get('#__BVID__174 > .bv-no-focus-ring > #input-1').type('nuevo plan de estudio 2022');
        
        cy.get('#__BVID__176 > .bv-no-focus-ring > #input-1').clear();
        cy.get('#__BVID__176 > .bv-no-focus-ring > #input-1').type('nueva malla estudio 2022');
        
        cy.get('#input-2').clear();

        cy.get('#input-3').select('cccallom@unsa.edu.pe');
        
        cy.get('.btn-success').click(); 
        cy.get('.swal-button').click();

    });
});