function validarFormulario(){
   const nome = document.getElementById('nomeUsuario').value.trim();
   const cpf = document.getElementById('cpf').value.trim();
  const senha =  document.getElementById('senha').value;
  const email = document.getElementById('email').value.trim();
    const status = document.getElementById('statusUsuario').value;
   // const dataNascimento = document.getElementById('dataNasc').value;

    if(nome===''){
        alert('Por favor, preencha o nome do usuário.');
        return false;
    }

    if(senha === '' || senha.length < 6){
        alert('A senha deve conter no mínimo 6 caracteres.');
        return false;
    }


    if(cpf === '' || cpf.length !==11){
        alert('Preencha com o número do CPF válido.');
        return false;
    }

    if(email ===''|| !email.includes('@')){
        alert('Preencha com um e-mail válido.');
        return false;
    }

    if(status===''){
        alert('Selecione uma opção de status.');
        return false;
    }
    
   
}