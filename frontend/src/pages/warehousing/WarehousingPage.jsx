import React from 'react'
import './Warehousing.css'
import SummaryComponent from '../../components/Summary/SummaryComponent'
import { assets } from '../../assets/assets'

const WarehousingPage = () => {
  return (
    <>
      <SummaryComponent
      image={
        assets.WarehouseImage2
      }
      title="Preserving quality, ensuring excellence"
      text="Our warehouses are maintained to the highest industry standards to safeguard the integrity of every batch of coffee. We carefully regulate ambient conditions to preserve freshness, aroma, and overall quality throughout storage. Each lot of green coffee is handled with precision and care, ensuring it is properly stored, monitored, and diligently prepared for export. This commitment to excellence guarantees that our coffee reaches clients in optimal condition, reflecting the quality we stand for."
      />
    </>
  )
}  

export default WarehousingPage