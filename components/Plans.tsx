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
        cta: 'Quero o Profissional',
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
            style={{ backgroundColor: '#ffffff' }}
            className="section-pad"
        >
            <div className="wrap">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2
                        style={{
                            fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                            color: '#1c1410',
                        }}
                    >
                        Escolha o seu ponto de entrada
                    </h2>
                </div>

                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                        gap: '1.5rem',
                    }}
                >
                    {plans.map((plan) => (
                        <div
                            key={plan.name}
                            style={{
                                backgroundColor: plan.featured ? '#0f172a' : '#f7f4ee',
                                border: plan.featured
                                    ? '2px solid #b8962e'
                                    : '1px solid rgba(0,0,0,0.08)',
                                padding: '2.5rem 2rem',
                                position: 'relative',
                            }}
                        >
                            {plan.badge && (
                                <div
                                    style={{
                                        position: 'absolute',
                                        top: '-10px',
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        backgroundColor: '#b8962e',
                                        color: '#fff',
                                        fontSize: '0.65rem',
                                        padding: '0.25rem 1rem',
                                    }}
                                >
                                    {plan.badge}
                                </div>
                            )}

                            <h3
                                style={{
                                    fontSize: '1.75rem',
                                    color: plan.featured ? '#fff' : '#1c1410',
                                }}
                            >
                                {plan.name}
                            </h3>

                            <p>{plan.desc}</p>

                            <ul>
                                {plan.items.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>

                            {/* 🔥 CORREÇÃO AQUI */}
                            <a
                                href={`${WA}${encodeURIComponent(plan.msg)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: 'block',
                                    textAlign: 'center',
                                    padding: '0.875rem',
                                    backgroundColor: '#111',
                                    color: '#fff',
                                    textDecoration: 'none',
                                }}
                            >
                                {plan.cta}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}