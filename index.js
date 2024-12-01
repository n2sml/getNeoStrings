const PERGUNTA_PREFIX = ''

let pergunta = '' 
let alternativas = []
let questaoCompleta = ''


limparValores = () => {
	pergunta = ''
	alternativas = []
	questaoCompleta = ''
}

obterPerguntas = () => {	
	clear()
	pergunta = PERGUNTA_PREFIX
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