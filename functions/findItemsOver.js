export default(itemList,threshold) => { 
  
    let highest =[];
  
    for(var i=0;i<itemList.length;i++){
      
      if(itemList[i].qty > threshold){
        highest.push(itemList[i]);
      }
   
  }
   return highest
  
  };
