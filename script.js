document.getElementById('generateButton').addEventListener('click', function() {
    // Obtendo os valores do formulário
    const saudacao = document.querySelector('input[name="gre_gender"]:checked').value;
    const nome = document.getElementById('clientName').value;
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

    // Montando a mensagem final    
    const message = `
${saudacao} ${nome}, ${time}!

Conforme conversamos pelo telefone, o seu chamado foi registrado e a sua solicitação está sendo atendida por um de nossos analistas, em breve retornaremos um feedback. Segue abaixo a descrição de sua solicitação:

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
    `;

    // Exibe a mensagem gerada
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
});