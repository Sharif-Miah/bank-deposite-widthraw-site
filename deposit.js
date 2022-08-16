document.getElementById('deposit-btn').addEventListener('click', function () {

    const depositInputElement = document.getElementById('deposit-input');
    const totalAmountString = depositInputElement.value;
    const nwetotalAmount = parseFloat(totalAmountString)



    const depositAmountElement = document.getElementById('deposit-amount');
    const prevtotalDepositString = depositAmountElement.innerText;
    const prevtotalDeposit = parseFloat(prevtotalDepositString)

    const totalAmount = prevtotalDeposit + nwetotalAmount;

    depositAmountElement.innerText = totalAmount;

    // overall Total Sum 

    const ovarAll = document.getElementById('overl-total');

    const ovarAllString = ovarAll.innerText;

    const ovarAllBalance = parseFloat(ovarAllString);

    const overAllTotal = ovarAllBalance + nwetotalAmount;

    ovarAll.innerText = overAllTotal;


    depositInputElement.value = '';

})



// WidthDraw work start 


document.getElementById('withdraw-btn').addEventListener('click', function () {

    const withdrawInputElement = document.getElementById('withdraw-input');
    const withdrawInput = parseFloat(withdrawInputElement.value);

    const withDrawAmountmoney = document.getElementById('withdraw-amount');
    const withDrawAmount = parseFloat(withDrawAmountmoney.innerText);

    const totalWithdrawAmont = withdrawInput + withDrawAmount;


    withDrawAmountmoney.innerText = totalWithdrawAmont;



    // overall Total decretion 

    const ovarAll = document.getElementById('overl-total');
    const ovarAllString = ovarAll.innerText;
    const ovarAllBalance = parseFloat(ovarAllString);

    const mainBalance = ovarAllBalance - withdrawInput;

    ovarAll.innerText = mainBalance;

    withdrawInputElement.value = '';

})


