export const SITE = {
  name: 'IFP Multimédia',
  legalName: 'Institut de Formation Professionnelle Multimédia',
  foundation: 'Fondation Francis Ngannou',
  arrete: 'Arrêté N°000760/MINEFOP/SG/DFOP/SDGSF/CSACD/BAC du 26 Décembre 2025',
  arreteShort: 'Arrêté N°000760/MINEFOP',
  phoneDisplay: '+237 680 270 500',
  phoneShort: '680 270 500',
  phoneRaw: '+237680270500',
  email: 'centremultimediafnf@gmail.com',
  location: 'Mairie de Batié, Région de l’Ouest, Cameroun',
  session: '8ème Session',
  rentree: 'Lundi 11 Janvier 2027',
  slogan: '« FNF, votre passerelle vers un avenir meilleur ! »',
  tagline: 'Se former aujourd’hui, réussir demain !',
} as const

export const WHATSAPP_URL =
  'https://wa.me/237680270500?text=' +
  encodeURIComponent('Bonjour IFP Multimédia FNF, je souhaite des informations sur la 8ème session')

export const MAILTO_URL =
  'mailto:' + SITE.email + '?subject=' + encodeURIComponent('Demande d’information - 8ème Session IFP Multimédia FNF')

export const whatsappLink = (text: string) =>
  'https://wa.me/' + SITE.phoneRaw.slice(1) + '?text=' + encodeURIComponent(text)

export const mailtoLink = (subject: string, body: string) =>
  'mailto:' + SITE.email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body)

export const MAPS_URL = 'https://maps.google.com/?q=Mairie+de+Batie+Cameroun'

export const NAV = [
  { label: 'Accueil', to: '/', hash: undefined },
  { label: 'Formations', to: '/formations', hash: undefined },
  { label: 'Pourquoi Choisir FNF', to: '/', hash: 'pourquoi-section' },
  { label: 'Sessions & Calendrier', to: '/', hash: 'inscription-section' },
  { label: 'Contact', to: '/contact', hash: undefined },
] as const
