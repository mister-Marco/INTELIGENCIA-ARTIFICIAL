const caixaPrincipal = document.querySelector(".caixa-pricipal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Como você descreveria sua personalidade?",
        alternativas: [
            {
                texto: "Calma e introspectiva",
                afirmacao: "afirmação"
            },
            {
                texto: "Energética e extrovertida",
                afirmacao: "afirmação"
            },
            {
                texto: "Criativa e espontânea",
                afirmacao: "afirmação"
            },
            {
                texto: "Organizada e meticulosa"
                afirmacao: "afirmação"
            } 
        ]
    },
    {
        enunciado: "Qual ambiente você prefere?",
        alternativas: [
            {
                texto: "Natureza, ao ar livre",
                afirmacao: "afirmação"
            },
            {
                texto: "Shows com muita gente",
                afirmacao: "afirmação"
            },
            {
                texto:  "Lugares tranquilos, como cafés",
                afirmacao: "afirmação"
            },
            {
                texto: "Ambientes formais e sofisticados"
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Você gosta de seguir regras ou prefere criar seu próprio caminho?",
        alternativas: [
            {
                texto:  "Seguir regras traz segurança",
                afirmacao: "afirmação"
            },
            {
                texto: "Criar meu próprio caminho é mais divertido"
                afirmacao: "afirmação"
            }
            
        ]
    },
    {
        enunciado: "Como você se relaciona com o ritmo?",
        alternativas: [
            {
                texto:  "Gosto de manter o tempo exato",
                afirmacao: "afirmação"
            },
            {
                texto:  "Prefiro variar o ritmo conforme a sensação"
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Qual estilo musical mais te atrai?",
        alternativas: [
            {
                texto:    "Música clássica",
                afirmacao: "afirmação"
            },
            {
                texto:  "Rock ou pop",
                afirmacao: "afirmação"
            },
            {
                texto:  "Jazz ou blues",
                afirmacao: "afirmação"
            },
            {
                texto:  "Folk ou acústico"
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Como você reage em situações de estresse?",
        alternativas: [
            "Prefiro me isolar para refletir",
            "Eu me movimento para liberar energia",
            "Gosto de falar sobre o problema",
            "Tento manter a calma e o foco"
        ]
    },
    {
        enunciado: "O que você prefere fazer no seu tempo livre?",
        alternativas: [
            "Ler ou assistir filmes em casa",
            "Sair com amigos",
            "Criar algo novo, como arte ou escrever",
            "Praticar um hobby com disciplina"
        ]
    },
    {
        enunciado: "Como você prefere aprender algo novo?",
        alternativas: [
            "Com aulas estruturadas e um professor",
            "Experimentando sozinho e explorando por conta própria",
            "Aprendendo com amigos ou em grupo",
            "Assistindo tutoriais e praticando no meu ritmo"
        ]
    },
    {
        enunciado: "Como você descreveria seu estilo de comunicação?",
        alternativas: [
            "Direto e objetivo",
            "Expressivo e emocional",
            "Reservado e reflexivo",
            "Divertido e cheio de humor"
        ]
    },
    {
        enunciado: "Quais dessas atividades mais lhe agradam?",
        alternativas: [
            "Resolver quebra-cabeças ou desafios lógicos",
            "Participar de atividades físicas e esportivas",
            "Meditar ou fazer ioga",
            "Sair para eventos sociais e festas"
        ]
    },
    {
        enunciado: "Qual dos elementos da natureza mais te atrai?",
        alternativas: [
            "Água",
            "Fogo",
            "Terra",
            "Ar"
        ]
    },
    {
        enunciado: "Qual é o seu objetivo principal ao tocar um instrumento?",
        alternativas: [
            "Relaxar e desestressar",
            "Expressar emoções",
            "Divertir e entreter",
            "Aperfeiçoar minhas habilidade"
        ]
    },
    {
        enunciado: "Como você se sente em relação à improvisação?",
        alternativas: [
            "Prefira seguir uma partição ou estrutura",
            "Amo improvisar e criar na hora",
            "Gosto de um equilíbrio entre estrutura e improviso",
            "Improviso se for necessário, mas prefiro saber o que vou tocar"
        ]
    },
    {
        enunciado: "Você prefere tocar sozinho ou em grupo?",
        alternativas: [
            "Sozinho, é mais fácil eu me concentrar",
            "Em grupo, é mais divertido e dinâmico"
        ]
    },
    {
        enunciado: "Como você lida com críticas?",
        alternativas: [
            "Gosto de ouvir para melhorar",
            "Levo para o lado pessoal, mas tento aprender",
            "Não me incomoda muito, continuo no meu ritmo",
            "Prefiro receber críticas construtivas em privado"
        ]
    },
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();
