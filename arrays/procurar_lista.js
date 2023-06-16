
const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function procuraAluno(aluno) {
    if (listaDeAlunosEMedias[0].includes(aluno)) {
        console.log(`${aluno} está cadastrado!`);
        const indice = listaDeAlunosEMedias[0].indexOf(aluno);
        console.log(`E sua nota foi ${listaDeAlunosEMedias[1][indice]}`);
        
    } else{
        console.log(`Aluno não está cadastrado!`);
    }   
}

procuraAluno("bct");
