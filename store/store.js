let totalEventsState = 0

function increment(){
  totalEventsState++

  const totalEventsChanged = new Event('totalEventsChanged')
  document.dispatchEvent(totalEventsChanged)
}

function getTotalEvents() {
  return totalEventsState
}

export {increment, getTotalEvents}