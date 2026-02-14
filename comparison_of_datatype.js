// comparision:
// comparision of same datatype is easy
// comparison of diifrent datatype : --> predictable result will not be there.
// console.log("2" > 1); // automatically this 2 is converted to number
// console.log("02" > 1);

// console.log(null > 0);
// console.log(null < 0);
// console.log(null == 0);
// console.log(null >= 0);
// console.log(Number(null));

// The reason is that an equality check == and comparisons > <>  >= <= works diffrently.
// comparisons converts null to number, treating it as 0.

// console.log(undefined == 0); // false
// console.log(undefined > 0); // false
// console.log(undefined < 0); // false

// WE SHIULD AVOID THESE TYPE OF NULL AND INDEFINED CONVERSIONS.

// ===  -> check strictly --> check datatype also
console.log("2" === 2);
console.log("2" == 2);