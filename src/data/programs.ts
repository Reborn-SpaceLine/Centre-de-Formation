export type ProgramCategory = 'bureautique' | 'design' | 'audiovisuel' | 'web' | 'maintenance'

export type Program = {
  id: string
  category: ProgramCategory
  name: string
  shortName: string
  tagline: string
  icon: string
  badge: string
  badgeClass: string
  months: number
  description: string
  modules: string[]
  software: string[]
  pratique: number
  theorie: number
  debouche: string
  prerequis: string
  certification: string
  mediaTags: [string, string]
}

export const CATEGORIES: { value: ProgramCategory | 'all'; label: string }[] = [
  { value: 'all', label: 'Toutes les Filières' },
  { value: 'bureautique', label: 'Bureautique' },
  { value: 'design', label: 'Design Graphique' },
  { value: 'audiovisuel', label: 'Audiovisuel' },
  { value: 'web', label: 'Développement Web' },
  { value: 'maintenance', label: 'Maintenance & Réseaux' },
]

export const PROGRAMS: Program[] = [
  {
    id: 'bureautique',
    category: 'bureautique',
    name: 'Bureautique & Outils Collaboratifs',
    shortName: 'Bureautique Pro',
    tagline: 'Fondamental',
    icon: 'desktop_windows',
    badge: 'Fondamental',
    badgeClass: 'chip--blue',
    months: 3,
    description:
      'Maîtrisez les outils indispensables du monde professionnel : traitement de texte, tableurs, présentations et collaboration en ligne pour être opérationnel immédiatement en entreprise.',
    modules: ['Word avancé', 'Excel & formules', 'PowerPoint', 'Google Workspace'],
    software: ['Word', 'Excel Avancé', 'PowerPoint', 'Google Workspace'],
    pratique: 80,
    theorie: 20,
    debouche: 'Assistant de direction, agent de saisie, secrétaire, appui administratif.',
    prerequis: 'Aucun. Savoir lire et écrire le français suffit.',
    certification: 'Attestation officielle FNF & Validation MINEFOP',
    mediaTags: ['Cycle 3 mois', 'Poste 1:1 dédié'],
  },
  {
    id: 'infographie',
    category: 'design',
    name: 'Infographie & Design Graphique',
    shortName: 'Infographie & Design',
    tagline: 'Très Demandé',
    icon: 'palette',
    badge: 'Très Demandé',
    badgeClass: 'chip--gold',
    months: 4,
    description:
      'De la retouche photo à la création d’identité visuelle complète : apprenez à produire les supports de communication demandés par les entreprises et les agences.',
    modules: ['Photoshop', 'CorelDRAW', 'Illustrator', 'Canva Pro'],
    software: ['Photoshop', 'CorelDRAW', 'Illustrator', 'Canva Pro'],
    pratique: 85,
    theorie: 15,
    debouche: 'Graphiste, community designer, imprimerie, agence de communication.',
    prerequis: 'Aucun. Créativité et motivation recommandées.',
    certification: 'Book professionnel finalisé & Attestation MINEFOP',
    mediaTags: ['Cycle 4 mois', 'Filière plébiscitée'],
  },
  {
    id: 'montage',
    category: 'audiovisuel',
    name: 'Montage Photo & Vidéo Professionnel',
    shortName: 'Montage Vidéo',
    tagline: 'Multimédia',
    icon: 'movie',
    badge: 'Multimédia',
    badgeClass: 'chip--red',
    months: 4,
    description:
      'Tourner, monter et publier des contenus qui captent l’attention : montage vidéo professionnel, étalonnage, effets et post-synchronisation dans notre studio équipé.',
    modules: ['Premiere Pro', 'After Effects', 'CapCut Pro', 'Retouche photo'],
    software: ['Premiere Pro', 'After Effects', 'CapCut Pro', 'Photoshop Retouche'],
    pratique: 80,
    theorie: 20,
    debouche: 'Monteur vidéo, créateur de contenu, régie, production événementielle.',
    prerequis: 'Aucun. Smartphone ou caméra personnelle un plus.',
    certification: 'Réalisation d’un court-métrage & Attestation MINEFOP',
    mediaTags: ['Cycle 4 mois', 'Secteur en pleine explosion'],
  },
  {
    id: 'web',
    category: 'web',
    name: 'Développement Web & Applications',
    shortName: 'Développement Web',
    tagline: 'Digital',
    icon: 'code',
    badge: 'Digital',
    badgeClass: 'chip--navy',
    months: 5,
    description:
      'Créez et mettez en ligne de vrais sites web : intégration HTML/CSS, WordPress, bases du JavaScript, hébergement, nom de domaine et référencement local.',
    modules: ['HTML5 & CSS3', 'WordPress', 'JavaScript de base', 'Hébergement & SEO'],
    software: ['HTML5 & CSS3', 'WordPress & Elementor', 'JavaScript de base', 'Hébergement Web & SEO'],
    pratique: 85,
    theorie: 15,
    debouche: 'Intégrateur web, gestionnaire de site, freelance, support digital.',
    prerequis: 'Aucun. Logique et rigueur appréciées.',
    certification: 'Mise en ligne d’un site web complet & Attestation MINEFOP',
    mediaTags: ['Cycle 5 mois', 'Site réel en ligne'],
  },
  {
    id: 'maintenance',
    category: 'maintenance',
    name: 'Maintenance Informatique & Réseaux',
    shortName: 'Maintenance & Réseaux',
    tagline: 'Technique',
    icon: 'settings_ethernet',
    badge: 'Technique',
    badgeClass: 'chip--high',
    months: 4,
    description:
      'Diagnostic de pannes, assemblage, installation des systèmes, câblage réseau et configuration des équipements : une filière 100% pratique sur matériel réel.',
    modules: ['Diagnostic & assemblage', 'Windows & Linux', 'Sertissage RJ45', 'Routeurs & switchs'],
    software: ['Diagnostic Pannes & Assemblage', 'Installation Windows & Linux', 'Sertissage RJ45', 'Routeurs Wi-Fi & Switchs'],
    pratique: 90,
    theorie: 10,
    debouche: 'Technicien support, administrateur réseaux junior, câblage structuré.',
    prerequis: 'Aucun. Goût pour le matériel et le travail manuel.',
    certification: 'Pratique intensive sur composants et réseaux réels',
    mediaTags: ['Cycle 4 mois', 'Atelier technique'],
  },
]

export const PROGRAM_BY_ID = Object.fromEntries(PROGRAMS.map((p) => [p.id, p])) as Record<string, Program>
