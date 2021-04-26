# Gitflow

## Braches

- Master
- Hotfix
- Release
- Develop
- Feature

### Inicializar Gitflow

```bash
git flow init
```

#### Start branch feature

```bash
git flow feature start welcome
```

### Finalizar Featire

```bash
git flow feature finish welcome
```

## Prevenir commits com assinaturas digitais

```bash
gpg --full-generate-key
gpg --list-secret-key --keyid-form LONG
```

## Exportar chave GPG

```bash
gpg --armor --export 065D9717677A49E9
```

## Activar assinatura no git

```bash
git config --global user.signingKey 065D9717677A49E9
```

```bash
export GPG_TTY=$(tty)
```

## Assinar commit e tag por padrao

```bash
git config --global commit.gpgSign true
git config --global tag.gpgSign true
```

## Caso nao usar a config global

```bash
git commit -S -m "add footer"
```

```bash
git log --show-signature
```

```bash
echo "use-agent" ~/.gnupg/gpg.conf

pgconf --launch gpg-agent
```

## Adiconar outro email

```bash
gpg --edit-key 065D9717677A49E9
```

```gpg
adduid
uid <number>
save
```

# Pull Request

Evita commit direto em branches protegidas. E toda vez que criarmos uma pull request devemos detalhar o porquê da mesma, lembrado que as pull request podem ser atribuidas a outros membros para uma visualizaçao.

## Template PR

```bash
touch .github/PULL_REQUEST_TEMPLATE.md
```

# Code Review

### Protegendo Branch para Code Review

```bash
git switch -c feature/hyper-contact
```

### Code Owner

Esplicitar quem é dono do código para ser responsável por code review

# SEMVER e Conventional Commits

## SemVer

[versionamento semântico](https://semver.org/lang/pt-BR/)

- 2.1.4
  - (2) - MAJOR - API PUBLICA
  - (1) - MINOR - Adicionado funcionaldades, mas compativel com a API
  - (4) - PATCH - Bugs, Ajustes
- MAJOR = 0 - API Instável, Pode mudar a qualquer momento.
- 1.0.0-beta, 1.0.0-rc.0 < 1.0.0

## Convetional Commits

Uma especificação para dar um significado legível às mensagens de commit para humanos e máquinas

[link](https://www.conventionalcommits.org/pt-br/v1.0.0/)

### Conventional Commits 1.0.0

#### Resumo

A especificação do Conventional Commits é uma convenção simples para utilizar nas mensagens de commit.
Ela define um conjunto de regras para criar um histórico de commit
explícito, o que facilita a criação de ferramentas automatizadas baseadas na especificação.
Esta convenção se encaixa com o [SemVer](https://semver.org), descrevendo os recursos, correções e modificações que quebram a compatibilidade nas mensagens de commit.

A mensagem do commit deve ser estruturada da seguinte forma:

```
<tipo>[escopo opcional]: <descrição>

[corpo opcional]

[rodapé(s) opcional(is)]
```

### Trabalhando com commitlint

[commitlint.js](https://commitlint.js.org/#/)

Ajuda a revisar o padrão do commit seguindo o conventional commit

```bash
npm init -y
npm install --save-dev @commitlint/cli @commitlint/config-conventional
```

```bash
echo "module.exports = {extends: [@commitlint/config-convetional]};" > commitlint.config.js
```

```bash
npm install --save-dev husky
```

```package.json
"husky": {
   "hooks": {
       "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
}
```

## CommitSar

Verifica o padrão de commit

[commitsar](https://commitsar.tech)

```bash
docker run --rm --name="commitsar" -w /src -v "$(pwd)":/src aevea/commitsar commitsar .
```

## Commitando com Commitzen

Plugin de terminar para conventional commits

[commitzen](https://github.com/commitizen/cz-cli)

```bash
npm install -g commitizen
```

#### iniciar o repositório

```bash
commitizen init cz-conventional-changelog --save-dev --save-exact
```
