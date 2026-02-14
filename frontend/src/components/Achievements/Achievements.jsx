import React from 'react'
import './Achievements.css'
import { assets } from '../../assets/assets'

const Achievements = () => {
  return (
    <>
    <div className="achievements-container">
        <h2>Achievements</h2>
    </div>

    <div className="achievements-details-container">

        <div className="achievements-employees">
            <p>20,000+ employees</p>
             <div className="achievements-employees-image">
                <img src={assets.EmployeesBadge} alt="" />
            </div>
        </div>

        <div className="achievements-farmer">
            
            <p>Farmer Empowerment programs</p>
             <div className="achievements-farmer-image">
                <img src={assets.farmerBadge} alt="" />
            </div>
        </div>

        <div className="achievements-timely">
            <p>Timely exports & deliveries</p>
             <div className="achievements-timely-image">
                <img src={assets.TimelyBadge} alt="" />
            </div>
        </div>

        <div className="achievements-quality">
            <p>Quality Kenyan coffee</p>
            <div className="achievements-quality-image">
                <img src={assets.qualityBadge} alt="" />
            </div>
        </div>
    </div>

    <div className="achievements-images">
        <div className="achievement-image">
            <img src={assets.AchievementImage2} alt="" />
            <p>Diamond Coffee Company is driven by a bold vision to strengthen our leadership in Kenya while strategically expanding across the African continent. By building on our foundation of quality, integrity, and innovation, we aim to grow our presence in key coffee-producing and trading regions. Our focus is on sustainable partnerships, operational excellence, and market development that position us for long-term success. As we look to the future, we are committed to shaping a stronger African coffee industry and extending our impact beyond borders.</p>
        </div>

        <div className="achievement-image">
            <img src={assets.AchievementImage3} alt="" />
            <p>At Diamond Coffee Company, our strength lies in collaboration. We believe that achieving excellence requires teamwork, shared vision, and collective commitment. Every department — from quality control and warehousing to logistics and export — works seamlessly together to ensure our goals are met with precision and efficiency. By fostering a culture of mutual respect, accountability, and open communication, we empower our team to perform at their best and consistently deliver outstanding results for our clients and partners.</p>
        </div>

    </div>
    </>
  )
}

export default Achievements