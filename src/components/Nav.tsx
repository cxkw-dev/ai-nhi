import { useEffect, useRef } from 'react';

const DARK_SECTIONS = new Set(['parallax-break', 'experience', 'contact']);
const NAV_ITEMS = [
  { id: 'about', label: 'about' },
  { id: 'experience', label: 'work' },
  { id: 'travel', label: 'travel' },
  { id: 'contact', label: 'contact' },
] as const;

const scrollTo = (event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
  event.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

export default function Nav() {
  const headerRef = useRef<HTMLElement>(null);
  const brandTheme = useRef<'light' | 'dark'>('light');
  const linksTheme = useRef<'light' | 'dark'>('light');

  useEffect(() => {
    const header = headerRef.current;
    const sections = Array.from(document.querySelectorAll<HTMLElement>('[data-section]'));
    if (!header || sections.length === 0) return;

    let frame = 0;
    const sectionAt = (sampleY: number) => sections.find((section) => {
        const bounds = section.getBoundingClientRect();
        return bounds.top <= sampleY && bounds.bottom > sampleY;
      });
    const themeFor = (section: HTMLElement | undefined) => {
      const sectionName = section?.dataset.section ?? '';
      if (DARK_SECTIONS.has(sectionName)) return 'dark';
      return 'light';
    };
    const updateTheme = () => {
      const mobile = window.matchMedia('(max-width: 900px)').matches;
      const brandSection = sectionAt(36);
      const linksSection = sectionAt(mobile ? window.innerHeight - 36 : 36);
      const nextBrandTheme = themeFor(brandSection);
      const nextLinksTheme = themeFor(linksSection);
      const brand = header.querySelector<HTMLElement>('[data-nav="brand"]');
      const links = header.querySelector<HTMLElement>('[data-nav="links"]');

      if (brand && nextBrandTheme !== brandTheme.current) {
        brandTheme.current = nextBrandTheme;
        brand.dataset.theme = nextBrandTheme;
      }
      if (links && nextLinksTheme !== linksTheme.current) {
        linksTheme.current = nextLinksTheme;
        links.dataset.theme = nextLinksTheme;
      }
      frame = 0;
    };
    const scheduleThemeUpdate = () => {
      if (frame === 0) frame = window.requestAnimationFrame(updateTheme);
    };

    updateTheme();
    window.addEventListener('scroll', scheduleThemeUpdate, { passive: true });
    window.addEventListener('resize', scheduleThemeUpdate);
    return () => {
      window.removeEventListener('scroll', scheduleThemeUpdate);
      window.removeEventListener('resize', scheduleThemeUpdate);
      if (frame !== 0) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <header ref={headerRef} data-nav="shell">
      <a data-nav="brand" data-theme="light" aria-label="Back to top" href="#top" onClick={(event) => scrollTo(event, 'top')}>n/m</a>
      <nav data-nav="links" data-theme="light" aria-label="Primary navigation">
        {NAV_ITEMS.map(({ id, label }) => (
          <a key={id} href={`#${id}`} onClick={(event) => scrollTo(event, id)}>{label}</a>
        ))}
      </nav>
    </header>
  );
}
