import drGuilherme from "@/assets/dr-guilherme.jpeg";
import drClaudia from "@/assets/dr-claudia.jpeg";
import drCristiane from "@/assets/dr-cristiane.jpeg";
import drCarla from "@/assets/dr-carla.jpeg";

export type Doctor = {
  slug: string;
  name: string;
  specialty: string;
  photo: string;
  bio: string;
};

export const team: Doctor[] = [
  {
    slug: "guilherme-ruivo",
    name: "Dr. Guilherme Ruivo",
    specialty: "Endocrinologia e Medicina Preventiva",
    photo: drGuilherme,
    bio: "Médico formado pela Universidade Federal do Rio Grande em 1972, Dr. Guilherme Ruivo atua há mais de 45 anos na área da Endocrinologia, sendo especialista reconhecido pelo Conselho Federal de Medicina desde 1978 e Médico Jubilado pelo CREMERS em 2022.\n\nCom ampla experiência clínica e atuação em consultório privado desde 1978, possui especializações em Medicina Ortomolecular, Medicina Estética e Cannabis Medicinal. Seu atendimento é voltado à saúde integral e medicina preventiva, unindo experiência, atualização constante e cuidado individualizado ao paciente.",
  },
  {
    slug: "claudia-alves",
    name: "Dra. Cláudia Alves",
    specialty: "Odontologia e Odontopediatria",
    photo: drClaudia,
    bio: "Cirurgiã-dentista formada pela PUCRS em 2008, Dra. Cláudia Alves atua com foco em odontologia infantil e desenvolvimento funcional da saúde bucal. É especialista em Odontopediatria pela UFRGS (2013) e possui formação em Ortopedia Funcional dos Maxilares pela SOBRACOM, área na qual segue em constante aperfeiçoamento.\n\nSeu atendimento busca oferecer cuidado humanizado, prevenção e acompanhamento individualizado para crianças e adolescentes, promovendo saúde e conforto desde os primeiros anos de vida.",
  },
  {
    slug: "cristiane-biasuz",
    name: "Dra. Cristiane Biasuz",
    specialty: "Odontologia & Estética",
    photo: drCristiane,
    bio: "Formada em Odontologia pela PUCRS em 1993, Dra. Cristiane Biasuz atua nas áreas de reabilitação oral, estética dentária, clínica odontológica e endodontia. É especialista em Endodontia pelo Hospital de Aeronáutica de Canoas (2008) e em Prótese Dentária pela ABO-RS (2021).\n\nSeu trabalho une funcionalidade, saúde e resultados naturais, com foco em reabilitação oral, próteses sobre implantes e tratamentos personalizados. Também é professora de pós-graduação no curso de Implantodontia e integrante do International Team for Implantology (ITI), mantendo sua prática clínica constantemente alinhada à atualização científica e à excelência nos tratamentos.",
  },
  {
    slug: "carla-larentis",
    name: "Dra. Carla Larentis",
    specialty: "Odontologia",
    photo: drCarla,
    bio: "Formada em Odontologia pela UFRGS em 2001, Dra. Carla Larentis possui sólida experiência em estética e alinhamento do sorriso. É especialista em Dentística pela UFRGS (2005) e em Ortodontia pela Sobracursos (2019), oferecendo tratamentos personalizados que unem técnica, funcionalidade e estética.\n\nSua atuação é voltada à promoção da saúde bucal, reabilitação estética e harmonização do sorriso, proporcionando mais confiança, conforto e qualidade de vida aos pacientes por meio de um atendimento cuidadoso e atualizado.",
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
