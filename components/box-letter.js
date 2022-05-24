import {increment} from '../store/store.js'

function render(props){
  const box = document.createElement('div')
  box.classList.add('box')

  const {textContent, cssBgColorClass} = props

  box.textContent = textContent
  box.classList.add(cssBgColorClass)

  box.addEventListener('mouseenter', ()=>{
    const cssTextClass = cssBgColorClass.replace('bg', 'text')
    const boxMouseEnter = new CustomEvent('boxMouseEnter', {detail: cssTextClass})
    document.dispatchEvent(boxMouseEnter)
    increment()
  })
  
  box.addEventListener('mouseleave', ()=>{
    const cssTextClass = cssBgColorClass.replace('bg', 'text')
    const boxMouseLeave = new CustomEvent('boxMouseLeave', {detail: cssTextClass})
    document.dispatchEvent(boxMouseLeave)
    increment()
  })

  return box
}

export {render as boxRender}