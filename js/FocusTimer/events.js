import * as actions from "./actions.js"
import * as el from "./elements.js"
import {updateDisplay} from "./timer.js"
import state from "./state.js"

export function registerControls() {
  el.controls.addEventListener("click", (event) => {
    // console.log(event.target)// esta função detecta onde foi clicado
    const action = event.target.dataset.action// para acessar o html  ultilizo a função dataset e atraves da notação ponto tudo que tiver em sua frente aparecera
    if (typeof actions[action] != "function") {// novo metodo de acesar um objeto
      return// neste caso o return esta sendo utilizado para finalizar a função a caso for undefined
    }
    actions[action]()
  })
}

export function setMinutes(){
  el.minutes.addEventListener('focus',() => {
    el.minutes.textContent = ""
  })

  el.minutes.onkeypress = (event) => /\d/.test(event.key)// forma de validar atraves de uma expressao regular a entrada apenas de numeros
                                                        // neste mesmo contexto, posso por tambem qualquere letra ou texto /a/, o "\d" é para numeros
  el.minutes.addEventListener('blur', (e) => {
    let time = e.currentTarget.textContent
    time = time > 60 ? 60 : time
    state.minutes = time
    state.seconds = 0

    updateDisplay()
    el.minutes.removeAttribute("contenteditable")
  })

}



