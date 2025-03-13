const { users, addUser } = require('./app.js')
const {describe} = require('node:test')


describe('this is a good test', () => {
    test('check if the user was added the proper way', () => {
        const user = {name : "doc", email : "doc@gmail.com", password : "doc123"}
        addUser(user);


        expect(users[0]).toEqual(user);
    })
})