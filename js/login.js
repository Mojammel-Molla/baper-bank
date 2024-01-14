document.getElementById('submit-btn').addEventListener('click', function () {
  const userEmail = document.getElementById('user-email');
 const emailValue = userEmail.value;
 
  const userPassword = document.getElementById('user-password');
  const passwordValue = userPassword.value;
  
  if (emailValue === 'mojammel@gmail.com' && passwordValue === '1234') {
    window.location.href = 'bank.html';
  } else {
    alert('Please enter correct password') ;
  }
})
