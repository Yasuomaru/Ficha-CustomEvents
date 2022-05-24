function render(){
  const textDisplay = document.createElement('h3')
  const baseText = 'Use events to change me'
  textDisplay.textContent = baseText
  document.body.append(textDisplay)

  //Events
  document.addEventListener('textChangedEvent', (e)=>{
    textDisplay.textContent = e.detail ? e.detail : baseText
  })
  document.addEventListener('clearedTextEvent', ()=>{
    textDisplay.textContent = baseText
  })

  document.addEventListener('boxMouseEnter', (e)=>{
    textDisplay.classList.add(e.detail)
  })

  document.addEventListener('boxMouseLeave', (e)=>{
    textDisplay.classList.remove(e.detail)
  })

  return textDisplay
}



export {render as textDisplayRender}