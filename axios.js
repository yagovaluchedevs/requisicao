const axios = require("axios");

const getPeople = async () => {
    const response = await axios.get("https://reqres.in/api/users?page=2")
    return response.data.data[0];

}
const init = async () => {
    const people = await getPeople();

    console.log(people);
}

init();