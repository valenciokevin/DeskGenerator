function capitalizeFirstLetterOfEachWord(str) {
    return str.split(' ') // Divide a string em palavras
              .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitaliza a primeira letra de cada palavra
              .join(' '); // Junta as palavras de volta em uma string
}

document.getElementById('generateButton').addEventListener('click', function() {
    // Obtendo os valores do formulário
    const saudacao = document.querySelector('input[name="gre_gender"]:checked').value;
    const nome = capitalizeFirstLetterOfEachWord(document.getElementById('clientName').value);
    const descricao = document.getElementById('descriptionInput').value;
    
    // Determinando a saudação com base no horário
    const currentHour = new Date().getHours();
    const time = currentHour < 12 ? "Bom dia" : "Boa tarde";

    // Coletando os canais de contato
    const contactChannels = [];
    const contactInputs = [
        { checkbox: 'cc-whats', input: 'whatsInput', label: 'WhatsApp' },
        { checkbox: 'cc-mail', input: 'mailInput', label: 'E-mail' },
        { checkbox: 'cc-phone', input: 'phoneInput', label: 'Telefone' },
        { checkbox: 'cc-ramal', input: 'ramalInput', label: 'Ramal' }
    ];

    contactInputs.forEach(channel => {
        const checkbox = document.getElementById(channel.checkbox);
        const input = document.querySelector(`input[name="${channel.input}"]`).value;

        if (checkbox.checked) {
            if (input) {
                contactChannels.push(`${channel.label}: ${input}`);
            } else {
                contactChannels.push(channel.label);
            }
        }
    });

    const contactChannelMessage = contactChannels.length > 0 ? contactChannels.join(', ') : 'Nenhum canal de contato selecionado';

    // Coletando observações internas
    const contato = document.getElementById('client-cc').value;
    const host = document.getElementById('client-host').value;
    const link = document.getElementById('client-link').value;
    const internalObs = document.getElementById('internal-obs').value;

    // Montando a mensagem final    
    let message = ""; 
    message = `
${saudacao} ${nome}, ${time}!

Conforme conversamos pelo WhatsApp, o seu chamado foi registrado e a sua solicitação está sendo atendida por um de nossos analistas, em breve retornaremos um feedback. Segue abaixo a descrição de sua solicitação:

Descrição da Solicitação: ${descricao}

Conforme acordamos, qualquer necessidade de contato sobre o andamento do seu chamado, estaremos comunicando através do ${contactChannelMessage}. Por favor, se atente para o recebimento de notificações e para a formalização do encerramento do seu chamado.

Após o encerramento de seu chamado, será encaminhado para você uma pesquisa de satisfação relacionado a este atendimento, peço que, por gentileza, participe desta pesquisa. Sua opinião é muito importante para nós!

Qualquer dúvida ou necessidade estamos à disposição!

E-mail: suporte@futurotec.com.br
Portal de Chamados: https://futurotec.desk.ms/?LoginPortal
Telefone Suporte: (31) 3801-6805
Ramal Suporte: 9999

Contato: ${contato}
Host: ${host}
Link de atendimento: ${link}
${internalObs}
    `;

    // Exibe a mensagem gerada
    document.getElementById("output-message").style.display = 'block';
    document.getElementById('generatedMessage').style.display = 'block';
    document.getElementById("generatedMessage").textContent = message;
});

document.getElementById('newTabButton').addEventListener('click', function() {
    const generatedMessage = document.getElementById('generatedMessage').textContent;
    const newTab = window.open();
    newTab.document.write(`<pre>${generatedMessage}</pre>`);
    newTab.document.close();
});

document.getElementById('clearButton').addEventListener('click', function() {
    document.getElementById('generateForm').reset(); // Limpa todos os campos do formulário
    document.getElementById('generatedMessage').style.display = 'none'; // Esconde a mensagem
    document.getElementById('output-message').style.display = 'none';
});

function copyText(id) {
    let text = document.getElementById(id).textContent;
    navigator.clipboard.writeText(text);
    document.getElementById('validaCopy').style.display = 'block';

}

const atalhoObs = {
ramalButton: 
`Agente: 
Ramal: 
Modelo: 
IP: 
AnyDesk: `,

midiaButton: 
`Mídia Social: 
Provedor: 

Integração: 
Campanha: 

Exemplos:
	
`,

linhaButton: 
`Linha/Tronco: 
Operadora: 

Agente: 
Ramal: 
Modelo: 
IP: 
AnyDesk: 

Campanha: 
Integração: 

Quantidade:
	Um
	Vários
	Todos

Problema ocorre entre ramais?
	Sim
	Não

Instância:
	Entrada
	Saída
	Ambos Entrada e Saída
	
Exemplos:
	
`
}

function insereAtalhoInterno(botaoId) {
    var textareaInterno = document.getElementById('internal-obs');
    textareaInterno.value += atalhoObs[botaoId] + '\n';
}