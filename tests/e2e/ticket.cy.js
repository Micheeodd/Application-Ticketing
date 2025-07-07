describe('ticket flow',()=>{
it('submit and list',()=>{
cy.visit('/');
cy.get('select').select(1);
cy.get('input[name="email"]').type('a@b.c');
cy.get('textarea').type('hello');
cy.get('form').submit();
cy.get('form');
cy.request({url:'/tickets',auth:{user:'admin',pass:'password'},failOnStatusCode:false}).its('status').should('eq',200);
});
});
