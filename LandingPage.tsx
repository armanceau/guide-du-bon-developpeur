import React, { useState } from 'react';

const GITHUB_URL = 'https://github.com/armanceau/guide-du-bon-developpeur';

const SECTIONS = [
  { n: '01', title: 'Introduction',           desc: 'Le cadre général du guide' },
  { n: '02', title: 'Code Reviews',            desc: 'Revues constructives et bienveillantes' },
  { n: '03', title: 'Tests',                   desc: 'Unitaires, intégration, e2e' },
  { n: '04', title: 'Git & Versionning',       desc: 'Commits, branches, workflows' },
  { n: '05', title: 'Architecture',            desc: 'SOLID, patterns, responsabilités' },
  { n: '06', title: 'Clean Code',              desc: 'Nommage, fonctions, lisibilité' },
  { n: '07', title: 'Documentation',           desc: 'Documenter sans sur-documenter' },
  { n: '08', title: 'REST API',                desc: 'HTTP, verbes, conventions' },
  { n: '09', title: 'Java & Spring',           desc: 'Fondamentaux pour l\'entretien' },
  { n: '10', title: 'System Design',           desc: 'Scalabilité, cache, distribution' },
  { n: '11', title: 'Paradigmes',              desc: 'DDD, TDD, BDD' },
  { n: '12', title: 'Software Craftsmanship',  desc: 'Culture, valeurs, métaphores' },
];

export default function LandingPage({ firstDocPath }: { firstDocPath: string }) {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", background: '#0c0c0c', minHeight: '100vh', color: '#f0f0f0' }}>

      {/* ── Nav ─────────────────────────────────────────────────── */}
      <nav style={{ borderBottom: '1px solid #1e1e1e', padding: '0 40px', height: 56, display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, background: '#0c0c0ccc', backdropFilter: 'blur(12px)', zIndex: 50 }}>
        <span style={{ fontFamily: 'monospace', fontSize: 12, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#555' }}>
          guide-du-bon-développeur
        </span>
        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" style={{ fontSize: 13, color: '#555', textDecoration: 'none' }}>
            GitHub
          </a>
          <a href="/fr/introduction" style={{ fontSize: 13, color: '#0c0c0c', background: '#f0f0f0', padding: '6px 14px', borderRadius: 4, textDecoration: 'none', fontWeight: 500 }}>
            Lire →
          </a>
        </div>
      </nav>

      {/* ── Hero ────────────────────────────────────────────────── */}
      <section style={{ padding: '120px 40px 80px', maxWidth: 960, margin: '0 auto' }}>
        <p style={{ fontFamily: 'monospace', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#444', marginBottom: 32 }}>
          v2 · 12 sections · open source
        </p>

        <h1 style={{ fontSize: 'clamp(48px, 8vw, 96px)', fontWeight: 700, lineHeight: 1, letterSpacing: '-0.04em', margin: 0, marginBottom: 8 }}>
          Les pratiques
        </h1>
        <h1 style={{ fontSize: 'clamp(48px, 8vw, 96px)', fontWeight: 700, lineHeight: 1, letterSpacing: '-0.04em', margin: 0, marginBottom: 8, color: '#555' }}>
          qui font
        </h1>
        <h1 style={{ fontSize: 'clamp(48px, 8vw, 96px)', fontWeight: 700, lineHeight: 1, letterSpacing: '-0.04em', margin: 0, marginBottom: 48 }}>
          la différence.
        </h1>

        <p style={{ fontSize: 16, lineHeight: 1.7, color: '#888', maxWidth: 480, marginBottom: 48 }}>
          Un guide de référence sur les bonnes pratiques de développement logiciel —
          code reviews, tests, architecture, clean code et bien plus.
        </p>

        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <a
            href="/fr/introduction"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#f0f0f0', color: '#0c0c0c', padding: '12px 24px', borderRadius: 6, fontSize: 14, fontWeight: 600, textDecoration: 'none', letterSpacing: '-0.01em' }}
          >
            Commencer à lire
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, border: '1px solid #2a2a2a', color: '#888', padding: '12px 24px', borderRadius: 6, fontSize: 14, textDecoration: 'none' }}
          >
            <svg width="15" height="15" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" /></svg>
            GitHub
          </a>
        </div>
      </section>

      {/* ── Divider ─────────────────────────────────────────────── */}
      <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 40px' }}>
        <div style={{ height: 1, background: '#1e1e1e' }} />
      </div>

      {/* ── Sections ────────────────────────────────────────────── */}
      <section style={{ maxWidth: 960, margin: '0 auto', padding: '80px 40px 120px' }}>
        <p style={{ fontFamily: 'monospace', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#444', marginBottom: 48 }}>
          Au programme
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))', gap: 0 }}>
          {SECTIONS.map((s) => (
            <a
              key={s.n}
              href="/fr/introduction"
              onMouseEnter={() => setHovered(s.n)}
              onMouseLeave={() => setHovered(null)}
              style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: 20,
                padding: '20px 0',
                borderBottom: '1px solid #1a1a1a',
                textDecoration: 'none',
                transition: 'background 0.15s',
                paddingLeft: hovered === s.n ? 12 : 0,
              }}
            >
              <span style={{ fontFamily: 'monospace', fontSize: 11, color: '#333', minWidth: 28 }}>
                {s.n}
              </span>
              <div>
                <div style={{ fontSize: 15, fontWeight: 500, color: hovered === s.n ? '#f0f0f0' : '#ccc', letterSpacing: '-0.02em', transition: 'color 0.15s' }}>
                  {s.title}
                </div>
                <div style={{ fontSize: 12, color: '#555', marginTop: 2 }}>
                  {s.desc}
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────────── */}
      <footer style={{ borderTop: '1px solid #1a1a1a', padding: '24px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
        <span style={{ fontFamily: 'monospace', fontSize: 11, color: '#333', letterSpacing: '0.1em' }}>
          GUIDE DU BON DÉVELOPPEUR
        </span>
        <div style={{ display: 'flex', gap: 24 }}>
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" style={{ fontSize: 12, color: '#444', textDecoration: 'none' }}>
            GitHub
          </a>
          <a href="/fr/introduction" style={{ fontSize: 12, color: '#444', textDecoration: 'none' }}>
            Documentation
          </a>
        </div>
      </footer>
    </div>
  );
}
