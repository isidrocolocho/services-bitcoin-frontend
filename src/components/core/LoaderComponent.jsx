import React, {useState} from 'react';
import { useLoaderStore } from "../../store/loader.store";

const Loader = () => {
    const {active} = useLoaderStore(state => state);
    const [loadingText] = useState('Cargando...');

    return (
        <>
            <div className="fixed flex flex-col justify-center items-center bg-gray-900/60 backdrop-blur-lg transition-all duration-300 delay-300 ease-in-out" 
                style={{width: '-webkit-fill-available', height: '-webkit-fill-available', opacity: active ? 1 : 0, zIndex: active ? 51 : -1}}>
                <div className="flex justify-around items-center gap-5">
                    <div className="rounded-full w-[50px] h-[50px] animation loading-1 bg-white"></div>
                    <div className="rounded-full w-[50px] h-[50px] animation loading-2 bg-white"></div>
                    <div className="rounded-full w-[50px] h-[50px] animation loading-3 bg-white"></div>
                    <div className="rounded-full w-[50px] h-[50px] animation loading-4 bg-white"></div>
                </div>
                <div className="mt-2 text-white text-lg font-bold">
                    <span className="animation loading-1">{loadingText.substring(0, 3)}</span>
                    <span className="animation loading-2">{loadingText.substring(3, 6)}</span>
                    <span className="animation loading-3">{loadingText.substring(6, 9)}</span>
                    <span className="animation loading-4">{loadingText.substring(9, 12)}</span>
                </div>
            </div>

            <style>
                {`
                    .animation {
                        -webkit-animation:bounce 1.5s infinite;
                    }
                    .loading-1{
                        -webkit-animation-delay:.1s;    
                    }
                    .loading-2{
                        -webkit-animation-delay:.2s;
                    }
                    .loading-3{
                        -webkit-animation-delay:.3s;
                    }
                    .loading-4{
                        -webkit-animation-delay:.4s;
                    }
                    @-webkit-keyframes bounce {
                        0%, 100% {
                            opacity: 1;
                            transform:scale(0.9);
                        }
                        65% {
                            opacity: 0.07;
                            transform:scale(0.8);
                        }
                    }       
                        
                    .text-animation {
                        animation: blink 2s infinite ease-in-out;
                    }
                    @-webkit-keyframes blink {
                        0%, 100% {
                            opacity: 1;
                            transition: opacity 0.5s ease-in;
                        }
                        65% {
                            opacity:0.07;
                            transition: opacity 0.5s ease-in-out;
                        }
                    }                        
                `}
            </style>
        </>
    )
};

export default Loader;
