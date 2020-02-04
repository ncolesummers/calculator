const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;
const operate = (x, y, operator) => {
  let result = ''
  switch (operator) {
    case '+':
      result = add(x, y);
      break
    case '-':
      result = subtract(x, y);
      break
    case '*':
      result = multiply(x, y);
      break
    case '/':
      result = divide(x, y);
      break
  }
  return result
}

const display = document.querySelector('#display');

display.textContent
const buttons = document.querySelectorAll('.numbers')
const clear = document.querySelector('.clear')
clear.addEventListener('click', (e) => {
  display.textContent = ''
})
buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    console.log(e);
    display.textContent += button.textContent;
  });
});