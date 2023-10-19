import { controls } from "./elements.js";
import * as actions from "./actions.js"

export function registerControls() {
  controls.addEventListener("click", (event) => {
    // console.log(event.target)// esta função detec onde foi clicado
    const action = event.target.dataset.action// para acessar o html  ultilizo a função dataset e atraves da notação ponto tudo que tiver em sua frente aparecera
    if (typeof actions[action] != "function") {// novo metodo de acesar um objeto
      return// neste caso o return esta sendo utilizado para finalizar a função a caso for undefined
    }

    actions[action]()
    

  })
}