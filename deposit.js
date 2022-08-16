document.getElementById('deposit-btn').addEventListener('click', function () {

    const depositInputElement = document.getElementById('deposit-input');
    const totalAmountString = depositInputElement.value;
    const nwetotalAmount = parseFloat(totalAmountString)



    const depositAmountElement = document.getElementById('deposit-amount');
    const prevtotalDepositString = depositAmountElement.innerText;
    const prevtotalDeposit = parseFloat(prevtotalDepositString)

    const totalAmount = prevtotalDeposit + nwetotalAmount;

    depositAmountElement.innerText = totalAmount;










    depositInputElement.value = '';

})