const WA = 'https://wa.me/5521983461734?text='

const plans = [
    {
        name: 'Fundação',
        price: 'R$ 3.500',
        to: 'R$ 4.500',
        desc: 'Para quem quer ver o projeto tomar forma antes de ir até o fim.',
        items: [
            'Entrevista de imersão',
            'Direção editorial',
            'Estrutura completa do livro',
            '1 a 2 capítulos escritos',
            'Documento de voz e identidade narrativa',
        ],
        cta: 'Quero o Fundação',
        msg: 'Olá, tenho interesse no plano Fundação.',
        featured: false,
    },
    {
        name: 'Profissional',
        price: 'R$ 6.000',
        to: 'R$ 8.000',
        desc: 'Para quem quer o manuscrito completo, do zero ao final.',
        items: [
            'Tudo do Fundação',
            'Livro completo (8–12 capítulos)',
            'Revisão base incluída',
            'Até 2 rodadas de ajuste',
            'Entrega em formato editável',
            'Parcelamento disponível',
        ],
        cta: 'Quero entender meu livro',
        msg: 'Olá, tenho interesse no plano Profissional.',
        featured: true,
        badge: 'Mais escolhido',
    },
    {
        name: 'Legado',
        price: 'R$ 12.000',
        to: 'R$ 18.000',
        desc: 'Para quem quer o livro e o posicionamento completo do autor.',
        items: [
            'Tudo do Profissional',
            'Bio do autor posicionada',
            'Prefácio e orelha',
            'Estratégia de lançamento',
            'Orientação de posicionamento',
        ],
        cta: 'Quero o Legado',
        msg: 'Olá, tenho interesse no plano Legado.',
        featured: false,
    },
]

export default function Plans() {
    return (
        <section
            id="planos"
            style={{
                backgroundColor: 'var(--color-cream-50)',
                borderTop: '1px solid var(--color-cream-border)',
            }}
            className="section-pad"
        >
            <div className="wrap">
                <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                    <h2
                        className="display"
                        style={{
                            fontSize: 'clamp(2rem, 4vw, 3rem)',
                            color: 'var(--color-ink)',
                            marginBottom: '0.75rem',
                        }}
                    >
                        Escolha o seu ponto de entrada
                    </h2>
                </div>

                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '1.5rem',
                        alignItems: 'stretch',
                    }}
                >
                    {plans.map((plan) => {
                        const isFeatured = plan.featured

                        return (
                            <div
                                key={plan.name}
                                style={{
                                    backgroundColor: isFeatured
                                        ? 'var(--color-navy)'
                                        : 'var(--color-cream-dark)',
                                    color: isFeatured ? '#ffffff' : 'var(--color-ink)',
                                    border: isFeatured
                                        ? '1px solid var(--color-gold)'
                                        : '1px solid var(--color-cream-border)',
                                    padding: '2rem',
                                    position: 'relative',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    minHeight: '100%',
                                    transform: isFeatured ? 'scale(1.02)' : 'none',
                                    zIndex: isFeatured ? 2 : 1,
                                    boxShadow: isFeatured
                                        ? '0 18px 40px rgba(8, 15, 28, 0.18)'
                                        : 'none',
                                }}
                            >
                                {plan.badge && (
                                    <div
                                        style={{
                                            position: 'absolute',
                                            top: '-10px',
                                            left: '50%',
                                            transform: 'translateX(-50%)',
                                            backgroundColor: 'var(--color-gold)',
                                            color: '#111111',
                                            fontSize: '0.72rem',
                                            fontWeight: 700,
                                            letterSpacing: '0.04em',
                                            padding: '0.35rem 0.8rem',
                                            whiteSpace: 'nowrap',
                                        }}
                                    >
                                        {plan.badge}
                                    </div>
                                )}

                                <h3
                                    style={{
                                        fontSize: '2rem',
                                        lineHeight: 1.1,
                                        margin: '0 0 0.75rem 0',
                                        color: isFeatured ? '#ffffff' : 'var(--color-ink)',
                                    }}
                                >
                                    {plan.name}
                                </h3>

                                <div
                                    style={{
                                        marginBottom: '1rem',
                                        color: isFeatured
                                            ? 'rgba(255,255,255,0.92)'
                                            : 'var(--color-ink)',
                                    }}
                                >
                                    <div
                                        style={{
                                            fontSize: '1.1rem',
                                            fontWeight: 700,
                                            marginBottom: '0.2rem',
                                        }}
                                    >
                                        {plan.price} <span style={{ fontWeight: 400 }}>a</span> {plan.to}
                                    </div>

                                    <p
                                        style={{
                                            margin: 0,
                                            fontSize: '1rem',
                                            lineHeight: 1.6,
                                            color: isFeatured
                                                ? 'rgba(255,255,255,0.78)'
                                                : 'var(--color-ink-muted)',
                                        }}
                                    >
                                        {plan.desc}
                                    </p>
                                </div>

                                <div
                                    style={{
                                        display: 'grid',
                                        gap: '0.75rem',
                                        marginBottom: '1.75rem',
                                        flexGrow: 1,
                                    }}
                                >
                                    {plan.items.map((item) => (
                                        <div
                                            key={item}
                                            style={{
                                                display: 'flex',
                                                alignItems: 'flex-start',
                                                gap: '0.7rem',
                                                lineHeight: 1.55,
                                                color: isFeatured
                                                    ? 'rgba(255,255,255,0.88)'
                                                    : 'var(--color-ink)',
                                            }}
                                        >
                                            <span
                                                style={{
                                                    color: 'var(--color-gold)',
                                                    fontWeight: 700,
                                                    lineHeight: 1.4,
                                                }}
                                            >
                                                ✦
                                            </span>
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>

                                <a
                                    href={`${WA}${encodeURIComponent(plan.msg)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        display: 'block',
                                        textAlign: 'center',
                                        padding: '1rem 1.25rem',
                                        textDecoration: 'none',
                                        fontWeight: 700,
                                        fontSize: '1rem',
                                        backgroundColor: isFeatured ? '#ffffff' : '#111111',
                                        color: isFeatured ? '#111111' : '#ffffff',
                                        border: isFeatured
                                            ? '1px solid #ffffff'
                                            : '1px solid #111111',
                                    }}
                                >
                                    {plan.cta}
                                </a>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}