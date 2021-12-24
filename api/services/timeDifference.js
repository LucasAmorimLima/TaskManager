const moment  = require('moment')
const difference =[]
function getdiff(value) {
    var seconds = moment.utc(value.finalDate).diff(moment.utc(value.initialDate),'second');

    minutes = Math.trunc(seconds/60)

    seconds = seconds%60

    hours = Math.trunc(minutes/60)

    minutes = minutes%60

    days = Math.trunc(hours/24)

    hours = hours%60

    return {days,hours,minutes,seconds}
}


exports.timeDifference = (result) =>{
    for (let index = 0; index < result.length; index++) {
        for (const [key, value] of Object.entries(result[index])) {
            if (key=='dataValues') {
                difference[index] = getdiff(value)
            }
        }
    }
    return difference
}

