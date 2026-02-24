import React, { useState } from 'react'
import './Divider.css'
import HistoryPage from '../../pages/history/HistoryPage';
import WarehousingPage from '../../pages/warehousing/WarehousingPage';
import QualityPage from '../../pages/qualityAssurance/QualityPage';
import ExportPage from '../../pages/export/ExportPage';
import PartnersPage from '../../pages/partners/PartnersPage';
import { assets, dividerImages } from '../../assets/assets';




const Divider = () => {
  const [page,setPage]=useState(1);
  return (
    <>
    <div className="divider-container" id='about'>
        <p onClick={()=>setPage(1)} style={{textDecoration:page===1 ? "underline" :""}}>History</p>
        <p onClick={()=>setPage(2)} style={{textDecoration:page===2 ? "underline" :""}}>Warehousing</p>
        <p onClick={()=>setPage(3)} style={{textDecoration:page===3 ? "underline" :""}}>Quality</p>
        <p onClick={()=>setPage(4)} style={{textDecoration:page===4 ? "underline" :""}}>Export</p>
        <p onClick={()=>setPage(5)} style={{textDecoration:page===5 ? "underline" :""}}>Responsibility</p>
    </div>

    <div className="divider-page">
      {
      page==1 ?
      <HistoryPage/>
      : page==2 ?
      <WarehousingPage/>
      : page==3 ?
      <QualityPage/>
      : page==4 ?
      <ExportPage/>
      : page==5 ?
      <PartnersPage/>   
      :
      <div className='default-container'>

        <div className="pravin-container">
          <div className="pravin-text-container">
              <h1>Founded by <b>Pravin Shah</b></h1>
              <p>
                The late Pravin Shah was the visionary founder of Diamond Coffee Company Ltd, one of Kenya’s respected coffee trading and exporting firms. Under his guidance, the company earned a solid reputation in the Kenyan coffee industry. Today, his legacy lives on through the continued leadership of his sons, who carry forward his commitment to quality and service in every aspect of the company’s operations.
              </p>
            </div>
            <div className="pravin-image-container">
              <img src={dividerImages.HistoryImage} alt="" />
          </div>
        </div>

        <div className="paras-container">
          <div className="paras-text-container">
              <h1>Director <b>Paras Shah</b></h1>
              <p>
                Paras Shah is a Kenyan business leader who serves as the Director of Diamond Coffee Company Ltd,he continues the company’s legacy of excellence in the Kenyan coffee sector, upholding strong relationships with farmers and clients to maintain high standards in coffee export and handling. Paras Shah also represents his company on the management committee of the Kenya Coffee Traders Association (KCTA).
              </p>
            </div>
            <div className="paras-image-container">
              <img src={assets.ParasShah} alt="" />
              <p>
                
              </p>
          </div>
        </div>
        
      </div>   
    }

    </div>
    </>

  )
}

export default Divider