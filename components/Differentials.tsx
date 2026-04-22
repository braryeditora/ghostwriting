const items = [
    { title: 'Sua voz, preservada', body: 'O livro soa como você — não como eu. Trabalho com sua forma de falar, seus exemplos, seu vocabulário.' },
    { title: 'Origem editorial', body: 'Fundador de editora. Entendo o livro do ponto de vista narrativo, editorial e de posicionamento.' },
    { title: 'Estrutura antes da escrita', body: 'Antes de escrever uma linha, construímos a arquitetura do livro. Isso elimina retrabalho e projetos que ficam em rascunho.' },
    { title: 'Sigilo total', body: 'O crédito é seu. Acordo de confidencialidade incluso em todos os projetos, sem exceção.' },
]

const phrases = [
    'Seu conhecimento tem prazo de validade. Um livro, não.',
    'Especialistas são esquecidos. Autores, não.',
    'Eu escrevo. Você assina. O legado é seu.',
]

export default function Differentials() {
    return (
        <section
            style={{ backgroundColor: 'var(--color-navy)', color: 'var(--color-white)' }}
            className="section-pad"
        >
            <div className="wrap">
                <div style={{ marginBottom: '4rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                        <span className="gold-bar" />
                        <span className="eyebrow" style={{ color: 'var(--color-gold)' }}>Por que trabalhar comigo</span>
                    </div>
                    <h2 className="display" style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', color: 'var(--color-white)', maxWidth: '28rem' }}>
                        Não é só escrita.<br />
                        <span style={{ color: 'var(--color-gold)' }}>É construção de autoridade.</span>
                    </h2>
                </div>

                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                        gap: '2rem',
                        marginBottom: '5rem',
                    }}
                >
                    {items.map((item) => (
                        <div
                            key={item.title}
                            style={{
                                borderTop: '1px solid rgba(197,160,40,0.3)',
                                paddingTop: '1.5rem',
                            }}
                        >
                            <h3
                                style={{
                                    fontFamily: 'var(--font-display)',
                                    fontSize: '1.25rem',
                                    fontWeight: 600,
                                    color: 'var(--color-white)',
                                    marginBottom: '0.75rem',
                                }}
                            >
                                {item.title}
                            </h3>
                            <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>
                                {item.body}
                            </p>
                        </div>
                    ))}
                </div>

                <div
                    style={{
                        borderTop: '1px solid rgba(255,255,255,0.1)',
                        paddingTop: '4rem',
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                        gap: '2rem',
                        textAlign: 'center',
                    }}
                >
                    {phrases.map((phrase) => (
                        <p
                            key={phrase}
                            className="display"
                            style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.4, margin: 0 }}
                        >
                            "{phrase}"
                        </p>
                    ))}
                </div>
            </div>
        </section>
    )
}