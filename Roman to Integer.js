// var romanToInt = function (s) {
//     const values = new Map([
//         ["I", 1],
//         ["V", 5],
//         ["X", 10],
//         ["L", 50],
//         ["C", 100],
//         ["D", 500],
//         ["M", 1000],
//     ]);

//     let totalValue = 0;
//     let tempValue = 0;
//     for (let i = 0; i < s.length; i++) {
//         if (values.get(s[i]) > values.get(s[i + 1])) {
//             totalValue += values.get(s[i]);
//         } else if (values.get(s[i]) > values.get(s[i - 1])) {
//             totalValue += values.get(s[i]) - tempValue;
//             tempValue = 0;
//         } else {
//             tempValue += values.get(s[i]);
//         }
//     }
//     totalValue += tempValue;
//     return totalValue;
// };

var romanToInt = function (s) {
    const values = new Map([
        ["I", 1],
        ["V", 5],
        ["X", 10],
        ["L", 50],
        ["C", 100],
        ["D", 500],
        ["M", 1000],
    ]);
    
    let totalValue = 0;

    for (let i = 0; i < s.length; i++) {
        const currentValue = values.get(s[i]);
        const nextValue = values.get(s[i + 1]);
        
        if (nextValue && currentValue < nextValue) {
            totalValue -= currentValue;
        } else {
            totalValue += currentValue;
        }
    }
    
    return totalValue;
};
