const items = [
    {
        n: '01',
        title: 'Você tem conteúdo de sobra',
        body: 'Anos de experiência, metodologias testadas, histórias que transformam vidas. O material está na sua cabeça — só falta alguém para tirar.',
    },
    {
        n: '02',
        title: 'Mas a agenda nunca para',
        body: 'Reuniões, clientes, decisões. Toda vez que você tenta sentar para escrever, aparece algo mais urgente. E o livro fica para amanhã — de novo.',
    },
    {
        n: '03',
        title: 'Já tentou começar',
        body: 'Existe um documento em algum lugar. Algumas ideias anotadas. Mas sem estrutura, sem processo, sem alguém do lado — o projeto para.',
    },
]

export default function Problem() {
    return (
        <section
            style={{ backgroundColor: 'var(--color-navy)', color: 'var(--color-white)' }}
            className="section-pad"
        >
            <div className="wrap">
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                    <span className="gold-bar" />
                    <span className="eyebrow" style={{ color: 'var(--color-gold)' }}>
                        A verdade é simples
                    </span>
                </div>

                <h2
                    className="display"
                    style={{
                        fontSize: 'clamp(2rem, 4vw, 3rem)',
                        maxWidth: '32rem',
                        marginBottom: '4rem',
                        color: 'var(--color-white)',
                    }}
                >
                    Você acumulou anos de experiência. Mas ninguém conhece{' '}
                    <span style={{ color: 'var(--color-gold)' }}>sua história.</span>
                </h2>

                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '2rem',
                    }}
                >
                    {items.map((item) => (
                        <div
                            key={item.n}
                            style={{
                                borderTop: '1px solid rgba(197,160,40,0.3)',
                                paddingTop: '1.5rem',
                            }}
                        >
                            <span
                                className="display"
                                style={{ fontSize: '3rem', color: 'rgba(197,160,40,0.25)', display: 'block', marginBottom: '1rem' }}
                            >
                                {item.n}
                            </span>
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
                            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>
                                {item.body}
                            </p>
                        </div>
                    ))}
                </div>

                <div
                    style={{
                        marginTop: '4rem',
                        padding: '2rem',
                        borderLeft: '3px solid var(--color-gold)',
                        backgroundColor: 'rgba(255,255,255,0.04)',
                    }}
                >
                    <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, margin: 0 }}>
                        Sua mensagem está presa na sua cabeça. Enquanto isso, outros viram referência
                        escrevendo o que você já viveu.
                    </p>
                </div>
            </div>
        </section>
    )
}