function getTotalX(a, b) {
    // Write your code here
 let validCount = 0;

 for (let x = 1; x <= 100; x++) {
   if (a.every(int => (x % int === 0 ))) {
      if (b.every(int => (int % x === 0 ))) {
         validCount++; 
      }    
   }
 }

 return validCount; 
}