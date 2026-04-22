const WA = 'https://wa.me/5521983461734?text=Ol%C3%A1%2C%20tenho%20interesse%20no%20servi%C3%A7o%20de%20ghostwriting.'

export default function Hero() {
    return (
        <section
            style={{
                backgroundColor: 'var(--color-cream)',
                paddingTop: '9rem',
                paddingBottom: '6rem',
                paddingInline: '1.5rem',
                borderBottom: '1px solid var(--color-cream-border)',
            }}
        >
            <div className="wrap">
                <div style={{ maxWidth: '52rem' }}>
                    {/* Eyebrow */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                        <span className="gold-bar" />
                        <span className="eyebrow" style={{ color: 'var(--color-gold)' }}>
                            Serviço de Ghostwriting Premium
                        </span>
                    </div>

                    {/* Headline */}
                    <h1
                        className="display"
                        style={{
                            fontSize: 'clamp(3rem, 7vw, 5.5rem)',
                            color: 'var(--color-ink)',
                            marginBottom: '1.5rem',
                        }}
                    >
                        Você tem o conhecimento.
                        <br />
                        <span style={{ color: 'var(--color-navy)' }}>Eu escrevo o livro.</span>
                    </h1>

                    {/* Subheadline */}
                    <p
                        style={{
                            fontSize: '1.125rem',
                            color: 'var(--color-ink-muted)',
                            lineHeight: 1.7,
                            maxWidth: '36rem',
                            marginBottom: '2.5rem',
                        }}
                    >
                        Ghostwriting para empresários, mentores e especialistas que querem
                        transformar experiência em autoridade — sem perder tempo tentando
                        escrever sozinhos.
                    </p>

                    {/* CTAs */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '3.5rem' }}>
                        <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-dark">
                            <WaIcon /> Quero escrever meu livro
                        </a>
                        <a href="#como-funciona" className="btn-ghost">
                            Ver como funciona
                        </a>
                    </div>

                    {/* Trust signals */}
                    <div
                        style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '2rem',
                            paddingTop: '2.5rem',
                            borderTop: '1px solid var(--color-cream-border)',
                        }}
                    >
                        {[
                            { icon: '🔒', label: 'Total sigilo', sub: 'Seu nome sempre será o autor' },
                            { icon: '📖', label: 'Livro com qualidade', sub: 'Padrão editorial profissional' },
                            { icon: '✓', label: 'Processo estruturado', sub: 'Do zero ao manuscrito final' },
                        ].map((item) => (
                            <div key={item.label} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                                <span style={{ fontSize: '1.25rem', marginTop: '0.1rem' }}>{item.icon}</span>
                                <div>
                                    <p style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-ink)', margin: 0 }}>
                                        {item.label}
                                    </p>
                                    <p style={{ fontSize: '0.75rem', color: 'var(--color-ink-muted)', margin: 0 }}>
                                        {item.sub}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

function WaIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
    )
}