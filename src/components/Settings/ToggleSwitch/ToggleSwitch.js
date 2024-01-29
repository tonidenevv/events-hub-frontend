import WarningLogo from '../../svg/WarningLogo';
import SettingsLogo from '../../svg/SettingsLogo';
import { useEffect, useState } from 'react';
const ToggleSwitch = ({ handleSwitch }) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleToggle = () => {
        setIsChecked(prev => !prev);
    };

    useEffect(() => {
        handleSwitch(isChecked);
    }, [isChecked, handleSwitch]);

    return (
        <div className="absolute top-8 right-8">
            <input
                type="checkbox"
                id="toggleSwitch"
                className="hidden"
                checked={isChecked}
                onChange={handleToggle}
            />
            <label
                htmlFor="toggleSwitch"
                className="cursor-pointer relative bg-white inline-block h-9 w-16 border-2 rounded-full transition duration-300 ease-in-out"
            >
                <span className="sr-only">Toggle Switch</span>
                <span
                    className={`flex items-center justify-center text-center bg-blue-600 border-blue-500 rounded-full h-8 w-8 shadow-md transform transition-transform duration-300 ease-in-out ${isChecked ? 'translate-x-9' : 'translate-x-0'
                        }`}
                >{isChecked ? <WarningLogo size={6} color={'black'} /> : <SettingsLogo size={5} />}</span>
            </label>
        </div>
    )
}

export default ToggleSwitch;