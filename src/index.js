const { doesUserExists, userTypeCheck } = require('./utils/validations');
const { limitUsers, arrangeUsers } = require('./utils/filters');
const MakeRequest = require('./lib/make-request');
const { api } = require('./utils/constants');

/**
 * Generating the HTML
 * @param {*} users 
 * @param {*} div 
 */
function generateHtml(users, div) {
    users.map((users, index) => {
        let li = document.createElement('li');
        li.innerHTML = users.name;
        return li;
    }).forEach((li) => {
        div.appendChild(li);
    });
}

/**
 * Initialisation function
 */
async function init() {
    // alert('hello world cool!!');

    // * Fetch the data
    let users = await MakeRequest.makeRequest(api.users);

    // *  Filter the data 
    if (doesUserExists(users)) {
        if (userTypeCheck(users)) {
            users = arrangeUsers(limitUsers(users));
            // console.log(users);

            var div = document.getElementById('users');
            generateHtml(users, div);
            document.body.appendChild(div);
        }
    }
}

init();