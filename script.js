const billInput=document.getElementById("billTotalInput")
const tipAmt=document.getElementById("tipInput")
const noOfPpl=document.getElementById("numberOfPeople")
const totalAmt=document.getElementById("perPersonTotal")




let numOfPeople = Number(noOfPpl.innerText)

const calculateBill = () => {
 
  
  
  
  const bill=Number(billInput.value)
 

  const tip=Number(tipAmt.value)/100
  const totalTipAmt=tip*bill
   
  const total=totalTipAmt + bill
   
  
  let perPersonTotal=total/numOfPeople
  
   
   
   totalAmt.innerText=`$${perPersonTotal.toFixed(2)}`
}

 const increasePeople = () => {
  
  numOfPeople+=1

  numberOfPeople.innerText=numOfPeople

  calculateBill()
}

const decreasePeople = () => {
  
   if(numOfPeople<=1){
     throw ('Hey, you cannot have number of people less than 1!!')
     return
   }
  
 
  numOfPeople-=1

  
  numberOfPeople.innerText=numOfPeople

  
  calculateBill()
}
