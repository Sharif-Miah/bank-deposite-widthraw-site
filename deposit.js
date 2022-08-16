document.getElementById('deposit-btn').addEventListener('click', function () {

    const depositInputElement = document.getElementById('deposit-input');
    const totalAmount = depositInputElement.value;

    const depositAmountElement = document.getElementById('deposit-amount');
    // const totalDeposit = depositAmountElement.innerText;
    depositAmountElement.innerText = totalAmount


})