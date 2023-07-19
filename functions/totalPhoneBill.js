export default(bill) =>  {
  
    var Total=0;
    
    let price=bill.split(',');
    
    for(var i=0;i<price.length;i++){
      
      const currentBill=price[i].trim();
      
      if(currentBill.startsWith('sms')){
        Total +=0.65;
      }
      
      if(currentBill.startsWith('call')){
        Total +=2.75;
      }
    }
    return 'R'+ Total.toFixed(2);
  }
