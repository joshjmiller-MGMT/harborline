const Portfolio = () => {
    // Using the generated assets as placeholders for a gallery
    const images = [
        { src: '/hero.png', caption: 'Neon Nights Festival' },
        { src: '/corporate.png', caption: 'Tech Summit Gala' },
        { src: '/weddings.png', caption: 'Eleanor & James Wedding' },
        { src: '/bands.png', caption: 'The Midnight Groovers' },
        { src: '/hero.png', caption: 'Summer Stage' }, // Reusing for demo
        { src: '/corporate.png', caption: 'Annual Awards' }, // Reusing for demo
    ];

    return (
        <div style={{ paddingTop: '120px', paddingBottom: '4rem', minHeight: '100vh', backgroundColor: '#000' }}>
            <div className="container">
                <h1 className="section-title">Portfolio</h1>
                <p style={{ textAlign: 'center', color: '#a1a1aa', marginBottom: '4rem', maxWidth: '600px', margin: '0 auto 4rem' }}>
                    A glimpse into the unforgettable moments we've helped create. From intimate gatherings to stadium-sized spectacles.
                </p>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
                    gap: '2rem'
                }}>
                    {images.map((img, index) => (
                        <div key={index} style={{ position: 'relative', overflow: 'hidden', borderRadius: '8px', aspectRatio: '16/9' }}>
                            <img
                                src={img.src}
                                alt={img.caption}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    transition: 'transform 0.3s ease'
                                }}
                                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                            />
                            <div style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                width: '100%',
                                padding: '1rem',
                                background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                                color: 'white',
                                fontWeight: 600
                            }}>
                                {img.caption}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
