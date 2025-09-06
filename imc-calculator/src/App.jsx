import React from 'react'
import Calculator from './components/Calculator'

export default function App() {
  return (
    <div className="app-root">
      <header className="hero">
        <h1>Calculadora de IMC</h1>
        <p className="subtitle">Insira seus dados para calcular o IMC e ver a classificação.</p>
      </header>

      <main className="container">
        <Calculator />

        <section className="about">
          <h2>Como funciona</h2>
          <p>
            O IMC é calculado dividindo o peso (kg) pela altura ao quadrado (m²).
            Use o resultado para monitorar sua composição corporal.
          </p>
        </section>
      </main>

      <footer className="footer">
        Feito por Vitor Mezzanotte — Projeto para disciplina Web / Front
      </footer>
    </div>
  )
}
