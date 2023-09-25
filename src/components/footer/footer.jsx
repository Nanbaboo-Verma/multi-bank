import './footer.css';
const Footer = () => {
    return <>
        <div className="footer-outer-container">
            <div className="footer-inner-container max-width">

                <div className='multi-bank-footer-container'>
                    <img src="https://multibank.cmsmasters.net/alternative/wp-content/uploads/sites/3/2021/11/logo_footer-1.svg" alt="" />
                    <p className='multi-bank-footer-content'>With affordable fixed payments, use your personal loan to fund a major purchase, pay off credit cards.</p>
                    <div className='footer-social-conatiner'>
                        <div className='facebook-container'>
                            <i class="fa facebook">&#xf09a;</i>
                        </div>
                        <div className='instagram-container'>
                            <i class="fa instagram">&#xf16d;</i>
                        </div>
                        <div className='youtube-container'>
                            <i class="fa youtube">&#xf16a;</i>
                        </div>
                        <div className='twitter-container'>
                            <i class="fa twitter">&#xf099;</i>
                        </div>
                    </div>
                </div>

                <div className='footer-all-container'>
                    <div className='information-container'>
                        <div>
                            <h3 class="">Information</h3>
                        </div>
                        <div className='information-content'>
                            <a href="Our-Services" className='information'>Our Services</a>
                            <a href="Contacts" className='information'>Contacts</a>
                            <a href="Blog" className='information'>Blog</a>
                            <a href="Shop" className='information'>Shop</a>
                        </div>
                    </div>

                    <div className='services-container'>
                        <div>
                            <h3 class="">Services</h3>
                        </div>
                        <div className='services-content'>
                            <a href="Wealth Management" className='services'>WealthManagement</a>
                            <a href="Checking Accounts" className='services'>Checking Accounts</a>
                            <a href="Credit Cards" className='services'>Credit Cards</a>
                            <a href="Mortgages" className='services'>Mortgages</a>
                            <a href="Mobile Banking" className='services'>Mobile Banking</a>
                            <a href="Money Transfers" className='services'>Money Transfers</a>
                            <a href="Personal Loans" className='services'>Personal Loans</a>
                            <a href="Savings Accounts" className='services'>Savings Accounts</a>
                            <a href="Investments" className='services'>Investments</a>
                        </div>
                    </div>

                    <div className='help-container'>
                        <div>
                            <h3 class="">Help</h3>
                        </div>
                        <div className='help-content'>
                            <a href="support" className='help'>support</a>
                            <a href="Security" className='help'>Security</a>
                            <a href="Service status" className='help'>ServiceStatus</a>
                            <a href="Mobile app" className='help'>Mobile app</a>
                            <a href="Digital Banking" className='help'>Digital Banking</a>
                            <a href="Ways to bank" className='help'>Ways to bank</a>
                            <a href="Image Credits" className='help'>Image Credits</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='footer-copy-right-container'>
            <p>This is a sample website.Privacy Policy-cmsmasters © 2022 - All Rights Reserved</p>
        </div>
    </>
}
export default Footer;