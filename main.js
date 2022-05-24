import {totalEventsRender} from './components/total-events.js'
import {inputContainerRender} from './components/input-container.js'
import {textDisplayRender} from './components/text-display.js'
import {boxContainerRender} from './components/box-container.js'

const components = [
  totalEventsRender(),
  inputContainerRender(),
  textDisplayRender(),
  boxContainerRender()
]

//Render UI
document.addEventListener('DOMContentLoaded', ()=>{
  const app = document.querySelector('#app')
  components.forEach(component => {
    app.append(component)
  })
})