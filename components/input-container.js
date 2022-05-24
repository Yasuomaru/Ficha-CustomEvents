import { increment } from "../store/store.js"

function render(){
  //Create input-container component
  const inputContainer = document.createElement('div')

  //Add styling
  inputContainer.classList.add('input-container')

  //Add elements inside
  const children = buildChildren()

  children.forEach(el => inputContainer.append(el))

  return inputContainer
}

function buildChildren(){
  //Create text input
  const textInput = document.createElement('input')
  textInput.placeholder = 'Write stuff here'
  textInput.name = ''
  textInput.addEventListener('keydown', (e)=>{
    increment()
    const textChangedEvent = new CustomEvent('textChangedEvent', {detail: e.target.value})
    document.dispatchEvent(textChangedEvent)
  })


  //Create clear button
  const clearButton = document.createElement('button')
  clearButton.textContent = 'Clear'
  clearButton.classList.add('clear-button')
  clearButton.addEventListener('click', ()=>{
    increment()
    textInput.value = ''
    const clearedTextEvent = new Event('clearedTextEvent')
    document.dispatchEvent(clearedTextEvent)
  })

  //Return children in array
  return [textInput, clearButton]
}


export {render as inputContainerRender}