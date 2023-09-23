function substringCalculator(s) {
    // Write your code here

    let bigArrayCollection = [];

    const removeFromEnd = (str) => {
        let strToArray = [];

        // convert string to array for easy manipulation
        for (let i = 0; i < str.length; i++) {
            strToArray.push(str[i]);
        }       
        
        console.log(strToArray);

        for (let i = 0; i < str.length; i++) {

            // reform string
            let reforemedStr = '';

            for (let j = 0; j <  strToArray.length; j++) {
                reforemedStr += strToArray[j];
            }
            
            if (!bigArrayCollection.includes(reforemedStr)) {
                
             bigArrayCollection.push(reforemedStr);
            }
             strToArray.pop();
         }

    }
    
     const removeFromFront = (str) => {
        let strToArray = [];
         // convert string to array for easy manipulation
        for ( let i = 0; i < str.length; i++ ) {
            strToArray.push(str[i]);
        }
         strToArray.shift();
         //  reform string
       let reforemedStr = '';
        for (let j = 0; j < strToArray.length; j++) {
            reforemedStr += strToArray[j];
        }
        
        return reforemedStr;
    }
    
    let newStr;
  for ( let i = 0; i < s.length; i++ ) {
      
          if ( i === 0 ) {
                removeFromEnd(s);
                newStr = removeFromFront(s);
            } else {

             removeFromEnd(newStr);
             newStr = removeFromFront(newStr);
          }
    }
    
    console.log(bigArrayCollection);
    
    console.log(bigArrayCollection.length);
    return bigArrayCollection.length;

}

substringCalculator('kinceniveh');