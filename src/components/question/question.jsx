import React, { useState } from "react";
import './question.css'
const Accordion = ({ title, children }) => {
    const [isOpen, setOpen] = useState(false);
    return (<>
        <div className="accordion-wrapper">
            <div
                className={`accordion-title ${isOpen ? "open" : ""} accordion-container`}
                onClick={() => setOpen(!isOpen)} >

                <div className="fa-fa-plus-minus-icon">
                    <i className={`fa ${isOpen ? `fa-minus` : `fa-plus`}`}></i>
                </div>
                {title}
            </div>
            <div className={`accordion-item ${isOpen ? "collapsed" : ""}`}>
                <div className="accordion-content">{children}</div>
            </div>
        </div>
    </>);
}
const Question = () => (
    <div className="wrapper">
        < Accordion title="Why is the sky blue?">
            Sunlight reaches Earth's atmosphere and is scattered in all directions by
            all the gases and particles in the air. Blue light is scattered more than
            the other colors because it travels as shorter, smaller waves. This is why
            we see a blue sky most of the time.
        </ Accordion>
        < Accordion title="What's It Like Inside Jupiter?">
            It's really hot inside Jupiter! No one knows exactly how hot, but
            scientists think it could be about 43,000°F (24,000°C) near Jupiter's
            center, or core.
        </ Accordion>
        < Accordion title="What Is a Black Hole?">
            A black hole is an area of such immense gravity that nothing -- not even
            light -- can escape from it.
        </ Accordion>
    </div>
);
export default Question;