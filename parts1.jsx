// parts1.jsx — Spark, Arrow, Nav, Hero, Mission, Capabilities

function Spark({ size = 24, className = '' }) {
  return (
    <span className={`spark${className ? ' ' + className : ''}`}>
      <svg width={size} height={size} viewBox="0 0 24 24" fill="var(--accent)">
        <path d="M12 0 C12.6 6.4 17.6 11.4 24 12 C17.6 12.6 12.6 17.6 12 24 C11.4 17.6 6.4 12.6 0 12 C6.4 11.4 11.4 6.4 12 0 Z"/>
      </svg>
    </span>
  );
}

function Arrow() {
  return (
    <svg className="arr" width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M2 12 L12 2 M12 2 H5 M12 2 V9"/>
    </svg>
  );
}

// ─── Logo (inline SVG for color flexibility) ─────────────────
function Logo({ height = 26, variant = 'white' }) {
  const fill = variant === 'blue' ? '#1A40D1' : '#EEF1FB';
  return (
    <svg height={height} viewBox="0 0 1165 381" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Spark above R */}
      <g transform="matrix(1.363297,0,0,1.363297,-857.118171,315.326322) translate(0,-1340)">
        <path d="M2261 1075 C2261 1074 2260 1073 2259 1073 C2259 1073 2258 1074 2258 1075 C2251 1101 2230 1122 2204 1129 C2203 1129 2202 1130 2202 1130 C2202 1131 2203 1132 2204 1132 C2230 1138 2251 1159 2258 1186 C2258 1187 2259 1187 2259 1187 C2260 1187 2261 1187 2261 1186 C2268 1159 2289 1138 2315 1132 C2316 1132 2316 1131 2316 1130 C2316 1130 2316 1129 2315 1129 C2289 1122 2268 1101 2261 1075 Z" fill={fill}/>
      </g>
      {/* L */}
      <g transform="matrix(1.07182,0,0,1.07182,-106.605639,257.62117) translate(0,-1340)">
        <path d="M1171 1763 L1171 1514 L1241 1514 L1241 1707 L1360 1707 L1360 1763 Z" fill={fill}/>
      </g>
      {/* U */}
      <g transform="matrix(1.07182,0,0,1.07182,-106.605639,257.62117) translate(0,-1340)">
        <path d="M1500 1763 C1463 1763 1434 1753 1414 1733 C1393 1713 1383 1689 1383 1652 L1383 1514 L1453 1514 L1453 1650 C1453 1671 1457 1682 1466 1691 C1474 1700 1486 1705 1500 1705 C1515 1705 1527 1700 1535 1691 C1543 1682 1547 1671 1547 1650 L1547 1514 L1617 1514 L1617 1652 C1617 1689 1606 1713 1586 1733 C1565 1753 1536 1763 1500 1763 Z" fill={fill}/>
      </g>
      {/* X */}
      <g transform="matrix(1.07182,0,0,1.07182,-106.605639,257.62117) translate(0,-1340)">
        <path d="M1766 1686 L1716 1763 L1635 1763 L1726 1637 L1639 1514 L1718 1514 L1768 1586 L1817 1514 L1893 1514 L1807 1634 L1899 1763 L1818 1763 Z" fill={fill}/>
      </g>
      {/* R */}
      <g transform="matrix(1.07182,0,0,1.07182,-106.605639,257.62117) translate(0,-1340)">
        <path d="M1986 1697 L1986 1763 L1916 1763 L1916 1514 L2027 1514 C2063 1514 2091 1522 2111 1539 C2130 1555 2140 1577 2140 1606 C2140 1625 2135 1641 2126 1654 C2118 1667 2106 1677 2091 1684 L2145 1763 L2070 1763 L2024 1697 Z M1986 1642 L2025 1642 C2040 1642 2051 1639 2058 1633 C2065 1626 2069 1617 2069 1606 C2069 1594 2065 1585 2058 1579 C2051 1573 2040 1569 2025 1569 Z" fill={fill}/>
      </g>
    </svg>
  );
}

// ─── Nav ─────────────────────────────────────────────────────
function Nav({ theme }) {
  const [scrolled, setScrolled] = React.useState(false);
  const [active, setActive] = React.useState('');

  React.useEffect(() => {
    const sections = ['mission','capabilities','portfolio','contact'];
    const handler = () => {
      setScrolled(window.scrollY > 40);
      const sy = window.scrollY + 80;
      let cur = '';
      sections.forEach(id => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= sy) cur = id;
      });
      setActive(cur);
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const goto = (id) => {
    if (!id) { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 64, behavior: 'smooth' });
  };

  const logoVariant = theme === 'Daylight' ? 'blue' : 'white';

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-logo" onClick={() => goto(null)}>
        <Logo height={26} variant={logoVariant} />
      </div>
      <ul className="nav-links">
        {[['','Home'],['mission','Mission'],['capabilities','Capabilities'],['portfolio','Portfolio'],['contact','Contact']].map(([id,label]) => (
          <li key={label}>
            <a
              href={`#${id}`}
              className={active === id ? 'active' : ''}
              onClick={e => { e.preventDefault(); goto(id); }}
            >{label}</a>
          </li>
        ))}
      </ul>
      <a href="#contact" className="nav-cta" onClick={e => { e.preventDefault(); goto('contact'); }}>
        Start a project
      </a>
    </nav>
  );
}

// ─── PointCloud ───────────────────────────────────────────────
function PointCloud() {
  const svgRef = React.useRef(null);

  React.useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const COUNT = 560;
    const golden = Math.PI * (3 - Math.sqrt(5));
    const points = [];
    const circles = [];

    for (let i = 0; i < COUNT; i++) {
      const y = 1 - (i / (COUNT - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const theta = golden * i;
      points.push([Math.cos(theta) * r, y, Math.sin(theta) * r]);

      const c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      svg.appendChild(c);
      circles.push(c);
    }

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let rafId;

    const render = (t) => {
      const a = t * 0.1;
      const b = a * 0.35 + 0.4;
      const cosA = Math.cos(a), sinA = Math.sin(a);
      const cosB = Math.cos(b), sinB = Math.sin(b);

      for (let i = 0; i < COUNT; i++) {
        const [px, py, pz] = points[i];
        // Y-axis rotation
        const x1 = px * cosA - pz * sinA;
        const z1 = px * sinA + pz * cosA;
        // X-axis rotation
        const y2 = py * cosB - z1 * sinB;
        const z2 = py * sinB + z1 * cosB;

        const depth = (z2 + 1) / 2;
        const c = circles[i];
        c.setAttribute('cx', 500 + x1 * 168);
        c.setAttribute('cy', 215 + y2 * 168);
        c.setAttribute('r', 0.5 + depth * 2.1);
        c.setAttribute('opacity', 0.1 + depth * 0.72);
        c.setAttribute('fill', depth > 0.62 ? 'var(--accent-2)' : 'var(--accent)');
      }
    };

    if (prefersReduced) {
      render(0.6);
      return;
    }

    let t = 0;
    const loop = () => {
      t += 0.016;
      render(t);
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafId);
      circles.forEach(c => c.remove());
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 1000 430"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    />
  );
}

// ─── Hero ─────────────────────────────────────────────────────
function Hero({ tweaks }) {
  const lightRef = React.useRef(null);
  const h1Ref = React.useRef(null);
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Tagline line breaks
  const taglineMap = {
    'Light into worlds.':       ['Light into', 'worlds.'],
    'Step into the unreal.':    ['Step into', 'the unreal.'],
    'Reality, reimagined.':     ['Reality,', 'reimagined.'],
    'Enter elsewhere.':         ['Enter', 'elsewhere.'],
    'We build immersive XR.':   ['We build', 'immersive XR.'],
  };
  const lines = taglineMap[tweaks.tagline] || [tweaks.tagline];

  // Mouse parallax for hero light
  React.useEffect(() => {
    if (prefersReduced) return;
    let raf;
    const handler = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 120;
      const y = (e.clientY / window.innerHeight - 0.5) * 100;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (lightRef.current) {
          lightRef.current.style.transform = `translate(calc(-50% + ${x}px), ${y}px)`;
        }
      });
    };
    window.addEventListener('mousemove', handler);
    return () => { window.removeEventListener('mousemove', handler); cancelAnimationFrame(raf); };
  }, [prefersReduced]);

  // Reveal h1 lines
  React.useEffect(() => {
    const t = setTimeout(() => {
      if (h1Ref.current) h1Ref.current.classList.add('in');
    }, 100);
    return () => clearTimeout(t);
  }, [tweaks.tagline]);

  const sparkSize = Math.min(54, 0.06 * window.innerWidth + 22);
  const goto = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 64, behavior: 'smooth' });
  };

  return (
    <section className="hero">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-light" ref={lightRef} aria-hidden="true" />
      <div className="hero-grain" aria-hidden="true" />
      <div className="hero-illo" aria-hidden="true"><PointCloud /></div>

      <div className="wrap hero-inner">
        <div className="hero-eyebrow eyebrow reveal snap">
          XR<span className="sep" />VR<span className="sep" />Extended Reality Studio
        </div>

        <h1 className="display hero-h1" ref={h1Ref}>
          <span className="hero-h1-wrap">
            {lines.map((line, i) => (
              <span className="ln" key={i}>
                <span style={{ transitionDelay: `${120 + i * 90}ms` }}>{line}</span>
              </span>
            ))}
            <span className="hero-spark" style={{ top: 0, right: -sparkSize - 8 }}>
              <Spark size={sparkSize} className="twinkle" />
            </span>
          </span>
        </h1>

        <p className="hero-sub reveal snap">
          An XR · VR studio crafting immersive experiences in{' '}
          <strong style={{ color: 'var(--text)', whiteSpace: 'nowrap' }}>Unreal Engine 5</strong>,
          built in Lima, Peru, deployed globally.
        </p>

        <div className="tags reveal snap">
          {['Unreal Engine 5','OpenXR','Android XR','Meta Quest','Photogrammetry','Hand Tracking'].map(t => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>

        <div className="hero-cta-row reveal snap">
          <button className="btn btn-primary" onClick={() => goto('portfolio')}>
            View our work <Arrow />
          </button>
          <button className="btn btn-ghost" onClick={() => goto('contact')}>
            Start a project <Arrow />
          </button>
        </div>
      </div>

      <div className="hero-meta">
        <span>Lima, Peru · Deployed globally</span>
        <div className="scroll-cue">
          <span>Scroll</span>
          <div className="scroll-bar" />
        </div>
      </div>
    </section>
  );
}

// ─── Mission ──────────────────────────────────────────────────
function Mission() {
  return (
    <section className="section mission" id="mission">
      <div className="mission-glow" aria-hidden="true" />
      <div className="wrap mission-grid">
        <div className="mission-text">
          <div className="eyebrow reveal">Our mission</div>
          <p className="mission-statement reveal">
            Democratizing <span className="serif-italic">millenary culture</span>, digitally, across our territory and beyond.
          </p>
          <p className="mission-lead reveal">
            We digitize what time and distance keep out of reach — the millenary cultures of Peru — and place them in everyone's hands through immersive XR. Heritage that once lived behind glass or beneath the earth, now explorable anywhere a headset or a pair of glasses can go.
          </p>
        </div>
        <div className="mission-model reveal">
          <model-viewer
            src="public/models/aribalo.glb"
            alt="3D model rotating"
            auto-rotate
            auto-rotate-delay="0"
            rotation-per-second="30deg"
            camera-controls
            disable-zoom
            interaction-prompt="none"
            shadow-intensity="0"
            shadow-softness="0.8"
            environment-image="neutral"
            exposure="1.1"
            style={{ width: '100%', height: '100%', minHeight: '380px', borderRadius: '18px' }}
          />
        </div>
      </div>
      <div className="wrap">
        <div className="stats">
          {[
            { fig: '6+',    lbl: 'XR experiences shipped' },
            { fig: '15+',     lbl: 'Events deployed' },
            { fig: '1,000+',lbl: 'Users in XR' },
            { fig: '1',     lbl: 'Epic-authorized UE5 instructor' },
          ].map(({ fig, lbl }) => (
            <div className="stat reveal" key={lbl}>
              <Spark size={16} />
              <div className="stat-fig">{fig}</div>
              <div className="stat-lbl">{lbl}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Capabilities ─────────────────────────────────────────────
const CAPS = [
  {
    idx: '01',
    title: 'LuXR Studios',
    kicker: 'Design · Engineering · Deployment',
    body: 'We build multi-user XR and VR in Unreal Engine 5, from cultural heritage to biomedical training, with photogrammetry, hand tracking and real-time multi-headset control.',
    items: ['Unreal Engine 5','OpenXR / Multi-user & multi-headset','Hand tracking & interaction','Photogrammetry pipelines','Meta Quest · Android XR'],
  },
  {
    idx: '02',
    title: 'LuXR Solutions',
    kicker: 'Web · Apps · AI · IT',
    body: 'The software arm: websites, mobile and tablet apps, AI agents and the IT systems that power immersive deployments, and the businesses behind them.',
    items: ['Websites & web apps','Mobile & tablet apps','AI agents & automation','Custom plugins & tooling','IT solutions'],
  },
  {
    idx: '03',
    title: 'Animation',
    kicker: 'On the horizon',
    badge: 'Soon',
    body: 'Next on our horizon: original animation that brings the worlds we build in XR to linear, cinematic storytelling.',
    items: ['Real-time cinematics','World & character design','Cultural storytelling'],
  },
];

function Capabilities() {
  return (
    <section className="section" id="capabilities">
      <div className="wrap">
        <div className="cap-head">
          <div>
            <div className="eyebrow reveal">What we do</div>
            <h2 className="reveal" style={{ marginTop: 20 }}>
              Two studios.<br />One obsession with the unreal.
            </h2>
          </div>
          <p className="reveal" style={{ marginTop: 8 }}>
            From multi-user XR built in Unreal Engine 5 to the software and AI that runs behind it. LuXR designs, engineers and deploys immersive technology end to end.
          </p>
        </div>

        <div className="cap-grid">
          {CAPS.map(card => (
            <div className="cap-card reveal" key={card.idx}>
              {card.badge && <div className="cap-badge">{card.badge}</div>}
              <div className="cap-idx">{card.idx}</div>
              <h3 className="display">{card.title}</h3>
              <div className="cap-kicker">{card.kicker}</div>
              <p>{card.body}</p>
              <ul className="cap-list">
                {card.items.map(item => (
                  <li className="cap-item" key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Spark, Arrow, Logo, Nav, Hero, Mission, Capabilities });
