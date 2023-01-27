// inline caching
const userData = {
    firstName: 'Johnson',
    lastName: 'Junior'
}

function findUser(user) {
    return `found ${user.firstName} ${user.lastName}`
}



findUser(userData)

// found Johnson Junior