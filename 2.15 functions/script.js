function cheackMin(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}
console.log(`min(2, 5)= ` + cheackMin(2, 5));
console.log(`min(4, -5)= ` + cheackMin(4, -5));
console.log(`min(2, 1)= ` + cheackMin(2, 1));
console.log(`min(99, 67)= ` + cheackMin(99, 67));
