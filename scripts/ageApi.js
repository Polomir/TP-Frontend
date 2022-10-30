const API="https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations";

const buscarCivs = async () => {
    const res = await fetch(API);
    const data = await res.json();
    console.log(data);
};

