/*Calculator-Library
 * --------------------
 * When given a first number and a second number,
 * it return simple mathematical operations
 * of the calculation between them.
 *
 * Then,
 * You can chain with further actions, like this example (Methods Chain)
 *
 * var c = $Calc()
 * console.log(c.getDivision(10,5).getMultiplication(3));
 * 10 / 5 = (2)
 * (2) * 3 = 6
 * = 6
 * --------------------
 * reusable library
 * --------------------
 * The library does not perform in the order of arithmetic operations but in chronological order
 * --------------------
 * Eesy to type '$Calc()' structure
 * --------------------
 * first steps of code:
 * 1.create a safe code,create immediately invoked function.
 * 2.when I invoke it, I pass in my global.
 * I've structure around the code that I'm going to write.
 * So the first thing that happens is it executes this,
 * creating a new execution context giving me the variables I need to run.
 * And so now my whole Calculator is safe inside of here and ready to be reused by anybody.
 */

(function (global) {
    // Set up to create a new object, Function Constructors
    var calculate = function () {
        return new calculate.init();
    };

    //Define an object prototype
    calculate.prototype = {
        getPlus: function (firstNumber, secondNumber) {
            this.firstNumber = firstNumber;
            //Defult for Methods Chain -if give 1 argument,
            this.secondNumber = secondNumber || firstNumber;
            //Condition for Methods Chain -if give 1 argument, firstNumber = result, secondNumber = firstNumber
            if (!secondNumber) {
                this.firstNumber = this.result;
            }
            this.result = this.firstNumber + this.secondNumber;
            console.log(
                successMassage.getPlus + ", The result : " + this.result
            );
            //method chain
            return this;
        },

        // Subtraction operation in the calculator

        getMinus: function (firstNumber, secondNumber) {
            this.firstNumber = firstNumber;
            //Defult for Methods Chain -if give 1 argument,
            this.secondNumber = secondNumber || firstNumber;
            //Condition for Methods Chain -if give 1 argument, firstNumber = result, secondNumber = firstNumber
            if (!secondNumber) {
                this.firstNumber = this.result;
            }
            this.result = this.firstNumber - this.secondNumber;
            console.log(
                successMassage.getMinus + ", The result : " + this.result
            );
            //method chain
            return this;
        },

        // Multiplication operation in the calculator

        getMultiplication: function (firstNumber, secondNumber) {
            this.firstNumber = firstNumber;
            //Defult for Methods Chain - if give 1 argument,
            this.secondNumber = secondNumber || firstNumber;
            //Condition for Methods Chain - if give 1 argument, firstNumber = result, secondNumber = firstNumber
            if (!secondNumber) {
                this.firstNumber = this.result;
            }
            this.result = this.firstNumber * this.secondNumber;
            console.log(
                successMassage.getMultiplication +
                    ", The result : " +
                    this.result
            );
            //method chain
            return this;
        },

        // Division operation in the calculator

        getDivision: function (firstNumber, secondNumber) {
            this.firstNumber = firstNumber;
            //Defult for Methods Chain - if give 1 argument,
            this.secondNumber = secondNumber || firstNumber;
            //Condition for Methods Chain - if give 1 argument, firstNumber = result, secondNumber = firstNumber
            if (!secondNumber) {
                this.firstNumber = this.result;
            }
            this.result = this.firstNumber / this.secondNumber;
            console.log(
                successMassage.getDivision + ", The result : " + this.result
            );
            //method chain
            return this;
        },
    };

    // Variables that are not exposed to the outside world until I desire it to do so.
    // thanks to closures it'll close in this variable  even when this immediately invoked function is done running.
    // So it will have access to these variables. But they're hidden to many other developers from changing them without coming into the source code itself.
    let successMassage = {
        getPlus: "The connection operation was successful",
        getMinus: "The subtraction operation was successful",
        getMultiplication: "The multiplication operation was successful",
        getDivision: "The division operation was successful",
    };

    //cerate init for the new object with defult
    calculate.init = function () {
        //use self to avoid future problems
        var self = this;
        self.firstNumber = 0;
        self.secondNumber = 0;
        self.result = 0;
    };

    // objects created with this function should actually point here for its prototype chain.
    calculate.init.prototype = calculate.prototype;

    //Defines it global object
    global.calculate = global.$Calc = calculate;

})(window);
