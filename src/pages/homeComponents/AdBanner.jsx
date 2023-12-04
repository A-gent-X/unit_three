import React from 'react'
import salmon from '../../assets/salmon.jpg'

const style = {
  background: `linear-gradient(
    190deg,
    rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 0.8)),
    url(${salmon})`,
  backgroundSize: "cover",
}

const AdBanner = () => {
  return (
    <div style={style} className="adBanner">
      <h1 className='text-color'>Palate Paradise</h1>
      <h1 className='text-color' id="change-color">Pineapple Salmon</h1>
        <h3 className='text-color'>
          This recipe consists of fresh wild Alaskan salmon, rubbed in a bbq
          brown sugar rub, baked for 25 minutes on a bed of pineapple, and garnished in butter, garlic, and chives. You won’t want to miss it!
        </h3>
        <button className='changeBtn'>
          Check it out
        </button>
    </div>
  )
}

export default AdBanner