import { useState } from 'react'
import { Link } from 'react-router-dom'
import VideoModal from '../components/VideoModal'
import { PROGRAMS } from '../data/programs'
import { SITE } from '../lib/site'
import laboImg from '../assets/img/labo-info.webp'
import panoramaImg from '../assets/img/panorama-360.webp'
import studioImg from '../assets/img/studio-montage.webp'
import arnaudImg from '../assets/img/temoin-arnaud.webp'
import cedricImg from '../assets/img/temoin-cedric.webp'
import mireilleImg from '../assets/img/temoin-mireille.webp'

const WHY = [
  {
    icon: 'code_blocks',
    tone: 'g-icon--blue',
    title: '80% de pratique, dès la première semaine',
    text: 'Chaque module se termine par un exercice réel sur machine, sur un poste qui n’est partagé avec personne.',
  },
  {
    icon: 'supervisor_account',
    tone: 'g-icon--redsoft',
    title: 'Un formateur à chaque poste',
    text: 'Encadrement renforcé, suivi individuel de l’assiduité et soutien hors des heures de cours.',
  },
  {
    icon: 'workspace_premium',
    tone: 'g-icon--goldsoft',
    title: 'Un certificat reconnu par l’État',
    text: 'Évaluations continues, book ou projet final et attestation délivrée sous agrément MINEFOP.',
  },
  {
    icon: 'handshake',
    tone: 'g-icon--fixed',
    title: 'Une passerelle vers l’emploi',
    text: 'Book professionnel, mise en relation et accompagnement jusqu’à l’insertion ou la poursuite d’études.',
  },
]

const TOURS = [
  {
    id: 'labo',
    tab: 'Laboratoire & Code',
    title: 'Laboratoire informatique principal — Mairie de Batié',
    img: laboImg,
    caption: 'Laboratoire informatique équipé de postes individuels',
    points: ['Postes de bureautique 1:1', 'Tableau interactif de démonstration', 'Onduleurs et climatisation'],
    specs: [
      { value: '30', label: 'postes de travail' },
      { value: '1', label: 'fibre optique dédiée' },
      { value: '24/7', label: 'onduleurs solaires' },
    ],
  },
  {
    id: 'studio',
    tab: 'Studio Montage',
    title: 'Régie de production et post-synchronisation',
    img: studioImg,
    caption: 'Studio de montage vidéo et régie son',
    points: ['Stations double écran', 'Table de mixage et micros studio', 'Suite Premiere et DaVinci'],
    specs: [
      { value: '8', label: 'stations de montage' },
      { value: '2', label: 'cabines d’enregistrement' },
      { value: 'Pro', label: 'cartes graphiques dédiées' },
    ],
  },
  {
    id: 'atelier',
    tab: 'Atelier Réseaux',
    title: 'Atelier technique et baie de brassage',
    img: panoramaImg,
    caption: 'Atelier de maintenance informatique et câblage réseau',
    points: ['Banc de test et sertissage', 'Pièces détachées et composants', 'Routeurs et switchs réels'],
    specs: [
      { value: '12', label: 'kits de diagnostic' },
      { value: '1', label: 'baie de brassage' },
      { value: '40+', label: 'machines démontées' },
    ],
  },
]

const TESTIMONIALS = [
  {
    name: 'Mireille Tchinda',
    promo: 'Promo 6 • 2024-2025',
    track: 'Infographie & Design Graphique',
    job: 'Designer graphique, Studio Créatif Douala',
    quote:
      'Je ne touchais jamais à Photoshop. En quatre mois, j’ai construit un book complet et j’ai signé mon premier contrat avant même la fin de la formation.',
    foot: 'Embauchée en moins de 30 jours',
    img: mireilleImg,
  },
  {
    name: 'Cédric Fotso',
    promo: 'Promo 5 • 2023-2024',
    track: 'Maintenance Informatique & Réseaux',
    job: 'Administrateur systèmes et réseaux junior, Bafoussam Tech',
    quote:
      'On a travaillé sur de vraies baies de brassage et de vrais routeurs. Le jour de mon stage, rien ne m’a surpris et l’entreprise m’a gardé.',
    foot: 'Contrat CDI immédiat',
    img: cedricImg,
  },
  {
    name: 'Arnaud Kamga',
    promo: 'Promo 7 • 2025-2026',
    track: 'Montage Photo & Vidéo Professionnel',
    job: 'Monteur vidéo indépendant, créateur de contenu',
    quote:
      'Premiere Pro et DaVinci sont devenus mes outils de travail. Aujourd’hui je vis de mes montages, avec des clients au Cameroun et en Europe.',
    foot: 'Activité rentable à temps plein',
    img: arnaudImg,
  },
]

const TRACK_STYLES: Record<string, string> = {
  bureautique: 'g-icon--fixed',
  infographie: 'g-icon--goldsoft',
  montage: 'g-icon--redsoft',
  web: 'g-icon--highest',
  maintenance: 'g-icon--blue',
}

export default function Accueil() {
  const [tourId, setTourId] = useState('labo')
  const [mode, setMode] = useState<'vue' | 'fiche'>('vue')
  const [modalOpen, setModalOpen] = useState(false)
  const [slide, setSlide] = useState(0)
  const [sent, setSent] = useState(false)

  const tour = TOURS.find((t) => t.id === tourId) ?? TOURS[0]
  const ordered = TESTIMONIALS.slice(slide).concat(TESTIMONIALS.slice(0, slide))

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero__grid">
            <div className="hero__left">
              <p className="hero__kicker t-label">La formation qui change des vies</p>
              <h1 className="t-display fw-800 c-primary">
                Se former <span className="underline-wavy">aujourd’hui</span>, réussir demain !
              </h1>
              <p className="t-body-lg c-muted measure">
                {SITE.legalName} de la {SITE.foundation} à Batié : cinq filières métiers du numérique, dispensées par des
                formateurs qualifiés dans des salles équipées.
              </p>
              <p className="t-body-lg measure">
                Frais d’inscription et de formation : <span className="fw-800">0 FCFA</span> — support de cours, pratiques
                et attestation pris en charge par la fondation.
              </p>
              <div className="hero__ctas">
                <Link className="btn btn--red btn--lg" to="/inscription">
                  <span>S’inscrire à la {SITE.session}</span>
                  <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
                <Link className="linklike" to="/formations">
                  Découvrir les 5 filières
                </Link>
              </div>
            </div>

            <div className="hero__visual">
              <figure className="photo-card">
                <img alt="Atelier multimédia moderne de l’IFP Multimédia FNF" src={laboImg} />
                <figcaption className="photo-card__meta">
                  Atelier multimédia moderne — Mairie de Batié, un poste par apprenant
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* Filières */}
      <section className="section bg-white" id="filieres-section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="chip chip--gold">Nos 5 filières métiers</span>
              <h2 className="t-headline-lg fw-700 c-primary section-head__title">
                Des compétences concrètes, directement employables
              </h2>
              <p className="t-body-lg c-muted measure">
                Chaque filière combine ateliers machine, projet réel et accompagnement individuel. Cycle de 3 à 5 mois.
              </p>
            </div>
            <Link className="linklike" to="/formations">
              Voir les programmes détaillés
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>

          <div className="tracks-grid row-divider">
            {PROGRAMS.map((p) => (
              <article className="track-card" key={p.id}>
                <div className="track-head">
                  <span className={`g-icon track-card__icon ${TRACK_STYLES[p.id]}`}>
                    <span className="material-symbols-outlined">{p.icon}</span>
                  </span>
                  <div>
                    <h3 className="t-headline-md fw-700 c-primary">{p.name}</h3>
                    <span className={`chip ${p.badgeClass}`}>{p.badge}</span>
                  </div>
                </div>
                <ul className="module-list measure">
                  {p.modules.map((m) => (
                    <li key={m}>{m}</li>
                  ))}
                </ul>
                <div className="track-foot">
                  <span className="t-body-sm c-muted">Débouché : {p.debouche.split(',')[0]}</span>
                  <Link to={{ pathname: '/formations', hash: `#filiere-${p.id}` }}>Programme complet →</Link>
                </div>
              </article>
            ))}
          </div>

          <p className="t-body-sm c-muted measure mt-8">
            Notre méthode : vous réalisez un book, un site en ligne ou une intervention réseau réelle, évalués par un
            formateur agréé. Satisfaction des apprenants : 98%.
          </p>
        </div>
      </section>

      {/* Pourquoi FNF */}
      <section className="section bg-low" id="pourquoi-section">
        <div className="container">
          <div className="why-grid">
            <div className="why-left">
              <span className="chip chip--blue">La vision Francis Ngannou</span>
              <h2 className="t-headline-lg fw-700 c-primary">Pourquoi choisir le campus FNF de Batié ?</h2>
              <p className="t-body-lg c-muted measure">
                La {SITE.foundation} finance l’accès aux métiers du numérique pour la jeunesse camerounaise. Discipline,
                travail et résultats : la même exigence que sur le ring.
              </p>
              <figure className="why-photo">
                <img alt="Salle informatique équipée à la Mairie de Batié" src={laboImg} />
                <figcaption className="why-photo__meta">
                  Salle informatique équipée, accès libre de 08h00 à 17h00
                </figcaption>
              </figure>
            </div>

            <div className="pillars row-divider">
              {WHY.map((w) => (
                <div className="pillar" key={w.title}>
                  <h3 className="t-headline-sm fw-700 c-primary">
                    <span className={`g-icon ${w.tone}`}>
                      <span className="material-symbols-outlined">{w.icon}</span>
                    </span>
                    {w.title}
                  </h3>
                  <p className="t-body-sm c-muted measure">{w.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Visite virtuelle */}
      <section className="section bg-white" id="visite-virtuelle-section">
        <div className="container gap-grid">
          <div>
            <span className="chip chip--navy">Immersion &amp; infrastructures</span>
            <h2 className="t-headline-lg fw-700 c-primary mt-2">Visite virtuelle : entrez dans nos ateliers</h2>
            <p className="t-body-lg c-muted measure mt-2">
              Laboratoire informatique, studio de montage et atelier technique : les salles où vous serez formés dès la{' '}
              {SITE.session}.
            </p>
          </div>

          <div className="tour-tabs">
            {TOURS.map((t) => (
              <button
                className={`tour-tab${t.id === tourId ? ' active' : ''}`}
                key={t.id}
                onClick={() => setTourId(t.id)}
                type="button"
              >
                {t.tab}
              </button>
            ))}
          </div>

          <div className="tour-card">
            <div className="tour-head">
              <p className="t-headline-md fw-700 c-primary">{tour.title}</p>
              <div className="tour-modes">
                <button
                  className={`tour-mode${mode === 'vue' ? ' active' : ''}`}
                  onClick={() => setMode('vue')}
                  type="button"
                >
                  Vue
                </button>
                <button
                  className={`tour-mode${mode === 'fiche' ? ' active' : ''}`}
                  onClick={() => setMode('fiche')}
                  type="button"
                >
                  Fiche
                </button>
              </div>
            </div>

            {mode === 'vue' ? (
              <figure className="tour-viewer">
                <img alt={tour.caption} src={tour.img} />
              </figure>
            ) : (
              <div className="tour-fiche">
                <ul className="module-list measure">
                  {tour.points.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
                <p className="t-body-sm c-muted measure">
                  Capacité d’accueil, matériel connecté et licences professionnelles sont détaillés dans la fiche remise le
                  premier jour, réservée aux apprenants inscrits de la {SITE.session}.
                </p>
              </div>
            )}

            <div className="tour-specs statline">
              {tour.specs.map((s) => (
                <span className="stat" key={s.label}>
                  <b className="t-stat">{s.value}</b>
                  <span className="t-body-sm c-muted">{s.label}</span>
                </span>
              ))}
            </div>
          </div>

          <p className="visit-bar">
            Les visites guidées du campus sont ouvertes du lundi au vendredi.{' '}
            <button className="linklike" onClick={() => setModalOpen(true)} type="button">
              Voir la capsule vidéo
            </button>{' '}
            <Link className="linklike" to={{ pathname: '/contact', hash: '#campus-batié' }}>
              Planifier une visite
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </p>
        </div>
      </section>

      {/* Témoignages */}
      <section className="section bg-low" id="temoignages-section">
        <div className="container gap-grid gap-grid--2">
          <div className="section-head">
            <div>
              <span className="chip chip--gold">Succès &amp; insertion professionnelle</span>
              <h2 className="t-headline-lg fw-700 c-primary section-head__title">
                Ils ont appris à Batié, ils réussissent aujourd’hui
              </h2>
            </div>
            <div className="carousel-nav">
              <span className="t-label c-muted">
                {slide + 1} / {TESTIMONIALS.length}
              </span>
              <button
                aria-label="Témoignage précédent"
                className="carousel-btn"
                onClick={() => setSlide((s) => (s - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
                type="button"
              >
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button
                aria-label="Témoignage suivant"
                className="carousel-btn"
                onClick={() => setSlide((s) => (s + 1) % TESTIMONIALS.length)}
                type="button"
              >
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>

          <div className="testi-grid">
            {ordered.map((t) => (
              <article className="testi-card" key={t.name}>
                <div className="testi-thumb" onClick={() => setModalOpen(true)} role="button" tabIndex={0}>
                  <img alt={`Portrait de ${t.name}`} src={t.img} />
                  <span className="testi-play">
                    <span className="material-symbols-outlined">play_arrow</span>
                  </span>
                </div>
                <div className="testi-body">
                  <div>
                    <span className="chip chip--navy">{t.track}</span>
                    <h3 className="t-headline-md fw-700 c-primary mt-2">{t.name}</h3>
                    <p className="t-body-sm c-muted">
                      {t.job} — {t.promo}
                    </p>
                    <blockquote className="quote">“{t.quote}”</blockquote>
                  </div>
                  <div className="testi-foot">
                    <span className="t-body-sm c-muted">{t.foot}</span>
                    <Link className="linklike" to="/inscription">
                      Comme eux
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="statline">
            <span className="stat">
              <b className="t-stat">85%</b>
              <span className="t-body-sm c-muted">d’insertion professionnelle sous 6 mois</span>
            </span>
            <span className="stat">
              <b className="t-stat">+350</b>
              <span className="t-body-sm c-muted">techniciens et créatifs formés depuis l’ouverture</span>
            </span>
          </div>
        </div>
      </section>

      {/* Bandeau inscription */}
      <section className="section bg-white" id="inscription-section">
        <div className="container">
          <div className="insc-band">
            <div className="insc-band__grid">
              <div className="insc-band__left">
                <span className="chip chip--on-dark">Inscriptions ouvertes</span>
                <h2 className="t-headline-lg fw-800">
                  Rejoignez {SITE.foundation} et préparez votre avenir à Batié
                </h2>
                <p className="t-body-lg measure">
                  Rentrée le {SITE.rentree}, salle multimédia de la Mairie de Batié — accueil dès 07h45 pour le contrôle
                  des dossiers. Frais d’inscription, formation et support : pris en charge.
                </p>
              </div>

              <div className="insc-form-panel">
                <h3 className="t-headline-sm fw-700 c-primary">Pré-inscription rapide en ligne</h3>
                <p className="t-body-sm c-muted">
                  Laissez vos coordonnées : le secrétariat vous rappelle sous 48h pour compléter le dossier.
                </p>
                {sent ? (
                  <div className="success-banner">
                    <span className="material-symbols-outlined">task_alt</span>
                    <span>
                      Félicitations ! Votre demande a été enregistrée. L’équipe FNF vous contactera sous 48h.
                    </span>
                  </div>
                ) : (
                  <form
                    className="form-stack"
                    onSubmit={(e) => {
                      e.preventDefault()
                      setSent(true)
                    }}
                  >
                    <div className="field">
                      <label htmlFor="q-nom">Nom complet *</label>
                      <input className="input" id="q-nom" name="nom" placeholder="Ex : Fotso Tagne Emmanuel" required />
                    </div>
                    <div className="form-grid-2">
                      <div className="field">
                        <label htmlFor="q-tel">Téléphone / WhatsApp *</label>
                        <input className="input" id="q-tel" name="tel" placeholder="680270500" required type="tel" />
                      </div>
                      <div className="field">
                        <label htmlFor="q-ville">Ville *</label>
                        <input className="input" defaultValue="Batié" id="q-ville" name="ville" required />
                      </div>
                    </div>
                    <div className="field">
                      <label htmlFor="q-filiere">Filière souhaitée *</label>
                      <select className="select" id="q-filiere" name="filiere" required>
                        <option disabled selected value="">
                          Sélectionnez votre domaine
                        </option>
                        <option value="bureautique">Bureautique &amp; Collaboratif (Word, Excel, PowerPoint)</option>
                        <option value="infographie">Infographie &amp; Design (Photoshop, CorelDRAW, Canva)</option>
                        <option value="montage">Montage Photo &amp; Vidéo (Premiere Pro, CapCut)</option>
                        <option value="web">Développement Web (HTML, CSS, WordPress)</option>
                        <option value="maintenance">Maintenance Informatique &amp; Réseaux</option>
                      </select>
                    </div>
                    <button className="btn btn--red btn--block" type="submit">
                      <span>Valider ma pré-inscription</span>
                    </button>
                    <p className="form-note">
                      Pièces requises au démarrage : copie de la CNI ou acte de naissance et 2 photos 4x4.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact rapide */}
      <section className="section bg-low" id="contact-section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="chip chip--gold">Nous joindre</span>
              <h2 className="t-headline-lg fw-700 c-primary section-head__title">
                Un centre accessible au cœur de Batié
              </h2>
            </div>
            <Link className="linklike" to="/contact">
              Toutes les coordonnées
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>

          <div className="contact-lines row-divider">
            <div>
              <dt>Adresse</dt>
              <dd>{SITE.location}</dd>
            </div>
            <div>
              <dt>Téléphone &amp; WhatsApp</dt>
              <dd>
                <a className="c-primary fw-700" href={`tel:${SITE.phoneRaw}`}>
                  {SITE.phoneShort}
                </a>{' '}
                — 08h00 à 17h00, du lundi au vendredi
              </dd>
            </div>
            <div>
              <dt>Courriel</dt>
              <dd>
                <a className="c-primary fw-700" href={`mailto:${SITE.email}`}>
                  {SITE.email}
                </a>
              </dd>
            </div>
          </div>

          <p className="slogan iu c-primary t-headline-sm">{SITE.slogan}</p>
        </div>
      </section>

      {modalOpen && <VideoModal onClose={() => setModalOpen(false)} />}
    </>
  )
}
