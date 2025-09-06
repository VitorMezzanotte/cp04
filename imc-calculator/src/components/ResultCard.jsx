import React from 'react'

function colorForCategory(category) {
  switch (category) {
    case 'Abaixo do peso':
      return 'var(--c-blue)'
    case 'Peso normal':
      return 'var(--c-green)'
    case 'Sobrepeso':
      return 'var(--c-yellow)'
    default:
      return 'var(--c-red)'
  }
}

export default function ResultCard({ imc, category }) {
  if (imc === null) {
    return (
      <div className="result-card empty">
        <p>Resultado aparecerá aqui.</p>
      </div>
    )
  }

  const color = colorForCategory(category)

  return (
    <div className="result-card" style={{ borderColor: color }}>
      <h3>Seu IMC</h3>
      <div className="value">{imc}</div>
      <div className="category" style={{ background: color + '22' }}>{category}</div>
      <small className="range">
        IMC: menor que 18.5 (baixo) | 18.5–24.9 (normal) | 25–29.9 (sobrepeso) | 30+ (obesidade)
      </small>
    </div>
  )
}
