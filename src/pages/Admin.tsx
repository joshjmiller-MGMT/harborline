import { useState, useRef } from 'react';

interface SessionLog {
  id: string; title: string; date: string; summary: string;
  nextSteps: string[]; files: string[]; raw: string;
}
interface LogEntry {
  id: string; timestamp: string; machine: string; context: string;
  summary: string; nextSteps: string; tags: string[];
}
interface RunOfShow {
  clientName: string; eventDate: string; venue: string; eventType: string; guestCount: string;
  cocktailTime: string; cocktailStyle: string; dinnerTime: string; dinnerStyle: string;
  grandEntrance: string; grandEntranceSong: string; firstDance: string; firstDanceSong: string;
  parentDances: string; cakeCutting: string; cakeSong: string; lastSong: string;
  specialRequests: string; notes: string;
}

const ADMIN_PASSWORD = 'harborline2026';

function PasswordGate({ onUnlock }: { onUnlock: () => void }) {
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === ADMIN_PASSWORD) { onUnlock(); }
    else { setError(true); setInput(''); setTimeout(() => setError(false), 2000); }
  };
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#050505', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ backgroundColor: '#18181b', border: '1px solid #27272a', borderRadius: '12px', padding: '3rem', width: '100%', maxWidth: '400px', textAlign: 'center' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🎵</div>
        <h2 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '0.5rem' }}>Harborline Admin</h2>
        <p style={{ color: '#a1a1aa', marginBottom: '2rem', fontSize: '0.9rem' }}>Internal use only</p>
        <form onSubmit={handleSubmit}>
          <input type="password" value={input} onChange={e => setInput(e.target.value)} placeholder="Enter password" autoFocus
            style={{ width: '100%', padding: '0.75rem 1rem', backgroundColor: '#09090b', border: `1px solid ${error ? '#ef4444' : '#3f3f46'}`, borderRadius: '6px', color: '#fff', fontSize: '1rem', marginBottom: '1rem', boxSizing: 'border-box', outline: 'none' }} />
          {error && <p style={{ color: '#ef4444', fontSize: '0.85rem', marginBottom: '1rem' }}>Incorrect password</p>}
          <button type="submit" style={{ width: '100%', padding: '0.75rem', backgroundColor: '#D4AF37', color: '#000', border: 'none', borderRadius: '6px', fontWeight: 700, fontSize: '1rem', cursor: 'pointer' }}>Enter</button>
        </form>
      </div>
    </div>
  );
}

function SessionDashboard() {
  const [sessions, setSessions] = useState<SessionLog[]>([]);
  const [selected, setSelected] = useState<SessionLog | null>(null);
  const [pasteMode, setPasteMode] = useState(false);
  const [pasteText, setPasteText] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const parseSessionLog = (raw: string, id: string): SessionLog => {
    const titleMatch = raw.match(/^#\s+(.+)/m);
    const dateMatch = raw.match(/\*\*Date[:\s]+([^\n*]+)\*\*/i) || raw.match(/Date[:\s]+([^\n]+)/i);
    const summaryMatch = raw.match(/##\s+Summary[\s\S]*?\n([\s\S]+?)(?=##|$)/i);
    const nextStepsMatch = raw.match(/##\s+(Next Steps|What.s Next)[\s\S]*?\n([\s\S]+?)(?=##|$)/i);
    const filesMatch = raw.match(/##\s+(Files|Key Files)[\s\S]*?\n([\s\S]+?)(?=##|$)/i);
    const extractBullets = (s: string | undefined) => s ? s.split('\n').filter(l => l.trim().match(/^[-*]\s/)).map(l => l.replace(/^[-*]\s+/, '').trim()).filter(Boolean) : [];
    return { id, title: titleMatch?.[1]?.trim() || 'Untitled Session', date: dateMatch?.[1]?.trim() || new Date().toLocaleDateString(), summary: summaryMatch?.[1]?.trim().split('\n').slice(0, 3).join(' ') || raw.slice(0, 200), nextSteps: extractBullets(nextStepsMatch?.[2]), files: extractBullets(filesMatch?.[2]), raw };
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    Array.from(e.target.files || []).forEach(file => {
      const reader = new FileReader();
      reader.onload = ev => { const log = parseSessionLog(ev.target?.result as string, Date.now().toString()); setSessions(prev => [log, ...prev.filter(s => s.id !== log.id)]); };
      reader.readAsText(file);
    });
  };

  const handlePasteImport = () => {
    if (!pasteText.trim()) return;
    setSessions(prev => [parseSessionLog(pasteText, Date.now().toString()), ...prev]);
    setPasteText(''); setPasteMode(false);
  };

  const card: React.CSSProperties = { backgroundColor: '#18181b', border: '1px solid #27272a', borderRadius: '10px', padding: '1.5rem', marginBottom: '1rem', cursor: 'pointer', transition: 'border-color 0.2s' };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h2 style={{ color: '#fff', fontSize: '1.4rem', margin: 0 }}>Claude Session Logs</h2>
          <p style={{ color: '#a1a1aa', margin: '0.4rem 0 0', fontSize: '0.9rem' }}>Import saved session logs to pick up where you left off on any machine.</p>
        </div>
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <button onClick={() => setPasteMode(!pasteMode)} style={{ padding: '0.6rem 1.2rem', backgroundColor: 'transparent', border: '1px solid #3f3f46', borderRadius: '6px', color: '#a1a1aa', cursor: 'pointer', fontSize: '0.9rem' }}>Paste Log</button>
          <button onClick={() => fileInputRef.current?.click()} style={{ padding: '0.6rem 1.2rem', backgroundColor: '#D4AF37', border: 'none', borderRadius: '6px', color: '#000', cursor: 'pointer', fontWeight: 700, fontSize: '0.9rem' }}>Upload .md File</button>
          <input ref={fileInputRef} type="file" accept=".md,.txt" multiple style={{ display: 'none' }} onChange={handleFileUpload} />
        </div>
      </div>
      {pasteMode && (
        <div style={{ ...card, cursor: 'default', marginBottom: '2rem' }}>
          <textarea value={pasteText} onChange={e => setPasteText(e.target.value)} rows={6} style={{ width: '100%', backgroundColor: '#09090b', border: '1px solid #3f3f46', borderRadius: '6px', color: '#d4d4d8', padding: '0.75rem', fontSize: '0.85rem', fontFamily: 'monospace', resize: 'vertical', boxSizing: 'border-box' }} placeholder="# Session Title..." />
          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.75rem', justifyContent: 'flex-end' }}>
            <button onClick={() => setPasteMode(false)} style={{ padding: '0.5rem 1rem', backgroundColor: 'transparent', border: '1px solid #3f3f46', borderRadius: '6px', color: '#a1a1aa', cursor: 'pointer' }}>Cancel</button>
            <button onClick={handlePasteImport} style={{ padding: '0.5rem 1rem', backgroundColor: '#D4AF37', border: 'none', borderRadius: '6px', color: '#000', fontWeight: 700, cursor: 'pointer' }}>Import</button>
          </div>
        </div>
      )}
      {selected && (
        <div style={{ ...card, cursor: 'default', borderColor: '#2563eb', marginBottom: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1.5rem' }}>
            <div><h3 style={{ color: '#fff', margin: 0, fontSize: '1.2rem' }}>{selected.title}</h3><span style={{ color: '#a1a1aa', fontSize: '0.85rem' }}>{selected.date}</span></div>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button onClick={() => navigator.clipboard.writeText(selected.raw)} style={{ padding: '0.4rem 0.8rem', backgroundColor: 'transparent', border: '1px solid #3f3f46', borderRadius: '5px', color: '#a1a1aa', cursor: 'pointer', fontSize: '0.8rem' }}>Copy Log</button>
              <button onClick={() => setSelected(null)} style={{ padding: '0.4rem 0.8rem', backgroundColor: 'transparent', border: '1px solid #3f3f46', borderRadius: '5px', color: '#a1a1aa', cursor: 'pointer', fontSize: '0.8rem' }}>Close</button>
            </div>
          </div>
          <p style={{ color: '#d4d4d8', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1rem' }}>{selected.summary}</p>
          {selected.nextSteps.length > 0 && <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>{selected.nextSteps.map((s, i) => <li key={i} style={{ color: '#d4d4d8', fontSize: '0.9rem', padding: '0.35rem 0', borderBottom: '1px solid #27272a' }}>→ {s}</li>)}</ul>}
        </div>
      )}
      {sessions.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '4rem 2rem', color: '#52525b' }}>
          <p style={{ fontSize: '1rem', margin: 0 }}>No session logs yet. Upload a .md file or paste one above.</p>
        </div>
      ) : sessions.map(session => (
        <div key={session.id} style={{ ...card, borderColor: selected?.id === session.id ? '#2563eb' : '#27272a' }} onClick={() => setSelected(session.id === selected?.id ? null : session)}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
            <div style={{ flex: 1, minWidth: 0 }}>
              <h3 style={{ color: '#fff', margin: '0 0 0.25rem', fontSize: '1rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{session.title}</h3>
              <span style={{ color: '#52525b', fontSize: '0.8rem' }}>{session.date}</span>
              <p style={{ color: '#a1a1aa', fontSize: '0.85rem', margin: '0.4rem 0 0', lineHeight: 1.5, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{session.summary.slice(0, 120)}</p>
            </div>
            {session.nextSteps.length > 0 && <span style={{ backgroundColor: '#1e3a5f', color: '#60a5fa', fontSize: '0.75rem', padding: '0.2rem 0.6rem', borderRadius: '20px', marginLeft: '1rem', whiteSpace: 'nowrap' }}>{session.nextSteps.length} next steps</span>}
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Run of Show ───────────────────────────────────────────────────────────────
const emptyROS: RunOfShow = {
  clientName: '', eventDate: '', venue: '', eventType: 'Wedding', guestCount: '',
  cocktailTime: '', cocktailStyle: 'Jazz/Standards', dinnerTime: '', dinnerStyle: 'Background Jazz',
  grandEntrance: '', grandEntranceSong: '', firstDance: '', firstDanceSong: '',
  parentDances: '', cakeCutting: '', cakeSong: '', lastSong: '', specialRequests: '', notes: '',
};

function RunOfShowGenerator() {
  const [form, setForm] = useState<RunOfShow>(emptyROS);
  const [generated, setGenerated] = useState('');
  const [copied, setCopied] = useState(false);
  const set = (f: keyof RunOfShow) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => setForm(p => ({ ...p, [f]: e.target.value }));

  const generateROS = () => {
    setGenerated([
      '# RUN OF SHOW — ' + (form.clientName.toUpperCase() || 'EVENT'),
      '**Date:** ' + (form.eventDate || '___'), '**Venue:** ' + (form.venue || '___'),
      '**Event Type:** ' + form.eventType, '**Guest Count:** ' + (form.guestCount || '___'),
      '', '---', '', '## TIMELINE', '',
      '| Time | Segment | Notes |', '|------|---------|-------|',
      '| ' + (form.cocktailTime || '___') + ' | Cocktail Hour | Style: ' + form.cocktailStyle + ' |',
      '| ' + (form.dinnerTime || '___') + ' | Dinner | Style: ' + form.dinnerStyle + ' |',
      '| ' + (form.grandEntrance || '___') + ' | Grand Entrance | Song: ' + (form.grandEntranceSong || '___') + ' |',
      '| ' + (form.firstDance || '___') + ' | First Dance | Song: ' + (form.firstDanceSong || '___') + ' |',
      '| ' + (form.parentDances || '___') + ' | Parent Dances | — |',
      '| ' + (form.cakeCutting || '___') + ' | Cake Cutting | Song: ' + (form.cakeSong || '___') + ' |',
      '| ' + (form.lastSong || '___') + ' | Last Dance | — |',
      '', '---', '', '## SPECIAL REQUESTS', form.specialRequests || 'None.',
      '', '## NOTES', form.notes || 'None.',
      '', '---', '*Generated by Harborline Admin*',
    ].join('\n'));
  };

  const download = () => {
    const a = Object.assign(document.createElement('a'), { href: URL.createObjectURL(new Blob([generated], { type: 'text/markdown' })), download: 'run-of-show-' + (form.clientName.replace(/\s+/g, '-').toLowerCase() || 'event') + '-' + (form.eventDate || 'undated') + '.md' });
    a.click();
  };

  const iS: React.CSSProperties = { width: '100%', padding: '0.65rem 0.85rem', backgroundColor: '#09090b', border: '1px solid #3f3f46', borderRadius: '6px', color: '#fff', fontSize: '0.9rem', boxSizing: 'border-box', outline: 'none' };
  const lS: React.CSSProperties = { color: '#a1a1aa', fontSize: '0.78rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '0.35rem' };
  const sS: React.CSSProperties = { backgroundColor: '#18181b', border: '1px solid #27272a', borderRadius: '10px', padding: '1.5rem', marginBottom: '1.25rem' };
  return (
    <div>
      <div style={{ marginBottom: '2rem' }}><h2 style={{ color: '#fff', fontSize: '1.4rem', margin: '0 0 0.4rem' }}>Run of Show Generator</h2><p style={{ color: '#a1a1aa', margin: 0, fontSize: '0.9rem' }}>Fill in the event details to generate a formatted run of show document.</p></div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
        <div>
          <div style={sS}>
            <h3 style={{ color: '#D4AF37', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', margin: '0 0 1.25rem' }}>Event Info</h3>
            <div style={{ marginBottom: '1rem' }}><label style={lS}>Client / Couple Name</label><input style={iS} value={form.clientName} onChange={set('clientName')} placeholder="e.g. Smith Wedding" /></div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1rem' }}>
              <div><label style={lS}>Event Date</label><input style={iS} type="date" value={form.eventDate} onChange={set('eventDate')} /></div>
              <div><label style={lS}>Guest Count</label><input style={iS} value={form.guestCount} onChange={set('guestCount')} placeholder="150" /></div>
            </div>
            <div style={{ marginBottom: '1rem' }}><label style={lS}>Venue</label><input style={iS} value={form.venue} onChange={set('venue')} placeholder="The Belvedere, Baltimore" /></div>
            <div><label style={lS}>Event Type</label><select style={iS} value={form.eventType} onChange={set('eventType')}><option>Wedding</option><option>Corporate Gala</option><option>Private Party</option><option>Fundraiser</option><option>Bar/Bat Mitzvah</option><option>Other</option></select></div>
          </div>
          <div style={sS}>
            <h3 style={{ color: '#D4AF37', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', margin: '0 0 1.25rem' }}>Pre-Reception</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1rem' }}>
              <div><label style={lS}>Cocktail Hour</label><input style={iS} type="time" value={form.cocktailTime} onChange={set('cocktailTime')} /></div>
              <div><label style={lS}>Cocktail Style</label><select style={iS} value={form.cocktailStyle} onChange={set('cocktailStyle')}><option>Jazz/Standards</option><option>Yacht Rock</option><option>Acoustic Pop</option><option>Background DJ</option><option>Classic Rock</option></select></div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
              <div><label style={lS}>Dinner Time</label><input style={iS} type="time" value={form.dinnerTime} onChange={set('dinnerTime')} /></div>
              <div><label style={lS}>Dinner Style</label><select style={iS} value={form.dinnerStyle} onChange={set('dinnerStyle')}><option>Background Jazz</option><option>Light Pop</option><option>Acoustic</option><option>Background DJ</option></select></div>
            </div>
          </div>
        </div>
        <div>
          <div style={sS}>
            <h3 style={{ color: '#D4AF37', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', margin: '0 0 1.25rem' }}>Formalities</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1rem' }}>
              <div><label style={lS}>Grand Entrance</label><input style={iS} type="time" value={form.grandEntrance} onChange={set('grandEntrance')} /></div>
              <div><label style={lS}>Entrance Song</label><input style={iS} value={form.grandEntranceSong} onChange={set('grandEntranceSong')} placeholder="Song - Artist" /></div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1rem' }}>
              <div><label style={lS}>First Dance</label><input style={iS} type="time" value={form.firstDance} onChange={set('firstDance')} /></div>
              <div><label style={lS}>First Dance Song</label><input style={iS} value={form.firstDanceSong} onChange={set('firstDanceSong')} placeholder="Song - Artist" /></div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1rem' }}>
              <div><label style={lS}>Parent Dances</label><input style={iS} type="time" value={form.parentDances} onChange={set('parentDances')} /></div>
              <div><label style={lS}>Cake Cutting</label><input style={iS} type="time" value={form.cakeCutting} onChange={set('cakeCutting')} /></div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
              <div><label style={lS}>Cake Song</label><input style={iS} value={form.cakeSong} onChange={set('cakeSong')} placeholder="Song - Artist" /></div>
              <div><label style={lS}>Last Dance</label><input style={iS} type="time" value={form.lastSong} onChange={set('lastSong')} /></div>
            </div>
          </div>
          <div style={sS}>
            <h3 style={{ color: '#D4AF37', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', margin: '0 0 1.25rem' }}>Additional Info</h3>
            <div style={{ marginBottom: '1rem' }}><label style={lS}>Special Requests / DNP</label><textarea style={{ ...iS, resize: 'vertical', fontFamily: 'inherit' }} rows={3} value={form.specialRequests} onChange={set('specialRequests')} placeholder="Song requests or do-not-play list..." /></div>
            <div><label style={lS}>Internal Notes</label><textarea style={{ ...iS, resize: 'vertical', fontFamily: 'inherit' }} rows={3} value={form.notes} onChange={set('notes')} placeholder="Logistics, contacts, setup notes..." /></div>
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
        <button onClick={generateROS} style={{ padding: '0.85rem 2rem', backgroundColor: '#D4AF37', border: 'none', borderRadius: '8px', color: '#000', fontWeight: 700, fontSize: '1rem', cursor: 'pointer' }}>Generate Run of Show</button>
        <button onClick={() => setForm(emptyROS)} style={{ padding: '0.85rem 1.5rem', backgroundColor: 'transparent', border: '1px solid #3f3f46', borderRadius: '8px', color: '#a1a1aa', cursor: 'pointer' }}>Clear</button>
      </div>
      {generated && (
        <div style={{ backgroundColor: '#0d0d0d', border: '1px solid #27272a', borderRadius: '10px', padding: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <h3 style={{ color: '#fff', margin: 0, fontSize: '1rem' }}>Generated Document</h3>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button onClick={() => { navigator.clipboard.writeText(generated); setCopied(true); setTimeout(() => setCopied(false), 2000); }} style={{ padding: '0.5rem 1rem', backgroundColor: copied ? '#166534' : 'transparent', border: '1px solid #3f3f46', borderRadius: '5px', color: copied ? '#4ade80' : '#a1a1aa', cursor: 'pointer', fontSize: '0.85rem' }}>{copied ? 'Copied!' : 'Copy'}</button>
              <button onClick={download} style={{ padding: '0.5rem 1rem', backgroundColor: '#D4AF37', border: 'none', borderRadius: '5px', color: '#000', cursor: 'pointer', fontWeight: 700, fontSize: '0.85rem' }}>Download .md</button>
            </div>
          </div>
          <pre style={{ color: '#d4d4d8', fontSize: '0.85rem', lineHeight: 1.7, whiteSpace: 'pre-wrap', margin: 0, fontFamily: 'monospace' }}>{generated}</pre>
        </div>
      )}
    </div>
  );
}

type Tab = 'sessions' | 'runofshow';

export default function Admin() {
  const [unlocked, setUnlocked] = useState(false);
  const [tab, setTab] = useState<Tab>('runofshow');

  if (!unlocked) return <PasswordGate onUnlock={() => setUnlocked(true)} />;

  const tabBtn = (id: Tab, label: string) => (
    <button onClick={() => setTab(id)} style={{ padding: '0.6rem 1.5rem', backgroundColor: tab === id ? '#D4AF37' : 'transparent', color: tab === id ? '#000' : '#a1a1aa', border: tab === id ? 'none' : '1px solid #3f3f46', borderRadius: '6px', fontWeight: tab === id ? 700 : 400, cursor: 'pointer', fontSize: '0.9rem', transition: 'all 0.2s' }}>
      {label}
    </button>
  );

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#050505', paddingTop: '80px' }}>
      <div style={{ borderBottom: '1px solid #27272a', padding: '1.5rem 0', marginBottom: '2rem' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h1 style={{ color: '#fff', fontSize: '1.6rem', margin: '0 0 0.25rem' }}>Harborline Admin</h1>
            <p style={{ color: '#52525b', margin: 0, fontSize: '0.85rem' }}>Internal tools</p>
          </div>
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            {tabBtn('sessions', 'Session Logs')}
            {tabBtn('runofshow', 'Run of Show')}
          </div>
        </div>
      </div>
      <div className="container" style={{ paddingBottom: '4rem' }}>
        {tab === 'sessions' && <SessionDashboard />}
        {tab === 'runofshow' && <RunOfShowGenerator />}
      </div>
    </div>
  );
}
