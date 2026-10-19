import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { PROGRAMS } from '../data/programs'
import { MAPS_URL, SITE } from '../lib/site'
import laboImg from '../assets/img/labo-info.webp'
import studioImg from '../assets/img/studio-montage.webp'

const NIVEAUX = [
  'BEPC / Niveau 3ème',
  'Probatoire (1ère, Tle)',
  'Baccalauréat',
  'Licence / Enseignement Supérieur',
  'Autre / Autodidacte',
]

const STEPS = ['1. Identité', '2. Spécialité', '3. Horaires', '4. Projet']

const MINI_META: Record<string, { icon: string; tone: string; note: string }> = {
  bureautique: { icon: 'desktop_windows', tone: 'g-icon--fixed', note: 'Session Matin & Soir' },
  infographie: { icon: 'palette', tone: 'g-icon--goldsoft', note: 'Filière Plébiscitée' },
  montage: { icon: 'movie_edit', tone: 'g-icon--redsoft', note: 'Studio Équipé' },
  web: { icon: 'code_blocks', tone: 'g-icon--highest', note: 'Haute Demande' },
  maintenance: { icon: 'build_circle', tone: 'g-icon--blue', note: 'Atelier Technique' },
}

const GARANTIES = [
  'Formation 100% gratuite, financée par la Fondation Francis Ngannou',
  'Formateurs qualifiés et agréés, présents à chaque séance',
  'Salles équipées : un poste de travail par apprenant',
  'Accompagnement vers l’emploi ou le freelance après l’attestation',
]

export default function Inscription() {
  const location = useLocation()
  const initialFiliere =
    PROGRAMS.find((p) => location.hash === `#filiere-${p.id}`)?.id ?? 'bureautique'

  const [step, setStep] = useState(1)
  const [done, setDone] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({
    nom: '',
    prenom: '',
    tel: '',
    email: '',
    age: '',
    niveau: NIVEAUX[0],
    filiere: initialFiliere,
    creneau: 'matin',
    motivation: '',
    projet: '',
    charte: false,
  })

  useEffect(() => {
    const id = location.hash.replace('#', '')
    if (id) document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [location.hash])

  const set = (key: keyof typeof form, value: string | boolean) => setForm((f) => ({ ...f, [key]: value }))

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step < 4) {
      setError('')
      setStep((s) => Math.min(4, s + 1))
      return
    }
    if (!form.charte || form.motivation.trim().length < 10) {
      setError(
        'Merci de compléter votre motivation (10 caractères minimum) et d’accepter la charte d’engagement FNF.',
      )
      return
    }
    setError('')
    setDone(true)
  }

  const filiere = PROGRAMS.find((p) => p.id === form.filiere) ?? PROGRAMS[0]

  return (
    <>
      <div className="reg-ribbon">
        <div className="container">
          <div className="reg-ribbon__inner">
            <span className="flex-row">
              <span className="material-symbols-outlined">verified</span>
              <span>{SITE.arrete}</span>
            </span>
            <span className="reg-ribbon__right">
              <span className="reg-ribbon__badge">
                <span className="material-symbols-outlined">star</span>
                <span>100% Gratuit &amp; Agréé</span>
              </span>
              <span className="hide-sm">{SITE.foundation}</span>
            </span>
          </div>
        </div>
      </div>

      {/* En-tête d’inscription */}
      <section className="reg-hero">
        <div className="container">
          <div className="reg-hero__top">
            <div className="reg-hero__brand">
              <span className="reg-hero__logo">
                <span className="material-symbols-outlined">school</span>
              </span>
              <div>
                <p className="t-title fw-700 c-primary">{SITE.legalName} (IFP-FNF)</p>
                <p className="t-body-sm c-muted">{SITE.tagline}</p>
              </div>
            </div>
            <span className="reg-session">
              <span className="dot dot--pulse" />
              <span>Session N° 08 Ouverte</span>
            </span>
          </div>

          <div className="reg-hero__grid">
            <div className="reg-hero__left">
              <p className="hero__kicker t-label">Inscriptions Ouvertes pour la Huitième Session</p>
              <h1 className="t-display fw-800 c-primary underline-plain">
                Propulsez votre avenir avec les métiers du numérique.
              </h1>
              <p className="t-body-lg c-muted">
                Cinq filières certifiantes, entièrement prises en charge par la {SITE.foundation}, à la Mairie de Batié.
                Remplissez la candidature officielle ci-dessous : le secrétariat vous rappelle sous 48h.
              </p>
              <div className="reg-metrics">
                <div className="reg-metric">
                  <b className="c-secondary">100%</b>
                  <span className="t-body-sm c-muted">Prise en charge totale des frais</span>
                </div>
                <div className="reg-metric">
                  <b className="c-secondary">0 FCFA</b>
                  <span className="t-body-sm c-muted">Aucun frais de dossier</span>
                </div>
                <div className="reg-metric">
                  <b className="c-primary">11 JANV.</b>
                  <span className="t-body-sm c-muted">Rentrée 2027 à Batié</span>
                </div>
              </div>
            </div>

            <aside className="date-hero">
              <span className="date-hero__glow" />
              <div className="date-hero__row">
                <span className="flex-row">
                  <span className="material-symbols-outlined">military_tech</span>
                  <span className="t-label">Excellence • Discipline</span>
                </span>
                <span className="date-hero__urg">Urgent : places limitées</span>
              </div>
              <div className="date-hero__glass">
                <span className="t-label c-blue-dim up">Début officiel des cours</span>
                <p className="t-headline-md fw-800">Lundi 11 Janvier 2027</p>
                <p className="t-body-sm c-blue-dim">Campus Multimédia, Salle de Formation Municipale — Batié</p>
              </div>
              <div className="date-hero__imgs">
                <div>
                  <img alt="Laboratoire informatique du campus FNF de Batié" src={laboImg} />
                </div>
                <div>
                  <img alt="Studio de montage utilisé pendant les ateliers" src={studioImg} />
                </div>
              </div>
              <a className="btn btn--red btn--block" href="#inscription-form">
                <span className="material-symbols-outlined">keyboard_double_arrow_down</span>
                <span>Remplir le formulaire en ligne</span>
              </a>
            </aside>
          </div>
        </div>
      </section>

      {/* Filières */}
      <section className="section bg-low">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="chip chip--navy">Offre Académique 2027</span>
              <h2 className="t-headline-md fw-700 c-primary section-head__title">Filières Professionnelles Disponibles</h2>
            </div>
            <span className="assur-pill">
              <span className="material-symbols-outlined c-primary">verified_user</span>
              <span>Attestation agréée par le MINEFOP</span>
            </span>
          </div>

          <div className="track-mini-grid">
            {PROGRAMS.map((p) => {
              const meta = MINI_META[p.id]
              return (
                <article className="track-mini" key={p.id}>
                  <div>
                    <span className={`track-card__icon g-icon ${meta.tone}`}>
                      <span className="material-symbols-outlined">{meta.icon}</span>
                    </span>
                    <h3 className="t-title fw-700 c-primary mt-4">{p.shortName}</h3>
                    <p className="t-body-sm c-muted mt-2">{p.months} mois • {p.pratique}% pratique</p>
                  </div>
                  <div className="track-mini__foot">
                    <span className="t-label-sm c-outline up">{meta.note}</span>
                    <button className="linklike" onClick={() => set('filiere', p.id)} type="button">
                      Choisir
                    </button>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Formulaire */}
      <section className="section bg-white" id="formulaire">
        <div className="container">
          <div className="reg-layout">
            <div className="reg-form-card" id="inscription-form">
              {done ? (
                <div className="confirmation-box">
                  <span className="confirmation-box__icon">
                    <span className="material-symbols-outlined">task_alt</span>
                  </span>
                  <h2 className="t-headline-md fw-800 c-primary">Pré-inscription Validée avec Succès !</h2>
                  <p className="t-body-lg c-muted">
                    Votre candidature pour la filière {filiere.name} est enregistrée. Le secrétariat de la {SITE.session} vous
                    contacte par SMS et WhatsApp sous 48h pour la confirmation du dossier.
                  </p>
                  <div className="confirmation-recap">
                    <p className="t-label c-outline up">Rappel de Rendez-vous :</p>
                    <p>
                      <strong>Date :</strong> {SITE.rentree} à 08h00
                    </p>
                    <p>
                      <strong>Lieu :</strong> Salle Multimédia Mairie de Batié
                    </p>
                    <p>
                      <strong>À apporter :</strong> 1 copie CNI ou acte de naissance + 1 bloc-notes
                    </p>
                  </div>
                  <div className="flex-center">
                    <button className="btn btn--soft btn--sm" onClick={() => setDone(false)} type="button">
                      <span className="material-symbols-outlined">edit</span>
                      <span>Modifier ma candidature</span>
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="stepper">
                    <div className="stepper__head">
                      <p className="t-title fw-700 c-primary">Candidature Officielle — {SITE.session}</p>
                      <span className="chip chip--red-soft">Étape {step} sur 4</span>
                    </div>
                    <div className="stepper__track">
                      <div className="stepper__fill" style={{ width: `${(step / 4) * 100}%` }} />
                    </div>
                    <div className="stepper__labels">
                      {STEPS.map((label, i) => (
                        <b className={i + 1 === step ? 'active' : ''} key={label}>
                          {label}
                        </b>
                      ))}
                    </div>
                  </div>

                  <form onSubmit={submit}>
                    {step === 1 && (
                      <div className="form-stack form-stack--lg">
                        <div className="info-strip">
                          <span className="material-symbols-outlined c-primary">person</span>
                          <span>
                            Renseignez votre état civil exact : les informations saisies serviront à établir
                            l’attestation officielle.
                          </span>
                        </div>
                        <div className="form-grid-2--md form-grid-2">
                          <div className="field">
                            <label htmlFor="nom">Nom de famille *</label>
                            <input
                              className="input input--lg"
                              id="nom"
                              onChange={(e) => set('nom', e.target.value)}
                              required
                              value={form.nom}
                            />
                          </div>
                          <div className="field">
                            <label htmlFor="prenom">Prénom(s) *</label>
                            <input
                              className="input input--lg"
                              id="prenom"
                              onChange={(e) => set('prenom', e.target.value)}
                              required
                              value={form.prenom}
                            />
                          </div>
                          <div className="field">
                            <label htmlFor="tel">Téléphone / WhatsApp *</label>
                            <input
                              className="input input--lg"
                              id="tel"
                              onChange={(e) => set('tel', e.target.value)}
                              placeholder="680270500"
                              required
                              type="tel"
                              value={form.tel}
                            />
                          </div>
                          <div className="field">
                            <label htmlFor="email">Adresse Email *</label>
                            <input
                              className="input input--lg"
                              id="email"
                              onChange={(e) => set('email', e.target.value)}
                              required
                              type="email"
                              value={form.email}
                            />
                          </div>
                          <div className="field">
                            <label htmlFor="age">Âge *</label>
                            <input
                              className="input input--lg"
                              id="age"
                              max="65"
                              min="15"
                              onChange={(e) => set('age', e.target.value)}
                              required
                              type="number"
                              value={form.age}
                            />
                          </div>
                          <div className="field">
                            <label htmlFor="niveau">Dernier Niveau d’Études *</label>
                            <select
                              className="select select--lg"
                              id="niveau"
                              onChange={(e) => set('niveau', e.target.value)}
                              required
                              value={form.niveau}
                            >
                              {NIVEAUX.map((n) => (
                                <option key={n} value={n}>
                                  {n}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>
                    )}

                    {step === 2 && (
                      <div className="form-stack form-stack--lg">
                        <div className="info-strip">
                          <span className="material-symbols-outlined c-primary">hub</span>
                          <span>
                            Une seule filière par candidature. Vous pourrez changer de spécialité au plus tard une
                            semaine après la rentrée.
                          </span>
                        </div>
                        <div className="form-grid-2">
                          {PROGRAMS.map((p, i) => (
                            <label
                              className={`radio-card${i === PROGRAMS.length - 1 ? ' radio-card--wide' : ''}`}
                              key={p.id}
                            >
                              <input
                                checked={form.filiere === p.id}
                                name="filiere"
                                onChange={() => set('filiere', p.id)}
                                type="radio"
                                value={p.id}
                              />
                              <span>
                                <span className="t-title fw-700 c-primary block">{p.name}</span>
                                <span className="t-body-sm c-muted">{p.software.slice(0, 3).join(' • ')}</span>
                              </span>
                            </label>
                          ))}
                        </div>
                      </div>
                    )}

                    {step === 3 && (
                      <div className="form-stack form-stack--lg">
                        <div className="info-strip">
                          <span className="material-symbols-outlined c-primary">schedule</span>
                          <span>Choisissez le créneau compatible avec vos contraintes familiales ou professionnelles.</span>
                        </div>
                        <div className="form-stack">
                          <label className="radio-card">
                            <input
                              checked={form.creneau === 'matin'}
                              name="creneau"
                              onChange={() => set('creneau', 'matin')}
                              type="radio"
                              value="matin"
                            />
                            <span>
                              <span className="t-title fw-700 c-primary block">Tranche Matin — 08h30 à 12h30</span>
                              <span className="t-body-sm c-muted">Du Lundi au Vendredi — Mairie de Batié</span>
                            </span>
                          </label>
                          <label className="radio-card">
                            <input
                              checked={form.creneau === 'apres-midi'}
                              name="creneau"
                              onChange={() => set('creneau', 'apres-midi')}
                              type="radio"
                              value="apres-midi"
                            />
                            <span>
                              <span className="t-title fw-700 c-secondary block">Tranche Après-Midi — 13h30 à 17h30</span>
                              <span className="t-body-sm c-muted">Du Lundi au Vendredi — Salles climatisées</span>
                            </span>
                          </label>
                        </div>
                        <div className="info-strip info-strip--gold">
                          <span className="material-symbols-outlined">local_fire_department</span>
                          <span>
                            Assiduité minimale requise : 85% des séances. Une absence non justifiée répétée peut
                            compromettre la délivrance de l’attestation.
                          </span>
                        </div>
                      </div>
                    )}

                    {step === 4 && (
                      <div className="form-stack form-stack--lg">
                        <div className="info-strip">
                          <span className="material-symbols-outlined c-primary">lightbulb</span>
                          <span>
                            Deux paragraphes suffisent. La commission d’admission lit chaque candidature : soyez sincère
                            et concret.
                          </span>
                        </div>
                        <div className="field">
                          <label htmlFor="motivation">Pourquoi souhaitez-vous suivre cette formation gratuite ? *</label>
                          <textarea
                            className="textarea"
                            id="motivation"
                            onChange={(e) => set('motivation', e.target.value)}
                            required
                            rows={4}
                            value={form.motivation}
                          />
                        </div>
                        <div className="field">
                          <label htmlFor="projet">Quel est votre projet professionnel ?</label>
                          <textarea
                            className="textarea"
                            id="projet"
                            onChange={(e) => set('projet', e.target.value)}
                            rows={4}
                            value={form.projet}
                          />
                        </div>
                        <label className="radio-card">
                          <input
                            checked={form.charte}
                            name="charte"
                            onChange={(e) => set('charte', e.target.checked)}
                            type="checkbox"
                          />
                          <span className="t-body-sm">
                            J’accepte la charte d’engagement FNF (discipline, assiduité 85%, respect du matériel) et je
                            certifie l’exactitude des informations fournies pour la rentrée du {SITE.rentree}.
                          </span>
                        </label>
                        {error && (
                          <div className="info-strip info-strip--error">
                            <span className="material-symbols-outlined">error</span>
                            <span>{error}</span>
                          </div>
                        )}
                      </div>
                    )}

                    <div className="step-actions">
                      {step > 1 ? (
                        <button className="btn btn--soft btn--sm" onClick={() => setStep((s) => s - 1)} type="button">
                          <span className="material-symbols-outlined">arrow_back</span>
                          <span>Retour</span>
                        </button>
                      ) : (
                        <span />
                      )}
                      {step < 4 ? (
                        <button className="btn btn--red" type="submit">
                          <span>Étape Suivante</span>
                          <span className="material-symbols-outlined">arrow_forward</span>
                        </button>
                      ) : (
                        <button className="btn btn--red" type="submit">
                          <span className="material-symbols-outlined">how_to_reg</span>
                          <span>Valider mon Inscription Gratuite</span>
                        </button>
                      )}
                    </div>
                  </form>
                </>
              )}
            </div>

            <aside className="reg-side">
              <div className="side-card">
                <span className="flex-row">
                  <span className="material-symbols-outlined c-secondary">health_and_safety</span>
                  <h3 className="t-title fw-700 c-primary">Garantie Fondation FNF</h3>
                </span>
                <ul className="check-list">
                  {GARANTIES.map((g) => (
                    <li key={g}>
                      <span className="material-symbols-outlined c-secondary">check_circle</span>
                      <span>{g}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="side-card">
                <span className="flex-row">
                  <span className="material-symbols-outlined c-primary">pin_drop</span>
                  <h3 className="t-title fw-700 c-primary">Lieu des Cours</h3>
                </span>
                <p className="t-body-sm c-muted">Mairie de Batié • Région de l’Ouest, Cameroun</p>
                <div className="map-box">
                  <span className="map-box__label t-label-sm fw-700 c-primary">
                    Mairie de Batié
                    <br />
                    Centre Multimédia FNF
                  </span>
                </div>
                <a className="linklike" href={MAPS_URL} rel="noreferrer" target="_blank">
                  <span className="material-symbols-outlined">map</span>
                  <span>Ouvrir le plan d’accès</span>
                </a>
                <ul className="check-list">
                  <li>
                    <span className="material-symbols-outlined c-primary">flag</span>
                    <span>Premier jour : guérite principale à 07h45, badge envoyé par SMS la veille.</span>
                  </li>
                  <li>
                    <span className="material-symbols-outlined c-primary">meeting_room</span>
                    <span>Rez-de-chaussée, aile droite — salles informatiques de la Fondation.</span>
                  </li>
                </ul>
              </div>

              <div className="side-card side-card--navy">
                <span className="flex-row">
                  <span className="material-symbols-outlined">support_agent</span>
                  <h3 className="t-title fw-700">Assistance &amp; Renseignements</h3>
                </span>
                <a className="assist-line" href={`tel:${SITE.phoneRaw}`}>
                  <span className="material-symbols-outlined">call</span>
                  <span>{SITE.phoneDisplay}</span>
                </a>
                <a className="assist-line" href={`mailto:${SITE.email}`}>
                  <span className="material-symbols-outlined">mail</span>
                  <span>{SITE.email}</span>
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <div className="reg-footer-band">
        <div className="container">
          <div className="reg-footer-band__inner">
            <span className="flex-row">
              <span className="material-symbols-outlined">workspace_premium</span>
              <div>
                <p className="t-headline-sm fw-800 c-primary">{SITE.slogan}</p>
                <p className="t-body-sm c-muted">
                  Apprentissage pratique • Encadrement de qualité • Résultats garantis • Avenir professionnel
                </p>
              </div>
            </span>
            <a className="btn btn--red btn--sm" href="#inscription-form">
              <span>Postuler dès maintenant</span>
              <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
