// NOTE ProxyState is the new STORE.State
import { ProxyState } from "../AppState.js";
import { starshipsService } from "../Services/StarshipsService.js";

function _draw() {
  let chars = ProxyState.starships
  let template = ''
  chars.forEach(c => template += c.Template)
  document.getElementById("starships").innerHTML = template
}

export default class StarshipsController {
  constructor() {
    // FIXME _draw();
    // NOTE register subscribers first
    ProxyState.on('starships', _draw)
    // Go get the relevant data
    starshipsService.getStarships();
  }

  next() {
    starshipsService.next()
  }

  previous() {
    starshipsService.previous()
  }
}