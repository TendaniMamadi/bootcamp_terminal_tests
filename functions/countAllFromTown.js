export default(RegNumbers, Town) =>  {
  
    var counter=0;
    
    let number=RegNumbers.split(',');
    
    for(var i=0;i<number.length;i++){
      
      const currentNumbers=number[i].trim();
      
      if(currentNumbers.startsWith(Town)){
        
        counter++;
      }
    }
    
    return counter
  };
