const seePswdCheckbox = document.getElementById('seePswd');
const passwordInputs = document.querySelectorAll('input[type="password"]');

seePswdCheckbox.addEventListener('change', function() {
  const isChecked = this.checked;
  passwordInputs.forEach(function(input) {
    input.type = isChecked ? 'text' : 'password';
  });
});