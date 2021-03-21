var fetch = require('node-fetch');
/**
 * Library file for the project.
 */
module.exports = {
    /**
     * Making the network request.
     * @param {*} url 
     * @param {*} options 
     */
    makeRequest: function (url, options = {}) {
        return fetch(url, options)
            .then(response => response.json())
            .then(json => json);
    }
}; 