function mostrarTabela() {
    const valor = parseFloat(document.getElementById('campoTexto1').value);
    const unidade = document.getElementById('unidades').value;
    const tabela = document.getElementById('tabela');
    const tbody = tabela.querySelector('tbody'); // Ajuste aqui, removendo 'table' para selecionar o 'tbody' corretamente.
    
    // Limpa o conteúdo da tabela
    tbody.innerHTML = '';
    
    // Verifica se o valor inserido é um número válido
    if (isNaN(valor)) {
        alert("Por favor, insira um valor numérico válido.");
        return;
    }
    
    // Define as conversões
    let conversoes;
    
    switch (unidade) {
        // Conversões de comprimento
        case 'mi':
            conversoes = {
                'km': valor * 1.60934,
                'm': valor * 1609.34,
                'cm': valor * 160934,
            };
            break;
        case 'km':
            conversoes = {
                'mi': valor / 1.60934,
                'm': valor * 1000,
                'cm': valor * 100000,
            };
            break;
        case 'm':
            conversoes = {
                'mi': valor / 1609.34,
                'km': valor / 1000,
                'cm': valor * 100,
            };
            break;
        case 'cm':
            conversoes = {
                'mi': valor / 160934,
                'km': valor / 100000,
                'm': valor / 100,
            };
            break;

        // Conversões de peso
        case 't':
            conversoes = {
                'kg': valor * 1000,
                'g': valor * 1000000,
                'mg': valor * 1000000000,
                'lb': valor * 2204.62,
            };
            break;
        case 'kg':
            conversoes = {
                't': valor / 1000,
                'g': valor * 1000,
                'mg': valor * 1000000,
                'lb': valor * 2.20462,
            };
            break;
        case 'g':
            conversoes = {
                't': valor / 1000000,
                'kg': valor / 1000,
                'mg': valor * 1000,
                'lb': valor / 453.592,
            };
            break;
        case 'mg':
            conversoes = {
                't': valor / 1000000000,
                'kg': valor / 1000000,
                'g': valor / 1000,
                'lb': valor / 453592,
            };
            break;
        case 'lb':
            conversoes = {
                't': valor / 2204.62,
                'kg': valor / 2.20462,
                'g': valor * 453.592,
                'mg': valor * 453592,
            };
            break;

        // Conversões de volume
        case 'L':
            conversoes = {
                'ml': valor * 1000,
                'm³': valor / 1000,
            };
            break;
        case 'ml':
            conversoes = {
                'L': valor / 1000,
                'm³': valor / 1000000,
            };
            break;
        case 'm³':
            conversoes = {
                'L': valor * 1000,
                'ml': valor * 1000000,
            };
            break;
        default:
            alert("Unidade desconhecida!");
            return;
    }
    
    // Preenche a tabela com os valores convertidos
    for (const [unidadeConvertida, valorConvertido] of Object.entries(conversoes)) {
        const tr = document.createElement('tr');
        const tdUnidade = document.createElement('td');
        tdUnidade.textContent = unidadeConvertida;
        const tdValor = document.createElement('td');
        tdValor.textContent = valorConvertido.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        tr.appendChild(tdUnidade);
        tr.appendChild(tdValor);
        tbody.appendChild(tr);
    }
    
    // Exibe a tabela
    tabela.style.display = 'block';
}