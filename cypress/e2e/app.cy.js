// <reference types="Cypress"/>

function check(count){
    cy.get('div').invoke('text').then((text)=>{ 
        var fullText = text;
        console.log(fullText);
        var pattern = /[0-9]+/g;
        var number = fullText.match(pattern);
        console.log(number);
        expect(parseInt(number[0])).to.equal(count);
   })
}

describe('App Component', ()=>{
    beforeEach(()=>{
        cy.visit('http://localhost:3000/');
    })

    it('check for initial render',()=>{
        cy.get('input').type('a');
        check(2);
    })

    it('check for input tag',()=>{
        cy.get('input').its('length').should('eq',1);
    })

    it('checks the render count',()=>{
        var count = 1;
        cy.get('input').type('12345678901');
        count += 11;
        check(count);
    })

    it('checks the render count after updation',()=>{
        var count = 1;
        cy.get('input').type('hello world');
        count += 11;
        cy.get('input').type('{backspace}');
        cy.get('input').type('{backspace}');
        count += 2;
        check(count);
    })
})