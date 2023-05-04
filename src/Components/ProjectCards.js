import React from 'react'

const ProjectCards = () => {
  return (
        <div class="card">
            <div class="pricing-block-content">
                <p class="pricing-plan">Project name</p>
                <div class="price-value" data-currency="$ USD" data-currency-simple="USD">
                    <button onClick={() => window.open("https://synth-etic.onrender.com")} class="btn">Website</button>
                    <button class="btn">Github</button>
                </div>
            </div>
        </div>
  )
}

export default ProjectCards