export default function Authority() {
    return (
        <section
            id="sobre"
            style={{
                backgroundColor: 'var(--color-cream-dark)',
                borderTop: '1px solid var(--color-cream-border)',
            }}
            className="section-pad"
        >
            <div
                className="wrap"
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '3rem',
                    alignItems: 'center',
                }}
            >
                <div
                    style={{
                        aspectRatio: '1 / 1',
                        overflow: 'hidden',
                        backgroundColor: 'var(--color-navy)',
                    }}
                >
                    <img
                        src="/images/orlandocarvalho.jpg"
                        alt="Orlando Carvalho"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            display: 'block',
                        }}
                    />
                </div>

                <div>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                            marginBottom: '1rem',
                        }}
                    >
                        <span className="gold-bar" />
                        <span className="eyebrow" style={{ color: 'var(--color-gold)' }}>
                            Quem escreve por você
                        </span>
                    </div>

                    <h2
                        className="display"
                        style={{
                            fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
                            lineHeight: 1.1,
                            color: 'var(--color-ink)',
                            marginBottom: '1.5rem',
                        }}
                    >
                        Mais de uma década transformando conhecimento em palavra.
                    </h2>

                    <div
                        style={{
                            display: 'grid',
                            gap: '1rem',
                            marginBottom: '2rem',
                        }}
                    >
                        {[
                            'Fundador da Brary Editora',
                            'Indicado pelo SEBRAE como conteudista referência em 2013',
                            'Primeiro projeto concluído ainda morando na Romênia',
                            'Especialista em estrutura editorial e voz do autor',
                        ].map((item) => (
                            <div
                                key={item}
                                style={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    gap: '0.75rem',
                                    color: 'var(--color-ink-muted)',
                                    lineHeight: 1.7,
                                }}
                            >
                                <span style={{ color: 'var(--color-gold)' }}>✦</span>
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>

                    <blockquote
                        style={{
                            borderLeft: '3px solid var(--color-gold)',
                            paddingLeft: '1rem',
                            fontStyle: 'italic',
                            color: 'var(--color-ink)',
                            fontSize: '1.1rem',
                            lineHeight: 1.8,
                            margin: 0,
                        }}
                    >
                        “Não vendo escrita. Vendo o seu conhecimento organizado como um ativo que dura para sempre.”
                    </blockquote>
                </div>
            </div>
        </section>
    )
}