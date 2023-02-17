import axios from "axios";
//https://viacep.com.br/ws/
const viaCep = axios.create({
    baseURL:"https://viacep.com.br/ws/"
});

export default viaCep;