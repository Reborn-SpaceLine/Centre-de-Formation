import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { NAV, SITE } from '../lib/site'

function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1))
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname, hash])

  return null
}

function navItem(item: (typeof NAV)[number], onNavigate?: () => void) {
  const to = item.hash ? { pathname: item.to, hash: `#${item.hash}` } : item.to
  if (item.hash) {
    return (
      <Link key={item.label} to={to} onClick={onNavigate}>
        {item.label}
      </Link>
    )
  }
  return (
    <NavLink key={item.label} to={item.to} end onClick={onNavigate}>
      {item.label}
    </NavLink>
  )
}

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <ScrollManager />
      <div className="topbar">
        <div className="announce">
          <div className="announce__inner">
            <span className="material-symbols-outlined">campaign</span>
            <span>
              Inscriptions ouvertes pour la {SITE.session} — Rentrée le {SITE.rentree} à la Mairie de Batié !
            </span>
          </div>
        </div>
        <header className="header">
          <div className="header__inner">
            <Link className="brand" to="/" onClick={() => setMenuOpen(false)}>
              <span className="brand__logo">
                <span className="material-symbols-outlined">school</span>
              </span>
              <div>
                <div className="brand__row">
                  <span className="brand__name">IFP Multimédia — FNF</span>
                  <span className="chip chip--gold brand__free">100% Gratuite</span>
                </div>
                <div className="brand__sub">Fondation Francis Ngannou • {SITE.arreteShort}</div>
              </div>
            </Link>

            <nav className="nav">{NAV.map((item) => navItem(item))}</nav>

            <div className="header__actions">
              <Link className="btn btn--red btn--sm header__cta" to="/inscription">
                <span className="material-symbols-outlined">how_to_reg</span>
                <span>S’inscrire Maintenant</span>
              </Link>
              <button
                aria-expanded={menuOpen}
                aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
                className="navtoggle"
                onClick={() => setMenuOpen((v) => !v)}
                type="button"
              >
                <span className="material-symbols-outlined">{menuOpen ? 'close' : 'menu'}</span>
              </button>
            </div>
          </div>

          {menuOpen && <nav className="navmobile">{NAV.map((item) => navItem(item, () => setMenuOpen(false)))}</nav>}
        </header>
      </div>

      <main className="sitelayout">
        <Outlet />
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer__grid">
            <div>
              <div className="footer__brand">
                <span className="footer__logo">
                  <span className="material-symbols-outlined">school</span>
                </span>
                <span className="brand__name">IFP Multimédia</span>
              </div>
              <p className="t-body-sm c-surf-dim mt-4">
                {SITE.tagline} Des compétences concrètes pour un avenir assuré sous l’égide de la {SITE.foundation}.
              </p>
              <span className="chip chip--surface mt-4">
                <span className="material-symbols-outlined">verified</span>
                <span>Agréé MINEFOP</span>
              </span>
            </div>

            <div className="footer__col">
              <h4>Filières Métiers</h4>
              <ul>
                <li>
                  <Link to="/formations">Bureautique &amp; Outils Collaboratifs</Link>
                </li>
                <li>
                  <Link to="/formations">Infographie &amp; Design Graphique</Link>
                </li>
                <li>
                  <Link to="/formations">Montage Photo &amp; Vidéo Professionnel</Link>
                </li>
                <li>
                  <Link to="/formations">Développement Web &amp; Applications</Link>
                </li>
                <li>
                  <Link to="/formations">Maintenance Informatique &amp; Réseaux</Link>
                </li>
              </ul>
            </div>

            <div className="footer__col">
              <h4>Institut &amp; Campus</h4>
              <ul>
                <li>
                  <Link to={{ pathname: '/', hash: '#pourquoi-section' }}>La Vision Francis Ngannou</Link>
                </li>
                <li>
                  <Link to={{ pathname: '/', hash: '#inscription-section' }}>Calendrier Académique</Link>
                </li>
                <li>
                  <Link to="/inscription">Modalités d’Admission Gratuite</Link>
                </li>
                <li>
                  <Link to="/contact">Contact &amp; Localisation à Batié</Link>
                </li>
              </ul>
            </div>

            <div className="footer__col">
              <h4>Contact Direct</h4>
              <ul>
                <li className="footer__contact-item">
                  <span className="material-symbols-outlined">location_on</span>
                  <span>{SITE.location}</span>
                </li>
                <li className="footer__contact-item">
                  <span className="material-symbols-outlined">call</span>
                  <a href={`tel:${SITE.phoneRaw}`}>{SITE.phoneDisplay}</a>
                </li>
                <li className="footer__contact-item">
                  <span className="material-symbols-outlined">mail</span>
                  <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
                </li>
                <li className="footer__contact-item">
                  <span className="material-symbols-outlined">schedule</span>
                  <span>Lun — Ven : 08h00 - 17h00</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer__legal">
            <p>© 2026 IFP Multimédia — {SITE.foundation}. Tous droits réservés.</p>
            <p>Agréé par le MINEFOP : {SITE.arrete}</p>
          </div>
        </div>
      </footer>
    </>
  )
}
