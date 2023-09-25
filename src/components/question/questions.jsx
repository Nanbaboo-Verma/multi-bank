import Question from './question';
import QuestionHeader from './questionheader';
import './question.css';
const Qestions = () => {
    return <>
        <div className='questions-container'>
            <QuestionHeader />
            <Question />
        </div>
    </>
}
export default Qestions;