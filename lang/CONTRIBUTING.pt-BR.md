# Guia de contribuição

Obrigado pelo seu interesse em contribuir com o revrain! Aceitamos relatos de bugs, melhorias na documentação e contribuições de código.

O revrain é um tema Hugo feito para geeks e desenvolvedores: design escuro com animação de chuva digital, estética de vidro fosco (glassmorphism), suporte a 11 idiomas e alinhado ao padrão de acessibilidade WCAG 2.2 AA. Cada contribuição sua é valiosa.

## Ramificações

Este repositório tem duas ramificações principais:

- `main`: versão estável / oficial. Só é mesclada e publicada pelos mantenedores a partir de `dev`. **PRs diretos não são aceitos.**
- `dev`: ramificação de desenvolvimento. Todas as funcionalidades, correções e alterações de documentação devem ir para `dev`.

> Importante: ao abrir um Pull Request, selecione `dev` como ramificação de destino, não `main`.

## Como você pode contribuir

- Relatar bugs
- Sugerir novas funcionalidades
- Melhorar a documentação (incluindo as traduções multilíngues do README em `lang/`)
- Enviar correções de código ou novas funcionalidades
- Ajudar com testes e feedback (especialmente em diferentes navegadores, leitores de tela e idiomas RTL)

## Ambiente de desenvolvimento

- Hugo >= 0.163.0 (qualquer edição; o SCSS é compilado pelo Dart Sass externo)
- Dart Sass (deve estar instalado e no PATH; o Hugo o invoca automaticamente)

### Pré-visualização local

```bash
cd exampleSite
hugo server
```

`exampleSite/hugo.toml` já aponta para a raiz do tema via `themesDir = "../../"`, portanto nenhuma configuração extra é necessária. Para compilar a versão de produção:

```bash
cd exampleSite
hugo --minify --gc
```

## Relatar problemas

Antes de abrir uma Issue, pesquise se já existe um problema semelhante.

Forneça o máximo possível de informações:

- Seu ambiente (sistema operacional, versão do Hugo, navegador, etc.)
- Passos para reproduzir
- Resultado esperado
- Resultado real
- Logs de erro ou capturas de tela (se houver)

Para problemas relacionados à acessibilidade (navegação por teclado, leitores de tela, contraste, RTL etc.), informe a tecnologia assistiva utilizada e sua versão.

## Enviar código

1. Faça um fork deste repositório.

2. Clone seu fork:

   ```bash
   git clone https://github.com/seu-nome-de-usuario/revrain.git
   cd revrain
   ```

3. Alterne para a ramificação `dev`:

   ```bash
   git checkout dev
   git pull origin dev
   ```

4. Crie sua ramificação a partir de `dev`:

   ```bash
   git checkout -b fix/descricao-do-problema
   ```

   Nomes de ramificação sugeridos:

   - `feat/nova-funcionalidade`
   - `fix/correcao`
   - `docs/atualizacao-documentacao`

5. Modifique o código e faça commit:

   ```bash
   git add .
   git commit -m "fix: corrige um problema específico"
   ```

6. Envie para seu fork:

   ```bash
   git push origin fix/descricao-do-problema
   ```

7. Abra um Pull Request no GitHub.

   **A ramificação de destino do PR deve ser `dev`, não `main`.**

## Requisitos dos Pull Requests

- Ramificação de destino: `dev`
- Um PR deve idealmente fazer apenas uma coisa
- Explique o que mudou, por quê e como testou
- Para mudanças grandes, abra primeiro uma Issue para discussão
- Não inclua formatação não relacionada nem alterações em grande escala
- Não envie senhas, chaves ou informações pessoais
- Ao alterar o comportamento do tema, atualize também o `README.md` (e os documentos multilíngues em `lang/` se necessário)
- Após modificar estilos ou scripts, verifique localmente com `hugo server` e confirme o bom funcionamento em telas estreitas (dispositivos móveis)
- Ao adicionar ou modificar interações de interface, mantenha as convenções de acessibilidade existentes: operável por teclado, foco visível, atributos `aria-*` e suporte a `prefers-reduced-motion`

## Sugestões de mensagens de commit

Recomendado, mas não obrigatório (mantenha o estilo de commit existente):

- `feat: nova funcionalidade`
- `fix: correção de bug`
- `docs: atualização de documentação`
- `test: testes`
- `refactor: refatoração`
- `chore: diversos`

## Processo de publicação dos mantenedores

O desenvolvimento regular acontece em `dev`.
Quando `dev` estiver estável após os testes, os mantenedores mesclam em `main` e publicam a versão oficial.

## Comunicação

- Para qualquer dúvida, abra diretamente uma Issue; responderemos o mais rápido possível
- Seja educado e respeite opiniões diferentes

## Licença

Suas contribuições serão publicadas sob a LICENÇA MIT deste projeto. Consulte [LICENSE](../LICENSE).
