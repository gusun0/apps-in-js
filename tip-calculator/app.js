function calculate(){
 var billAmount = document.getElementById('bill-amount').value;
 var shareBill = document.getElementById('share-bill').value;
 var serviceQuality = document.getElementById('service-quality').value;

 var result = ((billAmount * serviceQuality) / (shareBill)).toFixed(2);
 document.getElementById('total').innerHTML  =`$${result}`;

}
