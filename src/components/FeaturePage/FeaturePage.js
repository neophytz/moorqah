import React from 'react'
import './FeaturePage.css'
import illustration from '../../assets/FeaturePage/illustrationMan.svg'
import cloud from '../../assets/FeaturePage/cloud-protection.svg'
import security from '../../assets/FeaturePage/security.svg'
import search from '../../assets/FeaturePage/searching.svg'
import malware from '../../assets/FeaturePage/malware.svg'

const FeaturePage = () => {
  return (
    <div className='content-wrapper'>
        <div className='hero-div'>
            <div className='side-wrapper'>
                <h1 className='hero-content'>Gain Skills When & Where You Want For Your Study or Career...</h1>
                <button className='hero-button'>
                  <span>Explore Gigs</span>
                </button>
            </div>
            <img className='illustration-svg' src={illustration} alt='illustration'/>
        </div>
        <div className='sub-card'>
            <div className='subcard'>
              <img className='cloud-svg' src={cloud} alt='' />
              <h2>Improving Opportunity</h2>
              <h5>makes it possible</h5>
            </div>
            <div className='subcard'>
              <img className='security-svg' src={security} alt='' />
              <h2>Increasing Employability</h2>
              <h5>gain practical skills</h5>
            </div>
            <div className='subcard'>
              <img className='search-svg' src={search} alt='' />
              <h2>Transforming Education</h2>
              <h5>fostering the development</h5>
            </div>
            <div className='subcard'>
              <img className='malware-svg' src={malware} alt='' />
              <h2>Investing in Innovation</h2>
              <h5>support creative ideas</h5>
            </div>
        </div>
    </div>
  )
}

export default FeaturePage