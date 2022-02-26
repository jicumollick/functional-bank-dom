
document.getElementById('submit-btn').addEventListener('click',function(){
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
   

    const emailPassword = document.getElementById('user-password');
    const userPassword = emailPassword.value;
    

    if(userEmail == 'user' && userPassword == '1234'){
        window.location.href = "./banking.html";
    }
})


