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
    heroTitle: "presence is designed.",
    heroText:
      "Um estúdio criativo que transforma presença para hospitalidade, experiências e marcas high-end.",
    positionLabel: "OUR POSITION",
    positionText:
      "A AGNUM traduz qualidade em presença, com clareza, contenção e intenção de longo prazo.\n\nUnimos a inteligência estética ao desempenho comercial, garantindo que uma percepção refinada gere valor mensurável.",
    positionFooterLabel: "AGNUM CREATIVE STUDIO 26",
    perspectiveTitle: "perspective",
    perspectiveIntro: "Uma seleção curada de direções visuais e estratégicas.",
    perspectiveUnderline: "explore our portfolio",
    manifestoTitle: "Experience is felt before it is explained.",
    manifestoText:
      "Acreditamos que presença não é acidental.\nEla é construída por meio de observação, intenção e contenção.\nA direção estratégica é o que permite que essa sensação se torne um ativo duradouro.",
    aboutTitle: "the studio",
    aboutText:
      "Nosso trabalho atravessa direção, estética e marketing estratégico.\n\nApoiamos marcas de hospitalidade por meio de uma abordagem dupla: construindo uma narrativa visual intransigente e garantindo que ela chegue ao público certo com distribuição de alto desempenho.\n\nTraduzimos percepção em receita.",
    aboutUnderline: "the studio",
    contactText:
      "Trabalhamos com um número limitado de parceiros a cada ano.\n\nSe você está construindo uma experiência, um lugar ou uma marca e busca direção com clareza e intenção, teremos prazer em iniciar uma conversa.",
    contactUnderline: "contact the studio",
  },
  studio: {
    heroTitle: "the studio",
    intro: {
      lead: "A AGNUM nasceu de uma observação simples.",
      strong:
        "Experiências excepcionais muitas vezes falham\nem se traduzir para uma presença igualmente refinada.",
      body:
        "Nosso trabalho existe para encurtar essa distância. Não apenas para preservar a estética, mas para garantir que percepção, posicionamento e demanda sigam na mesma direção. Unimos sensibilidade criativa à estrutura estratégica, respeitando a inteligência tanto da marca quanto do seu público.",
    },
    editorial: {
      observationLabel: "Observation",
      observationBody:
        "Começamos com a observação. Não apenas do espaço, sua luz e ritmo, mas também de seu contexto de mercado. Ao entender onde o imóvel se posiciona dentro do cenário competitivo, identificamos oportunidades: onde a percepção pode ser elevada, onde o posicionamento pode ser esclarecido e onde a demanda pode ser direcionada com mais intenção.",
      intentionLabel: "intention",
      intentionBody:
        "No segmento high-end, o acaso é um risco. Cada decisão é deliberada. Da composição de uma fotografia à arquitetura de uma estratégia de distribuição paga, direção criativa e lógica comercial caminham juntas. Contar histórias visuais não é separado do desempenho do negócio. É o mecanismo que o sustenta.",
      restraintLabel: "restraint",
      restraintBody:
        "As marcas mais barulhentas raramente são as mais valiosas. Em hospitalidade high-end, a clareza cria autoridade. Ao remover ruído visual e estratégico, deixamos o verdadeiro caráter do imóvel emergir. Essa contenção fortalece o valor percebido, sustenta o posicionamento premium e atrai um público mais qualificado.",
      continuityLabel: "continuity",
      continuityBody:
        "Presença não é campanha. É construída ao longo do tempo. Projetamos continuidade em todas as camadas da jornada digital, do primeiro momento de descoberta até a reserva final. Ao alinhar conteúdo de alta fidelidade, estratégia de distribuição e arquitetura de plataforma, criamos um ecossistema.",
    },
    editorialBreakText:
      "Nosso trabalho se desdobra em três dimensões complementares.\n\nPercepção.\nNarrativa.\nPerformance.\n\nCada uma reforçando a outra.",
    services: [
      {
        title: "Perception Strategy\n& Brand Premium",
        subtitle: "The foundation of value.",
        description:
          "Antes de produzir imagens ou lançar campanhas, definimos a autoridade de posicionamento do imóvel. Nosso foco é fortalecer o Brand Premium e apoiar o poder de precificação.",
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
          "Hospitalidade high-end é vivida primeiro pela percepção. Nossas produções visuais são desenhadas para transformar atmosfera em desejo, guiando o hóspede da curiosidade à intenção.",
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
          "Quando percepção está alinhada e narrativa estabelecida, estruturamos os canais que convertem interesse em reservas com eficiência por meio de ambientes de alto desempenho.",
        bullets: [
          "metasearch and paid distribution",
          "direct booking ecosystem",
          "conversion and revenue optimization",
        ],
      },
    ],
    contactText:
      "Trabalhamos com um número limitado de parceiros a cada ano.\n\nSe você está construindo uma experiência, um lugar ou uma marca e busca direção com clareza e intenção, teremos prazer em iniciar uma conversa.",
    contactUnderline: "contact the studio",
  },
  portfolio: {
    title: "PORTFOLIO",
    description:
      "Uma visão curada sobre presença, experiência e direção visual.\nTodo o material aqui apresentado foi concebido e direcionado pelo Estúdio.",
    cta: "CONTACT THE STUDIO",
  },
  contact: {
    title: "CONTACT\nTHE STUDIO",
    description:
      "Trabalhamos com um número limitado de parceiros a cada ano.\nPerguntas cuidadosas e colaborações de longo prazo fazem parte da nossa prática.\n\nSe você está construindo uma experiência, um lugar ou uma marca e busca direção com clareza e intenção, teremos prazer em ouvir você.",
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

