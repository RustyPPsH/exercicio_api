// Importando o axios para nosso projeto
import axios from 'axios';

/* Vamos criar uma constante chamada api, mas o nome pode
ser qual você quiser. Nela, vamos colocar um axios.create,
genérico e chamamos nossa URL. */
var show_search = 'batman';

const api = axios.create({
    baseURL: 'https://api.tvmaze.com/search/shows?q=' + show_search
});

// Agora exportamos essa nossa api.
export default api;