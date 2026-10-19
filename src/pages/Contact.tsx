import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { MAILTO_URL, MAPS_URL, SITE, WHATSAPP_URL } from '../lib/site'

const SUBJECTS = [
  ['session8', 'Informations sur la 8ème session'],
  ['bureautique', 'Filière Bureautique & Collaboratif'],
  ['infographie', 'Filière Infographie & Design'],
  ['montage', 'Filière Montage Photo & Vidéo'],
  ['web', 'Filière Développement Web'],
  ['maintenance', 'Filière Maintenance & Réseaux'],
  ['orientation', 'Orientation / choix de filière'],
  ['partenariat', 'Partenariat & sponsoring FNF'],
  ['autre', 'Autre demande'],
] as const

const CITIES = [
  ['batie', 'Batié'],
  ['bafoussam', 'Bafoussam'],
  ['baham', 'Baham'],
  ['bandjoun', 'Bandjoun'],
  ['bangangte', 'Bangangté'],
  ['yaounde', 'Yaoundé'],
  ['douala', 'Douala'],
  ['autre-cameroun', 'Autre ville du Cameroun'],
  ['diaspora', 'Diaspora / étranger'],
] as const

const ROUTES = [
  {
    n: 1,
    title: 'Depuis Bafoussam (20 minutes)',
    text: 'Taxis réguliers sur l’axe national N4 jusqu’au carrefour de Batié, puis 5 minutes à pied jusqu’à la Mairie.',
  },
  {
    n: 2,
    title: 'Depuis Baham, Bandjoun ou Bangangté',
    text: 'Moto-taxis ou minibus au départ de la gare routière ; demandez l’arrêt « Mairie de Batié », l’Esplanade est visible.',
  },
]

const HOURS = [
  {
    tone: '',
    icon: 'date_range',
    iconClass: 'c-primary',
    title: 'Lundi au Vendredi',
    time: '08h00 - 17h30',
    timeClass: 'c-primary',
    text: 'Secrétariat permanent, enregistrement des nouveaux inscrits, retrait des formulaires et démonstrations des logiciels.',
    footIcon: 'check_circle',
    foot: 'Sans rendez-vous préalable',
  },
  {
    tone: 'hours-card--gold',
    icon: 'event',
    iconClass: 'c-tertiary-ctn',
    title: 'Samedi Matin',
    time: '08h30 - 13h00',
    timeClass: 'c-tertiary-ctn',
    text: 'Permanence spéciale pour les travailleurs, les étudiants des villes avoisinantes et l’orientation parentale.',
    footIcon: 'help_outline',
    foot: 'Conseils personnalisés',
  },
  {
    tone: 'hours-card--gray hours-card--closed',
    icon: 'block',
    iconClass: 'c-muted',
    title: 'Dimanche & Fériés',
    time: 'Fermé au Public',
    timeClass: 'c-muted',
    text: 'Accueil physique fermé. Les formulaires en ligne et messages WhatsApp restent enregistrés et traités le lundi matin dès 08h00.',
    footIcon: 'support',
    foot: 'Permanence WhatsApp 24/7',
  },
]

export default function Contact() {
  const [sent, setSent] = useState(false)
  const bannerRef = useRef<HTMLDivElement>(null)

  return (
    <>
      <section className="contact-hero">
        <span className="contact-hero__pattern" />
        <span className="contact-hero__glow contact-hero__glow--tr" />
        <span className="contact-hero__glow contact-hero__glow--bl" />
        <div className="container">
          <div className="contact-hero__badges">
            <span className="chip chip--highest">
              <span className="material-symbols-outlined">verified</span>
              <span>MINEFOP • {SITE.arreteShort}</span>
            </span>
            <span className="chip chip--gold">
              <span className="material-symbols-outlined">school</span>
              <span>Campus Mairie de Batié</span>
            </span>
            <span className="chip chip--red-soft">
              <span className="dot dot--pulse" />
              <span>Guichet {SITE.session} Actif</span>
            </span>
          </div>

          <div className="contact-hero__grid">
            <div>
              <p className="hero__kicker t-label">Assistance &amp; Orientation des Candidats</p>
              <h1 className="t-headline-lg fw-800 c-primary mt-4">Contactez le Centre &amp; Venez Nous Rencontrer à Batié</h1>
              <p className="t-body-lg c-muted mt-4">
                Une question sur une filière, le dépôt d’un dossier ou une visite des salles ? Le secrétariat répond
                sous 24h ouvrées, par téléphone, WhatsApp ou courriel.
              </p>
            </div>
            <div className="contact-hero__mini">
              <div className="mini-stat">
                <span className="mini-stat__icon g-icon--fixed">
                  <span className="material-symbols-outlined">launcher_assistant_off</span>
                </span>
                <div>
                  <p className="t-title fw-700 c-primary">&lt; 3 heures</p>
                  <p className="t-body-sm c-muted">Délai moyen de réponse ouvrée</p>
                </div>
              </div>
              <div className="mini-stat">
                <span className="mini-stat__icon g-icon--goldsoft">
                  <span className="material-symbols-outlined">school</span>
                </span>
                <div>
                  <p className="t-title fw-700 c-tertiary-ctn">100% Subventionnée</p>
                  <p className="t-body-sm c-muted">Frais de formation pris en charge FNF</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accès rapide */}
      <section className="section bg-white mt-8">
        <div className="container">
          <div className="quick-grid">
            <article className="quick-card">
              <div className="quick-card__top">
                <span className="quick-card__icon g-icon--fixed">
                  <span className="material-symbols-outlined">call</span>
                </span>
                <span className="qa-chip">Ligne Directe</span>
              </div>
              <div>
                <p className="t-label c-outline up">Appel Téléphonique</p>
                <p className="qa-phone c-primary">{SITE.phoneDisplay}</p>
                <p className="t-body-sm c-muted">
                  <span className="material-symbols-outlined">schedule</span> Lun — Ven : 08h00 - 17h30
                </p>
              </div>
              <a className="qa-btn qa-btn--blue" href={`tel:${SITE.phoneRaw}`}>
                <span className="material-symbols-outlined">phone_in_talk</span>
                <span>Appeler Maintenant</span>
              </a>
            </article>

            <article className="quick-card">
              <div className="quick-card__top">
                <span className="quick-card__icon quick-card__icon--wa">
                  <span className="material-symbols-outlined">chat</span>
                </span>
                <span className="qa-chip qa-chip--wa">Instantané</span>
              </div>
              <div>
                <p className="t-label c-outline up">WhatsApp Officiel</p>
                <p className="qa-phone c-primary">{SITE.phoneDisplay}</p>
                <p className="t-body-sm c-muted">
                  <span className="material-symbols-outlined">bolt</span> Conseil &amp; vérification de dossier
                </p>
              </div>
              <a className="qa-btn qa-btn--wa" href={WHATSAPP_URL} rel="noreferrer" target="_blank">
                <span className="material-symbols-outlined">forum</span>
                <span>Discuter sur WhatsApp</span>
              </a>
            </article>

            <article className="quick-card">
              <div className="quick-card__top">
                <span className="quick-card__icon quick-card__icon--mail">
                  <span className="material-symbols-outlined">mail</span>
                </span>
                <span className="qa-chip">Officiel</span>
              </div>
              <div>
                <p className="t-label c-outline up">Email du Secrétariat</p>
                <p className="qa-phone qa-phone--mail c-primary">{SITE.email}</p>
                <p className="t-body-sm c-muted">
                  <span className="material-symbols-outlined">drafts</span> Dossiers &amp; correspondances MINEFOP
                </p>
              </div>
              <a className="qa-btn qa-btn--soft" href={MAILTO_URL}>
                <span className="material-symbols-outlined">send</span>
                <span>Envoyer un Courriel</span>
              </a>
            </article>

            <article className="quick-card">
              <div className="quick-card__top">
                <span className="quick-card__icon quick-card__icon--loc">
                  <span className="material-symbols-outlined">location_on</span>
                </span>
                <span className="qa-chip qa-chip--campus">Campus</span>
              </div>
              <div>
                <p className="t-label c-outline up">Mairie de Batié</p>
                <p className="qa-phone c-secondary">Hôtel de Ville de Batié</p>
                <p className="t-body-sm c-muted">
                  <span className="material-symbols-outlined">domain</span> Aile Droite, Salles Multimédia FNF
                </p>
              </div>
              <a className="qa-btn qa-btn--red" href="#campus-batié">
                <span className="material-symbols-outlined">explore</span>
                <span>Voir le Plan d’Accès</span>
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* Formulaire + plan */}
      <section className="section bg-low" id="campus-batié">
        <div className="container">
          <div className="split-66">
            <div className="contact-form-card">
              <div className="form-head">
                <div className="form-head__title">
                  <span className="material-symbols-outlined c-secondary">rate_review</span>
                  <h2 className="t-headline-sm fw-700 c-primary">Formulaire Direct d’Information</h2>
                </div>
                <p className="t-body-sm c-muted">
                  Décrivez votre besoin : un membre de l’équipe pédagogique vous répond directement depuis Batié.
                </p>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  setSent(true)
                  e.currentTarget.reset()
                  bannerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
                }}
              >
                <div className="form-stack form-stack--lg">
                  <div className="field">
                    <label htmlFor="c-subject">Objet de votre demande *</label>
                    <select className="select select--lg" id="c-subject" name="subject" required>
                      {SUBJECTS.map(([value, label]) => (
                        <option key={value} value={value}>
                          {label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="field">
                    <label htmlFor="c-name">Nom complet *</label>
                    <input
                      className="input input--lg"
                      id="c-name"
                      name="fullname"
                      placeholder="Ex : Fotso Tagne Emmanuel"
                      required
                    />
                  </div>
                  <div className="form-grid-2--md form-grid-2">
                    <div className="field">
                      <label htmlFor="c-phone">Téléphone *</label>
                      <div className="phone-wrap">
                        <span className="phone-prefix">+237</span>
                        <input
                          className="input input--lg"
                          id="c-phone"
                          name="phone"
                          placeholder="6XX XXX XXX"
                          required
                          type="tel"
                        />
                      </div>
                    </div>
                    <div className="field">
                      <label htmlFor="c-email">Email (facultatif)</label>
                      <input className="input input--lg" id="c-email" name="email" type="email" />
                    </div>
                  </div>
                  <div className="field">
                    <label htmlFor="c-city">Ville de résidence *</label>
                    <select className="select select--lg" id="c-city" name="city" required>
                      {CITIES.map(([value, label]) => (
                        <option key={value} value={value}>
                          {label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="field">
                    <label htmlFor="c-message">Votre message *</label>
                    <textarea className="textarea" id="c-message" name="message" required rows={4} />
                  </div>
                  <button className="btn btn--red btn--block" type="submit">
                    <span className="material-symbols-outlined">send</span>
                    <span>Envoyer mon message à l’Institut FNF</span>
                  </button>
                  <p className="t-label-sm c-outline center">
                    Vos coordonnées restent confidentielles et ne sont utilisées que pour traiter votre demande.
                  </p>
                  {sent && (
                    <div className="success-banner" ref={bannerRef}>
                      <span className="material-symbols-outlined">task_alt</span>
                      <span>
                        Message bien reçu ! Le secrétariat vous répond sous 24h ouvrées. Rappel : accueil physique du
                        Lundi au Vendredi, 08h00 - 17h30, Mairie de Batié.
                      </span>
                    </div>
                  )}
                </div>
              </form>
            </div>

            <div className="reg-side">
              <div className="side-card">
                <div className="form-head__title">
                  <span className="material-symbols-outlined c-primary">map</span>
                  <h3 className="t-title fw-700 c-primary">Plan du Campus &amp; Axes Principaux</h3>
                </div>
                <p className="t-body-sm c-muted">Carrefour Batié • Axe National N4</p>
                <div className="map-box">
                  <span className="map-box__label">
                    <span className="t-label fw-700 c-primary">Hôtel de Ville de Batié</span>
                    <br />
                    <span className="t-body-sm c-muted">
                      Rez-de-chaussée, salles informatiques et multimédia de la {SITE.foundation}
                    </span>
                  </span>
                </div>
                <a className="linklike" href={MAPS_URL} rel="noreferrer" target="_blank">
                  <span className="material-symbols-outlined">public</span>
                  <span>Ouvrir dans Maps</span>
                </a>
                <div className="landmarks">
                  <div className="landmark">
                    <p className="t-label c-primary">Place des Fêtes</p>
                    <p className="t-body-sm c-muted">150 m</p>
                  </div>
                  <div className="landmark">
                    <p className="t-label c-primary">Hôpital de District</p>
                    <p className="t-body-sm c-muted">400 m</p>
                  </div>
                  <div className="landmark">
                    <p className="t-label c-primary">Chefferie de Batié</p>
                    <p className="t-body-sm c-muted">1,2 km</p>
                  </div>
                </div>
              </div>

              <div className="side-card">
                <div className="form-head__title">
                  <span className="material-symbols-outlined c-primary">directions_bus</span>
                  <h3 className="t-title fw-700 c-primary">Comment arriver au Campus ?</h3>
                </div>
                <div className="form-stack">
                  {ROUTES.map((r) => (
                    <div className="route-step" key={r.n}>
                      <span className="route-num">{r.n}</span>
                      <div>
                        <p className="t-title fw-700 c-primary">{r.title}</p>
                        <p className="t-body-sm c-muted">{r.text}</p>
                      </div>
                    </div>
                  ))}
                  <div className="route-step route-step--final">
                    <span className="route-num route-num--red">
                      <span className="material-symbols-outlined">meeting_room</span>
                    </span>
                    <div>
                      <p className="t-title fw-700 c-secondary">Instructions pour le 1er jour et les visites</p>
                      <p className="t-body-sm c-muted">
                        Présentez-vous à la guérite principale avec une pièce d’identité, puis demandez l’aile droite :
                        les salles multimédia de la Fondation sont au rez-de-chaussée.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Horaires */}
      <section className="section bg-white" id="horaires">
        <div className="container">
          <div className="hours-panel">
            <div className="hours-head">
              <div>
                <p className="t-label c-secondary up fw-700">Permanence Municipale</p>
                <h2 className="t-headline-md fw-700 c-primary mt-2">Horaires d’Accueil &amp; de Dépôt des Dossiers</h2>
                <p className="t-body-lg c-muted mt-2">
                  Le secrétariat reçoit les candidats sans rendez-vous. Les dossiers en ligne sont traités dès le lundi
                  matin.
                </p>
              </div>
              <span className="open-now">
                <span className="dot dot--green dot--pulse" />
                <span>Accueil Ouvert Actuellement</span>
              </span>
            </div>

            <div className="hours-grid">
              {HOURS.map((h) => (
                <div className={`hours-card ${h.tone}`} key={h.title}>
                  <div className="flex-row mb-4">
                    <span className={`material-symbols-outlined ${h.iconClass}`}>{h.icon}</span>
                    <p className="t-title fw-700 c-primary">{h.title}</p>
                  </div>
                  <p className={`t-headline-sm fw-800 ${h.timeClass} mb-2`}>{h.time}</p>
                  <p className="t-body-sm c-muted">{h.text}</p>
                  <div className={`flex-row mt-4 ${h.timeClass}`}>
                    <span className="material-symbols-outlined">{h.footIcon}</span>
                    <span className="t-label">{h.foot}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <span className="cta-band__glow cta-band__glow--tr" />
        <span className="cta-band__glow cta-band__glow--bl" />
        <div className="container">
          <div className="cta-band__inner">
            <div>
              <span className="chip chip--red mb-4">
                <span className="material-symbols-outlined">campaign</span>
                <span>{SITE.session} • Rentrée {SITE.rentree}</span>
              </span>
              <h2 className="t-headline-lg fw-800 c-white">
                Formations 100% Gratuites : votre avenir numérique commence à Batié !
              </h2>
              <p className="t-body-lg c-blue-dim mt-4">
                Rejoignez l’{SITE.legalName} de la {SITE.foundation}. Les places en salle machine sont strictement
                limitées par session.
              </p>
            </div>
            <div className="cta-band__actions">
              <Link className="btn btn--red btn--lg" to="/inscription">
                <span className="material-symbols-outlined">how_to_reg</span>
                <span>S’inscrire à la {SITE.session}</span>
              </Link>
              <a className="btn btn--white btn--lg" href={`tel:${SITE.phoneRaw}`}>
                <span className="material-symbols-outlined">call</span>
                <span>{SITE.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
