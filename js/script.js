//Login button event handler
const loginBtn = document.getElementById('verify-login');
loginBtn.addEventListener('click', function(){
    console.log('Clicked');
    const logIn = document.getElementById('login-area');
    logIn.style.display = 'none';
    const transactionArea = document.getElementById('transaction-area');
    transactionArea.style.display = 'block';
});


//deposit button event handler 
const depositBtn = document.getElementById('deposit-btn');
depositBtn.addEventListener('click', function(){
    const amount = document.getElementById('deposit-amount').value;
    const depoAmount = parseFloat(amount);
    
    const currentDepo = document.getElementById('current-depo').innerHTML;
    const num = parseFloat(currentDepo);
    const total = num + depoAmount;
    console.log(total);
    document.getElementById('current-depo').innerHTML = total;
    document.getElementById('deposit-amount').value = '';
});