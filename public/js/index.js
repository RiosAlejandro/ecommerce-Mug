window.addEventListener('load', function(){

	const inputIngreso = document.querySelectorAll('input.inputFormIngreso');

    for(let i = 0; i < inputIngreso.length; i++){
        inputIngreso[i].addEventListener('click', function(){
            this.classList.add('focus');
        })
        inputIngreso[i].addEventListener('blur', function(){
            this.classList.remove('focus');
        })
}

});

