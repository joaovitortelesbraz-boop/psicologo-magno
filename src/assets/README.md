# src/assets

Assets importados pelo bundler (passam por hash e otimização do Vite).

Hoje o site usa apenas ilustrações vetoriais escritas em React
(`src/components/decorations/`) e as imagens servidas estaticamente em
`/public/images/`:

- `magno-original.png` — foto do profissional usada no hero.
- `referencia-layout.png` — referência visual do projeto (não é usada em tela).

Ao adicionar uma foto com fundo removido, mantenha-a em `/public/images/` e
atualize `hero.photo` em `src/data/siteContent.ts`.
