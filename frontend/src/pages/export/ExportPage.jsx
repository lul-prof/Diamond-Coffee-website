import React from 'react'
import './Export.css'
import SummaryComponent from '../../components/Summary/SummaryComponent'
import { assets } from '../../assets/assets'

const ExportPage = () => {
  return (
    <>
    <SummaryComponent
      image={assets.ExportImage}
      title="Connecting Kenyan Coffee to the World"
      text="
      Diamond Coffee Company is committed to delivering Kenyan coffee to international markets with efficiency and reliability. Our export process is carefully managed from documentation to shipment, ensuring full compliance with international standards and client specifications. With meticulous logistics coordination and timely execution, we guarantee that every consignment is securely handled and delivered in optimal condition. Our dedication to transparency, precision, and service excellence makes us a trusted partner in the global coffee trade.
      "
    />
    </>
  )
}

export default ExportPage