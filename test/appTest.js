import * as chai from 'chai';
import { getAppMessage } from '../app.js';

const { expect } = chai;

describe('App', function() {
    it('app should return hello', function() {
        expect(getAppMessage()).to.equal("hello");
    });
});