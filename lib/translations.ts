import React from "react";
import type { ReactNode } from "react";

export type Locale = "pt" | "en" | "es";

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
      "A perspectiva é uma escolha.\nNosso portfólio é um estudo sobre como a intenção molda o desejo. A seguir, uma seleção de trabalhos orientados por ritmo, luz e alinhamento estratégico para hotelaria e marcas de alto padrão.\n\nPriorizamos a privacidade e a exclusividade de nossos parceiros; por isso, nossos projetos são apresentados como estudos de percepção, e não como simples registros de serviço.",
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
    heroTitle: "presence is designed.",
    heroText:
      "Un estudio creativo que da forma a la presencia para hospitalidad, experiencias y marcas high-end.",
    positionLabel: "OUR POSITION",
    positionText:
      "AGNUM traduce calidad en presencia, con claridad, contención e intención a largo plazo.\n\nConectamos la inteligencia estética con el rendimiento comercial, asegurando que una percepción refinada genere valor medible.",
    positionFooterLabel: "AGNUM CREATIVE STUDIO 26",
    perspectiveTitle: "perspective",
    perspectiveIntro: "Una selección curada de direcciones visuales y estratégicas.",
    perspectiveUnderline: "explore our portfolio",
    manifestoTitle: "Experience is felt before it is explained.",
    manifestoText:
      "Creemos que la presencia no es accidental.\nSe construye a través de la observación, la intención y la contención.\nLa dirección estratégica es lo que permite que esa sensación se convierta en un activo duradero.",
    aboutTitle: "the studio",
    aboutText:
      "Nuestro trabajo atraviesa dirección, estética y marketing estratégico.\n\nApoyamos a marcas de hospitalidad con un enfoque doble: construyendo una narrativa visual intransigente y asegurando que llegue al público correcto mediante una distribución de alto rendimiento.\n\nTraducimos la percepción en ingresos.",
    aboutUnderline: "the studio",
    contactText:
      "Trabajamos con un número limitado de socios cada año.\n\nSi estás construyendo una experiencia, un lugar o una marca y buscas dirección con claridad e intención, nos gustaría comenzar una conversación.",
    contactUnderline: "contact the studio",
  },
  studio: {
    heroTitle: "the studio",
    intro: {
      lead: "AGNUM nació de una observación simple.",
      strong:
        "Las experiencias excepcionales muchas veces fallan\nal traducirse en una presencia igual de refinada.",
      body:
        "Nuestro trabajo existe para cerrar esa distancia. No solo para preservar la estética, sino para asegurar que percepción, posicionamiento y demanda sigan la misma dirección. Combinamos sensibilidad creativa con estructura estratégica, respetando la inteligencia de la marca y de su audiencia.",
    },
    editorial: {
      observationLabel: "Observation",
      observationBody:
        "Comenzamos con la observación. No solo del espacio, su luz y ritmo, sino también de su contexto de mercado. Al entender dónde se sitúa la propiedad dentro del panorama competitivo, identificamos oportunidades: dónde puede elevarse la percepción, dónde puede aclararse el posicionamiento y dónde puede dirigirse la demanda con mayor intención.",
      intentionLabel: "intention",
      intentionBody:
        "En el segmento high-end, la casualidad es un riesgo. Cada decisión es deliberada. Desde el encuadre de una fotografía hasta la arquitectura de una estrategia de distribución de pago, dirección creativa y lógica comercial avanzan juntas. El storytelling visual no está separado del desempeño del negocio. Es el mecanismo que lo sostiene.",
      restraintLabel: "restraint",
      restraintBody:
        "Las marcas más ruidosas rara vez son las más valiosas. En hospitalidad high-end, la claridad crea autoridad. Al eliminar ruido visual y estratégico, dejamos que el carácter real de la propiedad emerja. Esta contención fortalece el valor percibido, respalda el posicionamiento premium y atrae a una audiencia más calificada.",
      continuityLabel: "continuity",
      continuityBody:
        "La presencia no es una campaña. Se construye con el tiempo. Diseñamos continuidad en cada capa del viaje digital, desde el primer momento del descubrimiento hasta la reserva final. Al alinear contenido de alta fidelidad, estrategia de distribución y arquitectura de plataforma, creamos un ecosistema.",
    },
    editorialBreakText:
      "Nuestro trabajo se despliega en tres dimensiones complementarias.\n\nPercepción.\nNarrativa.\nPerformance.\n\nCada una reforzando a la otra.",
    services: [
      {
        title: "Perception Strategy\n& Brand Premium",
        subtitle: "The foundation of value.",
        description:
          "Antes de producir imágenes o lanzar campañas, definimos la autoridad de posicionamiento de la propiedad. Nuestro foco es fortalecer Brand Premium y apoyar el poder de fijación de precios.",
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
          "La hospitalidad high-end se vive primero a través de la percepción. Nuestras producciones visuales están diseñadas para traducir atmósfera en deseo, guiando al huésped de la curiosidad a la intención.",
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
          "Una vez alineadas la percepción y la narrativa, estructuramos los canales que convierten interés en reservas de manera eficiente a través de entornos de alto rendimiento.",
        bullets: [
          "metasearch and paid distribution",
          "direct booking ecosystem",
          "conversion and revenue optimization",
        ],
      },
    ],
    contactText:
      "Trabajamos con un número limitado de socios cada año.\n\nSi estás construyendo una experiencia, un lugar o una marca y buscas dirección con claridad e intención, nos gustaría comenzar una conversación.",
    contactUnderline: "contact the studio",
  },
  portfolio: {
    title: "PORTFOLIO",
    description:
      "Una visión curada sobre presencia, experiencia y dirección visual.\nTodo el material presentado aquí fue concebido y dirigido por el Estudio.",
    cta: "CONTACT THE STUDIO",
  },
  contact: {
    title: "CONTACT\nTHE STUDIO",
    description:
      "Trabajamos con un número limitado de socios cada año.\nLas consultas cuidadosas y las colaboraciones a largo plazo forman parte de nuestra práctica.\n\nSi estás construyendo una experiencia, un lugar o una marca y buscas dirección con claridad e intención, nos encantaría saber de ti.",
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

export const translations: Record<Locale, TranslationBundle> = { pt, en, es };

export function getT(locale?: string): TranslationBundle {
  const l = (locale as Locale) ?? "pt";
  return translations[l] ?? translations.pt;
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

