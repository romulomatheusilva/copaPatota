# ⚽ Copa Patota — Bolão entre amigos

Site de palpites para um campeonato de futebol entre amigos, **sem dinheiro e sem microtransações**: cada pessoa registra seus palpites e acompanha, em tempo real, como a galera está votando.

🔗 **Acesse:** https://romulomatheusilva.github.io/copaPatota/

![Logo Copa Patota](copapatota.png)

## Funcionalidades

- **Aposta múltipla:** palpite no vencedor de cada um dos 6 jogos da fase de grupos.
- **Votação do campeão:** escolha quem leva a final.
- **Gráficos em tempo real:** gráficos de pizza (Chart.js) atualizados ao vivo conforme os votos chegam.
- **Um voto por pessoa:** bloqueia palpites repetidos com o mesmo nome.
- **Tabela de times:** elencos e pontuação de cada equipe.
- **Layout responsivo** para celular.

## Tecnologias

- HTML, CSS e JavaScript
- [Firebase Realtime Database](https://firebase.google.com/docs/database) para guardar e sincronizar os votos
- [Chart.js](https://www.chartjs.org/) para os gráficos

## Como rodar localmente

Não precisa instalar nada: clone o repositório e abra o `index.html` no navegador.

```bash
git clone https://github.com/romulomatheusilva/copaPatota.git
```

## O que aprendi

- Sincronizar dados em tempo real entre vários usuários com Firebase.
- Usar transações no banco para contar votos sem perder nenhum quando duas pessoas votam ao mesmo tempo.
- Montar gráficos dinâmicos com Chart.js.
- Evoluir de `localStorage` (versão inicial, ainda comentada em `script.js`) para um banco de dados compartilhado.

---

Feito por [Rômulo Matheus](https://github.com/romulomatheusilva).
