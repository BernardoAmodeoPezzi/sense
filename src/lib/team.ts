import drGuilherme from "@/assets/dr-guilherme.jpeg";
import drClaudia from "@/assets/dr-claudia.jpeg";
import drCristiane from "@/assets/dr-cristiane.jpeg";
import drCarla from "@/assets/dr-carla.jpeg";

export type Doctor = {
  slug: string;
  name: string;
  specialty: string;
  registry: string;
  photo: string;
  bio: string;
  phone: string;
  phoneTel: string;
  whatsapp: string;
};

export type SupportMember = {
  slug: string;
  name: string;
  role: string;
  description: string;
};

export const team: Doctor[] = [
  {
    slug: "guilherme-ruivo",
    name: "Dr. Guilherme Ruivo",
    specialty: "Medicina Endocrinológica e Preventiva",
    registry: "CREMERS 5527 · RE 0241",
    photo: drGuilherme,
    bio: "Médico formado pela Universidade Federal do Rio Grande (FURG) em 1972, com residência médica em Endocrinologia e Metabologia na Fundação Faculdade de Medicina de Porto Alegre — Santa Casa de Porto Alegre.\n\nAtua há mais de 54 anos na área da Endocrinologia, sendo especialista reconhecido pelo Conselho Federal de Medicina (CFM) desde 1978 e Médico Jubilado pelo CREMERS em 2022. Possui especializações em Medicina Ortomolecular, Medicina Estética e Cannabis Medicinal.\n\nFiel à sua visão de uma medicina avançada, participa constantemente de eventos nacionais e internacionais, como os congressos da Endocrine Society (EUA), da European Diabetes Association, da Sociedade Brasileira de Endocrinologia e Metabologia, da Medicina Ortomolecular (SP) e de Cannabis Medicinal.\n\nSeu atendimento é focado na saúde integral e na medicina preventiva, unindo décadas de experiência clínica, atualização constante e um cuidado altamente individualizado.",
    phone: "(51) 3222-3198",
    phoneTel: "+555132223198",
    whatsapp: "https://wa.me/5132223198",
  },
  {
    slug: "claudia-alves",
    name: "Dra. Cláudia Alves",
    specialty: "Odontopediatria & Ortopedia Funcional",
    registry: "CRO-RS 18135",
    photo: drClaudia,
    bio: "Graduada pela Pontifícia Universidade Católica do Rio Grande do Sul (PUCRS) em 2008, é especialista em Odontopediatria pela Universidade Federal do Rio Grande do Sul (UFRGS - 2013) e possui formação em Ortopedia Funcional dos Maxilares pela SOBRACOM, área na qual segue em constante aperfeiçoamento.\n\nSeu atendimento é focado em cuidado humanizado, prevenção, desenvolvimento funcional e acompanhamento individualizado para crianças e adolescentes.",
    phone: "(51) 3222-3198",
    phoneTel: "+555132223198",
    whatsapp: "https://wa.me/5132223198",
  },
  {
    slug: "cristiane-biasuz",
    name: "Dra. Cristiane Biasuz",
    specialty: "Prótese Dentária & Endodontia",
    registry: "CRO-RS 9943",
    photo: drCristiane,
    bio: "Graduada em Odontologia pela PUCRS em 1993, é especialista em Endodontia pelo Hospital de Aeronáutica de Canoas (2008) e em Prótese Dentária pela ABO-RS (2021).\n\nEx-professora de pós-graduação no curso de Implantodontia e integrante do International Team for Implantology (ITI). Sua atuação é focada em reabilitação oral, próteses sobre implantes, estética dentária, clínica odontológica e tratamentos endodônticos personalizados, unindo funcionalidade, saúde e resultados naturais.",
    phone: "(51) 3208-2829",
    phoneTel: "+555132082829",
    whatsapp: "https://wa.me/5132082829",
  },
  {
    slug: "carla-larentis",
    name: "Dra. Carla Larentis",
    specialty: "Ortodontia & Dentística Estética",
    registry: "CRO-RS 13062",
    photo: drCarla,
    bio: "Formada em Odontologia pela UFRGS em 2001, possui sólida experiência em estética e alinhamento do sorriso. É especialista em Dentística pela UFRGS (2005) e em Ortodontia pela Sobracursos (2019).\n\nOferece tratamentos personalizados que unem técnica, funcionalidade e estética, com atuação voltada à promoção da saúde bucal, reabilitação estética e harmonização do sorriso — proporcionando mais confiança, conforto e qualidade de vida aos pacientes por meio de um atendimento cuidadoso e atualizado.",
    phone: "(51) 3208-2829",
    phoneTel: "+555132082829",
    whatsapp: "https://wa.me/5132082829",
  },
];

export const supportTeam: SupportMember[] = [
  {
    slug: "amanda-nogueira",
    name: "Amanda S. Nogueira",
    role: "Enfermagem & Suporte Técnico",
    description:
      "Técnica em Enfermagem, especialista em Instrumentação Cirúrgica e Técnica em Análises Clínicas. Responsável pelo suporte aos procedimentos clínicos, rigor de biossegurança e assistência direta ao paciente.",
  },
  {
    slug: "yasmin-maia",
    name: "Yasmin Agnys Maia",
    role: "Suporte Clínico & Atendimento",
    description:
      "Auxiliar em Saúde Bucal (ASB). Responsável pelo apoio clínico, suporte operacional e auxílio nos procedimentos odontológicos — garantindo organização, conforto e acolhimento humanizado em cada consulta.",
  },
];

export const CONTACT = {
  phone: "(51) 3222-3198",
  phoneTel: "+555132223198",
  whatsapp: "https://wa.me/5132223198",
  instagram: "https://www.instagram.com/sense.medicinaeodonto/",
  facebook: "https://www.facebook.com/SenseMedicinaeOdontologiaIntegradas",
  maps: "https://www.google.com/maps/place/Sense+-+Medicina+%26+Odontologia+Integradas%2F+Dr+Guilherme+Ruivo+%2F+Dra+Claudia+Alves%2F+Dra+Cristiane+Biasuz%2F+Dra+Carla+Larentis/@-30.0274049,-51.2032697,941m/data=!3m1!1e3!4m6!3m5!1s0x951979749e8ebd1b:0xc05767905e3cc1b0!8m2!3d-30.0274049!4d-51.2032697!16s%2Fg%2F11gl0tg3s7",
  addressLine1: "R. Dr. Florêncio Ygartua, 69 – Sala 305",
  addressLine2: "Moinhos de Vento – Porto Alegre / RS",
  addressLine3: "CEP 90430-010 · Galeria Florêncio Ygartua",
} as const;
