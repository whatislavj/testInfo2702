function convertNumber(number, base) {
    let decimalNumber = parseInt(number, base);

    let octal = decimalNumber.toString(8);
    let binary = decimalNumber.toString(2);
    let decimal = decimalNumber.toString(10);
    let hexadecimal = decimalNumber.toString(16).toUpperCase();

    return {
        octal: octal,
        binary: binary,
        decimal: decimal,
        hexadecimal: hexadecimal
    };
}

let number = "2A";
let base = 16;

let conversions = convertNumber(number, base);
console.log("Decimal:", conversions.decimal);
console.log("Binary:", conversions.binary);
console.log("Octal:", conversions.octal);
console.log("Hexadecimal:", conversions.hexadecimal);
