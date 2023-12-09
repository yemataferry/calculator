const monitor = document.getElementById('screen')
function clr () {
  monitor.value = ''
}
clr()

function del () {
  if (monitor.value.length > 0) {
    const screenSplit = monitor.value.split('')
    screenSplit.pop()
    const screenJoin = screenSplit.value.join('')
    monitor.value = screenJoin
  }
}

function plusMinus () {
  const currentNum = parseFloat(monitor.value)
  monitor.value = -currentNum
}

function arithmeticOperation (a, b, sign) {
  if (b === 0 && a / b) {
    return 'infinity'
  } else {
    switch (sign) {
      case '+':
        return a + b
      case '-':
        return a - b
      case '*':
        return a * b
      case '/':
        return a / b
      case '%':
        return a % b
      case '.':
        return a.b
      case '-/+':
        return plusMinus()
      case 'AC':
        return ''
      case 'd':
        return del()
      default:
        return 'No valid operation'
        break
    }
  }
}
console.log(arithmeticOperation(5, 4, '-'))

function show (val) {
  monitor.value += val
}
show(5)

function mathOperation () {
  const equation = monitor.value
  const answer = eval(equation)
  monitor.value = answer
}
mathOperation()
