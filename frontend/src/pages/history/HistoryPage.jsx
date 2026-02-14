import React from 'react'
import './History.css'
import SummaryComponent from '../../components/Summary/SummaryComponent'
import { dividerImages } from '../../assets/assets'

const HistoryPage = () => {
  return (
    <>
      <SummaryComponent 
      image={dividerImages.HistoryImage2} 
      title={"ESTABLISHED IN 1990"}
      text={
        "Established in 1990, Diamond Coffee Company Limited has embodied a tradition of family values with a focus on quality and responsibility to emerge as a reputable exporter in the Kenya Coffee industry. The journey began in 1965, when the founder of the company, the late Pravin Shah, tried his hand at coffee farming. It was quickly appreciated that great coffee starts at its roots and his thirst for knowledge slowly unravelled the fascinating story of the global coffee supply chain. The journey evolved, and today, his two sons, Paras and Sanjeev, proudly carry forward his legacy."
      } 
      />
    </>
  )
}

export default HistoryPage