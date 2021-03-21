const { userLimitCheck } = require('./validations');
/**
 * function to limit the user and check that 
 * there are minimum number of Users present
 * in the data returned from the API.
 * @param {*} users 
 */
export function limitUsers(users) {
    return userLimitCheck(users) ? users.filter((user, index) => index < 5) : users;
}
/**
 * Arrange users by name and also limiting them to 5.
 * @param {*} users 
 */
export function arrangeUsers(users) {
    users.sort((a, b) => {
        if (a.name < b.name) { return -1; }
        if (a.name > b.name) { return 1; }
        return 0;
    });
    return users;
}