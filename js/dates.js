//STEP 1
// let daysInMonth = function(month,year) {
//    return new Date(year, month, 0).getDate();
//   };

//   console.log(daysInMonth(4, 2020));

//STEP 2
// let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// let monthName = function(dt) {
//     return months[dt.getMonth()];
//   };
//   console.log(monthName(new Date('04/25/2020')));

// STEP 3
// function isWeekend (date) {
//     let d = new Date(date);
//     if(d.getDay() == 6 || d.getDay() == 0)
//        {
//         return 'This date falls on a weekend';
//         } else {
//             return 'This date does not fall on a weekend';
//         }
// }

// console.log(isWeekend('April 26, 2021'));

//STEP 4
// let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// let d = new Date();
// let prevDay = days[days.indexOf[d.getDay()] - 1] || "Sun";

// console.log(prevDay);

//STEP 5
// let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// let d = new Date();
// let dayName = days[d.getDay()];

// function firstLetter() {
//        return dayName;
//     };
          
// console.log(dayName.charAt(0));
