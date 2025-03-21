function navigate(section) {
    const content = document.getElementById("content");
    
    switch (section) {
        case "cadastro":
            content.innerHTML = "<h3>Cadastrar Produto</h3><p>Formulário de cadastro aqui...</p>";
            break;
        case "listar":
            content.innerHTML = "<h3>Lista de Produtos</h3><p>Produtos cadastrados aparecerão aqui...</p>";
            break;
        case "vencimento":
            content.innerHTML = "<h3>Produtos Próximos do Vencimento</h3><p>Lista de produtos perto do vencimento...</p>";
            break;
        case "estoque-baixo":
            content.innerHTML = "<h3>Alerta de Estoque Baixo</h3><p>Produtos com estoque crítico...</p>";
            break;
        default:
            content.innerHTML = "<h3>Bem-vindo ao Stock Hub</h3>";
    }
}

function toggleTheme() {
    const themeLink = document.getElementById("theme-link");
    if (themeLink.getAttribute("href") === "../css/style-light.css") {
        themeLink.setAttribute("href", "../css/style-dark.css");
    } else {
        themeLink.setAttribute("href", "../css/style-light.css");
    }
}