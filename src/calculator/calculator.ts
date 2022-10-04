class Calculator {
   static raise(base: number, exponent: number) {
      let result: any = 1;

      if (exponent < 0) {
         result = "invalid input";
      }

      for (let i = 0; i < exponent; i++) {
         result *= base;
      }

      return result;
   }
}

export default Calculator;
