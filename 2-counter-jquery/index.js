const root = $('#root')

const counter = $('<span>0</span>')

const increaseButton = $('<button>Increase</button>')
  .css('margin', '10px')
  .click(() => counter.text(+counter.text() + 1))

const decreaseButton = $('<button>Decrease</button>')
  .click(() => counter.text(+counter.text() - 1))

root.append(counter)
root.append(increaseButton)
root.append(decreaseButton)
