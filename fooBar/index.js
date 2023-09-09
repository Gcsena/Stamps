function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    let i = 5;
    while (i * i <= num) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
      i += 6;
    }
    return true;
  }
  
  function fooBar(num) {
    if (num % 3 === 0 && num % 5 === 0) return "FooBar";
    if (num % 3 === 0) return "Foo";
    if (num % 5 === 0) return "Bar";
    return num.toString();
  }
  
  function printSideways(arr) {
    console.log(arr.join(" "));
  }
  
  const numbers = Array.from({ length: 100 }, (_, index) => index + 1);
  
  const modifiedNumbers = numbers.map((num) => {
    if (isPrime(num)) return "";
    return fooBar(num);
  });
  
  printSideways(modifiedNumbers);
  