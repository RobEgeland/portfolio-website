import React from 'react'

const ProjectCards = () => {
  return (
        <div class="card">
            <div class="pricing-block-content">
                <p class="pricing-plan">Synth-etic</p>
                <p className='proj-desc'>A web based dual oscillator synthesizer</p>
                <div class="price-value" data-currency="$ USD" data-currency-simple="USD">
                    <button onClick={() => window.open("https://synth-etic.onrender.com")} class="btn">Website</button>
                    <button onClick={() => window.open("https://github.com/RobEgeland/Synth-etic")} class="btn">Github</button>
                </div>
            </div>
        </div>
  )
}

export default ProjectCards