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
                afirmacao: "Violão: O violão tem um som relaxante e introspectivo, ideal para quem aprecia momentos de calma e reflexão."
            },
            {
                texto: "Energética e extrovertida",
                afirmacao: "Bateria: A bateria é vibrante, cheia de energia e ideal para pessoas dinâmicas e extrovertidas."
            },
            {
                texto: "Criativa e espontânea",
                afirmacao: "Saxofone: O saxofone permite improvisos, ideal para quem é criativo e gosta de expressar sentimentos livremente."
            },
            {
                texto: "Organizada e meticulosa",
                afirmacao: "Piano: O piano requer precisão, disciplina e organização, combinando com pessoas meticulosas."
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
                texto: "Ambientes formais e sofisticados",
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
                texto: "Criar meu próprio caminho é mais divertido",
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
                texto:  "Prefiro variar o ritmo conforme a sensação",
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
                texto:  "Folk ou acústico",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Como você reage em situações de estresse?",
        alternativas: [
            {
                texto:  "Prefiro me isolar para refletir",
                afirmacao: "afirmação"
            },
            {
                texto: "Eu me movimento para liberar energia",
                afirmacao: "afirmação"
            },
            {
                texto:  "Gosto de falar sobre o problema",
                afirmacao: "afirmação"
            },
            {
                texto:  "Tento manter a calma e o foco",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "O que você prefere fazer no seu tempo livre?",
        alternativas: [
            {
                texto:  "Ler ou assistir filmes em casa",
                afirmacao: "afirmação"
            },
            {
                texto:   "Sair com amigos",
                afirmacao: "afirmação"
            },
            {
                texto:   "Criar algo novo, como arte ou escrever",
                afirmacao: "afirmação"
            },
            {
                texto:  "Praticar um hobby com disciplina",
                afirmacao: "afirmação"
            }
            
           
           
            
        ]
    },
    {
        enunciado: "Como você prefere aprender algo novo?",
        alternativas: [
            {
                texto:   "Com aulas estruturadas e um professor",
                afirmacao: "afirmação"
            },
            {
                texto:   "Experimentando sozinho e explorando por conta própria",
                afirmacao: "afirmação"
            },
            {
                texto:  "Aprendendo com amigos ou em grupo",
                afirmacao: "afirmação"
            },
            {
                texto:    "Assistindo tutoriais e praticando no meu ritmo",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Como você descreveria seu estilo de comunicação?",
        alternativas: [
            {
                texto:  "Direto e objetivo",
                afirmacao: "afirmação"
            },
            {
                texto:  "Expressivo e emocional",
                afirmacao: "afirmação"
            },
            {
                texto:  "Reservado e reflexivo",
                afirmacao: "afirmação"
            },
            {
                texto:  "Divertido e cheio de humor",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Quais dessas atividades mais lhe agradam?",
        alternativas: [
            {
                texto:   "Resolver quebra-cabeças ou desafios lógicos",
                afirmacao: "afirmação"
            },
            {
                texto:  "Participar de atividades físicas e esportivas",
                afirmacao: "afirmação"
            },
            {
                texto:  "Meditar ou fazer ioga",
                afirmacao: "afirmação"
            },
            {
                texto:  "Sair para eventos sociais e festas",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Qual dos elementos da natureza mais te atrai?",
        alternativas: [
            {
                texto:  "Água",
                afirmacao: "afirmação"
            },
            {
                texto:  "Fogo",
                afirmacao: "afirmação"
            },
            {
                texto: "Terra",
                afirmacao: "afirmação"
            },
            {
                texto: "Ar",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Qual é o seu objetivo principal ao tocar um instrumento?",
        alternativas: [
            {
                texto: "Relaxar e desestressar",
                afirmacao: "afirmação"
            },
            {
                texto: "Expressar emoções",
                afirmacao: "afirmação"
            },
            {
                texto:  "Divertir e entreter",
                afirmacao: "afirmação"
            },
            {
                texto: "Aperfeiçoar minhas habilidade",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Como você se sente em relação à improvisação?",
        alternativas: [
            {
                texto:   "Prefira seguir uma partição ou estrutura",
                afirmacao: "afirmação"
            },
            {
                texto:    "Amo improvisar e criar na hora",
                afirmacao: "afirmação"
            },
            {
                texto:  "Gosto de um equilíbrio entre estrutura e improviso",
                afirmacao: "afirmação"
            },
            {
                texto:  "Improviso se for necessário, mas prefiro saber o que vou tocar",
                afirmacao: "afirmação"
            }
           
           
            
            
        ]
    },
    {
        enunciado: "Você prefere tocar sozinho ou em grupo?",
        alternativas: [
            {
                texto:  "Sozinho, é mais fácil eu me concentrar",
                afirmacao: "afirmação"
            },
            {
                texto:  "Em grupo, é mais divertido e dinâmico",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Como você lida com críticas?",
        alternativas: [
            {
                texto:   "Gosto de ouvir para melhorar",
                afirmacao: "afirmação"
            },
            {
                texto:  "Levo para o lado pessoal, mas tento aprender",
                afirmacao: "afirmação"
            },
            {
                texto:  "Não me incomoda muito, continuo no meu ritmo",
                afirmacao: "afirmação"
            },
            {
                texto:  "Prefiro receber críticas construtivas em privado",
                afirmacao: "afirmação"
            },
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal= "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa))
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacoes
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "O seu...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
