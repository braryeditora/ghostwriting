const WA = 'https://wa.me/5521983461734?text='

export default function CTAFinal() {
    return (
        <section
            style={{
                padding: '6rem 1.5rem',
                backgroundColor: '#0f172a',
                color: '#ffffff',
                textAlign: 'center',
            }}
        >
            <div
                style={{
                    maxWidth: '700px',
                    margin: '0 auto',
                }}
            >
                <h2
                    style={{
                        fontSize: 'clamp(2rem, 4vw, 3rem)',
                        marginBottom: '1.5rem',
                    }}
                >
                    Você já tem o conteúdo.
                    <br />
                    Falta transformar em livro.
                </h2>

                <p
                    style={{
                        fontSize: '1.1rem',
                        color: 'rgba(255,255,255,0.7)',
                        marginBottom: '2.5rem',
                    }}
                >
                    Me conta o que você tem hoje. Eu te mostro como isso vira um livro estruturado.
                </p>

                <a
                    href={`${WA}${encodeURIComponent(
                        'Olá, quero entender como transformar meu conhecimento em livro.'
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        display: 'inline-block',
                        backgroundColor: '#ffffff',
                        color: '#0f172a',
                        padding: '1rem 2rem',
                        fontWeight: 600,
                        textDecoration: 'none',
                        fontSize: '0.9rem',
                        letterSpacing: '0.05em',
                    }}
                >
                    FALAR NO WHATSAPP →
                </a>
            </div>
        </section>
    )
}