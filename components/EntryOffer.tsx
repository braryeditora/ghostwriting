export default function EntryOffer() {
    const WA =
        'https://wa.me/5521983461734?text=' +
        encodeURIComponent('Olá, quero estruturar corretamente o meu livro.')

    return (
        <section
            style={{
                backgroundColor: 'var(--color-cream-dark)',
                borderTop: '1px solid var(--color-cream-border)',
            }}
            className="section-pad"
        >
            <div
                className="wrap"
                style={{
                    maxWidth: '800px',
                    textAlign: 'center',
                }}
            >
                <div style={{ marginBottom: '1.5rem' }}>
                    <span
                        className="eyebrow"
                        style={{ color: 'var(--color-gold)' }}
                    >
                        Antes de publicar
                    </span>
                </div>

                <h2
                    className="display"
                    style={{
                        fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
                        color: 'var(--color-ink)',
                        lineHeight: 1.2,
                        marginBottom: '1.5rem',
                    }}
                >
                    Seu livro pode não existir de verdade ainda.
                </h2>

                <p
                    style={{
                        fontSize: '1.1rem',
                        lineHeight: 1.7,
                        color: 'var(--color-ink-muted)',
                        marginBottom: '2rem',
                    }}
                >
                    A maioria dos autores acha que terminou o livro quando escreve.
                    <br /><br />
                    Mas sem a estrutura editorial correta, sua obra fica:
                </p>

                <div
                    style={{
                        display: 'grid',
                        gap: '0.75rem',
                        marginBottom: '2rem',
                        textAlign: 'left',
                        maxWidth: '500px',
                        marginInline: 'auto',
                    }}
                >
                    {[
                        'Vulnerável a cópias',
                        'Invisível no mercado',
                        'Travada para publicação profissional',
                    ].map((item) => (
                        <div
                            key={item}
                            style={{
                                display: 'flex',
                                gap: '0.75rem',
                                alignItems: 'flex-start',
                                color: 'var(--color-ink)',
                                lineHeight: 1.6,
                            }}
                        >
                            <span style={{ color: 'var(--color-gold)' }}>✦</span>
                            <span>{item}</span>
                        </div>
                    ))}
                </div>

                <p
                    style={{
                        fontSize: '1rem',
                        color: 'var(--color-ink-muted)',
                        marginBottom: '2.5rem',
                    }}
                >
                    Sem entrar em detalhes técnicos — porque é exatamente onde a maioria erra —
                    eu te explico em minutos o que o seu livro precisa.
                </p>

                <a
                    href={WA}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        display: 'inline-block',
                        backgroundColor: 'var(--color-navy)',
                        color: '#fff',
                        padding: '1rem 2rem',
                        fontWeight: 700,
                        textDecoration: 'none',
                    }}
                >
                    Quero estruturar meu livro corretamente
                </a>

                <p
                    style={{
                        marginTop: '1rem',
                        fontSize: '0.9rem',
                        color: 'var(--color-ink-muted)',
                    }}
                >
                    Sem compromisso. Vamos entender seu projeto primeiro.
                </p>
            </div>
        </section>
    )
}