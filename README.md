# GabaritouIF

App de estudo de legislação para concursos dos Institutos Federais: questões de múltipla escolha, revisão espaçada, modo prova e análise de desempenho por norma.

- Site: https://mh-pedro.github.io/gabaritouif/
- Login com Google (Firebase Authentication); progresso e banco de questões ficam no Firestore, na conta de cada usuário.
- O banco de questões **não** fica neste repositório: cada usuário importa o próprio CSV pelo app.

## Formato do CSV

`id,assunto,tema,dificuldade,questao,A,B,C,D,E,resposta,explicacao,tags`

- `resposta`: letra da alternativa correta (A a E)
- `dificuldade`: Fácil, Médio ou Difícil
- `tags`: pares `chave::valor` separados por espaço (`banca::FUNDATEC origem::prova_oficial gabarito::oficial`)
