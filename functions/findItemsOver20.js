export default(itemList) => {
  
    let highest =[];
  
    for(var i=0;i<itemList.length;i++){
      
      if(itemList[i].qty >20){
        highest.push(itemList[i]);
      }
   
  }
   return highest
  
  };
