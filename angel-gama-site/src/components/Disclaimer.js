import { useEffect, useState } from "react";

export const Disclaimer = () => {

    const [showDisclaimer, setShowDisclaimer] = useState(false);

    useEffect(() => {
        const disclaimerAccepted = localStorage.getItem('disclaimerAccepted');

        if (disclaimerAccepted !== 'true') {
            setShowDisclaimer(true);
        }
    }, []);

    const handleAcceptDisclaimer = () => {
        localStorage.setItem('disclaimerAccepted', 'true');
        setShowDisclaimer(false);
    };

    const handleCloseDisclaimer = () => {
        setShowDisclaimer(false);
    };

    return (
        <div className={`disclaimer${showDisclaimer ? '' : ' accepted'}`}>
            <button className="close-button" onClick={handleCloseDisclaimer}>
                &times;
            </button>
            <p className="disclaimer-tittle">🚧 This website is under construction 🛠️</p>
            <p>I appreciate your patience as I work on improving it. Your feedback is valuable to me, so please don't hesitate to share your thoughts on my LinkedIn.</p>
            <button type="button" onClick={handleAcceptDisclaimer}>Accept</button>
        </div>
    )
}