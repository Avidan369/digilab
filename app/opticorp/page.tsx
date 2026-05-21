import type { CSSProperties } from 'react';
import styles from './page.module.css';

const SITE_CONFIG = {
  companyName: 'ÓPTICA VISIÓN',
  legalRepresentative: 'Nombre completo del representante legal',
  whatsappUrl: 'https://wa.me/59162243462',
  facebookUrl: 'https://www.facebook.com/OpticasYlaboratorios',
  linkedinUrl: 'https://linkedin.com',
  backgroundImage: 'https://cdn.opticorp.com.bo/base.jpg',
};

export default function HomePage() {
  const pageStyle = {
    '--bg-image': `url("${SITE_CONFIG.backgroundImage}")`,
  } as CSSProperties;

  return (
    <main className={styles.page} style={pageStyle}>
      <div className={styles.imageLayer} />
      <div className={styles.overlay} />

      <section className={styles.shell}>
        <header className={styles.header}>
          <div className={styles.logo} >
            <img src={"https://cdn.opticorp.com.bo/logo.png"}/>
          </div>

          {/* <strong>{SITE_CONFIG.companyName}</strong> */}
        </header>

        <div className={styles.hero}>
          <div className={styles.status}>
            <span />
            Muy pronto
          </div>

          <h1>
            Una nueva visión está llegando.
          </h1>

          <p>
           Estamos preparando una nueva experiencia digital.
          </p>

          <div className={styles.loading} aria-hidden="true">
            <span />
          </div>
        </div>

        <footer className={styles.footer}>
          {/* <div className={styles.legal}>
            <span>Representante legal</span>
            <strong>{SITE_CONFIG.legalRepresentative}</strong>
          </div> */}

          <nav className={styles.actions} aria-label="Redes sociales">
            <a href={SITE_CONFIG.whatsappUrl} target="_blank" rel="noreferrer">
              WhatsApp
            </a>

            <a href={SITE_CONFIG.facebookUrl} target="_blank" rel="noreferrer">
              Facebook
            </a>

            <a href={SITE_CONFIG.linkedinUrl} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </nav>
        </footer>
      </section>
    </main>
  );
}