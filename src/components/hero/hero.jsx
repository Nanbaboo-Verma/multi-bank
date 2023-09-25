import './hero.css'
const Hero = () => {
    return <>
        <div className='hero-outer-container'>
            <div className='hero-inner-container max-width'>

                <div className='hero-left-inner-container'>
                    <div className='hero-left-image-container'>
                        <div className='hero-left-image'></div>
                    </div>
                    <div className='hero-left-content-container'>
                        <div className="hero-left-content">
                            <div className='hero-left-content1'>Premium Bank for You</div>
                            <div className='hero-left-content2'>Stay In Control Your Finances With Our Bank</div>
                            <div className='hero-left-content3'>The advantage of online banking is that you can pay bills superfast, and your account is automatically credited or debited</div>
                            <div className='hero-left-content4'>MORE ABOUT APP<i className="fa hero-left-arrow">&#xf138;</i></div>
                        </div>
                    </div>
                </div>

                <div className='hero-right-container'>
                    <div className='hero-right-image-container'>
                        <div className='hero-right-image'></div>
                    </div>
                    <div className='hero-right-inner-container'>
                        <div className='online-banking-container'>
                            <h3 className='online-banking-heading'>Online Banking</h3>
                            <p className='hero-right-para-container'>Check out some of the things you can do with our mobile banking app.</p>
                            <p><a href="more" className='more-about'>MORE ABOUT APP <i className="fa hero-right-arrow">&#xf138;</i></a></p>
                        </div>
                        <div className='latest-news-container'>
                            <h3 className='online-banking-heading'>Latest News</h3>
                            <p className='hero-right-para-container'>Check more information &#38; stories about our bank in latests posts.</p>
                            <p><a href="show-blog" className='show-blog'>SHOW BLOG <i className="fa hero-right-arrow">&#xf138;</i></a></p>
                        </div>
                        <div className='need-help-container'>NEED HELP?</div>
                    </div>
                </div>


            </div>

        </div>
    </>
}
export default Hero;