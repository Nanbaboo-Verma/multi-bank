import './map.css'
const Map = () => {
    return <>
        <div className='map-container max-width'>
            <div className='map-location-container'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.3240048541243!2d80.98076291438935!3d26.8614451831497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd0696fc3245%3A0x9719da00b2748496!2sCEDCOSS%20Technologies%20Private%20Limited!5e0!3m2!1sen!2sin!4v1643776555711!5m2!1sen!2sin" className="map-iframe" ></iframe>
            </div>
            <div className='map-content-container'>
                <div className='map-inner-content-container'>
                    <h2 className='map-heading'>Find our location and nearest branch or ATM</h2>
                    <div className='heights-promenade-container'>
                        <div className='map-icon-container'>
                            <i className="fa map-location-icon">&#xf041;</i>
                        </div>
                        <div className='map-content-right-promenadecintainer'>
                            <p className='heights-promenade-content1'>Heights Promenade</p>
                            <p className='heights-promenade-content2'>Brooklyn, NY, USA</p>
                        </div>
                    </div>

                    <div className='mail-container'>
                        <div className='map-icon-container'>
                            <i className="fa map-location-icon">&#xf0e0;</i>
                        </div>
                        <div className='map-content-right-mail-cintainer'>
                            <p className='mail-content1'>example@example.com</p>
                            <p className='mail-content2'>Support 24/7</p>
                        </div>
                    </div>

                    <div className='phone-number-container'>
                        <div className='map-icon-container'>
                            <i className="fa map-location-icon">&#xf095;</i>
                        </div>
                        <div className='map-content-right-phone-cintainer'>
                            <p className='phone-content1'>+1 452 123 1235</p>
                            <p className='phone-content2'>Free Consultation</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}
export default Map;