function validarFormulrio(){
    const nomeProjeto = document.getElementById('nomeProjeto').value.trim();
    const desc = document.getElementById('descricao').value;
   // const dataCriacao = document.getElementById('dataCriacao').value;
 //   const dataConclusao = document.getElementById('dataConclusao').value;
    const statusProjeto = document.getElementById('statusProjeto').value;
    const responsavel = document.getElementById('responsavel').value.trim();



    if(nomeProjeto===''){
        alert('Preencha com o nome do projeto.');
        return false;
    }

    if(statusProjeto ===''){
        alert("Selecione o status do projeto.");
        return false;
    }

    if(responsavel ===''){
        alert("Defina o responsável do projeto.");
        return false;
    }

    
}