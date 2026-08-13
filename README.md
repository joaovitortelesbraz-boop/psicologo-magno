# Site institucional — Magno Pinheiro, Psicólogo

Site institucional de página única, construído em React + TypeScript + Vite +
Tailwind CSS, reconstruindo o layout de `public/images/referencia-layout.png`.

## Como rodar

```bash
npm install     # já executado
npm run dev     # http://localhost:5173
npm run build   # type-check + build de produção em dist/
npm run lint    # ESLint
npm run preview # serve o build de produção
```

## Estrutura

```
src/
  components/
    Header.tsx           menu fixo + hambúrguer no mobile
    Hero.tsx             texto / foto / lista de fatos pessoais
    About.tsx            "Sobre mim" + ramo botânico
    Services.tsx         aspectos investigados + contextos da Neuropsicologia
    AssessmentProcess.tsx  etapas da Avaliação Neuropsicológica
    NeuropsychAssessment.tsx  avaliação + trabalho integrado
    Approach.tsx         atuação profissional em Neuropsicologia
    FAQ.tsx              accordion acessível
    ContactCTA.tsx       CTA final em três regiões
    OfficeLocation.tsx   endereço presencial + integração com Google Maps
    Footer.tsx           rodapé verde oliva escuro
    ui/                  Brand, Monogram, Reveal, botões, ícone do WhatsApp
    decorations/         ilustrações vetoriais (ramo e vaso)
  data/
    siteContent.ts       TODO o conteúdo do site
  hooks/useInView.ts     IntersectionObserver para as animações de entrada
  lib/links.ts           montagem dos links de WhatsApp/Instagram
  styles/index.css       base Tailwind, botões, animações, composição da foto
```

**Regra do projeto:** nenhum texto, link ou dado profissional é escrito dentro
dos componentes. Tudo vive em `src/data/siteContent.ts`.

## Informações de publicação pendentes

Nada foi inventado. Os itens abaixo precisam ser confirmados antes de publicar.

| Onde | O quê |
| --- | --- |
| `index.html` | URL canônica / `og:url` do domínio final e uma imagem de Open Graph 1200×630 dedicada (hoje aponta para a foto do hero). |

## Conteúdo confirmado pelo profissional

- **Contato real.** `WHATSAPP_NUMBER` (+55 27 99754-4949) e `INSTAGRAM_URL`
  (perfil do Magno) estão preenchidos. Todo botão de WhatsApp monta o link por
  `getWhatsAppUrl()` e todo link externo passa por `externalLinkProps()`, que
  aplica `target="_blank"` e `rel="noopener noreferrer"`. O Instagram da
  TelesCode é outra constante (`DEVELOPER_URL`) e não se mistura com o do Magno.

- **Magno Pinheiro — Psicólogo e Neuropsicólogo — CRP 16/7616.** Vive em
  `professional` (`roleFull`, `role`, `crp`); header, hero, rodapé e SEO leem
  desses campos. O `role` curto ("Psicólogo") existe só para telas abaixo de
  640px, onde a atuação completa quebraria o bloco de marca.
- **Conteúdo de Neuropsicologia:** atuação profissional, situações em que pode
  contribuir, aspectos investigados, processo da avaliação neuropsicológica e
  trabalho integrado. Os limites de conteúdo estão anotados no próprio arquivo.

## Foto do profissional

`public/images/magno-original.png` tem fundo de estúdio cinza-claro. A imagem
**não foi editada** — a integração com o hero é feita só em CSS:
`mix-blend-mode: multiply` (o fundo claro se dissolve no creme do ambiente) e
uma máscara radial que apaga as bordas do retângulo (`.hero-photo` em
`src/styles/index.css`).

Quando existir uma versão recortada (PNG com fundo transparente):

1. substitua o arquivo em `public/images/`;
2. em `src/data/siteContent.ts`, troque `hero.photo.hasStudioBackground` para
   `false`.

Nenhuma outra alteração é necessária.

## Decisões visuais

- **Tipografia:** Cormorant Garamond (títulos, serifada editorial de alto
  contraste — a que mais se aproxima da referência) e Inter (texto, menu,
  botões).
- **Paleta:** creme/off-white quente, bege, cinza quente, preto suave e verde
  oliva escuro (`olive-700` nos botões, `olive-950` no rodapé). Sem azul
  clínico e sem cor saturada.
- **Ambiente do hero:** o cenário claro e desfocado da referência é reproduzido
  com gradientes em CSS, não com a imagem de referência como plano de fundo.
- **Ilustrações botânicas** (ramo e vaso) são SVGs vetoriais escritos à mão,
  em traço fino e opacidade baixa — nunca competem com o conteúdo.
- **Animações:** fade + deslocamento vertical curto na entrada da viewport,
  hover discreto nos cards, accordion com transição de altura. Tudo respeita
  `prefers-reduced-motion`.
