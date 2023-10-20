import state from "./state.js"
import * as el from "./elements.js"
import { reset } from "./actions.js"
import * as sounds from "./sounds.js"

export function countDown() {

  clearTimeout(state.countdownId)//é necessario para zerar o timeout da aplicação

  if (!state.isRunning) {
    return
  }

  let minutes = Number(el.minutes.textContent)//neste mommento estou pegando o conteudo la no minutes
  let seconds = Number(el.seconds.textContent)// // // // seconds

  seconds--

  if(seconds < 0){
    seconds = 59
    minutes--
  }
  
  if (minutes < 0) {
    reset()
    sounds.kitchenTimer.play()
    return
  }


  updateDisplay(minutes, seconds)

  state.countdownId = setTimeout(() => countDown(), 1000)// esta é uma funçao do js que inicia depois de certo tempo e é preciso que a pare, pq ela nao para nunca mais!
}// foi posto o state.countdownId pois cada vez que iniciava ficava mais rapido, então armazeno na variavel e apago lá no começo


export function updateDisplay(minutes, seconds) {
  minutes = minutes ?? state.minutes
  seconds = seconds ?? state.seconds

  el.minutes.textContent = String(minutes).padStart(2, "0")
  el.seconds.textContent = String(seconds).padStart(2, "0")


}