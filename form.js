
const states = document.getElementById("states");
const terr = document.getElementById("territories");

function showOptions(i) {
  if (i == 'CA') {
    states.classList.add('hidden');
    terr.classList.remove('hidden');
  } else {
    terr.classList.add('hidden');
    states.classList.remove('hidden');
  }
}

//validate form
function validateForm() {
  validateAgeAndEventListener();
  validateNumber();
  validatePassWordandChange();
}

//show thank you alert
function showAlert() {
  const firstName = document.getElementById('first').value;
  const lastName = document.getElementById('last').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;
  
  const message = `Thank You!\n\nName: ${firstName} ${lastName}\nPhone: ${phone}\nEmail: ${email}`;
  
  alert(message);
}

//validate number
function validateNumber() {
  let doc = document.forms["form"];
  let num = doc["fave-num"];
  let pattern = /[1-10]/;
  let res = pattern.test(num);
  
  if (res) {
    num.setCustomValidity("Enter a valid number between 1 and 10");
  }
}

//validate password
function validatePassWordandChange(){
  var password = document.getElementById("password")
      , confirm_password = document.getElementById("confirm_password");

  function validatePassword(){
    if(password.value != confirm_password.value) {
      confirm_password.setCustomValidity("Passwords Don't Match");
    } else {
      confirm_password.setCustomValidity('');
    }
  }

  password.onchange = validatePassword;
  confirm_password.onkeyup = validatePassword;
}
//validate age
function validateAgeAndEventListener() {
  function validateAge() {
      var dobInput = document.getElementById('dob');
      var dobValue = dobInput.value;
      
      var dobDate = new Date(dobValue);
      
      var minValidYear = new Date().getFullYear() - 18;
      
      if (dobDate.getFullYear() > minValidYear) {
          dobInput.setCustomValidity('You must be 18 years or older to proceed.');
      } else {
          dobInput.setCustomValidity('');
      }
  }

  var dobInput = document.getElementById('dob');
  dobInput.addEventListener('change', validateAge);
}

// document.getElementById('submit').addEventListener('click', function(event) {
//   event.preventDefault(); 
//   validateForm();
// });