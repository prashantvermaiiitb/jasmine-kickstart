const MakeRequest = require('../../src/lib/make-request');
const { API } = require('../../src/utils/constants');

describe('Testing Make Request', function () {
    it('Missing Url', () => {
        return MakeRequest.makeRequest().catch(error => {
            expect(error).not.toBe(null);
        });
    });
    it('Missing Options', async function () {
        const response = await MakeRequest.makeRequest(API.USERS);
        expect(response).not.toBe(null);
    });
    it('All information present', async function () {
        const response = await MakeRequest.makeRequest(API.USERS, {});
        expect(response).not.toBe(null);
    });
});