// function fact(n) {
//   if (typeof n !== "number") {
//     throw new TypeError("n must be number");
//   }
//   if ((!Number.isInteger(n), n > Number.MAX_SAFE_INTEGER)) {
//     throw new RangeError("n must be nonnegative integer value");
//   }
//   if (n === 0) {
//     return 1;
//   }
//   return n * fact(n - 1);
// }

// try {
//   const f = fact(-1);
// } catch (e) {
//   console.log("e :>> ", e);
// }
// document.write(`<p>Text</p>`);

// function fact(n) {
//     if (typeof n !== "number") {
//       throw new TypeError("n must be number");
//     }
//     if (!Number.isInteger(n)  n > Number.MAX_SAFE_INTEGER) {
//       throw new RangeError("n must be nonnegative integer value");
//     }

//     function factorial(m) {
//       if (m === 0) {
//         return 1;
//       }
//       return m * factorial(m - 1);
//     }

//     return factorial(n);
//   }

//   try {
//     const f = fact(5);
//     console.log("f :>> ", f);
//   } catch (e) {
//     console.log("e :>> ", e);
//   }
//   document.write(`<p>Text</p>`);

function age(n) {
  if (typeof n !== "number") {
    throw new TypeError("n must be number");
  }
  if ((!Number.isInteger(n), n > Number.MAX_SAFE_INTEGER)) {
    throw new RangeError("n must be nonnegative integer value");
  }

  function factorial(m) {
    if (m === 0) {
      return 1;
    }
    return m * factorial(m - 1);
  }

  return factorial(m);
}

try {
  const f = fact(5);
  console.log("f :>> ", f);
} catch (e) {
  console.log("e :>> ", e);
}
document.write(`<p>Text</p>`);
