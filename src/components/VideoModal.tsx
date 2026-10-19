import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import studio from '../assets/img/studio-montage.webp'
import { SITE } from '../lib/site'

const CHAPTERS = [
  { time: '00:00', title: 'Visite des Salles & Équipements' },
  { time: '01:15', title: 'Atelier Réseaux & Maintenance' },
  { time: '02:30', title: 'Régie Vidéo & Infographie' },
  { time: '03:45', title: 'Modalités 8ème Session' },
]

export default function VideoModal({ onClose }: { onClose: () => void }) {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = previous
    }
  }, [onClose])

  return (
    <div aria-modal="true" className="modal" onClick={onClose} role="dialog">
      <div className="modal__box" onClick={(e) => e.stopPropagation()}>
        <div className="modal__head">
          <div className="modal__headbox">
            <span className="modal__icon">
              <span className="material-symbols-outlined c-secondary">play_circle</span>
            </span>
            <div>
              <div className="flex-row">
                <h3 className="t-title fw-700 c-white">Immersion Vidéo — IFP Multimédia FNF Batié</h3>
                <span className="chip chip--red hide-sm">
                  <span className="material-symbols-outlined">hd</span>
                  <span>HD 1080p</span>
                </span>
              </div>
              <p className="t-body-sm c-blue-dim">
                Découverte des équipements, ateliers pratiques et témoignages d’apprenants ({SITE.session})
              </p>
            </div>
          </div>
          <button aria-label="Fermer la vidéo" className="modal__close" onClick={onClose} type="button">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="modal__player">
          <img alt="Ateliers multimédia de l’IFP Multimédia FNF à Batié" src={studio} />
          <span className="media-tag media-tag--soft">
            <span className="dot dot--pulse" />
            <span>Formation 100% Pratique &amp; Gratuite</span>
          </span>
          <div className="modal__playercenter">
            <span className="modal__bigplay">
              <span className="material-symbols-outlined">play_arrow</span>
            </span>
          </div>
          <div className="modal__controls">
            <div className="modal__timeline">
              <i style={{ width: `${CHAPTERS.length ? (active + 1) * 25 : 35}%` }} />
            </div>
            <div className="modal__ctlrow">
              <div className="modal__ctlgroup">
                <span className="modal__ctl material-symbols-outlined">pause</span>
                <span className="modal__ctl material-symbols-outlined">volume_up</span>
                <span className="t-label">01:24 / 04:35</span>
              </div>
              <div className="modal__ctlgroup">
                <span className="t-label-sm c-surf-dim hide-sm">1080p 60fps</span>
                <span className="modal__ctl material-symbols-outlined">closed_caption</span>
                <span className="modal__ctl material-symbols-outlined">settings</span>
                <span className="modal__ctl material-symbols-outlined">fullscreen</span>
              </div>
            </div>
          </div>
        </div>

        <div className="modal__foot">
          <div className="flex-row">
            <span className="t-label c-outline up fw-700">
              <span className="material-symbols-outlined">list</span> Chapitres &amp; Séquences Clés
            </span>
            <span className="t-label c-primary fw-700 hide-sm">Cliquez sur un chapitre pour naviguer</span>
          </div>
          <div className="chapters">
            {CHAPTERS.map((c, i) => (
              <button className={`chapter${i === active ? ' active' : ''}`} key={c.time} onClick={() => setActive(i)} type="button">
                <span className="flex-row">
                  <span className="material-symbols-outlined c-secondary">
                    {i === active ? 'play_circle' : 'schedule'}
                  </span>
                  <span>
                    {c.time} — {c.title}
                  </span>
                </span>
                <span>{i === active ? 'En cours' : c.time}</span>
              </button>
            ))}
          </div>
          <div className="flex-row flex-wraprow">
            <p className="t-body-sm c-muted">Prise en charge intégrale FNF • {SITE.arreteShort}</p>
            <div className="flex-row">
              <button className="btn btn--soft btn--sm" onClick={onClose} type="button">
                Fermer
              </button>
              <Link className="btn btn--red btn--sm" to={{ pathname: '/', hash: '#inscription-section' }} onClick={onClose}>
                <span>S’inscrire</span>
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
