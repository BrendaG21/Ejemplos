async function addUser (params) {















}

async function getUser(params){
    const {auth, email} = params;

    const user = await auth.getUserByEmail(email);

    return user;
}

async function updateUser(params){
    const {auth, email, password, displayName} = params;

    const user = await auth.updateUser(email, {
        password,
        displayName
    })
}

module.exports =  {
    addUsers,
    getUser,
    updateUser
}