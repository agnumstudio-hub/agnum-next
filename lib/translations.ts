import React from "react";
import type { ReactNode } from "react";

export type Locale = "en" | "fr" | "it" | "de" | "pt" | "es";

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
      bullets: Array<{ label: string; answer: string }>;
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
      "A creative studio shaping presence for hospitality, experiences and\nhigh-end brands.",
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
          {
            label: "Positioning and Market Context",
            answer: "Understanding the competitive landscape to sustain greater pricing authority.",
          },
          {
            label: "Brand Identity and Visual Trust",
            answer: "Developing identity systems that communicate refinement and credibility over time.",
          },
          {
            label: "Destination Authority",
            answer: "Positioning the property as a determining presence within its geography.",
          },
        ],
      },
      {
        title: "Narrative Intelligence\n& Aspirational Storytelling",
        subtitle: "The architecture of desire.",
        description:
          "High-end hospitality is experienced first through perception. Our visual productions are designed to translate atmosphere into desire, guiding the guest from curiosity to intention.",
        bullets: [
          {
            label: "Editorial Photography and Motion",
            answer: "Visual production with cinematographic language, guided by atmosphere, materiality, and sensory stimuli.",
          },
          {
            label: "Social Narrative and Digital Curation",
            answer: "Management of digital presence as a continuous editorial ecosystem, rather than isolated content.",
          },
          {
            label: "Sequential Storytelling",
            answer: "Construction of a progression of touchpoints that sustains attention and leads the guest to the decision.",
          },
        ],
      },
      {
        title: "Performance Architecture\n& Strategic Distribution",
        subtitle: "Where perception becomes revenue.",
        description:
          "Once perception is aligned and narrative is established, we structure the channels that convert interest into bookings efficiently through high-performance environments.",
        bullets: [
          {
            label: "Metasearch and Paid Distribution",
            answer: "Strategic management of channels such as Google Hotel Ads, Meta Ads, and international demand platforms.",
          },
          {
            label: "Direct Booking Ecosystem",
            answer: "Development of friction-free digital environments integrated with high-performance booking engines.",
          },
          {
            label: "Conversion and Revenue Optimization",
            answer: "Continuous enhancement of the user journey to strengthen direct bookings, increase media efficiency, and sustain long-term RevPAR growth.",
          },
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

const fr: TranslationBundle = {
  nav: { studio: "THE STUDIO", portfolio: "PORTFOLIO", contact: "CONTACT" },
  footer: en.footer,
  home: {
    heroTitle: "La présence se construit.",
    heroText:
      "Un studio créatif qui façonne la présence\npour l’hôtellerie, les\nexpériences et les marques\nhaut de gamme.",
    positionLabel: "POSITIONNEMENT",
    positionText:
      "AGNUM traduit la qualité en présence, avec clarté, retenue et vision à long terme.\n\nNous relions intelligence esthétique et logique de marché, afin qu’une perception maîtrisée devienne une valeur concrète.",
    positionFooterLabel: "AGNUM CREATIVE STUDIO 26",
    perspectiveTitle: "perspective",
    perspectiveIntro: "Une sélection de directions visuelles et stratégiques.",
    perspectiveUnderline: "Découvrir le portfolio",
    manifestoTitle: "L’expérience se ressent avant de s’expliquer.",
    manifestoText:
      "Nous pensons que la présence n’est jamais le fruit du hasard.\nElle se construit par l’observation, l’intention et la retenue.\nLa direction stratégique permet à cette perception de devenir un actif durable.",
    aboutTitle: "the studio",
    aboutText:
      "Notre travail se situe entre direction, esthétique et stratégie.\n\nNous accompagnons les marques hôtelières à travers une approche double : construire une narration visuelle exigeante et assurer sa diffusion auprès des bons publics, avec précision et cohérence.\n\nNous traduisons la perception en valeur.",
    aboutUnderline: "the studio",
    contactText:
      "Nous travaillons avec un nombre limité de partenaires chaque année.\n\nSi vous développez une expérience, un lieu ou une marque et recherchez une direction claire et intentionnelle, nous serions ravis d’engager la conversation.",
    contactUnderline: "contact the studio",
  },
  studio: {
    heroTitle: "the studio",
    intro: {
      lead: "AGNUM est née d’une observation simple.",
      strong:
        "Des expériences exceptionnelles ne se traduisent pas toujours par une présence à leur hauteur.",
      body:
        "Notre travail consiste à réduire cet écart. Non seulement pour préserver l’esthétique, mais pour aligner perception, positionnement et demande. Nous combinons sensibilité créative et rigueur stratégique, dans le respect de l’intelligence de la marque et de son audience, tout en soutenant sa performance commerciale.",
    },
    editorial: {
      observationLabel: "Observation",
      observationBody:
        "Nous commençons par observer. L’espace, la lumière, le rythme, mais aussi le contexte de marché. Comprendre la position d’une propriété dans son environnement concurrentiel permet d’identifier les leviers: là où la perception peut être affinée, où le positionnement peut gagner en clarté, et où la demande peut être orientée avec précision.\nEn alignant désir du client et dynamique du marché, nous définissons la direction avant toute production.",
      intentionLabel: "intention",
      intentionBody:
        "Dans le haut de gamme, le hasard est un risque. Chaque décision est assumée. Du cadrage d’une image à la structuration des canaux de diffusion, direction créative et logique commerciale avancent ensemble. La narration visuelle n’est pas distincte de la performance. Elle en est le fondement.\nChaque point de contact guide la perception vers la confiance, puis la confiance vers la réservation directe.",
      restraintLabel: "retenue",
      restraintBody:
        "Les marques les plus visibles ne sont pas toujours les plus précieuses. Dans l’hôtellerie haut de gamme, la clarté crée l’autorité. En éliminant le superflu, nous révélons ce qui compte. Cette retenue renforce la valeur perçue, soutient un positionnement premium et attire une audience plus qualifiée.\nLe résultat est une présence capable de soutenir des tarifs plus élevés et une demande plus maîtrisée.",
      continuityLabel: "continuité",
      continuityBody:
        "La présence n’est pas une campagne. Elle se construit dans le temps. Nous pensons la continuité à chaque étape du parcours digital. En alignant contenu, distribution et structure, nous créons un écosystème où la perception reste cohérente et la demande durable.\nAinsi, l’attention devient valeur.",
    },
    editorialBreakText:
      "Notre travail s’articule autour de trois dimensions.\n\nPerception.\nNarration.\nPerformance.\n\nChacune renforce l’autre.",
    services: [
      {
        title: "Stratégie de Perception\n& Brand Premium",
        subtitle: "Le fondement de la valeur.",
        description:
          "Avant de produire des contenus visuels ou d’activer des campagnes, nous définissons l’autorité de positionnement de la propriété. Notre objectif est de renforcer le Brand Premium et de soutenir la capacité tarifaire dans un environnement concurrentiel.",
        bullets: [
          {
            label: "Positionnement & Contexte de Marché",
            answer: "Comprendre le paysage concurrentiel pour soutenir une plus grande autorité en matière de prix.",
          },
          {
            label: "Identité de Marque & Confiance Visuelle",
            answer: "Développer des systèmes d'identité qui communiquent raffinement et crédibilité au fil du temps.",
          },
          {
            label: "Autorité de Destination",
            answer: "Positionner la propriété comme une présence déterminante au sein de sa géographie.",
          },
        ],
      },
      {
        title: "Intelligence Narrative\n& Construction du Désir",
        subtitle: "L’architecture du désir.",
        description:
          "L’hôtellerie haut de gamme est d’abord vécue à travers la perception. Nos productions visuelles sont conçues pour transformer l’atmosphère en désir, guidant le client de la curiosité vers l’intention.",
        bullets: [
          {
            label: "Photographie Éditoriale & Motion",
            answer: "Production visuelle au langage cinématographique, guidée par l'atmosphère, la matérialité et les stimuli sensoriels.",
          },
          {
            label: "Narration Sociale & Curation Digitale",
            answer: "Gestion de la présence numérique comme un écosystème éditorial continu, et non comme des contenus isolés.",
          },
          {
            label: "Narration Séquentielle",
            answer: "Construction d'une progression de points de contact qui soutient l'attention et conduit le client à la décision.",
          },
        ],
      },
      {
        title: "Architecture de Performance\n& Distribution Stratégique",
        subtitle: "Là où la perception devient revenu.",
        description:
          "Une fois la perception et la narration alignées, nous structurons les canaux qui transforment l’intérêt en réservation.",
        bullets: [
          {
            label: "Metasearch & Distribution Paid",
            answer: "Gestion stratégique de canaux tels que Google Hotel Ads, Meta Ads et plateformes de demande internationales.",
          },
          {
            label: "Écosystème de Réservation Directe",
            answer: "Développement d'environnements numériques sans friction, intégrés à des moteurs de réservation haute performance.",
          },
          {
            label: "Conversion & Optimisation des Revenus",
            answer: "Amélioration continue du parcours utilisateur pour renforcer les réservations directes, accroître l'efficacité média et soutenir la croissance du RevPAR.",
          },
        ],
      },
    ],
    contactText:
      "Nous travaillons avec un nombre limité de partenaires chaque année.\n\nSi vous développez une expérience, un lieu ou une marque et recherchez une direction claire et intentionnelle, nous serions ravis d’engager la conversation.",
    contactUnderline: "contact the studio",
  },
  portfolio: {
    title: "PORTFOLIO",
    description:
      "La perspective est un choix. Notre portfolio est une étude de la manière dont l’intention façonne le désir.\nVous trouverez ci-dessous une sélection de projets guidés par le rythme, la lumière et l’alignement stratégique pour l’hôtellerie et les marques haut de gamme.\n\nNous accordons une grande importance à la confidentialité et à l’exclusivité de nos partenaires;\nNos projets sont donc présentés comme des études de perception plutôt que comme de simples réalisations.",
    cta: "CONTACT THE STUDIO",
  },
  contact: {
    title: "CONTACT\nTHE STUDIO",
    description:
      "Nous travaillons avec un nombre limité de partenaires chaque année.\nLes demandes réfléchies et les collaborations à long terme font partie intégrante de notre approche.\n\nSi vous développez une expérience, un lieu ou une marque et recherchez une direction claire et intentionnelle, nous serions ravis d’échanger avec vous.",
    form: {
      name: "NOM",
      company: "ENTREPRISE",
      email: "E-MAIL",
      message: "VOTRE MESSAGE",
      send: "ENVOYER",
      sent: "MESSAGE ENVOYÉ",
    },
  },
};

const it: TranslationBundle = {
  nav: { studio: "THE STUDIO", portfolio: "PORTFOLIO", contact: "CONTACT" },
  footer: en.footer,
  home: {
    heroTitle: "La presenza si costruisce.",
    heroText:
      "Uno studio creativo che costruisce la presenza per l’ospitalità, le esperienze e i brand di alta gamma.",
    positionLabel: "POSIZIONAMENTO",
    positionText:
      "AGNUM traduce la qualità in presenza, con chiarezza, misura e visione a lungo termine.\n\nMettiamo in relazione intelligenza estetica e logica di mercato, affinché una percezione raffinata generi valore reale.",
    positionFooterLabel: "AGNUM CREATIVE STUDIO 26",
    perspectiveTitle: "prospettiva",
    perspectiveIntro: "Una selezione curata di direzioni visive e strategiche.",
    perspectiveUnderline: "Esplora il portfolio",
    manifestoTitle: "L’esperienza si percepisce prima di essere spiegata.",
    manifestoText:
      "Crediamo che la presenza non sia casuale.\nSi costruisce attraverso osservazione, intenzione e misura.\nLa direzione strategica è ciò che trasforma questa percezione in un valore duraturo.",
    aboutTitle: "the studio",
    aboutText:
      "Il nostro lavoro si muove tra direzione, estetica e strategia.\n\nSupportiamo i brand dell’ospitalità attraverso un approccio duplice: costruire una narrazione visiva rigorosa e garantire che raggiunga il pubblico corretto, con coerenza e precisione.\n\nTraduciamo la percezione in valore.",
    aboutUnderline: "the studio",
    contactText:
      "Lavoriamo ogni anno con un numero limitato di partner.\n\nSe stai sviluppando un’esperienza, un luogo o un brand e cerchi una direzione chiara e intenzionale, saremo lieti di avviare una conversazione.",
    contactUnderline: "contact the studio",
  },
  studio: {
    heroTitle: "the studio",
    intro: {
      lead: "AGNUM nasce da un’osservazione semplice.",
      strong:
        "Esperienze eccezionali non si traducono sempre in una presenza altrettanto raffinata.",
      body:
        "Il nostro lavoro consiste nel colmare questa distanza. Non solo per preservare l’estetica, ma per allineare percezione, posizionamento e domanda. Uniamo sensibilità creativa e struttura strategica, rispettando l’intelligenza del brand e del suo pubblico, sostenendo al tempo stesso la sua performance.",
    },
    editorial: {
      observationLabel: "Osservazione",
      observationBody:
        "Partiamo dall’osservazione. Dello spazio, della luce, del ritmo, ma anche del contesto competitivo. Comprendere la posizione di una proprietà permette di individuare opportunità: dove la percezione può evolvere, dove il posizionamento può essere più chiaro e dove la domanda può essere guidata.\nCosì definiamo la direzione prima ancora della produzione.",
      intentionLabel: "intenzione",
      intentionBody:
        "Nel segmento alto, il caso è un rischio. Ogni scelta è intenzionale. Dall’inquadratura di un’immagine alla struttura dei canali di distribuzione, direzione creativa e logica commerciale lavorano insieme. La narrazione visiva non è separata dalla performance, la sostiene.\nOgni punto di contatto accompagna la percezione verso la fiducia, e la fiducia verso la prenotazione diretta.",
      restraintLabel: "misura",
      restraintBody:
        "I brand più visibili non sono sempre i più rilevanti. Nel mondo dell’ospitalità di alto livello, è la chiarezza a creare autorevolezza. Eliminando il superfluo, lasciamo emergere ciò che conta. Questo approccio rafforza il valore percepito, sostiene il posizionamento e attira il pubblico giusto.\nIl risultato è una presenza capace di sostenere tariffe più elevate e una domanda più stabile.",
      continuityLabel: "continuità",
      continuityBody:
        "La presenza non è una campagna. Si costruisce nel tempo. Progettiamo la continuità lungo tutto il percorso digitale. Allineando contenuto, distribuzione e struttura, creiamo un sistema coerente e sostenibile.\nCosì l’attenzione si trasforma in valore nel tempo.",
    },
    editorialBreakText:
      "Il nostro lavoro si sviluppa su tre dimensioni.\n\nPercezione.\nNarrazione.\nPerformance.\n\nOgnuna rafforza l’altra.",
    services: [
      {
        title: "Strategia di Percezione\n& Brand Premium",
        subtitle: "La base del valore.",
        description:
          "Prima di produrre contenuti visivi o attivare canali, definiamo l’autorità di posizionamento della struttura. Il nostro obiettivo è rafforzare il Brand Premium e sostenere la capacità di pricing all’interno del contesto competitivo.",
        bullets: [
          {
            label: "Posizionamento & Contesto di Mercato",
            answer: "Comprendere il panorama competitivo per sostenere una maggiore autorevolezza sui prezzi.",
          },
          {
            label: "Identità di Marca & Fiducia Visiva",
            answer: "Sviluppare sistemi di identità che comunichino raffinatezza e credibilità nel tempo.",
          },
          {
            label: "Autorità di Destinazione",
            answer: "Posizionare la proprietà come una presenza determinante all'interno della sua area geografica.",
          },
        ],
      },
      {
        title: "Intelligenza Narrative\n& Costruzione del Desiderio",
        subtitle: "L’architettura del desiderio.",
        description:
          "L’ospitalità di alto livello viene vissuta prima attraverso la percezione. Le nostre produzioni visive traducono l’atmosfera in desiderio, accompagnando l’ospite dalla curiosità all’intenzione.",
        bullets: [
          {
            label: "Fotografia Editoriale & Motion",
            answer: "Produzione visiva con linguaggio cinematografico, guidata da atmosfera, materialità e stimoli sensoriali.",
          },
          {
            label: "Narrazione Social & Curatela Digitale",
            answer: "Gestione della presenza digitale come un ecosistema editoriale continuo, piuttosto che come contenuti isolati.",
          },
          {
            label: "Narrazione Sequenziale",
            answer: "Costruzione di una progressione di punti di contatto che mantiene l'attenzione e guida l'ospite verso la decisione.",
          },
        ],
      },
      {
        title: "Architettura di Performance\n& Distribuzione Strategica",
        subtitle: "Dove la percezione diventa valore.",
        description:
          "Una volta allineate percezione e narrazione, strutturiamo i canali che trasformano l’interesse in prenotazioni.",
        bullets: [
          {
            label: "Metasearch & Distribuzione Paid",
            answer: "Gestione strategica di canali come Google Hotel Ads, Meta Ads e piattaforme di domanda internazionali.",
          },
          {
            label: "Ecossistema di Prenotazione Diretta",
            answer: "Sviluppo di ambienti digitali senza attriti, integrati con motori di prenotazione ad alte prestazioni.",
          },
          {
            label: "Conversione & Ottimizzazione dei Ricavi",
            answer: "Miglioramento continuo del percorso utente per rafforzare le prenotazioni dirette, aumentare l'efficienza dei media e sostenere la crescita del RevPAR.",
          },
        ],
      },
    ],
    contactText:
      "Lavoriamo ogni anno con un numero limitato di partner.\n\nSe stai sviluppando un’esperienza, un luogo o un brand e cerchi una direzione chiara e intenzionale, saremo lieti di avviare una conversazione.",
    contactUnderline: "contact the studio",
  },
  portfolio: {
    title: "PORTFOLIO",
    description:
      "La prospettiva è una scelta. Il nostro portfolio è uno studio su come l’intenzione costruisce il desiderio.\nDi seguito, una selezione di lavori guidati da ritmo, luce e allineamento strategico per l’ospitalità e i brand di alta gamma.\n\nAttribuiamo grande valore alla riservatezza e all’esclusività dei nostri partner;\nPer questo motivo, i nostri progetti vengono presentati come studi di percezione e non come semplici esecuzioni.",
    cta: "CONTACT THE STUDIO",
  },
  contact: {
    title: "CONTACT\nTHE STUDIO",
    description:
      "Lavoriamo ogni anno con un numero limitato di partner.\nRichieste ponderate e collaborazioni a lungo termine fanno parte del nostro modo di operare.\n\nSe stai sviluppando un’esperienza, un luogo o un brand e cerchi una direzione chiara e intenzionale, saremo lieti di ascoltarti.",
    form: {
      name: "NOME",
      company: "AZIENDA",
      email: "E-MAIL",
      message: "IL TUO MESSAGGIO",
      send: "INVIARE",
      sent: "MESSAGGIO INVIATO",
    },
  },
};

const de: TranslationBundle = {
  nav: { studio: "THE STUDIO", portfolio: "PORTFOLIO", contact: "CONTACT" },
  footer: en.footer,
  home: {
    heroTitle: "Präsenz entsteht mit Absicht.",
    heroText:
      "Ein Kreativstudio, das Präsenz für Hotellerie, Erlebnisse und hochwertige Marken entwickelt.",
    positionLabel: "POSITIONIERUNG",
    positionText:
      "AGNUM übersetzt Qualität in Präsenz, mit Klarheit, Zurückhaltung und langfristiger Ausrichtung.\n\nWir verbinden ästhetische Intelligenz mit unternehmerischer Logik, sodass eine präzise Wahrnehmung echten Wert schafft.",
    positionFooterLabel: "AGNUM CREATIVE STUDIO 26",
    perspectiveTitle: "perspektive",
    perspectiveIntro: "Eine kuratierte Auswahl visueller und strategischer Richtungen.",
    perspectiveUnderline: "Portfolio ansehen",
    manifestoTitle: "Erfahrung wird gefühlt, bevor sie erklärt wird.",
    manifestoText:
      "Wir sind überzeugt, dass Präsenz nicht zufällig entsteht.\nEs entwickelt sich durch Beobachtung, Absicht und Zurückhaltung.\nStrategische Ausrichtung ist das, was diese Wahrnehmung in einen nachhaltigen Wert überführt.",
    aboutTitle: "the studio",
    aboutText:
      "Unsere Arbeit bewegt sich zwischen Richtung, Ästhetik und strategischem Marketing.\n\nWir begleiten Hospitality-Marken mit einem doppelten Ansatz: eine präzise visuelle Erzählung zu entwickeln und sicherzustellen, dass sie die richtigen Zielgruppen erreicht.\n\nWir übersetzen Wahrnehmung in messbaren Wert.",
    aboutUnderline: "the studio",
    contactText:
      "Wir arbeiten jedes Jahr mit einer begrenzten Anzahl von Partnern.\n\nWenn Sie eine Erfahrung, einen Ort oder eine Marke gestalten und nach klarer und bewusster Ausrichtung suchen, freuen wir uns darauf, von Ihnen zu hören.",
    contactUnderline: "contact the studio",
  },
  studio: {
    heroTitle: "the studio",
    intro: {
      lead: "AGNUM entstand aus einer einfachen Beobachtung.",
      strong:
        "Außergewöhnliche Erlebnisse übersetzen sich nicht immer in eine ebenso präzise Präsenz.",
      body:
        "Unsere Arbeit besteht darin, diese Distanz zu überbrücken. Nicht nur, um Ästhetik zu bewahren, sondern um Wahrnehmung, Positionierung und Nachfrage in Einklang zu bringen. Wir verbinden kreative Sensibilität mit strategischer Struktur und berücksichtigen sowohl die Marke als auch ihr Publikum, während wir gleichzeitig die wirtschaftliche Performance unterstützen.",
    },
    editorial: {
      observationLabel: "Beobachtung",
      observationBody:
        "Am Anfang steht die Beobachtung. Nicht nur von Raum, Licht und Rhythmus, sondern auch vom Marktumfeld. Zu verstehen, wo sich eine Immobilie im Wettbewerbsumfeld positioniert, macht Potenziale sichtbar: wo Wahrnehmung geschärft werden kann, wo Positionierung klarer wird und wo Nachfrage gezielt gesteuert werden kann.\nSo entsteht strategische Klarheit, bevor überhaupt Inhalte produziert werden.",
      intentionLabel: "intention",
      intentionBody:
        "Im Premiumsegment ist Zufall ein Risiko. Jede Entscheidung ist bewusst getroffen. Von der Bildkomposition bis zur Struktur der Distribution arbeiten kreative und wirtschaftliche Logik zusammen. Visuelle Kommunikation ist kein Zusatz zur Performance. Sie ist ihre Grundlage.\nJeder Kontaktpunkt führt Wahrnehmung zu Vertrauen und Vertrauen zur Direktbuchung.",
      restraintLabel: "reduktion",
      restraintBody:
        "Die lautesten Marken sind selten die wertvollsten. Im gehobenen Segment schafft Klarheit Autorität. Durch Reduktion entsteht Präzision. Diese Haltung stärkt den wahrgenommenen Wert, unterstützt Premium-Positionierung und spricht die richtigen Zielgruppen an.\nDas Ergebnis ist eine Präsenz, die höhere Preise und stabilere Nachfrage tragen kann.",
      continuityLabel: "kontinuität",
      continuityBody:
        "Präsenz ist keine Kampagne. Sie entsteht über Zeit. Wir gestalten Kontinuität entlang der gesamten digitalen Reise. Durch die Verbindung von Inhalt, Distribution und Struktur entsteht ein System, in dem Wahrnehmung konsistent bleibt und Nachfrage nachhaltig wächst.\nSo wird Aufmerksamkeit zu langfristigem Wert.",
    },
    editorialBreakText:
      "Unsere Arbeit basiert auf drei Dimensionen.\n\nWahrnehmung.\nNarrativ.\nPerformance.\n\nSie verstärken sich gegenseitig.",
    services: [
      {
        title: "Wahrnehmungsstrategie\n& Brand Premium",
        subtitle: "Die Grundlage von Wert.",
        description:
          "Bevor visuelle Inhalte entstehen oder Kanäle aktiviert werden, definieren wir die Positionierungsautorität der Immobilie. Unser Fokus liegt darauf, das Brand Premium zu stärken und die Preissetzung innerhalb des Wettbewerbsumfelds nachhaltig zu unterstützen.",
        bullets: [
          {
            label: "Positionierung & Marktumfeld",
            answer: "Das Wettbewerbsumfeld verstehen, um eine größere Preissetzungsmacht zu erhalten.",
          },
          {
            label: "Markenidentität & Visuelles Vertrauen",
            answer: "Entwicklung von Identitätssystemen, die im Laufe der Zeit Raffinesse und Glaubwürdigkeit vermitteln.",
          },
          {
            label: "Destinationsautorität",
            answer: "Positionierung des Objekts als bestimmende Präsenz innerhalb seiner Geografie.",
          },
        ],
      },
      {
        title: "Narrative Intelligenz\n& Aspirative Erzählung",
        subtitle: "Die Architektur des Begehrens.",
        description:
          "Hochwertige Hospitality wird zuerst über Wahrnehmung erlebt. Unsere visuellen Produktionen übersetzen Atmosphäre in Nachfrage und führen den Gast von erster Aufmerksamkeit zur konkreten Absicht.",
        bullets: [
          {
            label: "Editorial Fotografie & Motion",
            answer: "Visuelle Produktion mit kinomatografischer Sprache, geleitet von Atmosphäre, Materialität und sensorischen Reizen.",
          },
          {
            label: "Soziale Erzählung & Digitale Kuration",
            answer: "Verwaltung der digitalen Präsenz als kontinuierliches redaktionelles Ökosystem, nicht als isolierte Inhalte.",
          },
          {
            label: "Sequenzielle Erzählstruktur",
            answer: "Aufbau einer Abfolge von Kontaktpunkten, die die Aufmerksamkeit aufrechterhält und den Gast zur Entscheidung führt.",
          },
        ],
      },
      {
        title: "Performance-Architektur\n& Strategische Distribution",
        subtitle: "Dort, wo Wahrnehmung zu Umsatz wird.",
        description:
          "Sobald Wahrnehmung und Erzählung ausgerichtet sind, strukturieren wir die Kanäle, die Interesse in konkrete Buchungen überführen.",
        bullets: [
          {
            label: "Metasuche & Paid Distribution",
            answer: "Strategisches Management von Kanälen wie Google Hotel Ads, Meta Ads und internationalen Nachfrageplattformen.",
          },
          {
            label: "Direktbuchungs-Ökosystem",
            answer: "Entwicklung reibungsloser digitaler Umgebungen, integriert mit leistungsstarken Buchungsmaschinen.",
          },
          {
            label: "Conversion & Umsatzoptimierung",
            answer: "Kontinuierliche Verbesserung der User Journey zur Stärkung von Direktbuchungen, Steigerung der Medieneffizienz und langfristigem RevPAR-Wachstum.",
          },
        ],
      },
    ],
    contactText:
      "Wir arbeiten jedes Jahr mit einer begrenzten Anzahl von Partnern.\n\nWenn Sie eine Erfahrung, einen Ort oder eine Marke gestalten und nach klarer und bewusster Ausrichtung suchen, freuen wir uns, ein Gespräch mit Ihnen zu beginnen.",
    contactUnderline: "contact the studio",
  },
  portfolio: {
    title: "PORTFOLIO",
    description:
      "Perspektive ist eine Entscheidung. Unser Portfolio versteht sich als eine Studie darüber, wie Intention Verlangen formt.\nNachfolgend eine Auswahl an Arbeiten, die sich auf Rhythmus, Licht und strategische Ausrichtung im Bereich Hospitality und Premium-Marken konzentrieren.\n\nDie Privatsphäre und Exklusivität unserer Partner haben für uns höchste Priorität.\nDaher präsentieren wir unsere Projekte als Wahrnehmungsstudien und nicht als reine Leistungsnachweise.",
    cta: "CONTACT THE STUDIO",
  },
  contact: {
    title: "CONTACT\nTHE STUDIO",
    description:
      "Wir arbeiten jedes Jahr mit einer begrenzten Anzahl von Partnern.\nDurchdachte Anfragen und langfristige Zusammenarbeit sind ein wesentlicher Teil unserer Arbeitsweise.\n\nWenn Sie eine Erfahrung, einen Ort oder eine Marke gestalten und nach klarer und bewusster Ausrichtung suchen, freuen wir uns darauf, von Ihnen zu hören.",
    form: {
      name: "NAME",
      company: "UNTERNEHMEN",
      email: "E-MAIL",
      message: "IHRE NACHRICHT",
      send: "SENDEN",
      sent: "NACHRICHT GESENDET",
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
          "Antes de produzir qualquer imagem ou ativar campanhas, definimos a autoridade de posicionamento da propriedade. Nosso foco está em fortalecer o Brand Premium e sustentar o poder de precificação dentro do cenário competitivo.",
        bullets: [
          {
            label: "Posicionamento & Contexto de Mercado",
            answer: "Compreender o cenário competitivo para sustentar maior autoridade de preço.",
          },
          {
            label: "Identidade de Marca & Confiança Visual",
            answer: "Desenvolver sistemas de identidade que comuniquem refinamento e credibilidade ao longo do tempo.",
          },
          {
            label: "Autoridade de Destino",
            answer: "Posicionar a propriedade como uma presença determinante dentro de sua geografia.",
          },
        ],
      },
      {
        title: "Inteligência Narrativa\n& Construção de Desejo",
        subtitle: "A arquitetura do desejo.",
        description:
          "A hospitalidade de alto padrão é vivida, antes de tudo, pela percepção. Nossas produções visuais são concebidas para traduzir atmosfera em desejo, conduzindo o hóspede da curiosidade à intenção.",
        bullets: [
          {
            label: "Fotografia Editorial & Motion",
            answer: "Produção visual com linguagem cinematográfica, orientada por atmosfera, materialidade e estímulos sensoriais.",
          },
          {
            label: "Narrativa Social & Curadoria Digital",
            answer: "Gestão da presença digital como um ecossistema editorial contínuo, e não como conteúdos isolados.",
          },
          {
            label: "Narrativa Sequencial",
            answer: "Construção de uma progressão de pontos de contato que sustenta a atenção e conduz o hóspede até a decisão.",
          },
        ],
      },
      {
        title: "Arquitetura de Performance \n& Distribuição Estratégica",
        subtitle: "Onde a percepção se converte em receita.",
        description:
          "Uma vez alinhadas a percepção e a narrativa, estruturamos os canais responsáveis por transformar interesse em reservas.",
        bullets: [
          {
            label: "Metasearch & Distribuição Paga",
            answer: "Gestão estratégica de canais como Google Hotel Ads, Meta Ads e plataformas internacionais de demanda.",
          },
          {
            label: "Ecossistema de Reserva Direta",
            answer: "Desenvolvimento de ambientes digitais sem fricção, integrados a motores de reserva de alta performance.",
          },
          {
            label: "Conversão & Revenue Optimization",
            answer: "Aprimoramento contínuo da jornada do usuário para fortalecer a reserva direta, aumentar a eficiência de mídia e sustentar o crescimento de RevPAR no longo prazo.",
          },
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
          "Antes de producir contenido visual o activar canales, definimos la autoridad de posicionamiento de la propiedad. Nuestro objetivo es reforzar el Brand Premium y sostener la capacidad de precio dentro del entorno competitivo.",
        bullets: [
          {
            label: "Posicionamiento & Contexto de Mercado",
            answer: "Comprender el panorama competitivo para sostener una mayor autoridad en los precios.",
          },
          {
            label: "Identidad de Marca & Confianza Visual",
            answer: "Desarrollar sistemas de identidad que comuniquen refinamiento y credibilidad a lo largo del tiempo.",
          },
          {
            label: "Autoridad de Destino",
            answer: "Posicionar la propiedad como una presencia determinante dentro de su geografía.",
          },
        ],
      },
      {
        title: "Inteligencia Narrativa\n& Construcción del Deseo",
        subtitle: "La arquitectura del deseo.",
        description:
          "La hospitalidad de alto nivel se experimenta primero a través de la percepción. Nuestras producciones visuales traducen la atmósfera en deseo, guiando al huésped desde la curiosidad hasta la intención.",
        bullets: [
          {
            label: "Fotografía Editorial & Motion",
            answer: "Producción visual con lenguaje cinematográfico, guiada por la atmósfera, la materialidad y los estímulos sensoriales.",
          },
          {
            label: "Narrativa Social & Curaduría Digital",
            answer: "Gestión de la presencia digital como un ecosistema editorial continuo, en lugar de contenidos aislados.",
          },
          {
            label: "Narrativa Secuencial",
            answer: "Construcción de una progresión de puntos de contacto que sostiene la atención y lleva al huésped a la decisión.",
          },
        ],
      },
      {
        title: "Arquitectura de Performance\n& Distribución Estratégica",
        subtitle: "Donde la percepción se convierte en ingresos.",
        description:
          "Una vez alineadas la percepción y la narrativa, estructuramos los canales que transforman el interés en reservas.",
        bullets: [
          {
            label: "Metasearch & Distribución Paid",
            answer: "Gestión estratégica de canales como Google Hotel Ads, Meta Ads y plataformas de demanda internacionales.",
          },
          {
            label: "Ecosistema de Reserva Directa",
            answer: "Desarrollo de entornos digitales sin fricción, integrados con motores de reservas de alto rendimiento.",
          },
          {
            label: "Conversión & Optimización de Ingresos",
            answer: "Mejora continua del recorrido del usuario para fortalecer las reservas directas, aumentar la eficiencia de los medios y sostener el crecimiento del RevPAR.",
          },
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

export const translations: Record<Locale, TranslationBundle> = { en, fr, it, de, pt, es };

export const translations = {
  pt: {
    metadata: {
      title: "AGNUM | Branding, Estética e Marketing para Hotelaria de Luxo",
      description: "Estúdio criativo especializado em branding e marketing de experiência para hotéis boutique e marcas de hospitalidade premium. Elevamos a estética da sua marca.",
      keywords: "branding hotelaria de luxo, marketing hoteleiro, design de experiência, hotel boutique, branding premium, agência criativa luxo"
    },
    // ... restante das chaves
  },
  en: {
    metadata: {
      title: "AGNUM | Branding, Aesthetics & Marketing for Luxury Hospitality",
      description: "Creative studio specialized in branding and experience marketing for boutique hotels and premium hospitality brands. Elevating your brand aesthetics.",
      keywords: "luxury hospitality branding, hotel marketing agency, boutique hotel design, guest experience marketing, high-end branding studio"
    },
  },
  fr: {
    metadata: {
      title: "AGNUM | Branding, Esthétique et Marketing pour l'Hôtellerie de Luxe",
      description: "Studio créatif spécialisé dans le branding et le marketing d'expérience pour les hôtels de charme et les marques d'hospitalité de luxe.",
      keywords: "branding hôtellerie de luxe, marketing hôtelier, design d'expérience, hôtel boutique, esthétique de marque"
    },
  },
  it: {
    metadata: {
      title: "AGNUM | Branding, Estetica e Marketing per l'Ospitalità di Lusso",
      description: "Studio creativo specializzato in branding e marketing dell'esperienza per boutique hotel e marchi di ospitalità premium.",
      keywords: "branding ospitalità di lusso, marketing alberghiero, design dell'esperienza, boutique hotel, estetica del brand"
    },
  },
  de: {
    metadata: {
      title: "AGNUM | Branding, Ästhetik & Marketing für Luxushotellerie",
      description: "Kreativstudio spezialisiert auf Branding und Erlebnismarketing für Boutique-Hotels und Premium-Hospitality-Marken.",
      keywords: "Luxushotellerie Branding, Hotelmarketing, Erlebnisdesign, Boutique-Hotel, Markenästhetik"
    },
  },
  es: {
    metadata: {
      title: "AGNUM | Branding, Estética y Marketing para Hotelería de Lujo",
      description: "Estudio creativo especializado en branding y marketing de experiencia para hoteles boutique y marcas de hospitalidade premium.",
      keywords: "branding hotelería de lujo, marketing hotelero, diseño de experiencia, hotel boutique, estética de marca"
    },
  }
};

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
