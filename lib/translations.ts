import React from "react";
import type { ReactNode } from "react";

export type Locale = "en" | "pt" | "es";

export type TranslationBundle = {
  nav: { studio: string; portfolio: string; contact: string };
  footer: { socials: { instagram: string; pinterest: string; x: string; linkedin: string } };
  home: {
    heroTitle: string;
    heroText: string;
    positionLabel: string;
    positionText: string;
    positionFooterLabel: string;
    perspectiveTitle: string;
    perspectiveIntro: string;
    perspectiveUnderline: string;
    manifestoTitle: string;
    manifestoText: string;
    aboutTitle: string;
    aboutText: string;
    aboutUnderline: string;
    contactText: string;
    contactUnderline: string;
  };
  studio: {
    heroTitle: string;
    intro: { lead: string; strong: string; body: string };
    editorial: {
      observationLabel: string;
      observationBody: string;
      intentionLabel: string;
      intentionBody: string;
      restraintLabel: string;
      restraintBody: string;
      continuityLabel: string;
      continuityBody: string;
    };
    editorialBreakText: string;
    services: Array<{
      title: string;
      subtitle: string;
      description: string;
      bullets: string[];
    }>;
    contactText: string;
    contactUnderline: string;
  };
  portfolio: { title: string; description: string; cta: string };
  contact: {
    title: string;
    description: string;
    form: { name: string; company: string; email: string; message: string; send: string; sent: string };
  };
};

const en: TranslationBundle = {
  nav: { studio: "THE STUDIO", portfolio: "PORTFOLIO", contact: "CONTACT" },
  footer: {
    socials: {
      instagram: "INSTAGRAM",
      pinterest: "PINTEREST",
      x: "X",
      linkedin: "LINKEDIN",
    },
  },
  home: {
    heroTitle: "presence is designed.",
    heroText:
      "A creative studio shaping presence for hospitality, experiences and high-end brands.",
    positionLabel: "OUR POSITION",
    positionText:
      "AGNUM translates quality into presence, with clarity, restraint, and long-term intention.\n\nWe bridge the gap between aesthetic intelligence and commercial performance, ensuring that refined perception drives measurable value.",
    positionFooterLabel: "AGNUM CREATIVE STUDIO 26",
    perspectiveTitle: "perspective",
    perspectiveIntro: "A curated selection of visual and strategic directions.",
    perspectiveUnderline: "explore our portfolio",
    manifestoTitle: "Experience is felt before it is explained.",
    manifestoText:
      "We believe presence is not accidental.\nIt is built through observation, intention and restraint.\nStrategic direction is what allows that feeling to become a lasting asset.",
    aboutTitle: "the studio",
    aboutText:
      "Our work moves across direction, aesthetics, and strategic marketing.\n\nWe support hospitality brands through a dual approach: building an uncompromising visual narrative and ensuring it reaches the right audience through high-performance distribution.\n\nWe translate perception into revenue.",
    aboutUnderline: "the studio",
    contactText:
      "We work with a limited number of partners each year.\n\nIf you are shaping an experience, a place or a brand and seek direction with clarity and intention, we would be pleased to begin a conversation.",
    contactUnderline: "contact the studio",
  },
  studio: {
    heroTitle: "the studio",
    intro: {
      lead: "AGNUM was created from a simple observation.",
      strong:
        "Exceptional experiences often fail to translate\ninto equally refined presence.",
      body:
        "Our work exists to close that distance. Not only to preserve aesthetics, but to ensure that perception, positioning and demand move in the same direction. We combine creative sensibility with strategic structure, respecting the intelligence of both the brand and its audience.",
    },
    editorial: {
      observationLabel: "Observation",
      observationBody:
        "We begin with observation. Not only of the space, its light and rhythm, but of its market context. Understanding where the property sits within its competitive landscape allows us to identify opportunity: where perception can be elevated, where positioning can be clarified, and where demand can be directed more intentionally.",
      intentionLabel: "intention",
      intentionBody:
        "In the high-end segment, chance is a risk. Every decision is deliberate. From the framing of a photograph to the architecture of a paid distribution strategy, creative direction and commercial logic move together. Visual storytelling is not separate from business performance. It is the mechanism that supports it.",
      restraintLabel: "restraint",
      restraintBody:
        "The loudest brands are rarely the most valuable. In high-end hospitality, clarity creates authority. By removing visual and strategic noise, we allow the property’s true character to emerge. This restraint strengthens perceived value, supports premium positioning, and attracts a more qualified audience.",
      continuityLabel: "continuity",
      continuityBody:
        "Presence is not a campaign. It is built over time. We design for continuity across every layer of the digital journey, from the first moment of discovery to the final reservation. By aligning high-fidelity content, distribution strategy and platform architecture, we create an ecosystem.",
    },
    editorialBreakText:
      "Our work unfolds across three complementary dimensions.\n\nPerception.\nNarrative.\nPerformance.\n\nEach one reinforcing the other.",
    services: [
      {
        title: "Perception Strategy\n& Brand Premium",
        subtitle: "The foundation of value.",
        description:
          "Before producing imagery or launching campaigns, we define the positioning authority of the property. Our focus is to strengthen Brand Premium and support pricing power.",
        bullets: [
          "Positioning and Market Context",
          "brand identity and visual trust",
          "destination authority",
        ],
      },
      {
        title: "Narrative Intelligence\n& Aspirational Storytelling",
        subtitle: "The architecture of desire.",
        description:
          "High-end hospitality is experienced first through perception. Our visual productions are designed to translate atmosphere into desire, guiding the guest from curiosity to intention.",
        bullets: [
          "editorial photography and motion",
          "social narrative and digital curation",
          "sequential storytelling",
        ],
      },
      {
        title: "Performance Architecture\n& Strategic Distribution",
        subtitle: "Where perception becomes revenue.",
        description:
          "Once perception is aligned and narrative is established, we structure the channels that convert interest into bookings efficiently through high-performance environments.",
        bullets: [
          "metasearch and paid distribution",
          "direct booking ecosystem",
          "conversion and revenue optimization",
        ],
      },
    ],
    contactText:
      "We work with a limited number of partners each year.\n\nIf you are shaping an experience, a place or a brand and seek direction with clarity and intention, we would be pleased to begin a conversation.",
    contactUnderline: "contact the studio",
  },
  portfolio: {
    title: "PORTFOLIO",
    description:
      "A curated view on presence, experience and visual direction.\nAll imagery presented here is conceived and directed by the Studio.",
    cta: "CONTACT THE STUDIO",
  },
  contact: {
    title: "CONTACT\nTHE STUDIO",
    description:
      "We work with a limited number of partners each year.\nThoughtful inquiries and long term collaborations are part of our practice.\n\nIf you are shaping an experience, a place or a brand and seek direction with clarity and intention, we would be pleased to hear from you.",
    form: {
      name: "NAME",
      company: "COMPANY",
      email: "E-MAIL",
      message: "YOUR MESSAGE",
      send: "SEND",
      sent: "MESSAGE SENT",
    },
  },
};

const pt: TranslationBundle = {
  nav: { studio: "THE STUDIO", portfolio: "PORTFOLIO", contact: "CONTACT" },
  footer: en.footer,
  home: {
    heroTitle: "Presença se constrói.",
    heroText:
      "Um estúdio criativo que constrói presença para hotelaria, experiências e marcas de alto padrão.",
    positionLabel: "POSICIONAMENTO",
    positionText:
      "A AGNUM traduz qualidade em presença, com clareza, contenção e visão de longo prazo.\n\nConectamos inteligência estética à lógica de negócio, garantindo que uma percepção refinada se converta em valor real.",
    positionFooterLabel: "AGNUM CREATIVE STUDIO 26",
    perspectiveTitle: "perspectiva",
    perspectiveIntro: "Uma curadoria de direções visuais e estratégicas.",
    perspectiveUnderline: "explorar o portfolio",
    manifestoTitle: "Experiência é sentida antes de ser explicada.",
    manifestoText:
      "Acreditamos que presença não é acidental.\nEla se constrói com observação, intenção e contenção.\nÉ a direção estratégica que transforma essa percepção em um ativo duradouro.",
    aboutTitle: "the studio",
    aboutText:
      "Nosso trabalho transita entre direção, estética e estratégia.\n\nAtuamos com marcas de hospitalidade a partir de uma lógica dupla: construir uma narrativa visual precisa e garantir que ela alcance o público certo, com consistência e eficiência.\n\nTraduzimos percepção em resultado.",
    aboutUnderline: "the studio",
    contactText:
      "Trabalhamos com um número limitado de parceiros a cada ano.\n\nSe você está desenvolvendo uma experiência, um espaço ou uma marca e busca direção com clareza e intenção, teremos prazer em iniciar uma conversa.",
    contactUnderline: "contact the studio",
  },
  studio: {
    heroTitle: "the studio",
    intro: {
      lead: "A AGNUM nasce de uma observação simples.",
      strong:
        "Experiências excepcionais nem sempre se\ntraduzem em uma presença à mesma altura.",
      body:
        "Nosso trabalho existe para encurtar essa distância. Não apenas para preservar a estética, mas para garantir que percepção, posicionamento e demanda avancem de forma alinhada. Combinamos sensibilidade criativa e estrutura estratégica, respeitando a inteligência da marca e de quem a percebe, ao mesmo tempo em que sustentamos sua performance comercial.",
    },
    editorial: {
      observationLabel: "Observação",
      observationBody:
        "Começamos pela observação. Não apenas do espaço, da luz ou do ritmo, mas do contexto em que a marca está inserida. Compreender onde a propriedade se posiciona dentro do seu mercado nos permite identificar oportunidades: onde a percepção pode ser elevada, onde o posicionamento pode ser mais claro e onde a demanda pode ser direcionada com mais precisão. Ao alinhar o desejo do hóspede com a dinâmica do mercado, definimos a direção estratégica antes mesmo da primeira imagem existir.",
      intentionLabel: "Intenção",
      intentionBody:
        "No segmento de alto padrão, o acaso é um risco. Cada decisão é intencional. Do enquadramento de uma imagem à estrutura de uma estratégia de mídia, direção criativa e lógica de negócio caminham juntas. A narrativa visual não está separada da performance. Ela sustenta essa performance. Cada ponto de contato é pensado para conduzir a percepção até a confiança, e a confiança até a reserva direta.",
      restraintLabel: "Contenção",
      restraintBody:
        "As marcas mais visíveis nem sempre são as mais valiosas. Na hotelaria de alto padrão, é a clareza que constrói autoridade. Ao remover excessos visuais e estratégicos, abrimos espaço para que a essência da marca apareça com precisão. Essa contenção fortalece o valor percebido, sustenta o posicionamento premium e atrai um público mais qualificado. O resultado não é apenas uma identidade mais forte, mas uma presença capaz de sustentar tarifas mais altas e uma demanda mais consistente.",
      continuityLabel: "Continuidade",
      continuityBody:
        "Presença não é campanha. É construção. Pensamos a continuidade em todas as camadas da jornada digital, do primeiro contato até a reserva. Ao alinhar conteúdo, distribuição e estrutura, criamos um sistema onde a percepção se mantém consistente e a demanda se torna sustentável. Assim, um instante de atenção se transforma em resultado ao longo do tempo.",
    },
    editorialBreakText:
      "Nosso trabalho se organiza em três dimensões complementares.\n\nPercepção.\nNarrativa.\nPerformance.\n\nCada uma sustentando a outra.",
    services: [
      {
        title: "Estratégia de Percepção\n& Brand Premium",
        subtitle: "A base do valor.",
        description:
          "Antes de produzir qualquer imagem ou ativar campanhas, definimos a autoridade de posicionamento da propriedade. Nosso foco está em fortalecer o Brand Premium e sustentar o poder de precificação dentro do cenário competitivo.\n\nPor meio de posicionamento estratégico e coerência visual, a propriedade deixa de ser percebida como uma opção entre muitas e passa a ocupar um lugar de referência dentro do seu destino.",
        bullets: [
          "Posicionamento & Contexto de Mercado",
          "Identidade de Marca & Confiança Visual",
          "Autoridade de destino",
        ],
      },
      {
        title: "Inteligência Narrativa\n& Construção de Desejo",
        subtitle: "A arquitetura do desejo.",
        description:
          "A hospitalidade de alto padrão é vivida, antes de tudo, pela percepção. Nossas produções visuais são concebidas para traduzir atmosfera em desejo, conduzindo o hóspede da curiosidade à intenção.\n\nPor meio de direção editorial e curadoria contínua, a presença digital se transforma em uma narrativa viva, capaz de construir confiança ao longo do tempo.",
        bullets: [
          "Fotografia Editorial & Motion",
          "Narrativa Social & Curadoria Digital",
          "Narrativa Sequencial",
        ],
      },
      {
        title: "Arquitetura de Performance \n& Distribuição Estratégica",
        subtitle: "Onde a percepção se converte em receita.",
        description: 
          "Uma vez alinhadas a percepção e a narrativa, estruturamos os canais responsáveis por transformar interesse em reservas.\n\nNosso papel é garantir que a demanda gerada pela presença seja capturada com eficiência, por meio de uma distribuição qualificada e de ambientes de reserva preparados para conversão.",
        bullets: [
          "Metasearch & Distribuição Paga",
          "Ecossistema de Reserva Direta",
          "Conversão & Revenue Optimization",
        ],
      },
    ],
    contactText:
      "Trabalhamos com um número limitado de parceiros a cada ano.\n\nSe você está desenvolvendo uma experiência, um espaço ou uma marca e busca direção com clareza e intenção, teremos prazer em iniciar uma conversa.",
    contactUnderline: "contact the studio",
  },
  portfolio: {
    title: "PORTFOLIO",
    description:
      "A perspectiva é uma escolha. Nosso portfólio é um estudo sobre como a intenção molda o desejo.\nA seguir, uma seleção de trabalhos orientados por ritmo, luz e alinhamento estratégico para hotelaria e marcas de alto padrão.\n\nPriorizamos a privacidade e a exclusividade de nossos parceiros;\nPor isso, nossos projetos são apresentados como estudos de percepção, e não como simples registros de serviço.",
    cta: "CONTACT THE STUDIO",
  },
  contact: {
    title: "CONTACT\nTHE STUDIO",
    description:
      "Trabalhamos com um número limitado de parceiros a cada ano.\nIniciativas bem pensadas e colaborações de longo prazo fazem parte da nossa prática.\n\nSe você está desenvolvendo uma experiência, um espaço ou uma marca e busca direção com clareza e intenção, será um prazer ouvir você.",
    form: {
      name: "NOME",
      company: "EMPRESA",
      email: "E-MAIL",
      message: "SUA MENSAGEM",
      send: "ENVIAR",
      sent: "MENSAGEM ENVIADA",
    },
  },
};

const es: TranslationBundle = {
  nav: { studio: "THE STUDIO", portfolio: "PORTFOLIO", contact: "CONTACT" },
  footer: en.footer,
  home: {
    heroTitle: "La presencia se construye.",
    heroText:
      "Un estudio creativo que construye presencia para hospitalidad, experiencias y marcas de alto nivel.",
    positionLabel: "POSICIONAMIENTO",
    positionText:
      "AAGNUM traduce la calidad en presencia, con claridad, criterio y visión a largo plazo.\n\nConectamos la inteligencia estética con la lógica del negocio, asegurando que una percepción cuidada genere valor real.",
    positionFooterLabel: "AGNUM CREATIVE STUDIO 26",
    perspectiveTitle: "PERSPECTIVA",
    perspectiveIntro: "Una selección cuidada de direcciones visuales y estratégicas.",
    perspectiveUnderline: "explorar el portfolio",
    manifestoTitle: "La experiencia se siente antes de explicarse.",
    manifestoText:
      "Creemos que la presencia no es accidental.\nSe construye a través de la observación, la intención y la contención.\nLa dirección estratégica es lo que permite que esa percepción se convierta en un valor duradero.",
    aboutTitle: "the studio",
    aboutText:
      "Nuestro trabajo se sitúa entre dirección, estética y estrategia.\n\nAcompañamos a marcas de hospitalidad a través de un enfoque dual: construir una narrativa visual sólida y asegurar que llegue al público adecuado, con coherencia y precisión.\n\nTraducimos la percepción en valor.",
    aboutUnderline: "the studio",
    contactText:
      "Trabajamos con un número limitado de partners cada año.\n\nSi estás desarrollando una experiencia, un espacio o una marca y buscas una dirección con claridad e intención, estaremos encantados de iniciar una conversación.",
    contactUnderline: "contact the studio",
  },
  studio: {
    heroTitle: "the studio",
    intro: {
      lead: "AGNUM nace de una observación sencilla.",
      strong:
        "Las experiencias excepcionales no siempre se\ntraducen en una presencia a su altura.",
      body:
        "Nuestro trabajo consiste en cerrar esa distancia. No solo para preservar la estética, sino para alinear percepción, posicionamiento y demanda. Combinamos sensibilidad creativa y estructura estratégica, respetando la inteligencia de la marca y su audiencia, mientras sostenemos su rendimiento.",
    },
    editorial: {
      observationLabel: "Observación",
      observationBody:
        "Partimos de la observación. Del espacio, la luz y el ritmo, pero también del contexto del mercado. Entender dónde se sitúa una propiedad permite identificar oportunidades: dónde elevar la percepción, dónde clarificar el posicionamiento y dónde dirigir la demanda con mayor precisión.\nAsí definimos la dirección antes de producir.",
      intentionLabel: "Intención",
      intentionBody:
        "En el segmento de alto nivel, el azar es un riesgo. Cada decisión es consciente. Desde la construcción visual hasta la estructura de distribución, creatividad y lógica de negocio avanzan juntas. La narrativa visual no está separada del rendimiento. Lo sostiene.\nCada punto de contacto guía la percepción hacia la confianza, y la confianza hacia la reserva directa.",
      restraintLabel: "Contención",
      restraintBody:
        "Las marcas más visibles no siempre son las más valiosas. En hospitalidad de alto nivel, la claridad construye autoridad. Al eliminar lo innecesario, permitimos que lo esencial aparezca. Esta contención refuerza el valor percibido, sostiene el posicionamiento premium y atrae al público adecuado.\nEl resultado es una presencia capaz de sostener precios más altos y una demanda más sólida.",
      continuityLabel: "Continuidad",
      continuityBody:
        "La presencia no es una campaña. Se construye con el tiempo. Diseñamos continuidad en todo el recorrido digital. Al alinear contenido, distribución y estructura, creamos un sistema donde la percepción se mantiene coherente y la demanda se vuelve sostenible.\nAsí, la atención se transforma en valor.",
    },
    editorialBreakText:
      "Nuestro trabajo se estructura en tres dimensiones.\n\nPercepción.\nNarrativa.\nPerformance.\n\nCada una refuerza a la otra.",
    services: [
      {
        title: "Estrategia de Percepción\n& Brand Premium",
        subtitle: "La base del valor.",
        description:
          "Antes de producir contenido visual o activar canales, definimos la autoridad de posicionamiento de la propiedad. Nuestro objetivo es reforzar el Brand Premium y sostener la capacidad de precio dentro del entorno competitivo.\n\nA través de un posicionamiento estratégico y una coherencia visual, la propiedad deja de ser una opción más y pasa a ser una referencia dentro de su destino.",
        bullets: [
          "Posicionamiento & Contexto de Mercado",
          "Identidad de Marca & Confianza Visual",
          "Autoridad de Destino",
        ],
      },
      {
        title: "Inteligencia Narrativa\n& Construcción del Deseo",
        subtitle: "La arquitectura del deseo.",
        description:
          "La hospitalidad de alto nivel se experimenta primero a través de la percepción. Nuestras producciones visuales traducen la atmósfera en deseo, guiando al huésped desde la curiosidad hasta la intención.\n\nA través de dirección editorial y una curaduría continua, la presencia digital se convierte en una narrativa viva que construye confianza con el tiempo.",
        bullets: [
          "Fotografía Editorial & Motion",
          "Narrativa Social & Curaduría Digital",
          "Narrativa Secuencial",
        ],
      },
      {
        title: "Arquitectura de Performance\n& Distribución Estratégica",
        subtitle: "Donde la percepción se convierte en ingresos.",
        description:
          "Una vez alineadas la percepción y la narrativa, estructuramos los canales que transforman el interés en reservas.\n\nNuestro rol es asegurar que la demanda generada por la presencia sea capturada de forma eficiente, a través de distribución precisa y entornos de reserva optimizados.",
        bullets: [
          "Metasearch & Distribución Paid",
          "Ecosistema de Reserva Directa",
          "Conversión & Optimización de Ingresos",
        ],
      },
    ],
    contactText:
      "Trabajamos con un número limitado de partners cada año.\n\nSi estás desarrollando una experiencia, un espacio o una marca y buscas una dirección con claridad e intención, estaremos encantados de iniciar una conversación.",
    contactUnderline: "contact the studio",
  },
  portfolio: {
    title: "PORTFOLIO",
    description:
      "La perspectiva es una elección. Nuestro portfolio es un estudio sobre cómo la intención construye el deseo.\nA continuación, una selección de proyectos guiados por el ritmo, la luz y la alineación estratégica para hospitalidad y marcas de alto nivel.\n\nPriorizamos la privacidad y la exclusividad de nuestros partners;\nPor ello, nuestros proyectos se presentan como estudios de percepción y no como simples registros de servicio.",
    cta: "CONTACT THE STUDIO",
  },
  contact: {
    title: "CONTACT\nTHE STUDIO",
    description:
      "Trabajamos con un número limitado de partners cada año.\nLas iniciativas bien planificadas y las colaboraciones a largo plazo son parte fundamental de nuestra práctica.\n\nSi estás desarrollando una experiencia, un espacio o una marca y buscas una dirección con claridad e intención, estaremos encantados de iniciar una conversación.",
    form: {
      name: "NOMBRE",
      company: "EMPRESA",
      email: "E-MAIL",
      message: "TU MENSAJE",
      send: "ENVIAR",
      sent: "MESSAGE SENT",
    },
  },
};

export const translations: Record<Locale, TranslationBundle> = { en, pt, es };

export function getT(locale?: string): TranslationBundle {
  const l = (locale as Locale) ?? "en";
  return translations[l] ?? translations.en;
}

export function renderMultiline(text: string): ReactNode[] {
  const lines = text.split("\n");
  const out: ReactNode[] = [];

  lines.forEach((line, i) => {
    out.push(line);
    if (i < lines.length - 1) out.push(React.createElement("br", { key: i }));
  });

  return out;
}

