const request = require('supertest');
const server = require('../api/server');

//POST REGISTER
describe('auth-router', () => {
    describe('POST /register', () => {
        it('should return 201 Created', () => {
            return request(server)
            .post('/api/auth/register')
            .send({
                username: "neewe",
                password: "neewe"
            })
            .then(res => {
                expect(res.status).toBe(201);
            })
        })
        it('should return text/html response', () => {
            return request(server)
            .get('/')
            .then(res => {
                expect(res.type).toMatch("text/html");
            })
        })
    })
})

//POST LOGIN
describe('auth-router', () => {
    describe('POST /login', () => {
        it('should return 200 OK', () => {
            return request(server)
            .post('/api/auth/login')
            .send({
                username: "this",
                password: "this"
            })
            .then(res => {
                expect(res.status).toBe(200);
            })
        })
        it('should return text/html response', () => {
            return request(server)
            .get('/')
            .then(res => {
                expect(res.type).toMatch("text/html");
            })
        })
    })
})

//LOGOUT
describe('auth-router', function(){
    describe('GET /logout', function(){
        it('should return 200 OK', function(){
            return request(server)
            .get('/api/auth/logout')
            .then(res => {
                expect(res.status).toBe(200);
            })
        })
        it('should return JSON response', function(){
            return request(server)
            .get('/api/auth/logout')
            .then(res => {
                expect(res.type).toMatch("application/json");
            })
        })
    })
})