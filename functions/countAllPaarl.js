export default(stringNumber) =>  {
  
    let counter=0;
    
    const numbers=stringNumber.split(',');
    
    for(var i=0;i<numbers.length;i++){
      
      const currentNumber=numbers[i].trim();
      
      if(currentNumber.startsWith('CJ')){
       
        counter++;
      }
    }
    return counter
  }
