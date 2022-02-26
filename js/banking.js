
function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
     const inputAmount = parseFloat(inputField.value);
     
     // clear input field 
    inputField.value = '';
     return inputAmount;
}

function updateTotalField(totalFieldId ,amount){

    const totalField = document.getElementById(totalFieldId);
    const currentAmount = parseFloat(totalField.innerText);

    // updated deposit total 

    const updatedTotal = amount + currentAmount;
    totalField.innerText = updatedTotal;

}

function updateBalance(type ,newAmount){
    const balanceInput = document.getElementById('balance-total');
    const currentBalance = parseFloat(balanceInput.innerText);

    if(type == 'deposit'){
        const updatedBalance = currentBalance + newAmount;
        balanceInput.innerText = updatedBalance;
    }else {
        const updatedBalance = currentBalance - newAmount;
        balanceInput.innerText = updatedBalance;
    } 
}

document.getElementById('deposit-btn').addEventListener('click',function(){

    const newAmount = getInputValue('deposit');

    if(newAmount > 0){
        updateTotalField('deposit-total',newAmount);
     updateBalance('deposit',newAmount);
    }
     
})

document.getElementById('withdraw-btn').addEventListener('click',function(){

    // taking total balance amount 
    const balanceInput = document.getElementById('balance-total');
    const currentBalance = parseFloat(balanceInput.innerText);

    const newAmount = getInputValue('withdraw');
    if(newAmount > 0 && newAmount < currentBalance){
        updateTotalField('withdraw-total',newAmount);
        updateBalance('withdraw',newAmount);
    }
   
})



