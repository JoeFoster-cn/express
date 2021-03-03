const fetch = require('node-fetch');

const url = 'https://jsonplaceholder.typicode.com/users';

const getPlaceholder = async() => {
    const data = await fetch(url);
    // const users = await data.json();
    return await data.json();
}

module.exports = getPlaceholder;