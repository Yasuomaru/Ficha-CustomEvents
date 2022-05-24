import { getTotalEvents } from "../store/store.js"
import { boxRender } from "./box-letter.js"


function render(){
  const inputContainer = document.createElement('div')
  inputContainer.classList.add('box-container')
  
  inputContainer.append(boxRender({textContent:'A', cssBgColorClass:'bg-red'}))
  inputContainer.append(boxRender({textContent:'B', cssBgColorClass:'bg-green'}))
  inputContainer.append(boxRender({textContent:'C', cssBgColorClass:'bg-blue'}))
  
  if(getTotalEvents() >= 10){
    inputContainer.append(boxRender({textContent:'D', cssBgColorClass:'bg-purple'}))
  }

  return inputContainer
}

export {render as boxContainerRender}