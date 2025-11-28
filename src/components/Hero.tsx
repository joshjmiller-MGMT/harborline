const Hero = () => {
    return (
        <section style={{
            height: '100vh',
            width: '100%',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
        }}>
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: 'url(/hero.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                zIndex: -1,
            }} />
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'rgba(0,0,0,0.4)',
                zIndex: 0,
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                <h1 style={{
                    fontSize: '5rem',
                    fontWeight: 900,
                    lineHeight: 1.1,
                    marginBottom: '1.5rem',
                    textTransform: 'uppercase',
                    letterSpacing: '-2px',
                }}>
                    Entertainment<br />Reimagined
                </h1>
                <p style={{
                    fontSize: '1.25rem',
                    maxWidth: '600px',
                    margin: '0 auto 2.5rem',
                    color: '#e4e4e7',
                }}>
                    We bring world-class talent to your most important events. Experience the difference of true professionalism.
                </p>
                <button className="btn">Request a Quote</button>
            </div>
        </section>
    );
};

export default Hero;
