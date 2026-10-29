# GabaritouIF

App de estudo de legislação para concursos dos Institutos Federais: questões de múltipla escolha, revisão espaçada, modo prova e análise de desempenho por norma.

- Site: https://mh-pedro.github.io/gabaritouif/
- Login com Google (Firebase Authentication); progresso e banco de questões ficam no Firestore, na conta de cada usuário.
- O app não lê o banco direto daqui: cada usuário importa um CSV pela própria conta (avatar > Atualizar banco).
- Banco público: [`banco/questoes.csv`](banco/questoes.csv), 218 questões de provas oficiais, inéditas e do banco próprio. Origem e autoria em [`banco/CREDITOS.md`](banco/CREDITOS.md).

## Formato do CSV

`id,assunto,tema,dificuldade,questao,A,B,C,D,E,resposta,explicacao,tags`

- `resposta`: letra da alternativa correta (A a E)
- `dificuldade`: Fácil, Médio ou Difícil
- `tags`: pares `chave::valor` separados por espaço (`banca::FUNDATEC origem::prova_oficial gabarito::oficial`)
