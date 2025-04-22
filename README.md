# 🧭 Buscador de CEP

Um simples buscador de CEP desenvolvido em HTML, CSS e JavaScript, que consome a API pública ViaCEP para buscar informações de endereço a partir de um CEP informado.

## ✨ Funcionalidades

- Busca de endereço a partir de um CEP
- Exibição de:
  - Logradouro (rua)
  - Bairro
  - Cidade
  - Estado (UF)
- Validação de campo vazio ou CEP inválido
- Interface responsiva e amigável

## 💻 Tecnologias utilizadas

- HTML5  
- CSS3  
- JavaScript (Vanilla JS)  
- API ViaCEP ([https://viacep.com.br](https://viacep.com.br))

## 🚀 Como usar

1. Clone este repositório:
   ```bash
   git clone https://github.com/FelipeSantos211/buscadordecep.git
   ```

2. Acesse a pasta do projeto:
   ```bash
   cd buscadordecep
   ```

3. Abra o arquivo `index.html` no navegador:
   ```bash
   start index.html
   ```
   Ou simplesmente dê dois cliques no arquivo para abrir.

## 🛠️ Como funciona

- O usuário digita o CEP desejado no campo de busca.
- Ao clicar no botão **Buscar**, o JavaScript faz uma requisição para a [API ViaCEP](https://viacep.com.br/).
- Os dados retornados são exibidos dinamicamente na tela.
- Caso o CEP esteja incorreto ou o campo esteja vazio, uma mensagem de erro é exibida.

## ⚠️ Observações

- O CEP deve conter apenas números e ter exatamente 8 dígitos.
- A API ViaCEP é gratuita e pode apresentar instabilidade ocasionalmente.

## 📂 Estrutura de pastas

```
buscadordecep/
├── index.html
├── style.css
└── script.js
```

## 🙋‍♂️ Autor

Feito com 💙 por [Felipe Santos](https://github.com/FelipeSantos211)

---

Sinta-se à vontade para contribuir com melhorias ou sugestões! 🚀
