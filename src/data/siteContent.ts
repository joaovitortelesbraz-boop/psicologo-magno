/* ==========================================================================
 * siteContent.ts
 * Fonte única de verdade de TODO o conteúdo do site.
 * Nenhum texto, link ou dado profissional deve ser escrito direto nos
 * componentes — altere sempre por aqui.
 * ==========================================================================
 *
 *  LEGENDA DE STATUS
 *  -----------------
 *  [OK]         → informação veio da apresentação original do profissional.
 *  [PROVISÓRIO] → texto de partida, precisa de validação do Magno.
 *  [PENDENTE]   → dado ainda NÃO informado. Não inventar. Preencher depois.
 *
 *  RESUMO DO QUE FALTA (ver também README.md):
 *   1. approach (TCC)       → [PROVISÓRIO] NECESSÁRIO CONFIRMAR COM MAGNO
 *   2. services (6 áreas)   → [PROVISÓRIO] validar clinicamente
 *   3. therapyProcess       → [PROVISÓRIO] modalidade e duração das sessões
 *   4. faq (respostas)      → [PROVISÓRIO] validar clinicamente
 *   5. contact.onlineNote   → [PROVISÓRIO] confirmar abrangência do online
 *
 *  JÁ CONFIRMADO PELO PROFISSIONAL (não é mais provisório):
 *   • Magno Pinheiro — Psicólogo e Neuropsicólogo — CRP 16/7616
 *   • conteúdo de `neuropsych` (Neuropsicologia e avaliação neuropsicológica)
 *   • WHATSAPP_NUMBER e INSTAGRAM_URL (contato real)
 * ========================================================================== */

/* --------------------------------------------------------------------------
 * 1. CONTATO — constantes configuráveis
 * -------------------------------------------------------------------------- */

/**
 * [OK — CONFIRMADO] WhatsApp do Magno: +55 27 99754-4949.
 * Apenas dígitos, com DDI + DDD — é o formato que o link wa.me exige.
 *
 * Definido só aqui: TODOS os botões de WhatsApp do site montam o link por
 * `getWhatsAppUrl()` (src/lib/links.ts), então o número não se repete em
 * nenhum componente.
 */
export const WHATSAPP_NUMBER = '5527997544949'

/** [OK] Mensagem que já vem preenchida ao abrir a conversa. */
export const WHATSAPP_MESSAGE =
  'Olá, eu vim pelo site e gostaria de mais informações sobre Avaliação Neuropsicológica.'

/**
 * [OK — CONFIRMADO] Instagram DO MAGNO.
 * Não confundir com `DEVELOPER_URL`, que é o Instagram da TelesCode usado no
 * crédito do rodapé — são dois perfis distintos e devem seguir separados.
 */
export const INSTAGRAM_URL =
  'https://www.instagram.com/magno.neuropsi?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='

/**
 * [OK] Perfil oficial de quem assina o desenvolvimento (TelesCode).
 * Usado tanto no texto "TelesCode" quanto no ícone do Instagram no rodapé.
 */
export const DEVELOPER_URL =
  'https://www.instagram.com/telescode.dev?igsh=ZDR5Y2pxNmxrZXhr&utm_source=qr'

/* --------------------------------------------------------------------------
 * 2. PROFISSIONAL
 * -------------------------------------------------------------------------- */

export const professional = {
  /** [OK] */
  name: 'Magno Pinheiro',
  /**
   * [OK — CONFIRMADO] Atuação completa. Use esta forma sempre que houver
   * espaço (hero, rodapé, SEO, textos alternativos).
   */
  roleFull: 'Psicólogo e Neuropsicólogo',
  /**
   * [OK — CONFIRMADO] Forma curta, só para espaços comprimidos onde a versão
   * completa quebraria o layout (ex.: monograma em telas muito estreitas).
   */
  role: 'Psicólogo',
  /** [OK] */
  monogram: 'MP',
  /**
   * [OK — CONFIRMADO] Registro profissional. Definido só aqui: hero, rodapé e
   * SEO leem deste campo, nenhum componente repete o número.
   */
  crp: 'CRP 16/7616',
  /** [OK] */
  city: 'Vila Velha - ES',
} as const

/**
 * [OK — CONFIRMADO] Tempo de atuação, calculado automaticamente.
 *
 * Em 12/08/2026 são 6 anos; a cada aniversário dessa data o site soma 1 ano
 * sozinho, sem edição manual. O cálculo vive em `src/lib/experience.ts` e os
 * textos recebem o total pelo token `{anosDeAtuacao}`.
 *
 * Para corrigir a contagem no futuro, basta ajustar estes dois campos.
 */
export const professionalExperience = {
  baseYears: 6,
  /** Data-base no formato AAAA-MM-DD, interpretada no fuso local. */
  baseDate: '2026-08-12',
} as const

/* --------------------------------------------------------------------------
 * 3. NAVEGAÇÃO
 * -------------------------------------------------------------------------- */

export type NavItem = { label: string; href: string }

export const navigation: NavItem[] = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre mim', href: '#sobre' },
  { label: 'Abordagem', href: '#abordagem' },
  { label: 'Como posso ajudar', href: '#servicos' },
  { label: 'Perguntas frequentes', href: '#faq' },
  { label: 'Contato', href: '#contato' },
]

/* --------------------------------------------------------------------------
 * 4. HERO
 * -------------------------------------------------------------------------- */

export type HeroFactIcon =
  | 'person'
  | 'calendar'
  | 'location'
  | 'pets'
  | 'chat'
  | 'heart'
  | 'education'
  | 'music'

export type HeroFact = {
  icon: HeroFactIcon
  /** Cada string é uma linha, para reproduzir a quebra visual da referência. */
  lines: string[]
  /** Destaque discreto (peso um pouco maior), como na referência. */
  emphasis?: boolean
}

export const hero = {
  /** Título em linhas separadas para manter a quebra visual da referência. */
  titleLines: ['Cuidar da mente', 'é transformar a vida.'],
  description:
    'A psicoterapia é um espaço seguro para você se conhecer, compreender suas emoções e construir novas possibilidades.',
  /**
   * Sem uso no momento: o CTA do hero foi removido para deixar o bloco
   * esquerdo mais editorial. Mantido aqui caso o botão volte — o agendamento
   * continua no header e nas seções seguintes.
   */
  ctaLabel: 'Agendar uma conversa',
  photo: {
    src: '/images/magno-original.png',
    alt: 'Magno Pinheiro, psicólogo e neuropsicólogo, sorrindo de braços cruzados',
    /**
     * A foto original tem fundo de estúdio (cinza claro). Com `true`, o
     * componente aplica a composição em CSS (blend + máscara suave) para
     * integrar a imagem ao fundo do hero.
     *
     * Quando existir uma versão com fundo removido (PNG transparente):
     *   1. substitua o arquivo em /public/images/
     *   2. troque este campo para `false`
     * Nenhuma outra alteração é necessária.
     */
    hasStudioBackground: true,
  },
  /** [OK] Todos os itens vieram da apresentação original do profissional. */
  facts: [
    // `{anosDeAtuacao}` é resolvido em runtime — ver `professionalExperience`.
    { icon: 'person', lines: ['Psicólogo há {anosDeAtuacao} anos'], emphasis: true },
    { icon: 'calendar', lines: ['38 anos de idade'], emphasis: true },
    { icon: 'location', lines: ['Atuo na cidade de', 'Vila Velha - ES'] },
    { icon: 'pets', lines: ['Sou pai de Pet, Theo', 'e Yoko'] },
    {
      icon: 'chat',
      lines: ['Sou comunicativo, gosto', 'de bater papo, principalmente', 'sobre filmes e séries.'],
    },
    {
      icon: 'heart',
      lines: ['Sou apaixonado por', 'ajudar pessoas a se', 'encontrar em suas', 'jornadas.'],
    },
    { icon: 'education', lines: ['Formado pela universidade', 'de Vila Velha - UVV'] },
    { icon: 'music', lines: ['Adoro momentos com', 'os amigos e Karaokê'] },
  ] satisfies HeroFact[],
} as const

/* --------------------------------------------------------------------------
 * 5. SOBRE MIM
 * -------------------------------------------------------------------------- */

export const about = {
  label: 'Sobre mim',
  titleTop: 'Muito prazer,',
  titleName: 'Magno Pinheiro',
  paragraphs: [
    'Sou psicólogo, apaixonado por pessoas e por histórias. Acredito que cada jornada é única e merece ser acolhida com respeito, empatia e profissionalismo.',
    'Meu propósito é oferecer um espaço de escuta autêntica, onde você possa se sentir seguro(a) para falar, refletir e transformar.',
  ],
  ctaLabel: 'Saiba mais sobre mim',
  /** Âncora do botão outlined — ajustar quando existir uma página dedicada. */
  ctaHref: '#abordagem',
} as const

/* --------------------------------------------------------------------------
 * 6. COMO POSSO AJUDAR
 * -------------------------------------------------------------------------- */

export type ServiceIcon =
  | 'anxiety'
  | 'selfEsteem'
  | 'relationships'
  | 'growth'
  | 'stress'
  | 'grief'

export type Service = {
  icon: ServiceIcon
  title: string
  description: string
}

export const services = {
  label: 'Como posso ajudar',
  title: 'Áreas de atendimento',
  /**
   * [PROVISÓRIO] As seis áreas abaixo precisam ser validadas
   * profissionalmente com o Magno antes da publicação.
   */
  items: [
    {
      icon: 'anxiety',
      title: 'Ansiedade',
      description: 'Entenda e gerencie seus pensamentos e emoções.',
    },
    {
      icon: 'selfEsteem',
      title: 'Autoestima',
      description: 'Fortaleça sua autoconfiança e seu amor-próprio.',
    },
    {
      icon: 'relationships',
      title: 'Relacionamentos',
      description: 'Melhore sua comunicação e construa relações saudáveis.',
    },
    {
      icon: 'growth',
      title: 'Desenvolvimento pessoal',
      description: 'Autoconhecimento e crescimento contínuo.',
    },
    {
      icon: 'stress',
      title: 'Estresse',
      description: 'Aprenda a lidar com pressões do dia a dia de forma saudável.',
    },
    {
      icon: 'grief',
      title: 'Luto e perdas',
      description: 'Elabore suas dores e encontre novos significados.',
    },
  ] satisfies Service[],
} as const

/* --------------------------------------------------------------------------
 * 6.1 AVALIAÇÃO NEUROPSICOLÓGICA
 * -------------------------------------------------------------------------- */

export type NeuroAreaIcon =
  | 'attention'
  | 'memory'
  | 'language'
  | 'reasoning'
  | 'social'
  | 'executive'

export type NeuroArea = { icon: NeuroAreaIcon; label: string }

/**
 * [OK — CONFIRMADO] Conteúdo de Neuropsicologia.
 *
 * Base factual: informações profissionais divulgadas pelo próprio Magno
 * (Neuropsicologia como especialidade da Psicologia, uso de instrumentos
 * padronizados, áreas do funcionamento cognitivo investigadas, contextos em
 * que pode contribuir e colaboração com outros profissionais). Os textos
 * abaixo foram redigidos originalmente para o site — não são cópia de
 * legenda de rede social.
 *
 * LIMITES DE CONTEÚDO — mantidos de propósito. NÃO acrescentar aqui:
 * nomes ou quantidade de testes, duração da avaliação, número de sessões,
 * público ou faixa etária, preços, formação/pós-graduação, outras condições
 * além das listadas em `contexts.items`, nem qualquer verbo de promessa
 * ("diagnostica", "comprova", "descobre", "cura", "resolve"). A avaliação
 * AUXILIA processos diagnósticos — essa é a linguagem correta.
 */
export const neuropsych = {
  /** 1. O que é Neuropsicologia / o que faz o neuropsicólogo. */
  intro: {
    label: 'Neuropsicologia',
    title: 'O que faz um neuropsicólogo?',
    paragraphs: [
      'A Neuropsicologia busca compreender a relação entre o funcionamento cerebral, os processos cognitivos e o comportamento.',
      'O trabalho do neuropsicólogo permite investigar diferentes aspectos do funcionamento cognitivo e comportamental, contribuindo para uma compreensão mais ampla das necessidades de cada pessoa.',
      'A atuação em Neuropsicologia pode envolver avaliação neuropsicológica, terapia e intervenções comportamentais.',
    ],
  },

  /** 2. Contextos em que a Neuropsicologia pode contribuir. */
  contexts: {
    title: 'Em quais situações a Neuropsicologia pode contribuir?',
    description:
      'A Neuropsicologia pode contribuir para a investigação e compreensão de diferentes questões cognitivas, comportamentais, neurológicas e emocionais.',
    /** Lista fechada. Não incluir nenhuma condição fora desta relação. */
    items: [
      'TDAH',
      'Autismo',
      'Lesões cerebrais',
      'Dificuldades de aprendizagem',
      'Questões emocionais',
      'Transtornos neurológicos',
      'Transtornos psiquiátricos',
    ],
  },

  /** 3. A avaliação neuropsicológica e os aspectos avaliados. */
  assessment: {
    label: 'Avaliação neuropsicológica',
    title: 'Entender também é uma forma de cuidar.',
    /**
     * Havia um terceiro parágrafo aqui, sobre auxiliar processos diagnósticos.
     * A informação NÃO se perdeu: ela agora vive em `process.steps[2]`, onde
     * aparece em contexto e de forma mais completa. Mantê-la nos dois lugares
     * repetiria quase a mesma frase na mesma tela.
     */
    paragraphs: [
      'A avaliação neuropsicológica é um processo que utiliza instrumentos padronizados para compreender diferentes aspectos do funcionamento cognitivo.',
      'Ao longo da avaliação, podem ser investigadas áreas como atenção, memória, linguagem, raciocínio, habilidades sociais e funções executivas, contribuindo para uma compreensão mais ampla do funcionamento de cada pessoa.',
    ],
    areasLabel: 'Áreas que podem ser investigadas',
    areas: [
      { icon: 'attention', label: 'Atenção' },
      { icon: 'memory', label: 'Memória' },
      { icon: 'language', label: 'Linguagem' },
      { icon: 'reasoning', label: 'Raciocínio' },
      { icon: 'social', label: 'Habilidades sociais' },
      { icon: 'executive', label: 'Funções executivas' },
    ] satisfies NeuroArea[],
  },

  /**
   * 4. Como funciona a avaliação, em quatro etapas.
   *
   * REGRA DE LINGUAGEM — a avaliação NÃO é apresentada como processo
   * terapêutico, e concluir uma avaliação não implica seguir para terapia,
   * reabilitação ou acompanhamento. A etapa 04 fala de possibilidade
   * ("quando indicado", "podem contribuir"), nunca de encaminhamento
   * automático. Não introduzir aqui: "garante o diagnóstico", "descobre",
   * "comprova", "tratamento definitivo" ou qualquer promessa de resultado.
   */
  process: {
    title: 'Como funciona uma Avaliação Neuropsicológica?',
    steps: [
      {
        number: '01',
        label: 'Compreensão inicial',
        title: 'Conhecendo sua história',
        description:
          'O processo começa com uma compreensão detalhada da história e das necessidades de cada pessoa, considerando informações relevantes sobre seu contexto e as questões cognitivas, emocionais ou comportamentais apresentadas.',
      },
      {
        number: '02',
        label: 'Avaliação',
        title: 'Investigação neuropsicológica',
        description:
          'A avaliação pode utilizar entrevistas, instrumentos padronizados e testes neuropsicológicos para investigar diferentes aspectos do funcionamento cognitivo, como atenção, memória, linguagem e outras funções relevantes para cada caso.',
      },
      {
        number: '03',
        label: 'Compreensão dos resultados',
        title: 'Um olhar integrado',
        description:
          'As informações obtidas ao longo do processo contribuem para uma compreensão mais detalhada do funcionamento cognitivo e comportamental e podem auxiliar processos diagnósticos e a definição dos próximos passos.',
      },
      {
        number: '04',
        label: 'Próximos passos',
        title: 'Cuidado individualizado',
        description:
          'Quando indicado, os resultados podem contribuir para o planejamento de estratégias e intervenções individualizadas, além de orientar o diálogo com familiares e outros profissionais envolvidos no cuidado.',
      },
    ],
  },

  /** 5. Trabalho integrado com outros profissionais. */
  collaboration: {
    title: 'Um cuidado construído em conjunto',
    description:
      'Quando necessário, o trabalho neuropsicológico pode acontecer em colaboração com outros profissionais da saúde, contribuindo para uma compreensão mais integrada de cada caso.',
    professionals: ['Neurologistas', 'Psiquiatras', 'Geriatras', 'Psicólogos'],
  },

  /** 6. CTA — usa o WhatsApp centralizado, sem repetir número ou URL. */
  ctaLabel: 'Saiba mais sobre a avaliação',
  /** [PROVISÓRIO] Apenas a mensagem inicial; o número vem de WHATSAPP_NUMBER. */
  whatsappMessage:
    'Olá, Magno. Encontrei seu site e gostaria de saber mais sobre a avaliação neuropsicológica.',
} as const

/* --------------------------------------------------------------------------
 * 7. COMO FUNCIONA A TERAPIA
 * -------------------------------------------------------------------------- */

export type ProcessIcon = 'screen' | 'clock' | 'person' | 'lock'

export type ProcessStep = {
  icon: ProcessIcon
  title: string
  description: string
}

export const therapyProcess = {
  label: 'Como funciona a terapia',
  title: 'Um espaço para você',
  /**
   * [PROVISÓRIO] Modalidade de atendimento (item 1) e duração das sessões
   * (item 2) são valores de partida e DEVEM ser confirmados pelo psicólogo.
   * Estão centralizados aqui justamente para não se espalharem pelo código.
   */
  steps: [
    {
      icon: 'screen',
      title: 'Atendimento online e presencial',
      description: 'Mais flexibilidade e conforto para você.',
    },
    {
      icon: 'clock',
      title: 'Sessões com duração de 50 minutos',
      description: 'Um tempo dedicado exclusivamente a você.',
    },
    {
      icon: 'person',
      title: 'Primeiro contato',
      description: 'Vamos conversar para entender suas necessidades e como posso te ajudar.',
    },
    {
      icon: 'lock',
      title: 'Sigilo e ética',
      description: 'Você terá um espaço seguro, com total confidencialidade e acolhimento.',
    },
  ] satisfies ProcessStep[],
} as const

/* --------------------------------------------------------------------------
 * 8. ABORDAGEM PROFISSIONAL
 * -------------------------------------------------------------------------- */

export const approach = {
  label: 'Abordagem profissional',
  title: 'Base da minha atuação',
  /**
   * ⚠ PROVISÓRIO — NECESSÁRIO CONFIRMAR COM MAGNO.
   * A abordagem TCC NÃO está confirmada. O texto abaixo é apenas um ponto de
   * partida herdado do layout de referência e deve ser substituído pela
   * abordagem real do profissional antes de qualquer publicação.
   */
  status: 'PROVISÓRIO — NECESSÁRIO CONFIRMAR COM MAGNO',
  paragraphs: [
    'Minha abordagem principal é a Terapia Cognitivo-Comportamental (TCC), baseada em evidências científicas e focada em compreender a relação entre pensamentos, emoções e comportamentos.',
    'O objetivo é identificar padrões que geram sofrimento e desenvolver estratégias práticas para promover mudanças reais e duradouras na sua vida.',
  ],
  quoteLines: ['A mudança começa quando você decide', 'se colocar em primeiro lugar.'],
} as const

/* --------------------------------------------------------------------------
 * 9. PERGUNTAS FREQUENTES
 * -------------------------------------------------------------------------- */

export type FaqItem = { question: string; answer: string }

export const faq = {
  label: 'Perguntas frequentes',
  /**
   * [PROVISÓRIO] Respostas de partida, escritas de forma genérica e sem
   * afirmações clínicas específicas. Ajustar com o Magno.
   */
  items: [
    {
      question: 'Como funciona a primeira sessão?',
      answer:
        'O primeiro encontro é um espaço de conversa. É o momento de você contar o que te trouxe até aqui, tirar dúvidas sobre o processo e combinarmos juntos os próximos passos.',
    },
    {
      question: 'Qual a duração das sessões?',
      answer:
        'Cada sessão tem duração de 50 minutos. A frequência dos encontros é definida em conjunto, de acordo com a sua necessidade.',
    },
    {
      question: 'Atende online?',
      answer:
        'Sim. O atendimento acontece de forma online e também presencial, em Vila Velha - ES. Você escolhe o formato que fizer mais sentido para a sua rotina.',
    },
    {
      question: 'Como faço para agendar?',
      answer:
        'O agendamento é feito diretamente pelo WhatsApp. É só enviar uma mensagem que conversamos sobre horários e sobre a melhor forma de começar.',
    },
  ] satisfies FaqItem[],
} as const

/* --------------------------------------------------------------------------
 * 10. CTA FINAL / CONTATO
 * -------------------------------------------------------------------------- */

export const contact = {
  titleLines: ['Pronto para dar o', 'primeiro passo?'],
  description: 'Vamos conversar! Estou aqui para te ouvir e caminhar junto com você.',
  whatsappLabel: 'Agendar pelo WhatsApp',
  instagramLabel: 'Ver no Instagram',
  /**
   * [OK — CONFIRMADO] Modalidade de atendimento, como nota discreta abaixo
   * dos botões. NÃO acrescentar aqui reembolso, convênios, valores, recibos
   * ou formas de pagamento — nada disso foi informado pelo profissional.
   */
  paymentNote: 'Atendimento particular · Não aceita plano de saúde',
  presentialTitle: 'Atendimento presencial',
  presentialCity: 'Vila Velha - ES',
  /** [PROVISÓRIO] Abrangência do atendimento online — confirmar com o Magno. */
  onlineNote: 'Atendimento online para todo o Brasil e exterior.',
} as const

/* --------------------------------------------------------------------------
 * 10.1 LOCALIZAÇÃO DO CONSULTÓRIO
 * -------------------------------------------------------------------------- */

/**
 * [OK — CONFIRMADO] Endereço do atendimento presencial.
 *
 * `mapQuery` é a fonte única dos três destinos do Google Maps (abrir, rota e
 * prévia). Nenhum componente monta URL de mapa por conta própria — ver
 * `getMapsSearchUrl`, `getMapsDirectionsUrl` e `getMapsEmbedUrl` em
 * src/lib/links.ts. Não há coordenada inventada: tudo parte do endereço.
 */
export const place = {
  label: 'Localização',
  title: 'Atendimento presencial em Vila Velha',
  name: 'Neuropsicólogo Magno Pinheiro',
  addressLines: [
    'R. Maria da Penha Queiroz, 43 - sala 301',
    'Praia da Costa, Vila Velha - ES',
    'CEP 29101-140',
  ],
  /** Consulta enviada ao Google Maps — nome do local + endereço completo. */
  mapQuery:
    'Neuropsicólogo Magno Pinheiro, R. Maria da Penha Queiroz, 43 - sala 301 - Praia da Costa, Vila Velha - ES, 29101-140',
  mapsLabel: 'Abrir no Google Maps',
  directionsLabel: 'Traçar rota',
  map: {
    /**
     * Prévia visual por iframe do Google Maps (`output=embed`) — sem API key,
     * sem custo e sem dependência. Basta trocar para `false` caso o embed
     * deixe de ser confiável: a seção continua completa com endereço e botões.
     */
    enabled: true,
    title: 'Mapa com a localização do consultório em Praia da Costa, Vila Velha - ES',
  },
} as const

/* --------------------------------------------------------------------------
 * 11. RODAPÉ
 * -------------------------------------------------------------------------- */

export const footer = {
  year: 2026,
  copyright: 'Todos os direitos reservados.',
  developerLabel: 'Desenvolvido por',
  developerName: 'TelesCode',
} as const

/* --------------------------------------------------------------------------
 * 12. SEO (espelha as tags do index.html)
 * -------------------------------------------------------------------------- */

export const seo = {
  title: 'Magno Pinheiro | Psicólogo e Neuropsicólogo em Vila Velha - ES',
  description:
    'Conheça o trabalho de Magno Pinheiro, Psicólogo e Neuropsicólogo CRP 16/7616 em Vila Velha - ES, e saiba mais sobre psicoterapia, Neuropsicologia e avaliação neuropsicológica.',
} as const
