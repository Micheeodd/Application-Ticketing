const request=require('supertest');
const app=require('../../src/app');
describe('auth',()=>{
it('requires auth on /tickets',async()=>{
await request(app).get('/tickets').expect(401);
});
});
