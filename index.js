// code your solution here
// saturdayFun
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
  }

//mondayWork
function mondayWork(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}

//wrapAdjective
function wrapAdjective(style="*") {
    return function(adjective="special") {
      return `You are ${style}${adjective}${style}!`
    }
}