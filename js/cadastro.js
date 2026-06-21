const form  = document.querySelector('#form-cliente');

form.addEventListener('submit', function(event){
    event.preventDefault();
    const fields = [
        {
            id: 'nome',
            label: 'cliente',
            validator: nameValidation
        },
        {
            id: 'endereco',
            label: 'cliente',
            validator: enderecoValidation
        },
        {
            id: 'email',
            label: 'cliente',
            validator: emailValidation
        },
        {
            id: 'telefone',
            label: 'cliente',
            validator: telefoneValidation
        }
    ]

    fields.forEach(function(fields) {
        const input = document.getElementById(fields.id);
        const inputBox = input.closest('.input-box');
        const inputValue = input.value;
        
        const spanError = inputBox.querySelector('.error');
        spanError.innerHTML = '';

        const fieldsvalidator = fields.validator(inputValue);

    if(!fieldsvalidator.isValid){
        spanError.innerHTML = `${fieldsvalidator.errorMessage}`;
    }

})


});

function isEmpty(value){
    return value === '';
}

function nameValidation(value){
    const validator = {
        isValid: true,
        errorMessage: null
    };

    if(isEmpty(value)){
        validator.isValid = false;
        validator.errorMessage = 'O campo é obrigatório';
        return validator;
    }

    const min = 3;
    if(value.length < min){
        validator.isValid = false;
        validator.errorMessage = `O nome deve conter pelo menos ${min} caracteres.`;
        return validator;
    }

    const regex  = /^[a-zA-Z]/;
    if(!regex.test(value)){
        validator.isValid= false;
        validator.errorMessage = 'O campo deve conter apenas letras'
    }
    return validator;
}

function enderecoValidation(value){
    const validator = {
        isValid: true,
        errorMessage: null
    };

    if(isEmpty(value)){
        validator.isValid = false;
        validator.errorMessage = 'O campo é obrigatório';
        return validator;
    }
}

function emailValidation(value){
    const validator = {
        isValid: true,
        errorMessage: null
    };

    if(isEmpty(value)){
        validator.isValid = false;
        validator.errorMessage = 'O campo é obrigatório';
        return validator;
    }
}

function telefoneValidation(value){
    const validator = {
        isValid: true,
        errorMessage: null
    };

    if(isEmpty(value)){
        validator.isValid = false;
        validator.errorMessage = 'O campo é obrigatório';
        return validator;
    }
}