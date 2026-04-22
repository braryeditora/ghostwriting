const steps = [
    { n: '1', title: 'Extraio', body: 'Entrevistas estruturadas para capturar o que está na sua cabeça — histórias, metodologias, lições. Você fala. Eu organizo.' },
    { n: '2', title: 'Estruturo', body: 'Construo a arquitetura narrativa completa. Sumário, progressão, capítulos. Um mapa editorial antes de escrever uma linha.' },
    { n: '3', title: 'Escrevo', body: 'Com a sua voz, seu vocabulário, sua forma de pensar. O texto soa como você — porque vem de você.' },
    { n: '4', title: 'Entrego', body: 'Manuscrito completo, revisado, pronto para diagramação ou publicação direta.' },
]

export default function Solution() {
    return (
        <section
            id="como-funciona"
            style={{ backgroundColor: 'var(--color-white)' }}
            className="section-pad"
        >
            <div className="wrap">
                <div style={{ marginBottom: '4rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                        <span className="gold-bar" />
                        <span className="eyebrow" style={{ color: 'var(--color-gold)' }}>Como funciona</span>
                    </div>
                    <h2
                        className="display"
                        style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', color: 'var(--color-ink)', maxWidth: '28rem' }}
                    >
                        Você participa. Eu executo.
                    </h2>
                </div>

                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                        gap: '2px',
                        backgroundColor: 'var(--color-cream-border)',
                    }}
                >
                    {steps.map((step) => (
                        <div
                            key={step.n}
                            style={{
                                backgroundColor: 'var(--color-white)',
                                padding: '2.5rem 2rem',
                            }}
                        >
                            <div
                                style={{
                                    width: '2.5rem',
                                    height: '2.5rem',
                                    backgroundColor: 'var(--color-navy)',
                                    color: 'var(--color-white)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontFamily: 'var(--font-display)',
                                    fontWeight: 700,
                                    fontSize: '1.125rem',
                                    marginBottom: '1.5rem',
                                }}
                            >
                                {step.n}
                            </div>
                            <h3
                                style={{
                                    fontFamily: 'var(--font-display)',
                                    fontSize: '1.5rem',
                                    fontWeight: 700,
                                    color: 'var(--color-ink)',
                                    marginBottom: '0.75rem',
                                }}
                            >
                                {step.title}
                            </h3>
                            <p style={{ fontSize: '0.875rem', color: 'var(--color-ink-muted)', lineHeight: 1.7 }}>
                                {step.body}
                            </p>
                        </div>
                    ))}
                </div>

                <div
                    style={{
                        marginTop: '3rem',
                        padding: '2rem 2.5rem',
                        backgroundColor: 'var(--color-cream)',
                        borderLeft: '3px solid var(--color-gold)',
                    }}
                >
                    <p style={{ fontSize: '1.0625rem', color: 'var(--color-ink)', lineHeight: 1.7, margin: 0 }}>
                        <strong style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem' }}>
                            O que você recebe não é só um livro.
                        </strong>{' '}
                        É o seu conhecimento organizado como ativo permanente. Autoridade registrada. A prova
                        concreta de quem você é e do que você sabe.
                    </p>
                </div>
            </div>
        </section>
    )
}