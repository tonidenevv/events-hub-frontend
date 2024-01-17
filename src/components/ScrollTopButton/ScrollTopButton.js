import { useEffect, useState } from "react"

const ScrollTopButton = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 200) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        })
    }, []);

    const handleClick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (showButton &&
        <button onClick={handleClick} className="fixed bottom-8 right-8 rounded-full w-16 h-16 flex items-center justify-center hover:bg-slate-600 ease-in-out duration-100 bg-slate-400 p-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
            </svg>
        </button>
    )
}

export default ScrollTopButton;