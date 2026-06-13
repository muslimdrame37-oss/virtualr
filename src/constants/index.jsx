import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Fonctionnalités", href: "#" },
  { label: "Flux de travail", href: "#" },
  { label: "Tarifs", href: "#" },
  { label: "Témoignages", href: "#" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "Je suis extrêmement satisfait des services fournis. L'équipe était réactive, professionnelle et a livré des résultats au-delà de mes attentes.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "Je ne pourrais pas être plus heureux du résultat de notre projet. La créativité et les compétences en résolution de problèmes de l'équipe ont été essentielles pour donner vie à notre vision.",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Travailler avec cette entreprise a été un plaisir. Leur souci du détail et leur engagement envers l'excellence sont remarquables. Je les recommande vivement à quiconque recherche un service de qualité supérieure.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Travailler avec l'équipe de XYZ Company a été une révolution pour notre projet. Leur souci du détail et leurs solutions innovantes nous ont aidés à atteindre nos objectifs plus rapidement que prévu. Nous sommes reconnaissants de leur expertise et de leur professionnalisme !",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "Je suis émerveillé par le niveau de professionnalisme et de dévouement dont fait preuve l'équipe. Ils ont réussi à dépasser nos attentes et à livrer des résultats remarquables.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "L'équipe a fait tout son possible pour que notre projet soit un succès. Leur expertise et leur dévouement sont inégalés. J'ai hâte de travailler à nouveau avec eux à l'avenir.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Interface Glisser-Déposer",
    description:
      "Concevez et organisez facilement vos environnements VR grâce à une interface glisser-déposer conviviale.",
  },
  {
    icon: <Fingerprint />,
    text: "Compatibilité Multi-Plateforme",
    description:
      "Créez des applications VR qui fonctionnent parfaitement sur plusieurs plateformes, notamment mobile, bureau et casques VR.",
  },
  {
    icon: <ShieldHalf />,
    text: "Modèles Intégrés",
    description:
      "Lancez vos projets VR avec une variété de modèles intégrés pour différents types d'applications et d'environnements.",
  },
  {
    icon: <BatteryCharging />,
    text: "Aperçu en Temps Réel",
    description:
      "Prévisualisez votre application VR en temps réel pendant que vous effectuez des modifications, permettant des itérations et ajustements rapides.",
  },
  {
    icon: <PlugZap />,
    text: "Outils de Collaboration",
    description:
      "Travaillez en temps réel avec votre équipe sur des projets VR, permettant une collaboration fluide et un partage d'idées.",
  },
  {
    icon: <GlobeLock />,
    text: "Tableau de Bord Analytique",
    description:
      "Obtenez des informations précieuses sur les interactions et comportements des utilisateurs dans vos applications VR grâce à un tableau de bord analytique intégré.",
  },
];

export const checklistItems = [
  {
    title: "Fusion de code simplifiée",
    description:
      "Suivez les performances de vos applications VR et obtenez des informations sur le comportement des utilisateurs.",
  },
  {
    title: "Révisez le code sans souci",
    description:
      "Suivez les performances de vos applications VR et obtenez des informations sur le comportement des utilisateurs.",
  },
  {
    title: "Assistance IA pour gagner du temps",
    description:
      "Suivez les performances de vos applications VR et obtenez des informations sur le comportement des utilisateurs.",
  },
  {
    title: "Partagez votre travail en quelques minutes",
    description:
      "Suivez les performances de vos applications VR et obtenez des informations sur le comportement des utilisateurs.",
  },
];

export const pricingOptions = [
  {
    title: "Gratuit",
    price: "$0",
    features: [
      "Partage de tableau privé",
      "5 Go de stockage",
      "Analytique Web",
      "Mode Privé",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Partage de tableau privé",
      "10 Go de stockage",
      "Analytique Web (Avancée)",
      "Mode Privé",
    ],
  },
  {
    title: "Entreprise",
    price: "$200",
    features: [
      "Partage de tableau privé",
      "Stockage Illimité",
      "Réseau Haute Performance",
      "Mode Privé",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Démarrage rapide" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutoriels" },
  { href: "#", text: "Référence API" },
  { href: "#", text: "Forums communautaires" },
];

export const platformLinks = [
  { href: "#", text: "Fonctionnalités" },
  { href: "#", text: "Appareils supportés" },
  { href: "#", text: "Configuration requise" },
  { href: "#", text: "Téléchargements" },
  { href: "#", text: "Notes de version" },
];

export const communityLinks = [
  { href: "#", text: "Événements" },
  { href: "#", text: "Rencontres" },
  { href: "#", text: "Conférences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Emplois" },
];
