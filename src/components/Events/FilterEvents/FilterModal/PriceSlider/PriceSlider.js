import './CustomSlider.css';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
// import { useState } from 'react';

const PriceSlider = ({ priceSliderValues, setPriceSliderValues, priceInputValues, setPriceInputValues }) => {
    // const [priceSliderValues, setPriceSliderValues] = useState([1, 9999]);
    // const [inputValues, setPriceInputValues] = useState([1, 9999]);

    const handleSliderChange = (values) => {
        setPriceSliderValues(values);
        setPriceInputValues(values);
    }

    const handleInputsChange = (e) => {
        if (e.target.name === 'firstInput') {
            setPriceSliderValues([e.target.value, priceSliderValues[1]]);
            setPriceInputValues([e.target.value, priceSliderValues[1]]);
        } else if (e.target.name === 'secondInput') {
            setPriceSliderValues([priceSliderValues[0], e.target.value]);
            setPriceInputValues([priceSliderValues[0], e.target.value]);
        }
    }

    const sliderStyles = {
        handle: {
            height: '28px',
            width: '28px',
            marginTop: '-6px',
        },
        rail: {
            backgroundColor: 'white',
            border: '0.5px solid gray',
            height: '16px'
        },
        track: {
            border: '0.5px solid gray',
            height: '16px',
        }
    }

    const handleInputsBlur = (e) => {
        if (e.target.value < 1 && e.target.value) e.target.value = 1;
        if (e.target.value > 9999 && e.target.value) e.target.value = 9999;

        if (e.target.name === 'firstInput') {
            if (e.target.value >= priceSliderValues[1]) e.target.value = Number(priceSliderValues[1]) - 1;
            setPriceSliderValues([e.target.value, priceSliderValues[1]]);
            setPriceInputValues([e.target.value, priceSliderValues[1]]);
        } else if (e.target.name === 'secondInput') {
            if (e.target.value <= priceSliderValues[0]) e.target.value = Number(priceSliderValues[0]) + 1;
            setPriceSliderValues([priceSliderValues[0], e.target.value]);
            setPriceInputValues([priceSliderValues[0], e.target.value]);
        }
    }
    return (
        <div className="mt-16 border-b-2 border-slate-300 pb-5" >
            <div className='font-semibold ml-8 mb-2 text-lg'>
                Price Range
            </div>
            <div className='custom-slider-container'>
                <Slider styles={sliderStyles} range min={1} max={9999} value={priceSliderValues} onChange={handleSliderChange} />
            </div>
            <div className="flex mt-8 lg:gap-10 gap-4 justify-center items-center">
                <input type="number" className='lg:w-32 w-24 border-2 focus:outline-none focus:border-blue-500 border-black rounded-xl p-0.5 px-1' name='firstInput' onChange={handleInputsChange} onBlur={handleInputsBlur} value={priceInputValues[0]} />
                <input type="number" className='lg:w-32 w-24 border-2 focus:outline-none focus:border-blue-500 border-black rounded-xl p-0.5 px-1' name='secondInput' onChange={handleInputsChange} onBlur={handleInputsBlur} value={priceInputValues[1]} />
            </div>
        </div>
    )
}

export default PriceSlider;