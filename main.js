const showHiddenPass = (loginPass, loginEye) =>{
    const input = document.getElementById(loginPass),
          iconEye = document.getElementById(loginEye)
 
    iconEye.addEventListener('click', () =>{
       if(input.type === 'password'){
          input.type = 'text'
          iconEye.classList.add('ri-eye-line')
          iconEye.classList.remove('ri-eye-off-line')
       } else{
          input.type = 'password'
          iconEye.classList.remove('ri-eye-line')
          iconEye.classList.add('ri-eye-off-line')
       }
    })
 }
 
 showHiddenPass('login-pass','login-eye')

 const validateLogin = () => {
    // Get login ID and password from the user
    const loginId = document.getElementById('login-email').value;
    const password = document.getElementById('login-pass').value;

    if (loginId === 'login__input' && password === 'login__input') {
     
        alert('Login successful!');
    } else {
        alert('Invalid login ID or password. Please try again.');
    }
};
document.getElementById('login-button').addEventListener('click', validateLogin);