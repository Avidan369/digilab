import styles from './DigilabComingSoon.module.css';

type SocialLink = {
  label: string;
  href: string;
  icon: string;
};

const socialLinks: SocialLink[] = [
  {
    label: 'WhatsApp',
    href: 'https://wa.me/59176367777',
    icon: 'WA',
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/people/Digilab-Laboratorio-%C3%93ptico/61550926794023/',
    icon: 'FB',
  },

];

export default function DigilabComingSoon() {
  return (
    <main className={styles.page}>
      <section className={styles.hero} aria-label="Digilab coming soon">
        <div className={styles.bgOrbOne} />
        <div className={styles.bgOrbTwo} />
        <div className={styles.bgRing} />

        <div className={styles.content}>
          <div className={styles.logoStage}>
            <div className={styles.logoGlow} />

            <div className={styles.logoBox} aria-label="Digilab Laboratorio Óptico">
              <img
                src="https://cdn.digilablatam.com/logo_an.png"
                alt="Digilab Laboratorio Óptico"
                className={styles.logo}
                draggable={false}
              />
            </div>

            <div className={styles.scanLine} />
          </div>

          <div className={styles.textBlock}>
            <p className={styles.eyebrow}>Laboratorio óptico</p>

            <h1 className={styles.title}>
              Coming Soon
            </h1>

            <p className={styles.subtitle}>
              Estamos preparando una nueva experiencia digital.
            </p>

            <div className={styles.loader} aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
          </div>

          <nav className={styles.socials} aria-label="Redes sociales">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialButton}
                aria-label={item.label}
              >
                <span>{item.icon}</span>
                <small>{item.label}</small>
              </a>
            ))}
          </nav>

          <span className={styles.footerTExt}>© 2026 DigiLabLatam.com — Todos los derechos reservados. ®</span>
        </div>


      </section>


    </main>
  );
}