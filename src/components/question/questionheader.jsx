import './question.css'
const QestionHeader = () => {
    return <>
        <div className='question-header-container'>
            <h5 className="have-any-quastions-heading">Have Any Quastions?</h5>
            <h2 className="top-questions-heading">Top Questions People Ask Us</h2>

            <div className="view-more-question-container">
                <p className='view-more-question-para'>Got a question about how we’re organised, applying to work for us, or looking for financial or shareholder information?
                    <a href="view-more-question" className='view-more-question'>View more Q&amp;A here</a>
                </p>
            </div>
        </div>
    </>
}
export default QestionHeader;