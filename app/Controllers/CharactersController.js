import { ProxyState } from "../AppState.js";
import { charactersService } from "../Services/CharactersService.js";


function _draw() {
  let chars = ProxyState.characters
  console.log(chars)
}

export default class CharactersController {
  constructor() {
    charactersService.getCharacters();
    _draw();
  }
}