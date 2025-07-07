const request=require('supertest');
const app=require('../../src/app');
describe('validation',()=>{
it('reject bad email',async()=>{
await request(app).post('/submit').send({type_id:1,email:'bad',message:'m'}).expect(400);
});
});
