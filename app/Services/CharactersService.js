import { ProxyState } from "../AppState.js";
import { api } from "./AxiosService.js";

class CharactersService {
  getCharacters() {
    api.get('people')
      .then(response => {
        console.log(response)
        ProxyState.characters = response.data.results
      })
      .catch(error => {
        console.error(error)
      })
  }
}


export const charactersService = new CharactersService();