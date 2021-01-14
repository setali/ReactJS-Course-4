const root  = document.getElementById('root')

const counter = document.createElement('span')
counter.innerText = 0

const increaseButton = document.createElement('button')
increaseButton.innerText = 'Increase'
increaseButton.style.margin = '10px'
increaseButton.addEventListener('click', () => {
  counter.innerText = +counter.innerText + 1
})


const decreaseButton = document.createElement('button')
decreaseButton.innerText = 'Decrease'
decreaseButton.addEventListener('click', () => {
  counter.innerText = +counter.innerText - 1
})

root.appendChild(counter)
root.appendChild(increaseButton)
root.appendChild(decreaseButton)
