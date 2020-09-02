const fetch = require("isomorphic-fetch");

const getPeople = async () => {
    const response = await fetch("https://reqres.in/api/users?page=2")

    const responseJson = await response.json();

    return responseJson.data[0];

}
const init = async () => {
    const people = await getPeople();

    console.log(people);
}

init();