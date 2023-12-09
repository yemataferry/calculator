let monitor = document.getElementById('screen')
function clr() {
   monitor.value = ''
}

function del() {
  if (monitor.value.length > 0) {
  let screenSplit = monitor.value.split('')
  screenSplit.pop()
  let screenJoin = screenSplit.value.join('')
  monitor.value = screenJoin
}
}

function plusMinus() {
const currentNum = parseFloat(monitor.value)
monitor.value = -currentNum 
}

function arithmeticOperation(a, b, sign) {
  if (b == 0 && a / b) {
    return 'Error: Division by 0 invalid'
  } else {
  switch (sign) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return a / b;
    case '%':
      return a % b;
    case '.':
      return a . b;
    case '-/+':
      return plusMinus();
    case 'AC':
      return '';
    case 'd':
      return del();
    default:
      'No valid operation'
      break;
  }
}
}
console.log(arithOp(5, 4, '-/+'))

function show(val) {
  monitor.value += val
} 

function mathOperation () {
  let equation = monitor.value
  let answer = arithmeticOperation(equation)
  monitor.value = answer
  // let display = document.getElementById('screen').value

}