const PERGUNTA_PREFIX = ''

let pergunta = '' 
let alternativas = []
let questaoCompleta = ''

const PROMPT_SIMPLIFICAR = 'Não precisa me gerar explicações, apenas me diga o valor da resposta correta: \n' 

limparValores = () => {
	pergunta = ''
	alternativas = []
	questaoCompleta = ''
}

obterPerguntas = () => {	
	clear()
	pergunta = PERGUNTA_PREFIX
	pergunta += PROMPT_SIMPLIFICAR
	pergunta += document.querySelector('.materialStyle').innerText

	document.querySelectorAll('.quiz_blocks>li').forEach(x => alternativas.push(x.innerText))

	questaoCompleta = pergunta + '   '

	alternativas.forEach((item, index) => { 
		questaoCompleta += (index + 1) + " - " + item + '   '
	})

  	console.log(questaoCompleta)

	limparValores()
}

obterPerguntas()
