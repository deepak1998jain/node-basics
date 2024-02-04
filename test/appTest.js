// import * as chai from 'chai';
// import { getAppMessage } from '../app.js';

// const { expect } = chai;

// describe('App', function() {
//     it('app should return hello', function() {
//         expect(getAppMessage()).to.equal("hello");
//     });
// });

const assert = require('chai').assert;
const app = require('../app');


describe('App', function() {
    it('app should return hello', function() {
        assert.equal(app(),"hello");
    });
});