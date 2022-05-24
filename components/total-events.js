import { getTotalEvents } from "../store/store.js"

function render(){
  const totalEventsText = document.createElement('h2')
  setTextContent()
  document.addEventListener('totalEventsChanged', ()=>{
    setTextContent()
  })

  function setTextContent(){
    totalEventsText.textContent = `Number of events: ${getTotalEvents()}`
  }
  
  return totalEventsText
}




export {render as totalEventsRender}