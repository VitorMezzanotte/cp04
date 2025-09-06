import React, { useState, useEffect } from 'react'
import ResultCard from './ResultCard'

export default function Calculator() {
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [imc, setImc] = useState(null)
  const [category, setCategory] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    setError('')
  }, [weight, height])

  function calculate(e) {
    e.preventDefault()

    const w = parseFloat(weight.replace(',', '.'))
    const h = parseFloat(height.replace(',', '.'))

    if (!w || !h) {
      setError('Por favor insira valores válidos para peso e altura.')
      setImc(null)
      setCategory('')
      return
    }

    if (w <= 0 || h <= 0) {
      setError('Valores devem ser maiores que zero.')
      setImc(null)
      setCategory('')
      return
    }

    const value = w / (h * h)
    const rounded = Math.round(value * 100) / 100
    setImc(rounded)

    let cat = ''
    if (value < 18.5) cat = 'Abaixo do peso'
    else if (value < 25) cat = 'Peso normal'
    else if (value < 30) cat = 'Sobrepeso'
    else if (value < 35) cat = 'Obesidade grau I'
    else if (value < 40) cat = 'Obesidade grau II'
    else cat = 'Obesidade grau III'

    setCategory(cat)
  }

  function reset() {
    setWeight('')
    setHeight('')
    setImc(null)
    setCategory('')
    setError('')
  }

  return (
    <section className="calculator-card">
      <form onSubmit={calculate} className="form">
        <div className="field">
          <label>Peso (kg)</label>
          <input
            inputMode="decimal"
            value={weight}
            onChange={e => setWeight(e.target.value)}
            placeholder="ex: 70.5"
            aria-label="peso"
          />
        </div>

        <div className="field">
          <label>Altura (m)</label>
          <input
            inputMode="decimal"
            value={height}
            onChange={e => setHeight(e.target.value)}
            placeholder="ex: 1.79"
            aria-label="altura"
          />
        </div>

        {error && <p className="error">{error}</p>}

        <div className="actions">
          <button type="submit" className="btn primary">Calcular IMC</button>
          <button type="button" onClick={reset} className="btn ghost">Limpar</button>
        </div>
      </form>

      <ResultCard imc={imc} category={category} />
    </section>
  )
}
