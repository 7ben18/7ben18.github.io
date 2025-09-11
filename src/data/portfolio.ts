import type { Project, Testimonial, Certificate, PersonalInfo, NavItem } from '../types';

export const personalInfo: PersonalInfo = {
  name: "Ben",
  title: [
    "Data Scientist",
    "Data Analyst", 
    "Data Engineer",
    "Daten Jongleur"
  ],
  email: "si_ben_tran@hotmail.com",
  linkedin: "https://www.linkedin.com/in/7ben18/",
  github: "https://github.com/7ben18",
  age: 26,
  currentPosition: "Risk Data Analyst/Engineer @ Baloise Asset Management",
  education: "Data Science Bachelor @ FHNW"
};

export const navItems: NavItem[] = [
  { id: "home", label: "Start", href: "#home" },
  { id: "about", label: "Über mich", href: "#about" },
  { id: "portfolio", label: "Portfolio", href: "#portfolio" },
  { id: "degree", label: "Abschlüsse & Zertifikate", href: "#degree" },
  { id: "testimonials", label: "Referenzen", href: "#testimonials" },
  { id: "contact", label: "Kontakt", href: "#contact" }
];

export const projects: Project[] = [
  {
    id: "future",
    title: "Zukunftsprojekte",
    description: "Für zukünftige, spannende und innovative Projekte bin ich offen und stehe auch für Kooperationen mit Unternehmen zur Verfügung.",
    image: "/images/projekte/future.png",
    status: "Open End",
    isNDA: false,
    category: "web-development",
    technologies: ["Innovation", "Kooperationen"]
  },
  {
    id: "bam-one",
    title: "BAM ONE",
    description: "Mitentwicklung am Risiko Dashboard Baloise Asset Management Open Network Experience im Backend und Frontend.",
    image: "/images/projekte/bam.png",
    status: "Sep 2024 - Dez 2025",
    isNDA: true,
    category: "data-analysis",
    technologies: ["Risk Analytics", "Dashboard", "Backend", "Frontend"]
  },
  {
    id: "adversarial-attack",
    title: "Adversarial Attack",
    description: "Bachelorarbeit Data Science @ FHNW mit Gabriel Gamez Torres: Adversarial Attacks - Wie kann KI überlistet werden?",
    image: "/images/projekte/bat.png",
    github: "https://github.com/AdversarialAttacks",
    status: "Feb 2024 - Sept 2024",
    isNDA: false,
    category: "deep-learning",
    technologies: ["Deep Learning", "Security", "Python", "PyTorch"]
  },
  {
    id: "temperature-prediction",
    title: "Temperatur Vorhersage",
    description: "Temperatur Vorhersage um die Sicherheit des Flughafen Zürich zu erhöhen, mittels Recurrent Neural Networks wie LSTM & Autoformer.",
    image: "/images/projekte/dlbs.png",
    github: "https://github.com/dlbs-challenge",
    status: "Sep 2023 - Feb 2024",
    isNDA: false,
    category: "deep-learning",
    technologies: ["LSTM", "Autoformer", "Time Series", "Airport Safety"]
  },
  {
    id: "show-tell",
    title: "Show & Tell Implementation",
    description: "Umsetzung eines Neural Image Captioning Modells basierend auf dem Show & Tell Paper. Anwendung von Pytorch-Lightning und Weights & Bias.",
    image: "/images/projekte/del-mc2.png",
    github: "https://github.com/7ben18/fhnw-del-Deep-Learning/tree/main/del-Minichallenge-2",
    status: "Sep 2023 - Jan 2024",
    isNDA: false,
    category: "deep-learning",
    technologies: ["Image Captioning", "PyTorch Lightning", "Weights & Biases"]
  },
  {
    id: "product-affinity",
    title: "Produkt Affinitäts Modell",
    description: "Erstellung mehrere Produkt Affinitäts Modelle auf Basis transaktioneller Daten der Tschechische Bank mit Machine Learning in R.",
    image: "/images/projekte/aml.png",
    github: "https://github.com/7ben18/fhnw-aml-Angewandtes-Machine-Learning",
    status: "Sep 2023 - Jan 2024",
    isNDA: false,
    category: "machine-learning",
    technologies: ["R", "Banking", "Transaction Analysis", "ML"]
  },
  {
    id: "stock-prediction",
    title: "Aktienpreise Vorhersagen",
    description: "Vorhersage von NASDAQ-100 Aktien mittels stochastischer Prozessreihe ARIMA und Recurrent Neural Networks LSTM.",
    image: "/images/projekte/cx.png",
    status: "Sep 2023 - Jan 2024",
    isNDA: true,
    category: "machine-learning",
    technologies: ["ARIMA", "LSTM", "Stock Market", "Time Series"]
  },
  {
    id: "contextual-learning",
    title: "Contextual Learning bei SLM",
    description: "Erstellung eines Chatbot durch Contextual Learning mit Small Language Models wie Phi-2, TinyLlama Chat und GPT-2.",
    image: "/images/projekte/npr-mc2.png",
    github: "https://github.com/7ben18/fhnw-npr-Natural-Language-Processing/tree/main/mini-challenge2",
    status: "Sep 2023 - Dez 2023",
    isNDA: false,
    category: "deep-learning",
    technologies: ["Phi-2", "TinyLlama", "GPT-2", "NLP"]
  },
  {
    id: "multi-label-classification",
    title: "Multi Label Classification",
    description: "Multi Label Klassifikation von Bücher-Genres mit Machine & Deep Learning auf Basis von Textbearbeitung mit Natural Language Processing.",
    image: "/images/projekte/npr-mc1.png",
    github: "https://github.com/7ben18/fhnw-npr-Natural-Language-Processing/tree/main/mini-challenge1",
    status: "Sep 2023 - Dez 2023",
    isNDA: false,
    category: "machine-learning",
    technologies: ["NLP", "Multi-Label", "Text Classification", "Books"]
  },
  {
    id: "social-network-analysis",
    title: "Soziale Himmelskrieger",
    description: "Anwendung der sozialen Netzwerkanalyse auf die Interaktionen zwischen den Star Wars-Kriegern in den ersten sieben Filmen der Saga.",
    image: "/images/projekte/san.png",
    github: "https://github.com/san-projekt",
    status: "Sep 2023 - Dez 2023",
    isNDA: false,
    category: "data-analysis",
    technologies: ["Social Network Analysis", "Star Wars", "Graph Theory"]
  },
  {
    id: "sensor-activity",
    title: "Sensor Activity Recognition",
    description: "Trainieren von Machine & Deep Learning Modellen für die Klassifikation von aufgezeichneten Bewegungsprofilen.",
    image: "/images/projekte/cdl1.png",
    github: "https://github.com/CDL1-Sensor?view_as=public",
    status: "Feb 2023 - Juni 2023",
    isNDA: false,
    category: "machine-learning",
    technologies: ["Sensor Data", "Activity Recognition", "Mobile"]
  },
  {
    id: "coffee-preferences",
    title: "Kaffeevorlieben der Welt",
    description: "Kaffee Konsumverhalten der Welt mit unsupervised Machine Learning analysieren in Zusammenarbeit mit Partnerunternehmen der FHNW.",
    image: "/images/projekte/pro4d.png",
    status: "Feb 2023 - Juni 2023",
    isNDA: true,
    category: "machine-learning",
    technologies: ["Unsupervised ML", "Coffee Analysis", "Consumer Behavior"]
  },
  {
    id: "immobilien-rechner",
    title: "Immobilienrechner",
    description: "Schweizer Hauspreis Vorhersage mittels supervised Machine Learning Modellen sowie Klassifikation der Immobilienart.",
    image: "/images/projekte/cml1.png",
    github: "https://github.com/Immobilienrechner-Challenge",
    status: "Sep 2022 - Jan 2023",
    isNDA: false,
    category: "machine-learning",
    technologies: ["Real Estate", "Price Prediction", "Classification"]
  },
  {
    id: "coffee-chemistry",
    title: "Kaffeechemie X Data Science",
    description: "Chemische Kaffeeextraktionsanalyse mittels Data Science Methoden für die World Barista Championship 2022.",
    image: "/images/projekte/pro2d.png",
    github: "https://github.com/7ben18/fhnw-pro2D-Kaffeeprojekt",
    status: "Feb 2022 - Juni 2022",
    isNDA: false,
    category: "data-science",
    technologies: ["Chemistry", "Coffee Extraction", "Barista Championship"]
  },
  {
    id: "rockfall-risk",
    title: "Steinschlagrisiko",
    description: "Erhöhung der Sicherheitsmassnahmen für die Kantonsstrasse Schiers in Graubünden mittels Steinschlagrisiko-Analyse und Monte Carlo Simulationen.",
    image: "/images/projekte/cwm1.png",
    github: "https://github.com/7ben18/fhnw-cwm1-Steinschlagrisiko",
    status: "Sep 2021 - Jan 2022",
    isNDA: false,
    category: "data-analysis",
    technologies: ["Monte Carlo", "Risk Analysis", "Safety", "Simulation"]
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "fabian-koehler",
    name: "Dr. Fabian Köhler",
    role: "Gruppenleiter Radioanalytik Rückbau",
    company: "PSI",
    image: "/images/testimonials/fabian-koehler.png",
    quote: "Er erfüllt seine Aufgaben zielorientiert mit hoher Eigeninitiative, Einsatzbereitschaft. Besonders hervorzuheben sind seine fachliche Kompetenz, sein persönliches Engagement und seine intrinsische Motivation für die Arbeit.",
    category: "Eigeninitiative",
    icon: "lightbulb"
  },
  {
    id: "gabriel-gamez",
    name: "Gabriel Gamez Torres",
    role: "Data Scientist & Software Engineer, Fellow Data Science Student",
    company: "",
    image: "/images/testimonials/gabu.png",
    quote: "Ben ist immer zuverlässig, fokussiert und motiviert bei Projekten. Ein echter Mehrwert für jedes Team.",
    category: "Teamarbeit",
    icon: "users"
  },
  {
    id: "can-pinarci",
    name: "Can Pinarci",
    role: "Leiter Berufsbildung",
    company: "PSI",
    image: "/images/testimonials/can-pinarci.png",
    quote: "Er arbeitet sich sehr gut in unterschiedlichen Aufgabengebiete ein und integriert sich bestens in die verschiedenen Arbeitsgruppen.",
    category: "Lernender",
    icon: "graduation-cap"
  },
  {
    id: "lukas-zemp",
    name: "Lukas Zemp",
    role: "Data Werkstudent @ Baloise, Fellow Data Science Student",
    company: "Baloise",
    image: "/images/testimonials/luu.png",
    quote: "An Ben bewundere ich die grosse Belastbarkeit und Ausdauer, sowie seine Disziplin. Er arbeitet stets mit voller Konzentration und ist immer bereit mir bei Fragen zur Seite zu stehen.",
    category: "Ausdauer & Disziplin",
    icon: "trophy"
  },
  {
    id: "martin-heule",
    name: "Dr. Martin Heule",
    role: "Gruppenleiter Radioanalytik",
    company: "PSI",
    image: "/images/testimonials/martin-heule.png",
    quote: "Von seinem Team wurde er als begeisternde, kollegiale & teamorientierte Persönlichkeit wahrgenommen und geschätzt.",
    category: "Teamorientiert",
    icon: "group"
  }
];

export const certificates: Certificate[] = [
  {
    id: "work-certificates",
    title: "Arbeitszeugnisse",
    category: "work",
    icon: "briefcase",
    documents: [
      {
        id: "arbeitszeugnis",
        title: "Arbeitszeugnisse",
        icon: "building",
        encryptedUrl: "GBsGBBVVQ0YLQFlEUV4IHRsBAwlHDF1dHVACBgQRSQkDBQtXQkEbQSglLgcoKhEcXGdaUgI3RkEIIUE+GFhFAmYBOSseMB8EVhpBQA9QAgYEETkDBQcE"
      },
      {
        id: "letztes_arbeitszeugnis",
        title: "Letztes Arbeitszeugnis",
        icon: "file-text",
        encryptedUrl: "GBsGBBVVQ0YLQFlEUV4IHRsBAwlHDF1dHVIZAxdbAkBdJF5UcwJSSBkCJyo7CT8EdWFEexEKHjU1CzoKA0gGC2NfGRsREVAZGh8PVEBdBgotGA8BBw=="
      }
    ]
  },
  {
    id: "bachelor-degree",
    title: "B.Sc. Data Science @ FHNW",
    category: "education",
    icon: "university",
    documents: [
      {
        id: "diplom_bsc",
        title: "Diplom",
        icon: "certificate",
        encryptedUrl: "GBsGBBVVQ0YLQFlEUV4IHRsBAwlHDF1dHVIZAxdbAkBdIABbBUYACloHPSc8VAYDYAZjQBIBIEA1LSU8Km1JWHpfGRsREVAZGh8PVEBdBgotGA8BBw=="
      },
      {
        id: "ranking_bsc",
        title: "Ranking",
        icon: "trophy",
        encryptedUrl: "GBsGBBVVQ0YLQFlEUV4IHRsBAwlHDF1dHVIZAxdbAkBdKFdjSh8MHhkFOlcFHxAwBgNwdxsNRxU/AyADXQtxAV1fGRsREVAZGh8PVEBdBgotGA8BBw=="
      },
      {
        id: "ehrenamtlich_bsc",
        title: "Ehrenamtlich",
        icon: "heart",
        encryptedUrl: "GBsGBBVVQ0YLQFlEUV4IHRsBAwlHDF1dHVIZAxdbAkBdWwp1B0NaEixAAi9aNSoXfkNVRV0kKzhXNSdQCQoDQmxfGRsREVAZGh8PVEBdBgotGA8BBw=="
      }
    ]
  },
  {
    id: "apprenticeship",
    title: "Lehrzeugnis",
    category: "education", 
    icon: "graduation-cap",
    documents: [
      {
        id: "lehrzeugnis_psi",
        title: "Lehrzeugnis PSI",
        icon: "graduation-cap",
        encryptedUrl: "GBsGBBVVQ0YLQFlEUV4IHRsBAwlHDF1dHVIZAxdbAkBdHw1AWwFVOTALKywoIDMcBEhAfkJfPUxTAyUGAwZgCgNfGRsREVAZGh8PVEBdBgotGA8BBw=="
      },
      {
        id: "faehigkeitszeugnis",
        title: "Eidgenössisches Fähigkeitszeugnis",
        icon: "certificate",
        encryptedUrl: "GBsGBBVVQ0YLQFlEUV4IHRsBAwlHDF1dHVIZAxdbAkBdXlxTRXNyRAweLA8ALQUYWUlqQhM+GT4TNiUzBUBUYE1fGRsREVAZGh8PVEBdBgotGA8BBw=="
      },
      {
        id: "berufsmaturitaetszeugnis",
        title: "Berufsmaturitätszeugnis",
        icon: "trophy",
        encryptedUrl: "GBsGBBVVQ0YLQFlEUV4IHRsBAwlHDF1dHVIZAxdbAkBdBwdeSXR+NwgAMycWJiAdUGZlfAMLHCYPGhokG0p2VWRfGRsREVAZGh8PVEBdBgotGA8BBw=="
      }
    ]
  },
  {
    id: "course-certificates",
    title: "Kurszertifikate",
    category: "courses",
    icon: "book",
    documents: [
      {
        id: "kurszertifikate",
        title: "Kurszertifikate",
        icon: "folder",
        encryptedUrl: "GBsGBBVVQ0YLQFlEUV4IHRsBAwlHDF1dHVACBgQRSQkDBQtXQkEbQQogBxMhHERZalVHdwkmATAhCzMQGUN0U1ccOTcwEzkeVhpBQA9QAgYEETkDBQcE"
      },
      {
        id: "militaer_zertifikate",
        title: "Militär",
        icon: "shield",
        encryptedUrl: "GBsGBBVVQ0YLQFlEUV4IHRsBAwlHDF1dHVACBgQRSQkDBQtXQkEbQS5BMQleXzElf1x1XQdaMwI5AB0BXEUCf1o1BTkgFUIUVhpBQA9QAgYEETkDBQcE"
      },
      {
        id: "webinar_zertifikate",
        title: "Webinar",
        icon: "video-camera",
        encryptedUrl: "GBsGBBVVQ0YLQFlEUV4IHRsBAwlHDF1dHVACBgQRSQkDBQtXQkEbQR04DVIfM1ondkdjQwYFJjMBLAkiDQpTe0M+CjkVDF5ZVhpBQA9QAgYEETkDBQcE"
      }
    ]
  }
];