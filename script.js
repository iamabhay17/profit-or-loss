const initialPrice = document.querySelector("#initial-price");
const noOfStock = document.querySelector("#no-of-stock");
const currentPrice = document.querySelector("#current-price");
const check = document.querySelector("#check");
const result = document.querySelector(".result");



const showMessage=(msg)=>
{
    result.innerText=msg;
}

const change=(cost,value)=>
{

   if(value>=cost)
   {
       result.style.color='blue';
       showMessage(`You have profit of ${value-cost}`);
   }
   else{
       
    result.style.color='red';
    showMessage(`You have loss of ${cost-value}`);
   }
}



check.addEventListener('click',()=>
{
    const cost=Number(initialPrice.value)* Number(noOfStock.value);
    const value=Number(currentPrice.value)* Number(noOfStock.value);

    return change(cost,value);

})