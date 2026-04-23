import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

// ── Types ──────────────────────────────────────────────────────────────────
interface PracticeSession {
  id: string;
  session_date: string;
  total_time_minutes: number | null;
  song_of_the_day: string | null;
  notes: string | null;
}

interface PracticeEntry {
  id: string;
  session_id: string;
  category: string;
  duration_minutes: number | null;
  description: string;
  tempo_bpm: number | null;
  keys_practiced: string | null;
  hand: string | null;
  notes: string | null;
}

interface PracticeItem {
  id: string;
  name: string;
  source: string | null;
  category: string;
  musical_concept: string | null;
  proficiency: string;
  tags: string[];
  notes: string | null;
  last_practiced: string | null;
}

// ── Styles ─────────────────────────────────────────────────────────────────
const card: React.CSSProperties = {
  backgroundColor: '#18181b', border: '1px solid #27272a', borderRadius: '10px',
  padding: '1.25rem', marginBottom: '0.75rem',
};
const badge = (bg: string, fg: string): React.CSSProperties => ({
  display: 'inline-block', padding: '0.15rem 0.6rem', borderRadius: '20px',
  fontSize: '0.72rem', fontWeight: 600, backgroundColor: bg, color: fg,
  marginRight: '0.35rem', marginBottom: '0.25rem',
});
const filterBtn = (active: boolean): React.CSSProperties => ({
  padding: '0.4rem 0.9rem', borderRadius: '6px', border: active ? 'none' : '1px solid #3f3f46',
  backgroundColor: active ? '#D4AF37' : 'transparent', color: active ? '#000' : '#a1a1aa',
  fontWeight: active ? 700 : 400, cursor: 'pointer', fontSize: '0.8rem', transition: 'all 0.15s',
});

const CATEGORY_COLORS: Record<string, { bg: string; fg: string }> = {
  chords: { bg: '#1e3a5f', fg: '#60a5fa' },
  scales: { bg: '#1a3a2a', fg: '#4ade80' },
  technical: { bg: '#3b1f4b', fg: '#c084fc' },
  patterns: { bg: '#4a3320', fg: '#fb923c' },
  lines: { bg: '#3b3020', fg: '#fbbf24' },
  songs: { bg: '#1e3a3a', fg: '#2dd4bf' },
  transcriptions: { bg: '#3a1e3a', fg: '#f472b6' },
  arrangements: { bg: '#2a1e3a', fg: '#a78bfa' },
  original: { bg: '#3a2e1e', fg: '#d4a037' },
  other: { bg: '#27272a', fg: '#a1a1aa' },
  rehearsal: { bg: '#1e2e3a', fg: '#67b8e3' },
  gigs: { bg: '#3a1e1e', fg: '#f87171' },
  voicings: { bg: '#1e3a5f', fg: '#60a5fa' },
};

const PROFICIENCY_COLORS: Record<string, { bg: string; fg: string; label: string }> = {
  'learned': { bg: '#7f1d1d', fg: '#fca5a5', label: 'Learned' },
  '12-keyed-slow': { bg: '#7c2d12', fg: '#fdba74', label: '12-Keyed Slow' },
  '12-keyed-well': { bg: '#713f12', fg: '#fde047', label: '12-Keyed Well' },
  'both-hands': { bg: '#14532d', fg: '#86efac', label: 'Both Hands' },
  'playing-in-songs': { bg: '#1e3a5f', fg: '#60a5fa', label: 'In Songs' },
  'digitized': { bg: '#3b1f4b', fg: '#c084fc', label: 'Digitized' },
};

function formatDate(d: string) {
  return new Date(d + 'T12:00:00').toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' });
}
function formatMinutes(m: number | null) {
  if (!m) return '—';
  const h = Math.floor(m / 60);
  const min = m % 60;
  return h > 0 ? `${h}h ${min > 0 ? min + 'm' : ''}` : `${min}m`;
}

// ── Sessions View ──────────────────────────────────────────────────────────
function SessionsView() {
  const [sessions, setSessions] = useState<(PracticeSession & { entries: PracticeEntry[] })[]>([]);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [catFilter, setCatFilter] = useState<string>('all');

  useEffect(() => {
    (async () => {
      const { data: sess } = await supabase
        .from('practice_sessions').select('*').order('session_date', { ascending: false });
      const { data: entries } = await supabase.from('practice_entries').select('*');
      if (sess && entries) {
        const mapped = sess.map(s => ({
          ...s,
          entries: entries.filter(e => e.session_id === s.id),
        }));
        setSessions(mapped);
      }
      setLoading(false);
    })();
  }, []);

  const allCategories = Array.from(new Set(sessions.flatMap(s => s.entries.map(e => e.category)))).sort();

  const filtered = catFilter === 'all' ? sessions
    : sessions.filter(s => s.entries.some(e => e.category === catFilter));

  // Stats
  const totalSessions = sessions.length;
  const totalMinutes = sessions.reduce((a, s) => a + (s.total_time_minutes || 0), 0);
  const totalEntries = sessions.reduce((a, s) => a + s.entries.length, 0);

  if (loading) return <div style={{ color: '#a1a1aa', textAlign: 'center', padding: '3rem' }}>Loading sessions...</div>;

  return (
    <div>
      {/* Stats bar */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '1.5rem' }}>
        {[{ label: 'Sessions', value: totalSessions }, { label: 'Total Hours', value: (totalMinutes / 60).toFixed(0) }, { label: 'Activities Logged', value: totalEntries }].map(s => (
          <div key={s.label} style={{ ...card, textAlign: 'center', marginBottom: 0 }}>
            <div style={{ color: '#D4AF37', fontSize: '1.8rem', fontWeight: 700 }}>{s.value}</div>
            <div style={{ color: '#71717a', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: '0.25rem' }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Category filter */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
        <button style={filterBtn(catFilter === 'all')} onClick={() => setCatFilter('all')}>All</button>
        {allCategories.map(c => (
          <button key={c} style={filterBtn(catFilter === c)} onClick={() => setCatFilter(c)}>
            {c.charAt(0).toUpperCase() + c.slice(1)}
          </button>
        ))}
      </div>

      {/* Session list */}
      {filtered.map(session => {
        const isOpen = expanded === session.id;
        const displayEntries = catFilter === 'all' ? session.entries : session.entries.filter(e => e.category === catFilter);
        return (
          <div key={session.id} style={{ ...card, cursor: 'pointer', borderColor: isOpen ? '#D4AF37' : '#27272a' }}
            onClick={() => setExpanded(isOpen ? null : session.id)}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <span style={{ color: '#fff', fontWeight: 600, fontSize: '1rem' }}>{formatDate(session.session_date)}</span>
                {session.song_of_the_day && (
                  <span style={{ color: '#D4AF37', fontSize: '0.8rem', marginLeft: '0.75rem' }}>SOTD: {session.song_of_the_day}</span>
                )}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{ color: '#a1a1aa', fontSize: '0.85rem' }}>{formatMinutes(session.total_time_minutes)}</span>
                <span style={{ color: '#52525b', fontSize: '0.75rem' }}>{session.entries.length} activities</span>
                <span style={{ color: '#52525b', transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>▾</span>
              </div>
            </div>

            {/* Category badges */}
            <div style={{ marginTop: '0.5rem' }}>
              {Array.from(new Set(session.entries.map(e => e.category))).map(cat => {
                const c = CATEGORY_COLORS[cat] || CATEGORY_COLORS.other;
                return <span key={cat} style={badge(c.bg, c.fg)}>{cat}</span>;
              })}
            </div>

            {/* Expanded entries */}
            {isOpen && (
              <div style={{ marginTop: '1rem', borderTop: '1px solid #27272a', paddingTop: '1rem' }} onClick={e => e.stopPropagation()}>
                {displayEntries.map(entry => {
                  const c = CATEGORY_COLORS[entry.category] || CATEGORY_COLORS.other;
                  return (
                    <div key={entry.id} style={{ display: 'flex', gap: '0.75rem', padding: '0.5rem 0', borderBottom: '1px solid #1a1a1d' }}>
                      <span style={{ ...badge(c.bg, c.fg), minWidth: '80px', textAlign: 'center' }}>{entry.category}</span>
                      <span style={{ color: '#d4d4d8', fontSize: '0.88rem', flex: 1 }}>{entry.description}</span>
                      <div style={{ display: 'flex', gap: '0.75rem', flexShrink: 0, alignItems: 'center' }}>
                        {entry.duration_minutes && <span style={{ color: '#71717a', fontSize: '0.8rem' }}>{formatMinutes(entry.duration_minutes)}</span>}
                        {entry.tempo_bpm && <span style={{ color: '#52525b', fontSize: '0.75rem' }}>{entry.tempo_bpm} bpm</span>}
                        {entry.keys_practiced && <span style={{ color: '#52525b', fontSize: '0.75rem' }}>{entry.keys_practiced}</span>}
                        {entry.hand && <span style={{ color: '#3f3f46', fontSize: '0.72rem' }}>{entry.hand}</span>}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

// ── Catalogue View ─────────────────────────────────────────────────────────
function CatalogueView() {
  const [items, setItems] = useState<PracticeItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [sourceFilter, setSourceFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [profFilter, setProfFilter] = useState('all');
  const [search, setSearch] = useState('');

  useEffect(() => {
    (async () => {
      const { data } = await supabase.from('practice_items').select('*').order('category').order('name');
      if (data) setItems(data);
      setLoading(false);
    })();
  }, []);

  const sources = Array.from(new Set(items.map(i => i.source).filter(Boolean))).sort() as string[];
  const categories = Array.from(new Set(items.map(i => i.category))).sort();

  const filtered = items.filter(item => {
    if (sourceFilter !== 'all' && item.source !== sourceFilter) return false;
    if (categoryFilter !== 'all' && item.category !== categoryFilter) return false;
    if (profFilter !== 'all' && item.proficiency !== profFilter) return false;
    if (search && !item.name.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  // Proficiency distribution
  const profCounts: Record<string, number> = {};
  items.forEach(i => { profCounts[i.proficiency] = (profCounts[i.proficiency] || 0) + 1; });

  if (loading) return <div style={{ color: '#a1a1aa', textAlign: 'center', padding: '3rem' }}>Loading catalogue...</div>;

  return (
    <div>
      {/* Proficiency summary */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1.5rem' }}>
        {Object.entries(PROFICIENCY_COLORS).map(([key, val]) => (
          <div key={key} style={{ ...card, flex: '1 1 140px', textAlign: 'center', marginBottom: 0, cursor: 'pointer', borderColor: profFilter === key ? val.fg : '#27272a' }}
            onClick={() => setProfFilter(profFilter === key ? 'all' : key)}>
            <div style={{ color: val.fg, fontSize: '1.4rem', fontWeight: 700 }}>{profCounts[key] || 0}</div>
            <div style={{ color: '#71717a', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{val.label}</div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.25rem', flexWrap: 'wrap', alignItems: 'center' }}>
        <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search items..."
          style={{ flex: '1 1 200px', padding: '0.55rem 0.85rem', backgroundColor: '#09090b', border: '1px solid #3f3f46', borderRadius: '6px', color: '#fff', fontSize: '0.88rem', outline: 'none' }} />
        <select value={categoryFilter} onChange={e => setCategoryFilter(e.target.value)}
          style={{ padding: '0.55rem 0.85rem', backgroundColor: '#09090b', border: '1px solid #3f3f46', borderRadius: '6px', color: '#d4d4d8', fontSize: '0.85rem' }}>
          <option value="all">All Categories</option>
          {categories.map(c => <option key={c} value={c}>{c.charAt(0).toUpperCase() + c.slice(1)}</option>)}
        </select>
        <select value={sourceFilter} onChange={e => setSourceFilter(e.target.value)}
          style={{ padding: '0.55rem 0.85rem', backgroundColor: '#09090b', border: '1px solid #3f3f46', borderRadius: '6px', color: '#d4d4d8', fontSize: '0.85rem' }}>
          <option value="all">All Sources</option>
          {sources.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      <div style={{ color: '#52525b', fontSize: '0.8rem', marginBottom: '0.75rem' }}>{filtered.length} items</div>

      {/* Item list */}
      {filtered.map(item => {
        const catColor = CATEGORY_COLORS[item.category] || CATEGORY_COLORS.other;
        const profColor = PROFICIENCY_COLORS[item.proficiency] || PROFICIENCY_COLORS.learned;
        return (
          <div key={item.id} style={{ ...card, display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.85rem 1.25rem' }}>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.2rem' }}>
                <span style={{ color: '#fff', fontWeight: 600, fontSize: '0.95rem' }}>{item.name}</span>
                <span style={badge(catColor.bg, catColor.fg)}>{item.category}</span>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                {item.source && <span style={{ color: '#71717a', fontSize: '0.78rem' }}>{item.source}</span>}
                {item.musical_concept && <span style={{ color: '#52525b', fontSize: '0.78rem' }}>{item.musical_concept}</span>}
                {item.tags && item.tags.length > 0 && item.tags[0] !== '' && item.tags.map(t => (
                  <span key={t} style={{ color: '#3f3f46', fontSize: '0.72rem' }}>#{t}</span>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexShrink: 0 }}>
              <span style={badge(profColor.bg, profColor.fg)}>{profColor.label}</span>
              {item.last_practiced && (
                <span style={{ color: '#52525b', fontSize: '0.75rem' }}>Last: {formatDate(item.last_practiced)}</span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ── Main Practice Log Component ────────────────────────────────────────────
type PracticeTab = 'sessions' | 'catalogue';

export default function PracticeLog() {
  const [tab, setTab] = useState<PracticeTab>('sessions');

  const tabBtn = (id: PracticeTab, label: string) => (
    <button onClick={() => setTab(id)} style={{
      padding: '0.5rem 1.2rem', borderRadius: '6px',
      border: tab === id ? 'none' : '1px solid #3f3f46',
      backgroundColor: tab === id ? '#D4AF37' : 'transparent',
      color: tab === id ? '#000' : '#a1a1aa',
      fontWeight: tab === id ? 700 : 400,
      cursor: 'pointer', fontSize: '0.85rem', transition: 'all 0.2s',
    }}>
      {label}
    </button>
  );

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h2 style={{ color: '#fff', fontSize: '1.4rem', margin: '0 0 0.4rem' }}>Practice Log</h2>
          <p style={{ color: '#a1a1aa', margin: 0, fontSize: '0.9rem' }}>Track sessions, catalogue exercises, and monitor progress.</p>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          {tabBtn('sessions', 'Sessions')}
          {tabBtn('catalogue', 'Catalogue')}
        </div>
      </div>
      {tab === 'sessions' && <SessionsView />}
      {tab === 'catalogue' && <CatalogueView />}
    </div>
  );
}
