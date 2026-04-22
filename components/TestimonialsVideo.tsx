'use client'

import { useState } from 'react'

const videos = [
    {
        title: 'Depoimento 1',
        videoId: 'MO18mhWxj-o',
    },
    {
        title: 'Depoimento 2',
        videoId: 'CjbXm7vgVPI',
    },
    {
        title: 'Depoimento 3',
        videoId: 'SDyY9HQBS6Q',
    },
]

function VideoCard({
    title,
    videoId,
}: {
    title: string
    videoId: string
}) {
    const [isPlaying, setIsPlaying] = useState(false)

    const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
    const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`

    return (
        <div
            style={{
                aspectRatio: '16/9',
                backgroundColor: 'var(--color-navy)',
                overflow: 'hidden',
                position: 'relative',
            }}
        >
            {!isPlaying ? (
                <button
                    type="button"
                    onClick={() => setIsPlaying(true)}
                    aria-label={`Reproduzir ${title}`}
                    style={{
                        position: 'relative',
                        width: '100%',
                        height: '100%',
                        padding: 0,
                        border: 'none',
                        cursor: 'pointer',
                        background: 'none',
                    }}
                >
                    <img
                        src={thumbnail}
                        alt={title}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            display: 'block',
                        }}
                    />

                    <div
                        style={{
                            position: 'absolute',
                            inset: 0,
                            background:
                                'linear-gradient(to top, rgba(0,0,0,0.45), rgba(0,0,0,0.15))',
                        }}
                    />

                    <div
                        style={{
                            position: 'absolute',
                            inset: 0,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <div
                            style={{
                                width: '68px',
                                height: '68px',
                                borderRadius: '999px',
                                backgroundColor: 'rgba(255,255,255,0.92)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
                            }}
                        >
                            <div
                                style={{
                                    width: 0,
                                    height: 0,
                                    borderTop: '10px solid transparent',
                                    borderBottom: '10px solid transparent',
                                    borderLeft: '16px solid #0f172a',
                                    marginLeft: '4px',
                                }}
                            />
                        </div>
                    </div>

                    <div
                        style={{
                            position: 'absolute',
                            left: '1rem',
                            bottom: '0.9rem',
                            color: '#fff',
                            fontSize: '0.85rem',
                            fontWeight: 600,
                            letterSpacing: '0.04em',
                            textAlign: 'left',
                        }}
                    >
                        {title}
                    </div>
                </button>
            ) : (
                <iframe
                    width="100%"
                    height="100%"
                    src={embedUrl}
                    title={title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                />
            )}
        </div>
    )
}

export default function TestimonialsVideo() {
    return (
        <section
            style={{
                backgroundColor: 'var(--color-cream-dark)',
                borderTop: '1px solid var(--color-cream-border)',
            }}
            className="section-pad"
        >
            <div className="wrap">
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '1rem',
                            marginBottom: '1rem',
                        }}
                    >
                        <span className="gold-bar" />
                        <span className="eyebrow" style={{ color: 'var(--color-gold)' }}>
                            Depoimentos
                        </span>
                        <span className="gold-bar" />
                    </div>

                    <h2
                        className="display"
                        style={{
                            fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                            color: 'var(--color-ink)',
                        }}
                    >
                        Quem já transformou conhecimento em livro
                    </h2>
                </div>

                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '1.5rem',
                    }}
                >
                    {videos.map((video) => (
                        <VideoCard
                            key={video.videoId}
                            title={video.title}
                            videoId={video.videoId}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}