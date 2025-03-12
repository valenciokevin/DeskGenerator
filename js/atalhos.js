



const atalhos = {
inicio:`Olá __Cliente__, tudo bem?

  

Meu nome é __Agente__ e vou assumir seu atendimento. Estarei analisando as informações repassadas sobre sua solicitação.

  

Enquanto isso, você possui algum outro detalhe ou informação complementar para agilizar seu atendimento?`,
    
canalFeedback: `, para uma comunicação mais eficiente, poderia me informar qual é o melhor canal de contato para fornecermos feedback sobre o chamado?`,

aguarde: `Aguarde um instante enquanto finalizo o registro de seu chamado.

  

Aproveitando, você já conhece nosso Portal de Chamados? Com ele você pode registrar e acompanhar as interações em tempo real em seus chamados, além de interagir diretamente com o analista responsável pela sua demanda.

  

Clique no link abaixo para conhecer e assistir a um vídeo com as instruções de utilização.

https://youtu.be/Kj2rrNoGftI?feature=shared

  

Gostaria de criar seu acesso ao nosso portal?`,

portalChamados: `||*Obrigado por aguardar||*

  

Realizamos o seu cadastro com sucesso, em nosso sistema para abertura e controle de atendimento e atividades a sua empresa.

  

Abaixo segue seus dados de acesso:

*login* :

*senha* :

  

Você também irá receber essas informações no seu e-mail cadastrado!

  

*Acesso ao portal:* https://futurotec.desk.ms/?LoginPortal

  

*Acesse o nosso treinamento:* https://www.youtube.com/watch?v=TD0_Uwklsk4

  

Ficamos à disposição para quaisquer esclarecimentos ou dúvidas necessárias.`,

final1: `Obrigado por ter aguardado.

A sua solicitação já foi registrada e encaminhada para a equipe de analistas que vai atendê-la.

  

O número do chamado é ||*XXXX||*.

O SLA de solução é de ||*XXXX||* horas úteis.

  

Foi enviado também uma confirmação de abertura do chamado para o seu e-mail.

A medida que o chamado for recebendo interações, você receberá notificações por e-mail. Como combinado, também estaremos retornando feedbacks sobre o seu chamado através do CANAL_DE_CONTATO. Por gentileza se atente ao seu canal escolhido, que estaremos realizando contato através dos nossos canais oficiais de atendimento.

  

Quando o chamado for encerrado, você também receberá por e-mail uma pesquisa de satisfação para avaliar o atendimento recebido no chamado.

  

Algo mais em que podemos te ajudar?`,

final2: `Ok, estou finalizando seu atendimento.

  

Em seguida, você será direcionado para algumas perguntas de avaliação do meu atendimento. Ficaremos felizes se puder responder.

  

A Futurotec agradece o seu contato, tenha um excelente dia!`,

avisoInativo: `Em breve seu atendimento será finalizado por inatividade. Ainda está aí?`,

finalInativo: `Seu atendimento foi finalizado por inatividade!

Caso ainda precise de algum atendimento, basta entrar em contato conosco novamente!

  
  

A Futurotec agradece o seu contato!`,

chkListPhone: `Linha/Tronco: 
Operadora: 

Problema ocorre entre ramais?
	Sim
	Não

Instância:
	Entrada
	Saída
	Ambos Entrada e Saída

Exemplos:
	`,
}

function insertAtalho (atalhoId) {
    var textarea = document.getElementById('output-atalho');
    textarea.value += atalhos[atalhoId] + '\n';
}