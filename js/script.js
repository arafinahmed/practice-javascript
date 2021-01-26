//Login button event handler
const loginBtn = document.getElementById('verify-login');
loginBtn.addEventListener('click', function(){
    const logIn = document.getElementById('login-area');
    logIn.style.display = 'none';
    const transactionArea = document.getElementById('transaction-area');
    transactionArea.style.display = 'block';
});


//deposit button event handler 
const depositBtn = document.getElementById('deposit-btn');
depositBtn.addEventListener('click', function(){
    const depoAmount = getFromForm('deposit-amount');
    updateSpanText('current-depo', depoAmount);
    updateSpanText('current-balance', depoAmount);        
});

//Withdraw
const withdrawBtn = document.getElementById('withdraw-btn');
withdrawBtn.addEventListener('click', function(){
    const withAmount = getFromForm('withdraw-amount');
    updateSpanText('current-withdraw', withAmount);
    updateSpanText('current-balance', -withAmount);    
});

function updateSpanText(spanID, addedNum){
    const current = document.getElementById(spanID).innerHTML;
    const balance = parseFloat(current);
    const total = balance + addedNum;
    document.getElementById(spanID).innerHTML = total;
}

function getFromForm(idName){
    const amount = document.getElementById(idName).value;
    const numAmount = parseFloat(amount);
    document.getElementById(idName).value = '';
    return numAmount;
}