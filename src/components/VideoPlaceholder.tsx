import { useState } from 'react';

interface VideoPlaceholderProps {
    poster?: string;
    caption?: string;
    height?: string;
}

const VideoPlaceholder = ({ poster = '/hero.png', caption = 'Watch Reel', height = '600px' }: VideoPlaceholderProps) => {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <section style={{ position: 'relative', height, width: '100%', backgroundColor: '#111', overflow: 'hidden' }}>
            {/* Video Background (Simulated) */}
            <div style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundImage: `url(${poster})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: isPlaying ? 'none' : 'grayscale(100%) brightness(0.4)',
                transition: 'all 0.5s ease'
            }}>
                {isPlaying ? (
                    <div style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 600 }}>
                        [Video Player Would Load Here]
                    </div>
                ) : (
                    <div 
                        onClick={() => setIsPlaying(true)}
                        style={{
                            width: '80px',
                            height: '80px',
                            borderRadius: '50%',
                            border: '2px solid #fff',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            transition: 'transform 0.3s ease',
                            zIndex: 10
                        }}
                        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        <div style={{
                            width: 0,
                            height: 0,
                            borderTop: '15px solid transparent',
                            borderBottom: '15px solid transparent',
                            borderLeft: '25px solid #fff',
                            marginLeft: '5px'
                        }}></div>
                    </div>
                )}
            </div>

            {!isPlaying && (
                <div style={{
                    position: 'absolute',
                    bottom: '3rem',
                    left: '0',
                    width: '100%',
                    textAlign: 'center',
                    color: '#fff',
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    fontSize: '0.9rem',
                    pointerEvents: 'none'
                }}>
                    {caption}
                </div>
            )}
        </section>
    );
};

export default VideoPlaceholder;
