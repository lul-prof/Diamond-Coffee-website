import React from 'react'
import SummaryComponent from '../../components/Summary/SummaryComponent'
import { assets } from '../../assets/assets'
'./Partners.css'

const PartnersPage = () => {
  return (
    <>
    <SummaryComponent

    image={assets.respImage}
    title="Commitment to Sustainability."
    text="At Diamond Coffee Company, we believe that true success is built on a foundation of sustainability. Our core responsibility extends to the farmers who cultivate our coffee, the communities we support, and the planet we all share. By partnering with farmer groups and local cooperatives, we foster sustainable supply chains, empower communities, and create long-term value for our clients. Every step of our process reflects our commitment to ethical practices, environmental stewardship, and positive social impact."
    
    />
    </>
  )
}

export default PartnersPage