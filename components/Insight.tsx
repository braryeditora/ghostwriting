export default function Insight() {
    return (
        <section
            style={{ backgroundColor: 'var(--color-cream-dark)' }}
            className="section-pad"
        >
            <div className="wrap-narrow" style={{ textAlign: 'center' }}>
                <span className="gold-bar" style={{ margin: '0 auto 2rem' }} />

                <blockquote
                    className="display"
                    style={{
                        fontSize: 'clamp(1.75rem, 4vw, 3rem)',
                        color: 'var(--color-navy)',
                        marginBottom: '2rem',
                        lineHeight: 1.2,
                    }}
                >
                    O problema não é escrever.
                    <br />
                    <span style={{ color: 'var(--color-gold)' }}>
                        É que ninguém estruturou seu conhecimento para virar livro.
                    </span>
                </blockquote>

                <p style={{ fontSize: '1rem', color: 'var(--color-ink-muted)', lineHeight: 1.8, maxWidth: '36rem', margin: '0 auto' }}>
                    Escrever é técnica — e eu tenho a técnica. O que você tem, e ninguém mais tem,
                    é a experiência, a visão e a autoridade. Meu trabalho é fazer as duas coisas se encontrarem.
                </p>

                <span className="gold-bar" style={{ margin: '2rem auto 0' }} />
            </div>
        </section>
    )
}