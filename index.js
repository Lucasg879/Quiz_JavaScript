const alternativasEscolhidas = {};
const perguntas = [{
    descricao:'JavaScript é uma linguagem tipada ?',
    alternativas:['Sim','Não'],
    correta:'Não'
}, {
    descricao:'O que significa a tag Html ?',
    alternativas:[
        'Hyper Text Markup Language',
        'Hyper Toast Markup Language',
        'Hyper Text Marked Language'],
    correta:'Hyper Text Markup Language'
}, {
    descricao:'Qual tag é usada para importação de uma arquivo js ?',
    alternativas:[
        '<js>',
        '<scripting>',
        '<javascript>',
        '<script>'
    ],
    correta:'<script>'
}];

function montarPerguntas(){
    const container = document.querySelector('.container');

    perguntas.forEach((pergunta, indiceDaPergunta)=>{
        const h3 = document.createElement('h3');

        h3.innerText = pergunta.descricao;
        container.appendChild(h3);

        pergunta.alternativas.forEach(alternativa =>{
            const box = document.createElement('div');
            const input = document.createElement('input');
            const label = document.createElement('label');

            input.type ='checkbox';
            label.innerText =alternativa;

            input.onchange = () =>{
                alternativasEscolhidas[indiceDaPergunta] = alternativa;
            }
            box.appendChild(input);
            box.appendChild(label);

            container.appendChild(box);
        })
    });
};

function verResultado(){
    const score= {
        acertos: 0,
        erros: 0
    };

    perguntas.forEach((pergunta, indice)=>{
        if (pergunta.correta = alternativasEscolhidas[indice]){
            return ++score.acertos;
        }
        else{
            ++score.erros;
        }
    });
    alert(`Você acertou ${score.acertos} e errou ${score.erros}`);
}
montarPerguntas();
verResultado();