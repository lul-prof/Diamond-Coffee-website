import React from 'react'
import SummaryComponent from '../../components/Summary/SummaryComponent'
import { assets } from '../../assets/assets'
'./quality.cssq'

const QualityPage = () => {
  return (
    <>
      <SummaryComponent
        image={assets.QualityAssure2}
        title="Precision in every bean"
        text="
        At Diamond Coffee Company, we uphold the highest standards of coffee excellence through rigorous and consistent quality control processes. Our state-of-the-art laboratory conducts comprehensive testing, including detailed sensory evaluations, precise moisture analysis, and thorough defect detection. Guided by our experienced quality panel, every batch is carefully assessed to ensure only the finest coffee meets our standards. This meticulous approach guarantees that our clients receive coffee of exceptional quality, consistency, and integrity with every shipment.
        "
      />
    </>
  )
}

export default QualityPage