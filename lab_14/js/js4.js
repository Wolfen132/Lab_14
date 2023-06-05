

// class MonthException {
//     constructor(message) {
//         this.name = 'MonthException';
//         this.message = message;
//     }

//     showMonthName(month) {
//         const months = [
//             'January',
//             'February',
//             'March',
//             'April',
//             'May',
//             'June',
//             'July',
//             'August',
//             'September',
//             'October',
//             'November',
//             'December'
//         ];

//         if (month > 12) {
//             console.log("Incorrect month number");
//         }

//         return months[month - 1];
//     }
// }

const checkMonth = new MonthException();

console.log(checkMonth.showMonthName(8));