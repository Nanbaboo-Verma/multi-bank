import './deposit.css'
const Deposit = () => {
    return <>
        <div className='deposit-container max-width display-flex space-between '>
            <div className='deposite-left-container display-flex'>
                <div className='deposite-left-image-container'>
                    <div className='deposite-left-image'></div>
                </div>

                <div className='deposite-calculate-container'>
                    <h2 className="calculate-deposit-heading">Calculate Your Deposit</h2>
                    <p class="deposite-para">Depostis are now easier than ever</p>
                    <div className='text-field-container1 display-flex'>
                        <label className='label-deposite'>Deposite: *</label>
                        <input type="text" placeholder='10000' className='deposite-text-field' />
                        {/* <span className='deposit-usd'>USD</span> */}
                    </div>
                    <div className='text-field-container display-flex'>
                        <label className='label-deposite'>Deposite term (month): *</label>
                        <input type="text" placeholder='12' className='deposite-text-field' />

                    </div>
                    <div className='text-field-container display-flex'>
                        <label className='label-deposite'>During this period you will accumulate:</label>
                        <input type="text" placeholder='0' className='deposite-text-field' />
                    </div>
                    <div className='submit-application-container'>
                        <a href="submit-application" className='submit-application'>SUBMIT APPLICATION</a>
                    </div>
                </div>
            </div>
            <div className='deposite-image-container'>
                <div className='deposite-image'></div>
            </div>
        </div>


    </>
}
export default Deposit;


