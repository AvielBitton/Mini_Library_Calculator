/* 
---------------------
Calculation 2 + 3 = 5
Multiply the result by 6, 5 * 6 = 30
Divide the result by 2, 30/2 = 15
Subtract the result by 10, 15-10 = 5
---------------------
*/

var c = $Calc();

// Calculation exercise, step by step

c.getPlus(2, 3);
c.getMultiplication(c.result, 6);
c.getDivision(c.result, 2);
c.getMinus(c.result, 10);
console.log("final result = " + c.result);

// Calculation exercise, Method chain (chronological order)

c.getPlus(2, 3).getMultiplication(6).getDivision(2).getMinus(10);
console.log("final result = " + c.result);
