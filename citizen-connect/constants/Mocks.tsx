import { ICategory, IDemand, IService, IServiceDetails } from "./Types";

export const CATEGORIES: ICategory[] = [
  {
    name: "Habitat et Foncier",
    description:
      "Autorisation, avis technique, avis, délivrance de prescription, etc.",
  },
  {
    name: "Urgences",
    description:
      "Pharmacies de gardes, Ambulances, Hôpitaux, Pompiers, Police, etc.",
  },
  {
    name: "Sécurité et justice",
    description: "",
  },
  {
    name: "Découverte de Madagascar",
    description:
      "Informations générales à propos de Madagascar telles que: les régions, districts, différents sites touristiques, parcs nationaux, etc.",
  },
  {
    name: "Citoyenneté",
    description:
      "Carte d'identité Nationale, Passeport et les différents certificats délivrés au sein de l'administration.",
  },
  {
    name: "Santé",
    description:
      "Comment se faire vacciner, les procédures liées à la Santé Publique",
  },
  {
    name: "Entreprise et industries",
    description:
      "Création, formes juridiques, fiscalité d'entreprises, CNAPS, etc.",
  },
  {
    name: "Fiscalité",
    description:
      "Les informations clés sur les principaux impôts et taux applicables sur le territoire national. Découvrez également les différents impôts sur les sociétés à Madagascar. Les divers types d’impôts à Madagascar, le système fiscal idéal pour mon entreprise, déclaration et paiement d’impôts.",
  },
  {
    name: "Fonction Publique",
    description: "",
  },
  {
    name: "Conduite et transport",
    description:
      "Renseignements sur les services administratifs ayant rapport aux véhicules roulant à Madagasacar. Obtenir son permis de conduire, service d’immatriculation, déclaration de mutation de véhicule.",
  },
  {
    name: "Tourisme et voyage",
    description:
      "Renseignements sur les plus belles destinations de voyage à Madagascar et autres informations nécessaires pour réussir votre voyage à Madagascar ou à l’étranger. Les sites touristiques à Madagascar, passeport, transport, hébergement, divertissement.",
  },
  {
    name: "Etat Civil",
    description:
      "Trouvez ici les démarches nécessaires à la production des divers actes d'État civil. Acte de naissance, acte de mariage, acte de décès, acte de reconnaissance",
  },
  {
    name: "Education",
    description: "",
  },
  {
    name: "Agriculture et Elevage",
    description: "",
  },
];

export const SERVICES: IService[] = [
  {
    name: "Demande de passeport",
    category_name: "Citoyenneté",
    description:
      "Le passeport est un document de voyage qu'un citoyen malagasy peut demander.",
    total_cost: 190000,
    duration: "72h",
    most_wanted: true,
  },
  {
    name: "Pharmacies de garde",
    category_name: "Santé",
    description:
      "Les pharmacies de garde sont des pharmacies ouvertes en dehors des heures normales d'ouverture. Les pharmaciens y accueillent les clients et les aident à se procurer des médicaments et des produits de santé même les dimanches et jours fériés.",
    most_wanted: true,
  },
  {
    name: "Créer sa Société",
    category_name: "Entreprise et industries",
    description:
      "La création de société est une mesure clé des performances de services de l'état.",
    most_wanted: true,
  },
  {
    name: "Les maladies non transmissibles",
    category_name: "Santé",
    description: "",
    most_wanted: true,
  },
  {
    name: "Équivalence administrative de titres et diplômes",
    category_name: "Fonction Publique",
    description:
      "Les étapes à suivre pour demander un extrait d’équivalence administrative de titres et diplômes",
    most_wanted: true,
  },
];

export const SERVICEDETAILS: IServiceDetails = {
  name: "Demande de passeport",
  category_name: "Citoyenneté",
  description:
    "Le passeport est un document de voyage qu'un citoyen malagasy peut demander.",
  total_cost: 190000,
  duration: "72h",
  most_wanted: true,
  treatment_duration:
    "72 heures à l'exception des dossiers d'EVASAN et de mission urgente. Si demande faites à l'extérieur ou en province: 10 jours",
  treatment_center:
    "Service Central du Contrôle de l’Immigration et de l’Emigration (SCCIE) immeuble “patte d'éléphant” à Anosy- Antananarivo",
  infoline:
    "pour vous assister, vous pouvez appeler le numéro +261 (0)38 11 000 77 pendant les heures de bureau (08H - 12H / 14H - 18H, du lundi au vendredi sauf les jours fériés).",
  step_count: 4,
  required_document: ["passeport ordinaire malagasy"],
};

export const DEMANDS: IDemand[] = [
  {
    nom_service: "Acte de mariage et livret de famille",
    status: "en cours",
    time_elapsed: "4j",
  },
  {
    nom_service: "Se former aux métiers de l'artisanat",
    status: "refusée",
    time_elapsed: "28j",
  },
];
