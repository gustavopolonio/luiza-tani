//variáveis de controle do framework
var story;
var cont = 0;
var instrucoes = false;
var creditos = false;
var master = false;

//variável de controle do item
var item = false;

//função que retorna dados das escolhas
function getStory () {
	return{

	currentScene: "introducao", 
	introducao: {
		title: "Primeiro Dia",
		image: "img/imagem01.webp",
		story: "<h3>Mais um dia está prestes a começar, daqui cerca de 10min o despertador de Júlia está programado para tocar e você, enquanto Júlia dormia, repassou todos os acontecimentos do dia anterior e encaminhou os casos críticos para os seguintes departamentos: “Processamento” para aqueles que Júlia precisa gastar mais um tempo pensando e “terapia” para aqueles que deve lembrar de falar para sua analista.</h3><h3>Agora sim, está tudo em ordem e todos os departamentos de emoções estão prontos para mais um dia intenso de trabalho!</h3><h3>6:00 em ponto o alarme toca, os olhos de Júlia lentamente se abrem e a grande televisão no final do corredor se acende. Você entra em ação, correndo de um lado pro outro e a primeira reunião online é a pedido do departamento de incertezas, com os seguintes projetos para aprovar.</h3><h3>Qual você aprova?</h3>",
		choices: [
	 	{
			choice: "“Soneca: o poder de apenas 5 minutinhos”",
			destination: 'opcao01'
	 	},
		{
			choice: "“Piloto automático: levantar sem nem mesmo pensar”",
			destination: 'opcao02'
	 	}
		]
	},

	opcao02: {
		title: "opcao02",
		image: "img/imagem01.webp",
		story: "<h3>Projeto aprovado e Júlia levanta mesmo sem ter aberto os olhos completamente e vai direto para o banheiro lavar o rosto com agua fria.</h3><h3>Apesar de ainda sonolenta, Júlia como de costume, checa  seus compromissos do dia no calendario do celular.</h3><h3>Percebe que terá sua ultima prova de anatomia hoje e respira de alivio, pois o semestre finalmente chegará ao fim!</h3><h3>Animada com a luz no fim do túnel, resolve preparar um café da manhã especial, um mimo por ter sobrevivido ao semestre!</h3><h3>você então busca na Central de memórias pela receita de panquecas de banana com canela enquanto Júlia termina de se arrumar.</h3><h3>Júlia vai para cozinha e sua mãe esta saindo de casa e oferece uma carona</h3><h3>você então é supreendida e precisa fazer uma escolha rápida:</h3>",
		choices: [
	 	{
			choice: "Tomo meu café com calma e pego onibus?",
			destination: 'opcao02_01'
	 	},
		{
			choice: "Abro mão do meu café especial e aproveito a carona e a companhia para relaxar?",
			destination: 'opcao02_02'
	 	}
		]
	},

	opcao02_02: {
		title: "opcao02_02",
		image: "img/imagem01.webp",
		story: "<h3>você resolve aprovar a opção para que Júlia tenha seu momento com a mãe que a tempo não tinha e conseguir relaxar a caminho da prova</h3><h3>No caminho, Júlia escolhe as músicas certeiras, que sabe que sua mãe gosta, e as duas não se seguram e cantam alto dentro do carro</h3><h3>Aproveitam para atualizar as fofocas da ultima semana e fazer planos para o final de semana</h3><h3>O caminho passa rápido, Júlia então desce do carro se sentindo mais leve e pronta para começar o dia.</h3>",
		choices: [
	 	{
			choice: "Continuar",
			destination: 'opcao02_01_continue'
	 	}
		]
	},

	opcao02_01: {
		title: "opcao02_01",
		image: "img/imagem01.webp",
		story: "<h3>Apesar de parecer confiante, você, a pedidos do departamento de confiança, aprovou essa opção para dar a chance de Júlia repassar a matéria e ter seu momento de concentração até o caminho da faculdade.</h3><h3>Então Júlia agradece mas prefere pegar o onibus mais tarde. Prepara suas panquecas especiais com calma enquanto relê suas anotações.</h3><h3>Ainda com tempo, Júlia caminha até o ponto de onibus ouvindo sua playlist de todos os dias, com a exata duração do percurso.</h3>",
		choices: [
	 	{
			choice: "Continuar",
			destination: 'opcao02_01_continue'
	 	}
		]
	},

	opcao02_01_continue: {
		title: "opcao02_01_continue",
		image: "img/imagem01.webp",
		story: "<h3>Ao chegar na faculdade, Júlia entra na sala vai logo para o seu lugar de sempre...</h3><h3>Júlia estava ansiosa para terminar a prova e se livrar do semestre infinito!</h3><h3>você então ativa o modo foco total, correndo de um lado para o outro, silenciando todos os pensamentos que não tinham a ver com a prova...</h3><h3>Com foco total, Júlia rapidamente acabou a prova com a certeza de ter sido bem ok. Estava ótimo, pô!</h3><h3>No intervalo entre uma aula e outra, Júlia já tratou de arranjar um rolê entre seu trio perfeito: Jéssica, Júlia e Joyce...</h3><h3>Sempre no ultimo dia de aula do semestre, matavam as aulas depois do almoço para fazerem alguma coisa divertida antes das aulas da noite...</h3><h3>A saída da vez era escolha de Júlia. você então trouxe a lembrança lugares que Júlia adora ir:</h3>",
		choices: [
	 	{
			choice: "“hmm um cineminha, perfeito pra assistir aquele filme que saiu essa semana...”",
			destination: 'opcao02_01_01'
	 	},
		{
			choice: "“Cafézinho superfaturado das nenas! Aquele bolinho regado a fofoca...”",
			destination: 'opcao02_01_02'
	 	}
		]
	},

	opcao02_01_02: {
		title: "opcao02_01_02",
		image: "img/imagem01.webp",
		story: "<h3>Júlia era jovem, mas sua alma era de idosa aposentada!</h3><h3>Adorava um café da tarde com as amigas para descontrair e colocar o papo em dia!</h3><h3>Foram para o café logo após o almoço e passaram a tarde fofocando sobre os romances, o trabalho e o futuro...</h3><h3>Enquanto as amigas discutiam a especialidade queriam seguir, quanto pretendiam ganhar, a idade certa pra casar, Júlia apenas refletia, pensando consigo mesma...</h3>",
		choices: [
	 	{
			choice: "Continuar",
			destination: 'opcao02_01_01_continue'
	 	}
		]
	},

	opcao02_01_01: {
		title: "opcao02_01_01",
		image: "img/imagem01.webp",
		story: "<h3>Cinema era o programa certeiro pra Júlia quando queria relaxar...</h3><h3>Normalmente com as amigas, era julgada pelo seus gostos peculiares de filmes... Então logo que Júlia escolheu ir ao cinema, a decisão do filme ficou por conta das outras amigas...</h3><h3>Enquanto jessica e Joyce não paravam de fofocar sobre o protanista, Júlia ficou super reflexiva com o filme e não parava de comentar com as amigas.</h3><h3>A protagonista, uma médica bem sucedida, tinha inúmeros problemas amorosos... ao que Júlia rapidamente se identificou...</h3>",
		choices: [
	 	{
			choice: "Continuar",
			destination: 'opcao02_01_01_continue'
	 	}
		]
	},

	opcao02_01_01_continue: {
		title: "opcao02_01_01_continue",
		image: "img/imagem01.webp",
		story: "<h3>A sirene da sala de controle toca mais uma vez, dessa vez indicando desespero. você é supreendida por uma notificação existencial que aparece do nada:</h3>",
		choices: [
	 	{
			choice: "Será que eu quero ser médica mesmo?",
			destination: 'opcao02_01_01_01'
	 	},
		{
			choice: "Será que eu vou casar um dia?",
			destination: 'opcao02_01_01_02'
	 	}
		]
	},

	opcao02_01_01_02: {
		title: "opcao02_01_01_02",
		image: "img/imagem01.webp",
		story: "<h3>você revira o olhos e logo aciona o botão da realidade, fazendo Júlia voltar ao presente. você ja estava acostumada e sempre usa esse botão ao menos 4x ao dia... </h3>",
		choices: [
	 	{
			choice: "Continuar",
			destination: 'opcao02_01_01_01_continue'
	 	}
		]
	},

	opcao02_01_01_01: {
		title: "opcao02_01_01_01",
		image: "img/imagem01.webp",
		story: "<h3>você então pensa “la vamos nós de novo!” e aperta urgentemente o botão da autoconfiança.</h3><h3>Todos os departamentos se empenham em lembrar o real motivo que fez Júlia, apaixonada pela medicina desde a infância, ter sobrevivido aos 4 anos de cursinho com sangue nos olhos.</h3><h3> você simplesmente sabia que Júlia queria verdadeiramente ser médica, só precisava ajudá-la a relembrar disso (afinal, esse assunto nunca chegara no departamento de inseguranças)</h3>",
		choices: [
	 	{
			choice: "Continuar",
			destination: 'opcao02_01_01_01_continue'
	 	}
		]
	},

	opcao02_01_01_01_continue: {
		title: "opcao02_01_01_01_continue",
		image: "img/imagem01.webp",
		story: "<h3>Júlia então chacoalha a cabeça como se apagasse os pensamentos e volta a prestar atenção na conversa das amigas que não param de falar um minuto.</h3><h3>Empolgadas, as amigas emendam o rolê soft num happy hour para continuarem a conversa.</h3><h3>Chegando no bar, Júlia sente seu telefone tocar: Numero desconhecido.</h3><h3>você prontamente:</h3>",
		choices: [
	 	{
			choice: "Escolhe atender",
			destination: 'opcao02_01_01_01_01'
	 	},
		{
			choice: "Escolhe ignorar",
			destination: 'final06'
	 	}
		]
	},

	final06: {
		title: "final06",
		image: "img/imagem01.webp",
		story: "<h3>você então joga toda sua habilidade de lábia ao que Júlia prontamente responde:</h3><h3>“Quem em pleno 2025 atende o telefone, né?” Júlia solta para as amigas também se convencendo, rindo...</h3><h3>“Já basta de preocupações! Quem precisa falar comigo tem meu número ué!”</h3><h3>você concorda, orgulhosa, afinal hoje é dia de curtir e viver o final de semestre com as amigas, então nada melhor do que colocar o celular no modo avião e esquecer das preocupações da vida! (só hoje)</h3>",
		choices: [
			{
				choice: "Recomeçar o dia",
				destination: "introducao"
			}
		]
	},

	opcao02_01_01_01_01: {
		title: "opcao02_01_01_01_01",
		image: "img/imagem01.webp",
		story: "<h3> - “Oi Jú, aqui é o Samuel, da sua sala, ta lembrada? A Lu me passou o seu contato, está afim de sair hoje?”</h3><h3>você rapidamente pensa “vish...” e deve escolher uma saída rápida.</h3><h3>Dar um perdido:</h3>",
		choices: [
	 	{
			choice: "Nas amigas",
			destination: 'opcao02_01_01_01_01_continue'
	 	},
		{
			choice: "No contatinho surpresa",
			destination: 'final07'
	 	}
		]
	},

	final07: {
		title: "final07",
		image: "img/imagem01.webp",
		story: "<h3>você então joga toda sua habilidade de lábia ao que Júlia prontamente responde:</h3><h3>“Lu? aahn... acho que houve um engano, não estudo com nenhuma Lu..”</h3><h3>e desliga rapidamente.</h3><h3>você pensa consigo mesma “Não é porque ela ta preocupada com isso que também vai aceitar qualquer um né... se valoriza gata!”</h3><h3>Questionada pelas amigas de quem era, Júlia logo responde rindo:</h3><h3>“Quem em pleno 2025 atende o telefone, né?”</h3><h3>você concorda, orgulhosa, afinal hoje é dia de curtir e viver o final de semestre com as amigas, então nada melhor do que colocar o celular no modo avião e esquecer das preocupações da vida! (só hoje)</h3>",
		choices: [
			{
				choice: "Recomeçar o dia",
				destination: "introducao"
			}
		]
	},

	opcao02_01_01_01_01_continue: {
		title: "opcao02_01_01_01_01_continue",
		image: "img/imagem01.webp",
		story: "<h3>“Vish meninas, deu um B.O. lá em casa vou ter que voltar correndo, desculpa, vou la pagando a minha parte”</h3><h3>e logo marcou de se encontrar com o Samuel com outro grupo de amigos...</h3><h3>A caminho do 2 bar da noite...</h3>",
		choices: [
	 	{
			choice: "Continuar",
			destination: 'opcao01_02_01_02_continue'
	 	}
		]
	},

	opcao01: {
		title: "Primeira Opção",
		image: "img/sirene.jpeg",
		story: "<h3>Projeto aprovado e Júlia imediatamente bate a mão no celular ativando a soneca e aproveita seus 5 minutinhos extras de sono.</h3><h3>Julia então perde o segundo toque do alarme e acorda de repente, assustada, e vai direto para a cozinha.</h3><h3>Logo olha para o relogio do microondas e vê que está atrasada para pegar o ônibus...</h3>",
		choices: [
	 	{
			choice: "Continuar",
			destination: 'opcao01_continue'
	 	}
	 	]
	},

	opcao01_continue: {
		title: "Primeira Opção - Continuação 1",
		image: "img/sirene.jpeg",
		story: "<h3>Uma sirene toca na sala comunitária e uma notificação de dúvida urgente então aparece para você direto do departamento de consciencia:</h3><h3>“Aa.. merda! Até me arrumar e comer alguma coisa, não vou conseguir chegar a tempo de pegar o ônibus...“</h3>",
		choices: [
	 	{
			choice: "mas nem começou o dia direito... acho melhor comer com calma e depois vejo de pegar um carro de app...”",
			destination: 'opcao01_01'
	 	},
		{
			choice: "...será que aceito que perdi e tento ir a pé para chegar no horário?”",
			destination: 'opcao01_02'
	 	}
	 	]
	},

	opcao01_01: {
		title: "Opção 01_01",
		image: "img/sirene.jpeg",
		story: "<h3>Você então confirma a escolha, deslizando para a direita e Julia então desencana... e faz tudo que precisa com calma e toma seu café tranquila, tendo se decidido.</h3><h3>Quando próximo do horário da sua aula, acessa o app para pedir um carro de aplicativo e... saldo insuficiente...</h3><h3>Júlia fica irritada e logo você está recebendo inúmeros telefonemas...</h3><h3>Departamento de culpa (12 chamadas perdidas)</h3><h3>Central da memória (ligando agora)</h3><h3>você então:</h3>",
		choices: [
	 	{
			choice: "Atende a chamada da Central da memória que está tocando agora.",
			destination: 'opcao01_01_01'
	 	},
		{
			choice: "Retorna para o Departamento de Culpa que possui mais chamadas perdidas",
			destination: 'opcao01_01_02'
	 	}
	 	]
	},

	opcao01_01_02: {
		title: "Opção 01_01_02",
		image: "img/sirene.jpeg",
		story: "<h3>Jéssica, diretora do departamento, logo responde sem esperanças  (nem paciencia): Ela só tinha ESSA função você! Como ela quer ser médica se nem acordar no horário ela consegue?!</h3><h3>Nesse momento Júlia se sente péssima, a pior futura médica do mundo... se afogando em culpa...</h3><h3>você então é apenas notificada por uma decisão tomada automaticamente pelo departamento de certezas: ficaremos em casa hoje. Assim, curta e seca.</h3><h3>Você rola os olhos, pois sabe que esse departamento é o mais chato de se discutir... NUNCA mudam de ideia, é simplesmente um diálogo perdido...</h3><h3>Pensa em como poderá reverter essa situação, quando de repente seu telefone toca: Central de memórias.</h3>",
		choices: [
	 	{
			choice: "Continuar",
			destination: 'opcao01_01_01'
	 	}
	 	]
	},

	opcao01_02: {
		title: "Opção 01_02",
		image: "img/sirene.jpeg",
		story: "<h3>Apesar de beliscada pela diretora da noção, você revolve aprovar a escolha a fim de aproveitar o caminho para contemplar o dia e fazer uma caminhada matinal no caminho para faculdade.</h3>",
		choices: [
	 	{
			choice: "Continuar",
			destination: 'opcao01_02_continue'
	 	}
	 	]
	},

	opcao01_02_continue: {
		title: "Opção 01_02_continue",
		image: "img/sirene.jpeg",
		story: "<h3>Chegando na faculdade, Júlia aproveita o intervalo entre as aulas e vai direto para sala.</h3><h3>Quando entra dá de cara com Samuel, sentado logo atrás do seu lugar de sempre.</h3><h3>Na sala de controle, uma sirene começa a tocar novamente, indicando dessa vez sintomas fisicos: palpitação, pupilas dilatadas, uma leve falta de ar e uma confusão momentanea. Júlia recua e se apoia na parede junto a porta para respirar.</h3><h3>você recebe então um chamado do departamento da paixão platônica, que ficava ironicamente a uma fina baia de distancia do departamento do amor verdeiro (que toda hora surgiam com falsas emergencias....)</h3><h3>você é comunicada que Samuel estava na lista de procurados do departamento e que há muito tempo não era visto.</h3><h3>Logo, você é acionada pelo departamento de incertezas com a seguinte questão:</h3><h3>“Devo ir até ele e falar alguma coisa?”</h3><h3>Ao que você prontamente indicou o raciocinio a seguir:</h3>",
		choices: [
	 	{
			choice: "“Só se vive uma vez! Vou la puxar papo, vai que ele engaja”",
			destination: 'opcao01_02_01'
	 	},
		{
			choice: "“aff acordaaa! Ele nem deve saber quem eu sou”",
			destination: 'opcao01_02_02'
	 	}
	 	]
	},

	opcao01_02_01: {
		title: "Opção 01_02_01",
		image: "img/sirene.jpeg",
		story: "<h3>Júlia então ensaia o que vai dizer e toma coragem para entrar na sala e ir até ele.</h3><h3>Ao chegar de frente para o garoto...você nota que os computadores da central da memória desligaram automaticamente. Fala sério! Justo agora?!</h3><h3>Ao correr para verificar os cabos, viu que o novo estagiário do departamento de paixão platônica havia desligado o disjuntor por engano... Logo foi lá e reconectou, esperando que todo um departamento reiniciasse.</h3><h3>Quando Júlia enfim conseguiu falar saiu tudo errado e logo riu de vergonha... Em alguns segundos e finalmente conseguiu formar a frase que tinha ensaiado ao que Samuel riu e prontamente respondeu: Relaxa Ju! eu também não estudei, mas hoje a tarde vamos na casa do Leo estudar. Quer vir com a gente?</h3><h3>você nem teve a chance de raciocinar e o departamento de certezas lançou mais uma: “CLARO que quero, sempre quis. “. A Racionalidade e a Noção se olharam de canto e formularam melhor a resposta que enfim soou mais como: “Hmm, irei ver como está minha agenda e aviso vocês!”</h3>",
		choices: [
	 	{
			choice: "Continuar",
			destination: 'opcao01_02_01_continue'
	 	}
	 	]
	},

	opcao01_02_01_continue: {
		title: "Opção 01_02_01_continue",
		image: "img/sirene.jpeg",
		story: "<h3>Júlia então chacoalha a cabeça como se apagasse os pensamentos e volta a prestar atenção na fala do professor.</h3><h3>A sequencia de aulas do dia finalmente chega ao fim e Júlia está exausta. Não cabe nenhuma informação a mais no seu cérebro.</h3><h3>você, na sala de controle, corria de uma lado para outro, elaborando estratégias e debatendo com cada um dos times.</h3><h3>Júlia deve decidir então se vai direto para casa ou estuda com a galera, ao que você lista rapidamente os prós e contras de cada escolha com ajuda da racionalidade.</h3>",
		choices: [
	 	{
			choice: "Será que compensa estudar em grupo? Nada que eu ouvir agora vai entrar na minha cabeça",
			destination: 'opcao01_02_01_01'
	 	},
		{
			choice: "Será que vou e aproveito a oportunidade? Vai que...",
			destination: 'opcao01_02_01_02'
	 	}
	 	]
	},

	opcao01_02_01_02: {
		title: "Opção 01_02_01_02",
		image: "img/sirene.jpeg",
		story: "<h3>Então você achou prudente ir, descontrair um pouco... além de ajudar Julia com os estudos</h3><h3>Chegando na casa de Leo, todos se reuniram ao redor da grande mesa da sala, mas Júlia (e você, óbvio) podiam sentir burburinhos e risadas paralelas com olhares para ela e Samuel...</h3>",
		choices: [
	 	{
			choice: "Continuar",
			destination: 'opcao01_02_01_02_continue'
	 	}
	 	]
	},

	opcao01_02_01_02_continue: {
		title: "Opção 01_02_01_02",
		image: "img/sirene.jpeg",
		story: "<h3>e, na sala de controle a insegurança cutuca você:</h3><h3>Seria o momento de dar enfim uma chance ao Samuel?</h3><h3>Ao que a consciencia logo manda:</h3>",
		choices: [
	 	{
			choice: "“Ta maluca? Fácil assim?! Se valoriza! Dá uma de díficil!”",
			destination: 'opcao01_02_01_02_01'
	 	},
		{
			choice: "“Lógico né! Tava mais do que na hora!”",
			destination: 'opcao01_02_01_02_02'
	 	}
	 	]
	},

	opcao01_02_01_02_02: {
		title: "Opção 01_02_01_02_02",
		image: "img/sirene.jpeg",
		story: "<h3>você então fez com Julia caisse na real para que então tomasse uma iniciativa que tanto estava insegura...</h3><h3>Aquela era a chance de Júlia brilhar! Mostrar que realmente tinha uma paixão platônica e estava afim de conhecer e conversar mais com Samuel.</h3><h3>Julia ao perceber a armação, dança conforme a música, se mostrando interessada também. Minutos depois, os amigos deixam o casal sozinho...</h3><h3>Júlia então aproxima a cadeira de Samuel para conversarem mais de perto.</h3><h3>Entre conversas e risadas, Samuel vê uma deixa e logo se inclina para beijar Júlia...</h3><h3>O casal então fecha os olhos juntos...</h3><h3>Logo a sirene da sala de controle começa a tocar indicando</h3>",
		choices: [
	 	{
			choice: "“Perigo!”",
			destination: 'final05'
	 	},
		{
			choice: "“É ele...”",
			destination: 'opcao01_02_01_02_02_02'
	 	}
	 	]
	},

	opcao01_02_01_02_02_02: {
		title: "Opção 01_02_01_02_02_02",
		image: "img/sirene.jpeg",
		story: "<h3>Os sintomas físicos voltaram! O coração acelerado e o pensamento nas nuvens! Era EXATAMENTE o que Júlia imaginava...</h3><h3>Depois de alguns minutos, eles finalizam o beijo e se olham em silencio, tentando ler as entrelinhas.</h3><h3>Deslumbrada e meio boba, Júlia começa então a recolher suas coisas para ir embora, precisava sair dali...</h3><h3>Julia se despede de Samuel e decide ir a pé pra casa. No caminho, dominada pela felicidade, Julia tem vontade de explodir de alegria, pulando e sorrindo a toa pela rua...</h3><h3>Chegando em casa Júlia não consegue tirar o momento da cabeça...</h3><h3>você mais uma vez é obrigada a apertar o botão da realidade, trazendo Júlia de volta aos estudos.</h3>",
		choices: [
	 	{
			choice: "Continuar",
			destination: 'final04'
	 	}
	 	]
	},

	final05: {
		title: "Opção final05",
		image: "img/sirene.jpeg",
		story: "<h3>você imediatamente faz com que Julia pare o beijo. Todos na sala de controle encaram a tela fixamente.</h3><h3>A conciencia finalmente respira e solta “aaah finalmente, que beijo horrivel! batemos o dente logo de cara e ainda bem que paramos, senão morreria afogada! MUITA baba, credo!”. você imadiatamente barrou que esse pensamento se tornasse fala.</h3><h3>Júlia sem graça, deicide ir embora rapidamente e começa a pegar suas coisas. Ela vê os amigos tentando espiar por trás da porta da sala.</h3><h3>Júlia então se apressa e decide ir a pé direto para casa....</h3><h3>Chegando em casa, Júlia ainda tenta se esquecer do barulho dos dentes se chocando...</h3>",
		choices: [
			{
				choice: "Recomeçar o dia",
				destination: "introducao"
			}
		]
	},

	opcao01_02_01_02_01: {
		title: "Opção 01_02_01_02_01",
		image: "img/sirene.jpeg",
		story: "<h3>Júlia então cai na real e volta a estudar como se nada estivesse acontecendo...</h3><h3>Em um momento, tentam até deixar o casal sozinho na e Júlia, percebendo, logo desconversa.</h3><h3>A noite cai, Júlia decide que é a hora de ir embora. Rapidamente pega suas coisas e se despede de todos, decidindo voltar a pé para casa para processar o que havia passado.</h3><h3>No caminho para casa, você acalenta Júlia com ajuda da consciencia:</h3><h3>“Realmente... o menino nunca foi simpatico comigo e agora, do completo nada, vem bancar o bonzinho?! Tem coisa estranha ai! Bom mesmo que nem dei bola...“</h3><h3>Júlia caminha satisfeita, com a consciencia tranquila que tomou a atitude certa :)</h3>",
		choices: [
	 	{
			choice: "Continuar",
			destination: 'final04'
	 	}
	 	]
	},

	final04: {
		title: "Opção final04",
		image: "img/sirene.jpeg",
		story: "<h3>você senta em sua cadeira e respira fundo pela primeira vez no dia...</h3><h3>Júlia deita em sua cama e encara o teto por um instante deixando os pensamentos fluirem...</h3><h3>“Que dia! Quem diria que a Júlia do passado sonharia em viver tanto com tanta intensidade! Haja neurônios para processar tanta coisa!”</h3><h3>você da uma risadinha olhando para os colegas de trabalho, com a certeza de mais um dia cumprido...</h3><h3>Júlia ri sozinha e você então vê uma certeza se manifestar...</h3><h3>Júlia estava pronta para o que aparecesse e só pensava: Só continua, que isso tudo ainda vai virar história!</h3>",
		choices: [
			{
				choice: "Recomeçar o dia",
				destination: "introducao"
			}
		]
	},

	opcao01_02_02: {
		title: "Opção 01_02_02",
		image: "img/sirene.jpeg",
		story: "<h3>Então Júlia recobra o ar e toma coragem para entrar na sala. Ela vai direto para a sua cadeira dando apenas um leve sorriso, sem nem olhar para Samuel.</h3><h3>A aula esta prestes a começar e logo a sala está cheia novamente. 4h ininterruptas de anatomia e Júlia nunca se sentiu tão perdida... Não sabia nem por onde começar a estudar, muito menos falar quais eram suas dúvidas...</h3><h3>A sirene da sala de controle toca mais uma vez, dessa vez indicando desespero. você é supreendida por uma notificação existencial que aparece do nada:</h3>",
		choices: [
	 	{
			choice: "“Será que medicina é pra mim mesmo?”",
			destination: 'opcao01_02_02_01'
	 	},
		{
			choice: "Será que eu vou ser solteira pra sempre?",
			destination: 'opcao01_02_02_02'
	 	}
	 	]
	},

	opcao01_02_02_01: {
		title: "Opção 01_02_02_01",
		image: "img/sirene.jpeg",
		story: "<h3>você então pensa “la vamos nós de novo!” e aperta urgentemente o botão da autoconfiança.</h3><h3>Todos os departamentos se empenham em lembrar o real motivo que fez Júlia, apaixonada pela medicina desde a infância, ter sobrevivido aos 4 anos de cursinho com sangue nos olhos.</h3><h3> você simplesmente sabia que Júlia queria verdadeiramente ser médica, só precisava ajudá-la a relembrar disso (afinal, esse assunto nunca chegara no departamento de inseguranças)</h3>",
		choices: [
	 	{
			choice: "Continuar",
			destination: 'opcao01_02_01_continue'
	 	}
	 	]
	},

	opcao01_02_02_02: {
		title: "Opção 01_02_02_02",
		image: "img/sirene.jpeg",
		story: "<h3>você revira o olhos e logo aciona o botão da realidade, fazendo Júlia voltar ao presente.</h3><h3>você ja estava acostumada e sempre usa esse botão ao menos 4x ao dia...</h3>",
		choices: [
	 	{
			choice: "Continuar",
			destination: 'opcao01_02_01_continue'
	 	}
	 	]
	},

	opcao01_02_01_01: {
		title: "Opção 01_02_01_01",
		image: "img/sirene.jpeg",
		story: "<h3>você toma uma decisão prudente de preservar a saúde mental de júlia a fim de que ela consiga estudar de fato para ir bem na prova... </h3>",
		choices: [
	 	{
			choice: "Continuar",
			destination: 'opcao01_02_01_01_continue'
	 	}
	 	]
	},

	opcao01_02_01_01_continue: {
		title: "Opção 01_02_01_01_continue",
		image: "img/sirene.jpeg",
		story: "<h3>Chegando em casa, Júlia estava acabada e só pensava em deitar em sua cama.</h3><h3>Deixando um pensamento intrusivo escapar de seu controle, você logo vê Julia simplesmente apagada na cama.</h3><h3>você bufa em frente ao telão que agora estava completamente preto. “Droga! Lá vamos nós brincar de cochileta russa... dormir sem alarme...”</h3><h3>22h Júlia desperta perdida, limpando a baba no canto da boca e logo se esticando para ver as horas no celular...</h3><h3>você, já quase sem esperanças, se vê diante de mais uma dúvida:</h3>",
		choices: [
	 	{
			choice: "“Ah... agora que já está tarde, só me resta pedir uma comida legal enquanto eu assisto série...eu mereço pô!”",
			destination: 'final02'
	 	},
		{
			choice: "“Aaa 22h e eu nem peguei no caderno direito... O jeito vai ser virar a madrugada...",
			destination: 'final03'
	 	}
	 	]
	},

	final02: {
		title: "Opção final02",
		image: "img/sirene.jpeg",
		story: "<h3>você se convence e aceita que hoje não rolará mais estudos... então só nos resta essa opção...</h3><h3>você comunica a decisão a sala de controle que saem do modo de alerta...</h3><h3>Julia pede a comida e resolve assistir sua série preferida: Grey’s Anatomy...</h3><h3>você e seus amigos organizam suas cadeiras, porque era também noite de série na sala de controle!</h3><h3>Todos ansiosos para mais um episódio! A copa da sala de controle ja dominava o andar com o cheiro de pipoca....</h3>",
		choices: [
			{
				choice: "Recomeçar o dia",
				destination: "introducao"
			}
		]
	},

	final03: {
		title: "Opção final03",
		image: "img/sirene.jpeg",
		story: "<h3>você gasta suas ultimas esperança nessa escolha. Fazem uma pausa para ginastica laboral, porque hoje é dia de horas extras!</h3><h3>Café e energéticos a vontade, é hora de absorver um semestre em algumas horas... você agora está com sangue nos olhos e coordena a equipe para estar com foco total para enfrentar a madrugada.</h3><h3>Botão da autoconfiança preparado para qualquer emergencia!</h3><h3>A noite é uma criança e amanhã é um novo dia!</h3>",
		choices: [
			{
				choice: "Recomeçar o dia",
				destination: "introducao"
			}
		]
	},

	opcao01_01_01: {
		title: "Opção 01_01_01",
		image: "img/sirene.jpeg",
		story: "<h3>você então atende a chamada e antes mesmo de falar alguma coisa, gritam em seu ouvido o lembrete: HOJE TEM PROVA DE ANATOMIAAA!</h3><h3>Júlia se dá conta que daqui a poucos minutos ela terá sua ultima prova de anatomia no semestre... e ela simplesmente havia ESQUECIDO de estudar. Júlia então para por um instante...</h3>",
		choices: [
	 	{
			choice: "Não levar o lembrete em conta",
			destination: 'final01'
	 	},
		{
			choice: "levar o lembrete em conta",
			destination: 'opcao01_01_01_02'
	 	}
	 	]
	},

	opcao01_01_01_02: {
		title: "Opção 01_01_01_02",
		image: "img/sirene.jpeg",
		story: "<h3>Júlia logo tem um estalo e abre seu celular para conferir o grupo da sala e manda uma mensagem para confirmar.</h3><h3>Logo respondem que o professor acabou de adiar a prova para o dia seguinte. Júlia então vê uma luz de esperança!</h3><h3>Um suspiro uníssono é ouvido na sala de controle...</h3><h3>você então é convidada para uma nova reunião do departamento de incertezas:</h3>",
		choices: [
	 	{
			choice: "Será que vale?: faltar para estudar em casa",
			destination: 'opcao01_01_01_02_01'
	 	},
		{
			choice: "Pior que esta, não fica!: já que nem comecei os estudos, aproveitar para ir a aula discutir e tirar duvidas.",
			destination: 'opcao01_01_01_02_02'
	 	}
	 	]
	},

	opcao01_01_01_02_01: {
		title: "Opção 01_01_01_02_01",
		image: "img/sirene.jpeg",
		story: "<h3>Após a manhã conturbada, você resolve dar uma chance a Júlia, apostando que ela poderá se sair melhor estudando em casa, já que ganharia o tempo do deslocamento de ida e volta. </h3>",
		choices: [
	 	{
			choice: "Continuar",
			destination: 'opcao01_02_01_01_continue'
	 	}
	 	]
	},

	opcao01_01_01_02_02: {
		title: "Opção 01_01_01_02_02",
		image: "img/sirene.jpeg",
		story: "<h3>Tomada por sua intuição, Você então aprova a escolha e Júlia pega o próximo ônibus e vai enfim para  a faculdade.</h3>",
		choices: [
	 	{
			choice: "Continuar",
			destination: 'opcao01_02_continue'
	 	}
	 	]
	},

	final01: {
		title: "final01",
		image: "img/sirene.jpeg",
		story: "<h3>Júlia então nem se incomoda e deixa que a certeza criada com a culpa fale mais alto e joga a toalha de vez... aceitando, de fato, que hoje simplesmente não é seu dia.</h3><h3>Cabisbaixa, Julia aceita que foi um dia perdido e volta para o seu quarto...</h3><h3>Você olha ao redor na sala de controle e todos estão fora de suas mesas, com as luzes apagadas... então percebe um burburinho vindo da copa e decide ir ver o que está acontecendo...</h3><h3> Josiane, do departamento de tristeza, acabava de ganhar um bolo surpresa da equipe! Todos cantavam parabéns ao redor dela.</h3><h3>Aceitando o final do espediente, você aceita o pedaço de bolo.</h3>",
		choices: [
			{
				choice: "Recomeçar o dia",
				destination: "introducao"
			}
		]
	},



	// DELE

	//trecho em branco para criar testes onde rola-se 2D6
	rolardados01: {
		title: "",
		story: "",
		choices: [
		{
			choice: "",
			destination: ""
		}
		]
	},

	sucessorolar01: {
		title: "Sucesso no Teste",
		image: "img/imagem01.webp",
		story: "<h3>Você teve sucesso no teste!</h3><h3>Agora temos um trecho com 3 opções:</h3>",
		choices: [
	 	{
			choice: "Introdução",
			destination: 'intro'
		},
		{
			choice: "Pegar um item",
			destination: 'pegaritem'
		},
		{
			choice: "Não pegar um item",
			destination: 'naopegaritem'
		}
	 	]
	},

	falharolar01: {
		title: "Falha no Teste",
		image: "img/imagem01.webp",
		story: "<h3>Você não teve sucesso no teste!</h3><h3>Recomece a aventura.</h3>",
		choices: [
		{
			choice: "Continuar",
			destination: 'introducao'
		}
	 	]
	},

	pegaritem: {
		title: "Pegar Item",
		image: "img/imagem01.webp",
		story: "<h3 >Você pegou um item; para isso ver validado, é necessário mudar o valor da variável [item] no código, na função renderScene().</h3>",
		choices: [
		{
			choice: "Seguir Adiante",
			destination: "testaritem"
		}
		]
	},

	naopegaritem: {
		title: "Não Pegar Item",
		image: "img/imagem01.webp",
		story: "<h3 >Você não pegou um item; nada precisa ser alterado no código.</h3>",
		choices: [
		{
			choice: "Seguir Adiante",
			destination: "testaritem"
		}
		]
	},

	//trecho em branco para criar se o item está no inventário
	testaritem: {
		title: "",
		story: "",
		choices: [
		{
			choice: "",
			destination: ""
		}
		]
	},

	finalbom: {
		title: "Final Bom",
		image: "img/imagem01.webp",
		story: "<h3 >Você pegou o item e concluiu sua aventura!</h3>",
		choices: [
		{
			choice: "Introdução",
			destination: "introducao"
		}
		]
	},

	finalruim: {
		title: "Final Ruim",
		image: "img/sirene.jpeg",
		story: "<h3 >Você não pegou o item... Tente novamente!</h3>",
		choices: [
		{
			choice: "Introdução",
			destination: "introducao"
		}
		]
	},

	instrucoes: {
		title: "Instruções",
		story: "<h3><center>Recomendação Etária: Livre</center></h3><h3>Para jogar uma aventura-solo, basta ler o texto apresentado, e no final, clicar sobre a decisão escolhida. Como exemplo, temos 2 opções:</h3><h3>- A primeira delas é a opção de 'Começar a Aventura', onde você irá ler o trecho introdutório do texto, identificando o personagem que você irá interpretar;</h3><h3>- A segunda opção é a de retornar a 'Tela Inicial' do jogo.</h3><h3>No caso dessa aventura-solo, é utilizado o sistema de regras <a href='https://operarpg.com.br' class='classe1' target='blank'>OPERA RPG</a>; caso queira ler um resumos das regras, consulte o <a href='https://operarpg.com.br/opereta/' class='classe1' target='blank'>OPEReta</a>.</h3><h3>Existe um botão flutuante no canto inferior da tela. Ele permite ver a ficha de personagem na mesma ou em outra janela.</h3><h3>Existe mais de um final possível deste jogo, por isso você poder jogar novamente escolhendo opções diferentes das anteriormente escolhidas.</h3><h3>Após as opções de escolha da narrativa, existe o controle (de 4 botões) de uma trilha sonora; recomendamaos escutá-la, caso seja possível.</h3>",
		choices: [
		{
			choice: "Começar a Aventura!",
			destination: "introducao"
		},
		{
			choice: "Tela Inicial",
			destination: "inicio"
		}
		]
	},

	creditos: {
		title: "Créditos",
		story: "<p><b>Autor:</b> (colocar seu nome aqui) <p><b>Programação:</b> (colocar seu nome aqui) e Leonardo Antônio de Andrade</p><p><b>Trilha Sonora: </b></p>&nbsp;&nbsp;<a href='https://www.jamendo.com/track/1273567/espionage' target='blank' class='classe1'>Trecho da Faixa Espionage, de FOX & MEW</a></h3>",
		choices: [
		{
			choice: "Começar a Aventura!",
			destination: "introducao"
		},
		{
			choice: "Tela Inicial",
			destination: "inicio"
		}
		]
	},
	
	inicio: {
		title: "Inicio",
		story: "<h3></h3>",
		choices: [
		{
			choice: ".",
			destination: "inicio"
		}
		]
	}
	
	}
}

//função para programação dos botões
document.addEventListener ('DOMContentLoaded', function() {
	var button0 = document.querySelector('#button0');
	var button1 = document.querySelector('#button1');
	var button2 = document.querySelector('#button2');
	var button3 = document.querySelector('#button3');
	var content = document.querySelector('#content');
	button0.addEventListener('click', function() {
		story = getStory ();
		renderScene ();
	})
	button1.addEventListener('click', function() {
		if (cont == 0)
		{
			window.open("http://narrativas-interativas.ufscar.br", '_blank');
		}
		else
		{
			story = getStory ();
			renderScene ();
		}
	})
	button2.addEventListener('click', function() {
		if (cont == 0)
		{
			instrucoes = true;
		}
		story = getStory ();
		renderScene ();
	})
	button3.addEventListener('click', function() {
		if (cont == 0)
		{
			creditos = true;
		}
		story = getStory ();
		renderScene ();
	})
})

//função de renderização de conteúdo
function renderScene()
{
	//console.log(cont);
	var image = "";
	var titulo = "";

	if (instrucoes)
	{
		story.currentScene = "instrucoes";
		master = true;
		instrucoes = false;
	}

	if (creditos)
	{
		story.currentScene = "creditos";
		master = true;
		creditos = false;
	}

	if (!story[story.currentScene].image)
	{
		image = "<img></img>";
	}

	if (story[story.currentScene].title == "Primeiro Dia")
	{
		titulo = story[story.currentScene].title;
	}

	//variaveis que controlam os dados (2D6)
	dado1 = Math.floor(Math.random() * 6 + 1);
	dado2 = Math.floor(Math.random() * 6 + 1);
	dados = dado1 + dado2;

	switch (story.currentScene)
	{
		case ('introducao'):
			item = false;
		break;

		case ('rolardados01'):
			if (dados <= 7)
			{
				story.currentScene = 'sucessorolar01';
				swal('Valores obtidos: ' + dado1 + ' + ' + dado2 + ' = ' + dados + ' <= 7 (Sucesso)');
			}
			else
			{
				story.currentScene = 'falharolar01';
				swal('Valores obtidos: ' + dado1 + ' + ' + dado2 + ' = ' + dados + ' > 7 (Falha)');
			}
		break;

		case ('pegaritem'):
			item = true;
		break;

		case ('testaritem'):
			if (item)
				story.currentScene = 'finalbom';
			else
				story.currentScene = 'finalruim';
		break;
	}

	const scenesSirene = ['opcao01', 'opcao02_01_01_continue']
	if (scenesSirene.includes(story.currentScene)) {
		const audio = new Audio('./music/warning-alarm-loop.mp3')
		audio.play()
	}

	//trecho de renderização do framework - não mexer
	document.getElementById("content").innerHTML = `
	<center><h1>${titulo}</h1></center>
	<p>${story[story.currentScene].story}</p>
	${image}
	${getInputs()}
	`
	if (story[story.currentScene].image) {
		document.querySelector("img").src = `${story[story.currentScene].image}`
	}
	var button0 = document.querySelector("#button0");
	var button1 = document.querySelector("#button1");
	var button2 = document.querySelector("#button2");
	var button3 = document.querySelector("#button3");
	
	button0.addEventListener('click', function (){
		cont++;
		getInputValue(0);
	})

	if (button1 != null)
	{
		button1.addEventListener('click', function (){
			cont++;
			if (cont == 1 && master)
			{
				master = false;
				window.location.href='index.html';
			}
			getInputValue(1);
		})
	}
	if (button2 != null)
	{
		button2.addEventListener('click', function (){
			cont++;
			getInputValue(2);
		})
	}
	if (button3 != null)
	{
		button3.addEventListener('click', function (){
			cont++;
			getInputValue(3);
		})
	}
}

function getInputValue (x)
{
	var inputs = document.querySelectorAll('button[type="button"]');
	story.currentScene = inputs[x].getAttribute('data-destination');
	renderScene();
	return;

}

function getInputs()
{
	var input = ""
	if (!story[story.currentScene].choices){
		return ""
	}
	for(var i = 0; i < story[story.currentScene].choices.length; i++)
	{
		input += `
		<div>
			<center><button type="button" id="button${i}" data-destination=${story[story.currentScene].choices[i].destination} class="button button${i}">${story[story.currentScene].choices[i].choice}</button></center>
		</div>`
	}
	return input;
}
