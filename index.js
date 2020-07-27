function takeANumber(katzDeliLine, name) {
  var submitTest
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  var beingServed
  if (katzDeliLine.length > 0) {
    beingServed = `Currently serving ${katzDeliLine[0]}.`
    katzDeliLine.shift()
  } else {
    beingServed = "There is nobody waiting to be served!"
  }
  return beingServed
}

function currentLine(katzDeliLine) {
  var fullLine
  if (katzDeliLine.length > 0) {
    fullLine = "The line is currently:"
    for (let i = 0; i < katzDeliLine.length; i += 1) {
      fullLine = fullLine + ` ${i + 1}. ${katzDeliLine[i]}`
      if (i + 1 < katzDeliLine.length) {
        fullLine = fullLine + ","
      }
    }
  } else {
    fullLine = "The line is currently empty."
  }
  return fullLine
}
