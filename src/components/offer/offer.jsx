import './offer.css'
const Offer = () => {
    const offerData = [
        {
            offerIcon: "fa fa-home",
            offerContent: "Mortgage",
            arrow: "fa"
        },
        {
            offerIcon: "fa fa-briefcase",
            offerContent: "Business",
            arrow: "fa"
        },
        {
            offerIcon: "fa fa-credit-card",
            offerContent: "Credit Cards",
            arrow: "fa"
        },
        {
            offerIcon: "fa fa-umbrella",
            offerContent: "Saving",
            arrow: "fa"
        },
    ]
    return <>
        <div className='offer-outer-container max-width'>
            <div className='offer-inner-container min-width'>
                <div className='great-offer-for-great-experience-container'>
                    <h5>Great offer for great experience</h5>
                </div>
                <div className="choose-what-right-for-you-container">
                    <h2 className="choose-what-right-for-you">Choose What Right for You</h2>
                </div>
                <div className='offer-items-container'>
                    {offerData.map((items) => {
                        return <>
                            <div className='offer-items'>
                                <i className={items.offerIcon + " offer-icons"} ></i>
                                <div className='offer-items-content-container'>
                                    <p className='offer-items-content'>{items.offerContent}</p>
                                    <i className={items.arrow + " offer-arrow-icon"}>&#xf138;</i>
                                </div>
                            </div>
                        </>
                    })}
                </div>
            </div>
        </div>
        {/* offer bottom border */}
        <div className='offer-bottom-border max-width'></div>
    </>
}
export default Offer;