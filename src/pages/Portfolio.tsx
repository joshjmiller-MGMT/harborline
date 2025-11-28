import { useState, memo } from 'react';

const VimeoPlayer = memo(() => (
    <iframe
        src='https://vimeo.com/showcase/11390101/embed2?autoplay=1&dnt=1'
        allow='autoplay; fullscreen; picture-in-picture; encrypted-media'
        frameBorder='0'
        loading='lazy'
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        title="Work Showcase"
    ></iframe>
));

const Portfolio = () => {
    const [filter, setFilter] = useState('All');
    const [showEmbed, setShowEmbed] = useState(false);

    const projects = [
        { id: 1, title: 'Neon Nights Festival', category: 'Concerts', image: '/hero.png', year: '2024' },
        { id: 2, title: 'Tech Summit Gala', category: 'Corporate', image: '/corporate.png', year: '2024' },
        { id: 3, title: 'Eleanor & James', category: 'Weddings', image: '/weddings.png', year: '2023' },
        { id: 4, title: 'The Midnight Groovers', category: 'Concerts', image: '/bands.png', year: '2023' },
        { id: 5, title: 'Global Finance Awards', category: 'Corporate', image: '/hero.png', year: '2023' },
        { id: 6, title: 'Summer Solstice Party', category: 'Private', image: '/corporate.png', year: '2024' },
    ];

    const filteredProjects = filter === 'All' 
        ? projects 
        : projects.filter(p => p.category === filter);

    const categories = ['All', 'Corporate', 'Weddings', 'Concerts', 'Private'];

    return (
        <div className="page-enter" style={{ paddingTop: '120px', paddingBottom: '4rem', minHeight: '100vh', backgroundColor: 'var(--color-bg)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h1 className="section-title">Selected Works</h1>
                    <p style={{ color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto', fontSize: '1.2rem' }}>
                        A curated collection of our most memorable events.
                    </p>
                </div>

                {/* Vimeo Showcase Embed */}
                <div style={{ padding: '56.25% 0 0 0', position: 'relative', marginBottom: '4rem', backgroundColor: '#000', borderRadius: '8px', overflow: 'hidden' }}>
                    {showEmbed ? (
                        <VimeoPlayer />
                    ) : (
                        <div 
                            style={{ 
                                position: 'absolute', 
                                top: 0, 
                                left: 0, 
                                width: '100%', 
                                height: '100%', 
                                display: 'flex', 
                                flexDirection: 'column',
                                alignItems: 'center', 
                                justifyContent: 'center',
                                backgroundImage: 'url(/hero.png)',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                cursor: 'pointer'
                            }}
                            onClick={() => setShowEmbed(true)}
                        >
                             <div style={{
                                position: 'absolute',
                                inset: 0,
                                backgroundColor: 'rgba(0,0,0,0.5)',
                            }}></div>
                            
                            <div style={{
                                width: '80px',
                                height: '80px',
                                borderRadius: '50%',
                                backgroundColor: 'rgba(255,255,255,0.2)',
                                backdropFilter: 'blur(4px)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                border: '2px solid rgba(255,255,255,0.8)',
                                zIndex: 10,
                                marginBottom: '1rem',
                                transition: 'transform 0.2s'
                            }}
                            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                            >
                                 <div style={{
                                    width: 0,
                                    height: 0,
                                    borderTop: '12px solid transparent',
                                    borderBottom: '12px solid transparent',
                                    borderLeft: '20px solid #fff',
                                    marginLeft: '4px'
                                }}></div>
                            </div>
                            <span style={{ color: '#fff', zIndex: 10, fontSize: '1.2rem', fontWeight: 500, letterSpacing: '1px' }}>
                                Load Video Showcase
                            </span>
                        </div>
                    )}
                </div>

                {/* Filter Controls */}
                <div style={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    gap: '1rem', 
                    flexWrap: 'wrap', 
                    marginBottom: '4rem' 
                }}>
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            style={{
                                padding: '0.5rem 1.5rem',
                                borderRadius: '20px',
                                border: `1px solid ${filter === cat ? 'var(--color-primary)' : '#333'}`,
                                backgroundColor: filter === cat ? 'var(--color-primary)' : 'transparent',
                                color: filter === cat ? '#fff' : 'var(--color-text-muted)',
                                transition: 'all 0.3s ease',
                                fontSize: '0.9rem',
                                textTransform: 'uppercase',
                                letterSpacing: '1px'
                            }}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
                    gap: '2rem'
                }}>
                    {filteredProjects.map((project) => (
                        <div key={project.id} className="portfolio-item">
                            <div style={{ 
                                position: 'relative', 
                                overflow: 'hidden', 
                                borderRadius: '4px', 
                                aspectRatio: '4/3',
                                backgroundColor: 'var(--color-surface)'
                            }}>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transition: 'transform 0.5s ease',
                                        filter: 'grayscale(20%)'
                                    }}
                                    onMouseOver={(e) => {
                                        e.currentTarget.style.transform = 'scale(1.05)';
                                        e.currentTarget.style.filter = 'grayscale(0%)';
                                    }}
                                    onMouseOut={(e) => {
                                        e.currentTarget.style.transform = 'scale(1)';
                                        e.currentTarget.style.filter = 'grayscale(20%)';
                                    }}
                                />
                                <div style={{
                                    position: 'absolute',
                                    top: '1rem',
                                    right: '1rem',
                                    padding: '0.25rem 0.75rem',
                                    backgroundColor: 'rgba(0,0,0,0.7)',
                                    borderRadius: '4px',
                                    fontSize: '0.8rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px'
                                }}>
                                    {project.category}
                                </div>
                            </div>
                            <div style={{ padding: '1.5rem 0' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 500 }}>{project.title}</h3>
                                    <span style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>{project.year}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;