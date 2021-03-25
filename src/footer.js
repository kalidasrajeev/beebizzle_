import React from 'react'
import insta from './insta.png';
import face from './face.png';
import twitter from './twitter.png';

export default function Footer() {
    return (
        <div className='footer'>
        <div className='footerchild1'>
            <div style={{ width: '25%' }}>
                <ul>
                    <li className='footerLinks'>Our Guide</li>
                    <li className='footerLinks1'>About Us</li>
                    <li className='footerLinks1'>FAQ</li>
                    <li className='footerLinks1'>Corporate Site</li>
                    <li className='footerLinks1'>Our Showrooms</li>
                    <li className='footerLinks1'>Terms & Conditions</li>
                    <li className='footerLinks1'>Privacy Policy</li>

                </ul>
            </div>
            <div style={{ width: '25%' }}>
                <ul>
                    <li className='footerLinks'>Our Services</li>
                    <li className='footerLinks1'>Returns & Exchange</li>
                    <li className='footerLinks1'>Pay Monthly Installments</li>
                    <li className='footerLinks1'>Easy Credit Offers</li>
                    <li className='footerLinks1'>About Us</li>
                    <li className='footerLinks1'>Site Mag</li>
                    <li className='footerLinks1'>B2B Services</li>
                </ul>
            </div>
            <div style={{ width: '25%' }}>
                <ul>
                    <li className='footerLinks'>Categories</li>
                    <li className='footerLinks1'>Mobiles</li>
                    <li className='footerLinks1'>Tablets</li>
                    <li className='footerLinks1'>Laptops</li>
                    <li className='footerLinks1'>Camera</li>
                    <li className='footerLinks1'>Headphones</li>
                    <li className='footerLinks1'>Television</li>

                </ul>
            </div>
            <div style={{ width: '25%' }}>
                <ul>
                    <li className='footerLinks'>Our Services</li>
                    <li className='footerLinks1'>Returns & Exchange</li>
                    <li className='footerLinks1'>Pay Monthly Installments</li>
                    <li className='footerLinks1'>Easy Credit Offers</li>
                    <li className='footerLinks1'>About Us</li>
                    <li className='footerLinks1'>Site Mag</li>
                    <li className='footerLinks1'>B2B Services</li>

                </ul>
            </div>

        </div>

        <div className='footerchild2'>
            <div>
                <ul>
                    <li className='footerLinks'>Follow Us</li>
                    <li className='footerLinks1'><div style={{ display: 'flex' }}>
                        <div style={{ width: '25px', height: '25px', padding: '10px' }}>
                            <img src={insta} style={{ width: '100%' }} />
                        </div>

                        <div style={{ width: '25px', height: '25px', padding: '10px' }}>
                            <img src={twitter} style={{ width: '100%' }} />
                        </div>
                        <div style={{ width: '25px', height: '25px', padding: '10px' }}>
                            <img src={face} style={{ width: '100%' }} />
                        </div>
                    </div></li>


                </ul>
            </div>
        </div>

    </div>
    )
}
