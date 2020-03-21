const $inputPassword = document.querySelector('input[type="password"]');
const $iconEyePass = document.querySelector('i');

$iconEyePass.addEventListener('click', function(){
	if($inputPassword.type === 'password'){
		$inputPassword.type = 'text';
		$iconEyePass.classList.add('hideEye')
	} else {
		$inputPassword.type = 'password';
		$iconEyePass.classList.remove('hideEye')
	}
})
	