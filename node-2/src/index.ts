import readlineSync from 'readline-sync';
import chalk from 'chalk';
import dayjs from 'dayjs';

const media = 18;
const totalAlunos = Number(
    readlineSync.question('Quantos alunos voce quer cadastrar? ')
  );

  function processarAluno(indice: number): void {

console.log(chalk.bold.blue(`\n--- Aluno ${indice + 1} ---`));

const nome = readlineSync.question(chalk.bold.blue('Nome do aluno: '));

const nota1 = Number(readlineSync.question(chalk.bold.blue('Nota PI: ')));
const nota2 = Number(readlineSync.question(chalk.bold.blue('Nota PR: ')));
const nota3 = Number(readlineSync.question(chalk.bold.blue('Nota PF: ')));

if (nota1 >= 0 && nota1 <= 6 && nota2 >= 0 && nota2 <= 12 && nota3 >= 0 && nota3 <= 12) {

const total = (nota1 + nota2 + nota3);

if (total >= media) {
console.log(chalk.bold.green(`Resultado: APROVADO(a) `));
console.log(chalk.bold.blue(`Total: ${total}`));

} else if (total >= 15 && total <= 17){
console.log(chalk.bold.yellow(`Resultado: RECUPERAÇÃO` ));
console.log(chalk.bold.blue(`Total: ${total}`));

 const segundachamada = readlineSync.question('Você possui requerimento para 2ª chamada? (S/N) ');
if (segundachamada == "S"){
 console.log(readlineSync.question(`Envie o anexo do requerimento a seguir: `));
}else {
 console.log(``);
}

}else{
  console.log(chalk.bold.red(`Resultado: REPROVADO(a)` ));
  console.log(chalk.bold.blue(`Total: ${total}`));
}

 }else{
 console.log(chalk.bold.red(`ERRO`));
}

}

for (let i = 0; i < totalAlunos; i++) {
processarAluno(i);
}

console.log(chalk.bold.blue('\n --- Fim do processamento! --- '));
const dataHora = dayjs().format("DD/MM/YYYY HH:mm:ss");
console.log(chalk.bold.blue(`Data e hora do processamento: ${dataHora}`));
console.log(chalk.bold.blue(`Total de alunos processados: ${totalAlunos}`));









