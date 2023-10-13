// anti adblocker
function onStart() {
    var myDiv = document.getElementById("content");
    if (window.getComputedStyle(myDiv).display == "none") {
        alert("Please disable your adblocker to use our service, thank you!");
    }
}

// number system convertion and operation

function convert() {
    var cvinput = document.getElementById("convertion-input").value;
    var cvtype = document.getElementById("convertion-type").value;
    var cvoutput = document.getElementById("convertion-result");

    if (cvinput.trim() === "") {
        cvoutput.innerHTML = "Input is empty, please enter an input";
    } else {
        switch (cvtype) {
            case "db":
                cvoutput.innerHTML = parseInt(cvinput).toString(2);
                break;
            case "do":
                cvoutput.innerHTML = parseInt(cvinput).toString(8);
                break;
            case "dh":
                cvoutput.innerHTML = (parseInt(cvinput).toString(16)).toUpperCase();
                break;
            case "bd":
                if (/^[01]+$/.test(cvinput)) {
                    cvoutput.innerHTML = (parseInt(cvinput, 2).toString(10)).toUpperCase();
                } else {
                    cvoutput.innerHTML = "Input contains something else, must contain binary digits (0 and 1) only.";
                }
                break;
            case "bo":
                if (/^[01]+$/.test(cvinput)) {
                    cvoutput.innerHTML = (parseInt(cvinput, 2).toString(8)).toUpperCase();
                } else {
                    cvoutput.innerHTML = "Input contains something else, must contain binary digits (0 and 1) only.";
                }
                break;
            case "bh":
                if (/^[01]+$/.test(cvinput)) {
                    cvoutput.innerHTML = (parseInt(cvinput, 2).toString(16)).toUpperCase();
                } else {
                    cvoutput.innerHTML = "Input contains something else, must contain binary digits (0 and 1) only.";
                }
                break;
            case "ob":
                if (/^[0-7]+$/.test(cvinput)) {
                    cvoutput.innerHTML = (parseInt(cvinput, 8).toString(2)).toUpperCase();
                } else {
                    cvoutput.innerHTML = "Input contains something else, must contain octal digits (0-7) only.";
                }
                break;
            case "od":
                if (/^[0-7]+$/.test(cvinput)) {
                    cvoutput.innerHTML = (parseInt(cvinput, 8).toString(10)).toUpperCase();
                } else {
                    cvoutput.innerHTML = "Input contains something else, must contain octal digits (0-7) only.";
                }
                break;
            case "oh":
                if (/^[0-7]+$/.test(cvinput)) {
                    cvoutput.innerHTML = (parseInt(cvinput, 8).toString(16)).toUpperCase();
                } else {
                    cvoutput.innerHTML = "Input contains something else, must contain octal digits (0-7) only.";
                }
                break;
            case "hb":
                if (/^[0-9A-F]+$/.test(cvinput)) {
                    cvoutput.innerHTML = (parseInt(cvinput, 16).toString(2)).toUpperCase();
                } else {
                    cvoutput.innerHTML = "Input contains something else, must contain hexadecimal digits (0-9 and A-F) only.";
                }
                break;
            case "hd":
                if (/^[0-9A-F]+$/.test(cvinput)) {
                    cvoutput.innerHTML = (parseInt(cvinput, 16).toString(10)).toUpperCase();
                } else {
                    cvoutput.innerHTML = "Input contains something else, must contain hexadecimal digits (0-9 and A-F) only.";
                }
                break;
            case "ho":
                if (/^[0-9A-F]+$/.test(cvinput)) {
                    cvoutput.innerHTML = (parseInt(cvinput, 16).toString(8)).toUpperCase();
                } else {
                    cvoutput.innerHTML = "Input contains something else, must contain hexadecimal digits (0-9 and A-F) only.";
                }
                break;
        }
    }
}

function solve() {
    // Get the input values and base numbers from the HTML elements
    var input1 = document.getElementById("in1op").value;
    var input2 = document.getElementById("in2op").value;
    var operationType = document.getElementById("operation-type").value;
    var input1BaseNumber = parseInt(document.getElementById("in1sys").value);
    var input2BaseNumber = parseInt(document.getElementById("in2sys").value);
    var outputBaseNumber = parseInt(document.getElementById("in3sys").value);

    // Define a function to validate input
    function isValidInput(input, base) {
        if (base === 2) {
            return /^[01]+$/.test(input);
        } else if (base === 16) {
            return /^[0-9A-Fa-f]+$/.test(input);
        } else if (base === 8) {
            return /^[0-7]+$/.test(input);
        } else if (base === 10) {
            return /^[0-9]+$/.test(input);
        }
        return false;
    }

    // Check if the input values are valid for their respective bases
    if (!isValidInput(input1, input1BaseNumber) || !isValidInput(input2, input2BaseNumber)) {
        document.getElementById("operation-result").innerHTML = "Invalid input for the selected base. Please enter valid values.";
        return;
    }

    // Define a function to convert a number from one base to another
    function convertBase(input, fromBase, toBase) {
        return parseInt(input, fromBase).toString(toBase);
    }

    // Convert input1 and input2 to decimal
    var decimalInput1 = parseInt(input1, input1BaseNumber);
    var decimalInput2 = parseInt(input2, input2BaseNumber);

    // Perform the specified operation in decimal
    var result;
    if (operationType === 'a') {
        result = decimalInput1 + decimalInput2;
    } else if (operationType === 's') {
        result = decimalInput1 - decimalInput2;
    } else if (operationType === 'm') {
        result = decimalInput1 * decimalInput2;
    } else if (operationType === 'd') {
        if (decimalInput2 !== 0) {
            result = decimalInput1 / decimalInput2;
        } else {
            result = "Division by zero is not allowed.";
        }
    }

    // Convert the result to the desired output base
    var output = convertBase(result, 10, outputBaseNumber);

    // Display the result in the HTML element
    document.getElementById("operation-result").innerHTML = output.toUpperCase();
}


// instant calculator
function instacalcu() {
    var InstaCalcuinput = document.getElementById("instacalcuinput").value;
    var InstaCalcuoutput = document.getElementById("instacalcu-result");
    try {
        var result = eval(InstaCalcuinput);
        if (isNaN(result)) {
            InstaCalcuoutput.innerHTML = "Please enter a valid input only";
        } else {
            InstaCalcuoutput.innerHTML = result;
        }
    } catch (error) {
        InstaCalcuoutput.innerHTML = "Error: " + error.message;
    }
}
setInterval(instacalcu, 1);
