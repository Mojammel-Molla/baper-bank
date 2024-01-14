
document.getElementById('deposit-btn').addEventListener('click', function(){
  const diposit = document.getElementById('deposit-field');
  const depositValue = diposit.value;
  const depositeAmount = document.getElementById('deposit-balance');
  const depositeAmountValue = depositeAmount.innerText;
  const newDepositTotal = parseFloat(depositValue) + parseFloat(depositeAmountValue);
  depositeAmount.innerText = newDepositTotal;
  const balance = document.getElementById('total-balance');
  const balanaTotal = balance.innerText;
  const newBalanceTotal = parseFloat(balanaTotal) + parseFloat(depositValue);
  balance.innerText = newBalanceTotal;
  diposit.value = '';

})

document.getElementById('withdraw-btn').addEventListener('click', function() {
  const withdraw = document.getElementById('withdraw-field');
  const withdrawValue = withdraw.value;
  const withdrawAmount = document.getElementById('withdraw-balance');
  const withdrawAmountValue = withdrawAmount.innerText;
  const newWithdrawTotal = parseFloat(withdrawValue) + parseFloat(withdrawAmountValue);
  withdrawAmount.innerText = newWithdrawTotal;
  const balance = document.getElementById('total-balance');
  const balanaceTotal = balance.innerText;
  const newBalanceTotal = parseFloat(balanaceTotal) - parseFloat(withdrawValue);
  balance.innerText = newBalanceTotal;
  withdraw.value = '';
})