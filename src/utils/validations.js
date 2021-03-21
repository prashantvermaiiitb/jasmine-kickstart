var { users } = require('./constants');
/**
 * Validation file for the user list.
 */
const UserValidation = {
    /**
     * user limit check
     */
    userExists: (users) => {
        if (users == null || !users) { throw new Error('User cannot be null or undefined'); }
        return true;
    },
    /**
     * User type object check
     */
    userType: (user) => {
        if(Array.isArray(user)) return true;
        throw new Error('Users should be an array of User objects'); 
    },
    /**
     * Checking minimum number of the users present or not
     */
    userLimit: (userList) => userList.length > users.count
};

module.exports = {
    doesUserExists: UserValidation.userExists,
    userTypeCheck: UserValidation.userType,
    userLimitCheck: UserValidation.userLimit
};