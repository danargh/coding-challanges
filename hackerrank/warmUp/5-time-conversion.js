function timeConversion(s) {
   let [hours, minutes, seconds, modifier] = s.match(/[a-zA-Z]+|[0-9]+/g);
   if (hours === '12') {
      hours = '00';
   }
   if (modifier === 'PM') {
      hours = parseInt(hours, 10) + 12;
   }
   return `${hours}:${minutes}:${seconds}`;
}

console.log(timeConversion('07:05:45PM'));

// let [hours, minutes, seconds, modifier] = '07:25:00AM'.match(
//    /[a-zA-Z]+|[0-9]+/g
// );
// console.log(hours, minutes, seconds, modifier);
