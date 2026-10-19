import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CATEGORIES, PROGRAMS, type ProgramCategory } from '../data/programs'
import { SITE } from '../lib/site'
import laboImg from '../assets/img/labo-info.webp'
import panoramaImg from '../assets/img/panorama-360.webp'
import studioImg from '../assets/img/studio-montage.webp'

const COURSE_IMG: Record<string, string> = {
  bureautique: laboImg,
  infographie: studioImg,
  montage: studioImg,
  web: panoramaImg,
  maintenance: panoramaImg,
}

const INFRA = [
  {
    icon: 'devices',
    tone: 'g-icon--fixed',
    title: '1 Étudiant = 1 Ordinateur Haute Performance',
    text: 'Chaque apprenant dispose de sa propre machine, équipée des licences professionnelles requises par la filière.',
    points: ['Poste dédié toute la session', 'Sauvegarde personnelle sur le serveur du campus'],
  },
  {
    icon: 'wifi',
    tone: 'g-icon--redsoft',
    title: 'Connexion Internet Haut Débit Permanente',
    text: 'Fibre optique dédiée et relais mobile : téléchargement des assets, tests de sites en ligne et cloud.',
    points: ['Cloud & dépôt de travaux', 'Séances de visioconférence avec les intervenants'],
  },
  {
    icon: 'supervisor_account',
    tone: 'g-icon--goldsoft',
    title: 'Formateurs Experts & Encadrement de Proximité',
    text: 'Des praticiens du terrain, déclarés auprès du MINEFOP, avec un ratio d’encadrement adapté aux ateliers.',
    points: ['Suivi individuel de l’assiduité', 'Soutien supplémentaire le samedi matin'],
  },
]

const FAQ = [
  {
    q: 'Les formations sont-elles vraiment 100% gratuites ?',
    a: 'Oui. La Fondation Francis Ngannou prend en charge l’intégralité des frais : inscription, cycle d’apprentissage, supports de cours et utilisation des équipements. Aucune contrepartie financière n’est demandée à l’apprenant, en échange d’un engagement de discipline et d’assiduité.',
  },
  {
    q: 'Obtient-on un certificat reconnu par l’État ?',
    a: 'Le centre est un établissement technique privé agréé. Chaque fin de cycle donne lieu à une attestation officielle FNF validée dans le cadre de l’Arrêté N°000760/MINEFOP/SG/DFOP/SDGSF/CSACD/BAC du 26 Décembre 2025.',
  },
  {
    q: 'Faut-il posséder son propre ordinateur ?',
    a: 'Ce n’est pas obligatoire. Des postes complets sont réservés à Batié pendant toute la durée du cycle. Un ordinateur portable personnel, si vous en avez un, facilite simplement les exercices à la maison.',
  },
  {
    q: 'Quelles pièces fournir pour la 8ème session ?',
    a: 'Une copie de la CNI ou de l’acte de naissance, deux photos 4x4 et la fiche d’engagement dûment signée. Le dépôt se fait au secrétariat de la Mairie de Batié, du lundi au vendredi de 08h00 à 17h00.',
  },
]

export default function Formations() {
  const [filter, setFilter] = useState<ProgramCategory | 'all'>('all')
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const list = filter === 'all' ? PROGRAMS : PROGRAMS.filter((p) => p.category === filter)

  return (
    <>
      <div className="cert-banner">
        <div className="container">
          <div className="cert-banner__inner">
            <div className="cert-banner__box">
              <span className="cert-banner__icon">
                <span className="material-symbols-outlined">workspace_premium</span>
              </span>
              <div>
                <p className="t-title fw-700">Certifications Officielles Agréées MINEFOP</p>
                <p className="t-body-sm c-blue-dim">
                  Arrêté Ministériel N°000760 • Formations 100% Gratuites
                </p>
              </div>
            </div>
            <span className="chip chip--red">
              <span className="dot dot--pulse" />
              <span>{SITE.session} : Rentrée 11 Janv. 2027</span>
            </span>
          </div>
        </div>
      </div>

      {/* Éditorial */}
      <section className="section bg-low">
        <div className="container">
          <div className="editorial-grid">
            <div className="gap-grid">
              <span className="chip chip--navy">Pôle d’Excellence Numérique Francis Ngannou</span>
              <h1 className="t-headline-lg fw-800 c-primary">
                Nos Domaines de Formation Pratique — 100% Gratuits et Certifiants
              </h1>
              <p className="t-body-lg c-muted">
                {SITE.tagline} Cinq filières métiers du numérique enseignées à la Mairie de Batié, avec matériel
                individuel, projets réels et accompagnement personnalisé jusqu’à l’insertion.
              </p>
              <div className="assur-row">
                <span className="assur-pill">
                  <span className="material-symbols-outlined c-primary">verified_user</span>
                  <span>Zéro Frais d’Inscription</span>
                </span>
                <span className="assur-pill">
                  <span className="material-symbols-outlined c-primary">terminal</span>
                  <span>Poste Individuel Équipé</span>
                </span>
                <span className="assur-pill">
                  <span className="material-symbols-outlined c-primary">badge</span>
                  <span>Diplôme Reconnu par l’État</span>
                </span>
              </div>
            </div>

            <aside className="metric-card">
              <span className="metric-card__glow" />
              <div className="metric-card__inner">
                <span className="chip chip--urg">Appel à candidatures</span>
                <p className="t-title">Prochaine Rentrée</p>
                <p className="t-label c-blue-dim up">Session 8 • Campus Municipal de Batié</p>
                <div className="metric-card__date">
                  <span className="t-display fw-800">11</span>
                  <span className="t-headline-sm fw-700">Janvier 2027</span>
                </div>
                <p className="t-body-sm c-blue-dim">
                  Places strictement limitées par salle machine. Dépôt des dossiers dès maintenant au secrétariat.
                </p>
                <Link className="btn btn--red btn--block" to="/inscription">
                  <span className="material-symbols-outlined">how_to_reg</span>
                  <span>M’inscrire à la {SITE.session}</span>
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Filtres */}
      <div className="filterbar">
        <div className="container">
          <div className="filterbar__inner">
            <div className="filter-tabs">
              {CATEGORIES.map((c) => (
                <button
                  className={`filter-btn${filter === c.value ? ' active' : ''}`}
                  key={c.value}
                  onClick={() => setFilter(c.value)}
                  type="button"
                >
                  {c.label}
                </button>
              ))}
            </div>
            <span className="filterbar__count">
              <span className="material-symbols-outlined">filter_list</span>
              <span>
                {list.length} Filière{list.length > 1 ? 's' : ''} Affichée{list.length > 1 ? 's' : ''}
              </span>
            </span>
          </div>
        </div>
      </div>

      {/* Liste des filières */}
      <section className="section bg-surface">
        <div className="container">
          <div className="course-list">
            {list.map((p) => (
              <article className="course-card" id={`filiere-${p.id}`} key={p.id}>
                <div className="course-grid">
                  <div className="course-media">
                    <img alt={`Atelier ${p.name}`} src={COURSE_IMG[p.id]} />
                    <div className="course-media__tags">
                      {p.mediaTags.map((t, i) => (
                        <span className={`media-glass${i === 1 ? ' media-glass--dark' : ''}`} key={t}>
                          <span className="material-symbols-outlined">{i === 1 ? 'trending_up' : 'schedule'}</span>
                          <span>{t}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="course-body">
                    <div>
                      <div className="course-title-row">
                        <h2 className="t-headline-sm fw-700 c-primary">{p.name}</h2>
                        <span className="course-duration">
                          <span className="material-symbols-outlined">timer</span>
                          <span>Cycle Intensif : {p.months} Mois</span>
                        </span>
                      </div>
                      <p className="t-body-sm c-muted mt-4">{p.description}</p>

                      <div className="stack-grid mt-6">
                        <div className="stack-box">
                          <span className="stack-box__label">
                            <span className="material-symbols-outlined">tech</span>
                            <span>Logiciels Maîtrisés</span>
                          </span>
                          <div className="tech-chips">
                            {p.software.map((s) => (
                              <span className="tech-chip" key={s}>
                                {s}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="stack-box">
                          <span className="stack-box__label">
                            <span className="material-symbols-outlined">split_scene</span>
                            <span>Format d’Étude</span>
                          </span>
                          <div className="split-bar">
                            <i className="p-blue" style={{ width: `${p.pratique}%` }} />
                            <i className="p-red" style={{ width: `${p.theorie}%` }} />
                          </div>
                          <div className="split-legend">
                            <span>{p.pratique}% Pratique</span>
                            <span>{p.theorie}% Théorie</span>
                          </div>
                        </div>
                      </div>

                      <div className="course-points">
                        <div className="point">
                          <span className="material-symbols-outlined c-secondary">check_circle</span>
                          <span>
                            <strong>Débouchés :</strong> {p.debouche}
                          </span>
                        </div>
                        <div className="point">
                          <span className="material-symbols-outlined c-primary">info</span>
                          <span>
                            <strong>Prérequis :</strong> {p.prerequis}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="course-actions">
                      <span className="course-cert">
                        <span className="material-symbols-outlined">verified</span>
                        <span>{p.certification}</span>
                      </span>
                      <Link className="btn btn--red btn--sm" to="/inscription">
                        <span>Postuler pour cette filière</span>
                        <span className="material-symbols-outlined">arrow_forward</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructures */}
      <section className="section bg-white" id="infrastructures">
        <div className="container gap-grid gap-grid--2">
          <div className="center">
            <span className="chip chip--navy">
              <span className="material-symbols-outlined">360</span>
              <span>Infrastructures du Campus</span>
            </span>
            <h2 className="t-headline-md fw-700 c-primary mt-4">
              Visite Virtuelle des Salles &amp; Moyens Techniques
            </h2>
            <p className="t-body-lg c-muted mt-2">
              Trois principes intangibles : un poste par apprenant, des outils professionnels et un encadrement présent
              chaque jour.
            </p>
          </div>

          <div className="infra-grid">
            {INFRA.map((i) => (
              <div className="infra-card" key={i.title}>
                <div>
                  <span className={`infra-card__icon g-icon ${i.tone}`}>
                    <span className="material-symbols-outlined">{i.icon}</span>
                  </span>
                  <h3 className="t-title fw-700 c-primary mt-4">{i.title}</h3>
                  <p className="t-body-sm c-muted mt-2">{i.text}</p>
                </div>
                <ul className="module-list">
                  {i.points.map((pt) => (
                    <li key={pt}>
                      <span className="material-symbols-outlined c-secondary">check_circle</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="visit-bar visit-bar__grad">
            <div className="visit-bar__box">
              <span className="visit-bar__icon">
                <span className="material-symbols-outlined">map</span>
              </span>
              <div>
                <p className="t-title fw-700">Planifier une visite guidée à Batié</p>
                <p className="t-body-sm c-blue-dim">
                  Samedi matin et en semaine : découvrez les salles avant de déposer votre dossier.
                </p>
              </div>
            </div>
            <Link className="btn btn--red btn--sm" to="/contact">
              <span>Organiser ma visite</span>
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Tableau comparatif */}
      <section className="section bg-low">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="chip chip--gold">Comparatif des Filières</span>
              <h2 className="t-headline-md fw-700 c-primary section-head__title">
                Durée, pratique, prérequis : comparez avant de choisir
              </h2>
            </div>
          </div>

          <div className="table-wrap">
            <table className="compare-table">
              <thead>
                <tr>
                  <th>Filière</th>
                  <th>Durée</th>
                  <th>Répartition</th>
                  <th>Prérequis</th>
                  <th>Coût</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {PROGRAMS.map((p) => (
                  <tr key={p.id}>
                    <td className="fname">
                      <span className="material-symbols-outlined c-primary">{p.icon}</span>
                      <span>{p.shortName}</span>
                    </td>
                    <td>{p.months} mois</td>
                    <td>
                      <span className="chip chip--surface">
                        {p.pratique}% pratique / {p.theorie}% théorie
                      </span>
                    </td>
                    <td>{p.prerequis.split('.')[0]}</td>
                    <td className="fcost">
                      <strong>Gratuit</strong> (100% offert)
                    </td>
                    <td className="faction">
                      <Link className="table-btn" to={{ pathname: '/inscription', hash: `#filiere-${p.id}` }}>
                        Choisir
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-white">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="chip chip--blue">Questions Fréquentes</span>
              <h2 className="t-headline-md fw-700 c-primary section-head__title">
                Tout ce que les candidats demandent avant de s’inscrire
              </h2>
            </div>
            <Link className="btn btn--soft" to="/contact">
              <span>Poser une autre question</span>
              <span className="material-symbols-outlined">mail</span>
            </Link>
          </div>

          <div className="faq-list">
            {FAQ.map((f, i) => (
              <div className="faq-item" key={f.q}>
                <button
                  className={`faq-q${openFaq === i ? ' open' : ''}`}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  type="button"
                >
                  <span>{f.q}</span>
                  <span className="material-symbols-outlined">expand_more</span>
                </button>
                {openFaq === i && <p className="faq-a">{f.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bandeau final */}
      <section className="push-band">
        <div className="container">
          <div className="push-card">
            <span className="chip chip--red">
              <span className="material-symbols-outlined">local_fire_department</span>
              <span>Inscriptions Ouvertes — {SITE.session}</span>
            </span>
            <h2 className="t-headline-md fw-800 c-primary mt-4">
              Rejoignez {SITE.foundation} et bâtissez votre avenir numérique
            </h2>
            <p className="t-body-lg c-muted mt-4">
              Rentrée solennelle le {SITE.rentree} à la Salle Multimédia de la Mairie de Batié. Les places en salle
              machine sont limitées : déposez votre dossier dès aujourd’hui.
            </p>
            <div className="push-card__cta">
              <Link className="btn btn--red" to="/inscription">
                <span className="material-symbols-outlined">how_to_reg</span>
                <span>S’inscrire Immédiatement en Ligne</span>
              </Link>
              <a className="btn btn--blue" href={`tel:${SITE.phoneRaw}`}>
                <span className="material-symbols-outlined">call</span>
                <span>Appeler au {SITE.phoneShort}</span>
              </a>
            </div>
            <div className="push-stats">
              <div className="stat">
                <span className="stat__icon g-icon--fixed">
                  <span className="material-symbols-outlined">redeem</span>
                </span>
                <div>
                  <p className="t-headline-sm fw-800 c-primary">100%</p>
                  <p className="t-body-sm c-muted">Pris en charge par la FNF</p>
                </div>
              </div>
              <div className="stat">
                <span className="stat__icon g-icon--redsoft">
                  <span className="material-symbols-outlined">code_blocks</span>
                </span>
                <div>
                  <p className="t-headline-sm fw-800 c-primary">80%</p>
                  <p className="t-body-sm c-muted">De pratique sur machine</p>
                </div>
              </div>
              <div className="stat">
                <span className="stat__icon g-icon--goldsoft">
                  <span className="material-symbols-outlined">verified</span>
                </span>
                <div>
                  <p className="t-headline-sm fw-800 c-primary">MINEFOP</p>
                  <p className="t-body-sm c-muted">Attestation agréée</p>
                </div>
              </div>
              <div className="stat">
                <span className="stat__icon g-icon--highest">
                  <span className="material-symbols-outlined">location_on</span>
                </span>
                <div>
                  <p className="t-headline-sm fw-800 c-primary">Batié</p>
                  <p className="t-body-sm c-muted">Campus municipal de l’Ouest</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
