const fs = require('fs');
const path = require('path');

const testFolder = 'cypress/e2e/exercicio2_commitquality_tests';

// Padrões para substituição
const replacements = [
  // Corrigir const grudado
  [/constbody/g, 'const body'],
  [/constpreco/g, 'const preco'],
  [/constpopupVisivel/g, 'const popupVisivel'],
  [/constfecharPopupSeExistir/g, 'const fecharPopupSeExistir'],
  [/constallDataVars/g, 'const allDataVars'],
  [/constdataLayer/g, 'const dataLayer'],
  [/constkeys/g, 'const keys'],
  [/constmockEvent/g, 'const mockEvent'],
  
  // Corrigir números dos cenários
  [/Cenário(\d+):/g, 'Cenário $1: '],
  [/Cenario(\d+):/g, 'Cenário $1: '],
  
  // Corrigir textos grudados comuns
  [/ValidaroScroll/g, 'Validar o Scroll'],
  [/Scrollatéofinal/g, 'Scroll até o final'],
  [/Scrollatéotopo/g, 'Scroll até o topo'],
  [/BotãoFilter/g, 'Botão Filter'],
  [/BotãoReset/g, 'Botão Reset'],
  [/BotãoShowMore/g, 'Botão Show More'],
  [/ShowMoreclicado/g, 'Show More clicado'],
  [/Apresentarmais/g, 'Apresentar mais'],
  [/Adicionarproduto/g, 'Adicionar produto'],
  [/Preenchersomente/g, 'Preencher somente'],
  [/PreenchercampoNome/g, 'Preencher campo Nome'],
  [/PreenchercampoPrice/g, 'Preencher campo Price'],
  [/Validarquedata/g, 'Validar que data'],
  [/futuranãoéaceita/g, 'futura não é aceita'],
  [/Nãopreencher/g, 'Não preencher'],
  
  // Corrigir mensagens de validação
  [/Namemustbeatleast2characters/g, 'Name must be at least 2 characters'],
  [/Pricemustnotbeemptyandwithin10digits/g, 'Price must not be empty and within 10 digits'],
  [/Datemustnotbeempty/g, 'Date must not be empty'],
  [/Errorsmustberesolvedbeforesubmitting/g, 'Errors must be resolved before submitting'],
  [/Datemustnotbeinthefuture/g, 'Date must not be in the future'],
  
  // Corrigir logs
  [/Validaçõesexibidas/g, 'Validações exibidas'],
  [/ValidaçõesdePrice/g, 'Validações de Price'],
  [/ValidaçõesdeName/g, 'Validações de Name'],
  [/ValidaçõesdeNameePrice/g, 'Validações de Name e Price'],
  [/ValidaçõesdeNameeDate/g, 'Validações de Name e Date'],
  [/Sistemapermitiunome/g, 'Sistema permitiu nome'],
  [/Sistemanãopermitiu/g, 'Sistema não permitiu'],
  [/Sistemabloqueouoenvio/g, 'Sistema bloqueou o envio'],
  
  // Outras correções comuns
  [/ClickheretopracticeIframes/g, 'Click here to practice Iframes'],
];

// Ler todos os arquivos .cy.js
fs.readdirSync(testFolder).forEach(file => {
  if (file.endsWith('.cy.js')) {
    const filePath = path.join(testFolder, file);
    console.log(`Processando: ${file}`);
    
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Aplicar todas as substituições
    replacements.forEach(([pattern, replacement]) => {
      content = content.replace(pattern, replacement);
    });
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`${file} corrigido`);
  }
});

console.log('\nTodos os arquivos foram corrigidos!');
