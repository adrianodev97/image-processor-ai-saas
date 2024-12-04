# Pixly - Aplicação Web de Processamento de Imagens com IA

[Demonstração](https://pixly-ai.vercel.app/) - Experimente a aplicação diretamente no navegador!

Bem-vindo à nossa aplicação web de processamento de imagens! Esta aplicação foi projetada para ajudar os usuários a processar imagens de forma eficiente com IA. Abaixo, você encontrará uma visão geral dos recursos e da configuração da aplicação.

## Recursos

### Autenticação de Usuários

- Utiliza Clerk Authentication para autenticação de usuários de forma segura e integrada.

### Gerenciamento de Imagens

- Permite aos usuários fazer upload, visualizar, atualizar e excluir imagens.
- Oferece informações detalhadas sobre as imagens e respectivo processamento realizado
- Utiliza inteligência artificial para:
  - Preencher imagens de forma automática.
  - Remover fundos de imagens.
  - Melhorar a qualidade de imagens.
  - Recolorir imagens.
  - Remover objetos indesejados.

### Integração com Cloudinary

- Integra-se ao Cloudinary para armazenamento e gerenciamento de mídia.
- Realiza o processamento de imagens utilizando as funcionalidades avançadas do Cloudinary.
- Permite o upload direto de imagens para o Cloudinary a partir da aplicação.

## Primeiros Passos

### Pré-requisitos

- Node.js e npm, bun ou yarn instalados na sua máquina.

### Instalação

1. Clone este repositório para sua máquina local.
2. Navegue até o diretório do projeto.
3. Execute `bun install` para instalar as dependências.
4. Configure as variáveis de ambiente para Clerk Authentication e Cloudinary.
5. Execute `bun run dev` para iniciar o servidor de desenvolvimento.

### Uso

1. Registre-se ou faça login para acessar a aplicação.
2. Faça upload de imagens para sua coleção.
3. Visualize, atualize ou exclua imagens conforme necessário.
4. Use a busca e a paginação para navegar de forma eficiente pela sua coleção de imagens.

## Tecnologias Utilizadas

- Next.js: Um framework React para construção de aplicações web.
- Clerk: Soluções para autenticação e gerenciamento de usuários.
- Cloudinary: Plataforma baseada em nuvem para gerenciamento de mídia.
- React Hook Form: Biblioteca para gerenciamento de formulários em aplicações React.
- Zod: Biblioteca para declaração e validação de esquemas, com foco em TypeScript.

## Contribuidores

- \[Adriano\] - \[Proprietário/Desenvolvedor\]
