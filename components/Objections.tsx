'use client'

import { useState } from 'react'

const faqs = [
    { q: '"Não tenho tempo para ficar escrevendo"', a: 'Você não precisa. Meu trabalho é justamente poupar o seu tempo. Você participa das entrevistas — que são conversas — e das rodadas de revisão. O resto fica comigo. A maioria dos clientes dedica menos de 4 horas ao processo inteiro.' },
    { q: '"Não sei escrever"', a: 'Não precisa saber. Saber escrever é minha função. Você precisa saber o que sabe — e nisso você já é especialista há anos.' },
    { q: '"Nunca consegui começar um livro"', a: 'Porque começar sozinho é difícil. A maioria das pessoas não trava por falta de conteúdo — trava por falta de estrutura e processo. É exatamente isso que eu trago.' },
    { q: '"Meu conhecimento não é suficiente para um livro"', a: 'Se você tem experiência real, histórias concretas e aprendizados que outras pessoas precisam ouvir — você tem um livro. Deixa eu ser o juiz disso numa conversa.' },
    { q: '"Não sei se o livro vai valer o investimento"', a: 'Um livro não é custo. É ativo. Ele abre portas, posiciona autoridade, gera convites e fecha contratos. O retorno não vem da venda de exemplares — vem do que o livro representa para a sua carreira.' },
]

export default function Objections() {
    const [open, setOpen] = useState<number | null>(null)

    return (
        <section
            style={{ backgroundColor: 'var(--color-cream)' }}
            className="section-pad"
        >
            <div className="wrap-narrow">
                <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '1rem' }}>
                        <span className="gold-bar" />
                        <span className="eyebrow" style={{ color: 'var(--color-gold)' }}>FAQ</span>
                        <span className="gold-bar" />
                    </div>
                    <h2 className="display" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', color: 'var(--color-ink)' }}>
                        Antes de decidir
                    </h2>
                </div>

                <div style={{ borderTop: '1px solid var(--color-cream-border)' }}>
                    {faqs.map((item, i) => (
                        <div key={i} style={{ borderBottom: '1px solid var(--color-cream-border)' }}>
                            <button
                                onClick={() => setOpen(open === i ? null : i)}
                                style={{
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'flex-start',
                                    gap: '1.5rem',
                                    padding: '1.5rem 0',
                                    background: 'none',
                                    border: 'none',
                                    cursor: 'pointer',
                                    textAlign: 'left',
                                }}
                            >
                                <span
                                    style={{
                                        fontFamily: 'var(--font-display)',
                                        fontSize: '1.125rem',
                                        fontWeight: 600,
                                        color: 'var(--color-ink)',
                                        lineHeight: 1.4,
                                    }}
                                >
                                    {item.q}
                                </span>
                                <span
                                    style={{
                                        color: 'var(--color-gold)',
                                        fontSize: '1.5rem',
                                        lineHeight: 1,
                                        flexShrink: 0,
                                        transition: 'transform 0.2s',
                                        transform: open === i ? 'rotate(45deg)' : 'rotate(0)',
                                        fontWeight: 300,
                                    }}
                                >
                                    +
                                </span>
                            </button>
                            {open === i && (
                                <div style={{ paddingBottom: '1.5rem' }}>
                                    <p style={{ fontSize: '0.9375rem', color: 'var(--color-ink-muted)', lineHeight: 1.7, margin: 0 }}>
                                        {item.a}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}