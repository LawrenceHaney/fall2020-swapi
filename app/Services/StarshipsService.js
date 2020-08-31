import { ProxyState } from "../AppState.js";
import Starship from "../Models/Starship.js";
// NOTE Api is an instance of Axios, with the baseURL set to the endpoint we are using throughout the app
import { api } from "./AxiosService.js";

class StarshipsService {


  getStarships() {
    // NOTE "GET" is the method to retrieve data
    api.get('starships')
      .then(res => {
        ProxyState.nextstarship = res.data.next
        ProxyState.starships = res.data.results.map(c => new Starship(c))
      })
      .catch(error => {
        console.error(error)
      })
  }

  next() {
    if (ProxyState.nextstarship) {
      api.get(ProxyState.nextstarship)
        .then(res => {
          ProxyState.previousstarship = res.data.previous
          ProxyState.nextstarship = res.data.next
          ProxyState.starships = res.data.results.map(c => new Starship(c))
        })
        .catch(error => {
          console.error(error)
        })
    }
  }


  previous() {
    if (ProxyState.previousstarship) {
      api.get(ProxyState.previousstarship)
        .then(res => {
          ProxyState.previousstarship = res.data.previous
          ProxyState.nextstarship = res.data.next
          ProxyState.starships = res.data.results.map(c => new Starship(c))
        })
        .catch(error => {
          console.error(error)
        })
    }
  }

}


export const starshipsService = new StarshipsService();