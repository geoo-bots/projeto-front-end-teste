function validarFormulario(){
    const titulo = document.getElementById('titulo').value.trim();
    const responsavel = document.getElementById('responsavel').value.trim();
    const descricao = document.getElementById('descricao').value;
    //const dataCriacao = document.getElementById('dataCriacao').value;
  //  const dataConclusao = document.getElementById('dataConclusao').value;
    const status = document.getElementById('statusTarefa').value;
    const projeto = document.getElementById('projeto').value;
    const prioridade = document.getElementById('prioridade').value;
   


    if(titulo === ''){
        alert('Digite um título para a tarefa.');
        return false;
    }

    if(responsavel === ''){
        alert("Defina um responsável para a tarefa.");
        return false;
    }

    if(status ===''){
        alert("Selecione uma opção para status da tarefa.");
        return false;
    }

    if(projeto ===''){
        alert("Selecione uma opção para projeto.");
        return false;
    }

    if(prioridade ===''){
        alert('Selecione uma opção para prioridade.');
        return false;
    }
}