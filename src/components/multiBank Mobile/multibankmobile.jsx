import './multibankmobile.css';
const MultiBankMobile = () => {
    return <>
        <div className='multi-bank-mobile-container max-width display-flex '>
            <div className='multi-bank-mobile-content-container'>
                <div className='multi-bank-mobile-content-inner-container'>
                    <h5 class="operate-your-accounts">Operate Your Accounts in Smartphone</h5>
                    <h2 class="multiBank-mobile">MultiBank Mobile</h2>
                    <div class="multiBank-mobile-para-conatiner">
                        <p class="multiBank-mobile-para">The UK's largest banking groups are required to comply with ring-fencing requirements from 1 January 2019. From shares to shopping centres and term deposits to toll roads, there’s a huge range of investments</p>
                    </div>

                    <div className='download-container display-flex align-items'>
                        <a href="download-app" className='download-app'>DOWNLOAD APP</a>
                        <div className='learn-more-container display-flex align-items'>
                            <a href="LEARN-MORE" className='learn-more'>LEARN MORE</a>
                            <i class="fa learn-more-icon-arrow">&#xf138;</i>
                        </div>

                    </div>
                </div>
            </div>
            {/* image */}
            <div className='multi-bank-mobile-image-container'>
                <div className='multi-bank-mobile-image'></div>
            </div>
        </div>
    </>
}
export default MultiBankMobile;