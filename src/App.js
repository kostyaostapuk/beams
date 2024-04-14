import BgSvg from "./bg";
import BeamSvg from "./beam";
import './style.css';

const App = () =>
    (
        <div className="app">
            <div className='flex justify-center items-center px-6 py-24 '>
                <div className='relative'>
                    <BgSvg/>

                    <div className='p-3 bg-white border rounded-xl absolute top-7 left-1'>
                        <h1 className='text-sm'>element 1</h1>
                        <div className='absolute top-full left-3 scale-x-100 scale-y-100 top-full'><BeamSvg/></div>

                        <div
                            className="w-[172px] h-[100px] absolute overflow-hidden z-[1] scale-x-100 left-3 scale-y-100 top-full -mt-px mask"
                            bis_skin_checked="1">
                            <div
                                className={'w-[calc(172px*2)] h-[calc(172px*2)] left-0 top-0 absolute will-change-transform bg-landing-hero-beam-bg animate-beam-spin1'}
                                style={{'color': 'rgb(255, 168, 0)'}}></div>
                        </div>
                    </div>


                    <div className='p-3 absolute bg-white border rounded-xl top-7 right-1'>
                        <h1 className='text-sm'>element 2</h1>
                        <div className='absolute top-full right-3 -scale-x-100 scale-y-100 top-full'><BeamSvg/></div>

                        <div
                            className="w-[172px] h-[100px] absolute overflow-hidden z-[1] -scale-x-100 top-full right-3 scale-y-100 -mt-px mask"
                            bis_skin_checked="1">
                            <div
                                className={'w-[calc(172px*2)] h-[calc(172px*2)] left-0 top-0 absolute will-change-transform bg-landing-hero-beam-bg animate-beam-spin2'}
                                style={{'color': 'rgb(253, 54, 110)'}}></div>
                        </div>
                    </div>

                    <div className='p-3 absolute bg-white border rounded-xl bottom-7 right-1'>
                        <h1 className='text-sm'>element 3</h1>
                        <div className='absolute bottom-full right-3 bottom-full rotate-180'><BeamSvg/></div>

                        <div
                            className="w-[172px] h-[100px] absolute overflow-hidden z-[1] bottom-full right-3 bottom-full rotate-180 scale-y-100 -mt-px mask"
                            bis_skin_checked="1">
                            <div
                                className={'w-[calc(172px*2)] h-[calc(172px*2)] left-0 top-0 absolute will-change-transform bg-landing-hero-beam-bg animate-beam-spin3'}
                                style={{'color': 'rgb(62, 207, 142)'}}></div>
                        </div>
                    </div>

                    <div className='p-3 absolute bg-white border rounded-xl bottom-7 left-1'>
                        <h1 className='text-sm'>element 4</h1>
                        <div className='absolute bottom-full left-3 -scale-x-100 bottom-full rotate-180'><BeamSvg/>
                        </div>

                        <div
                            className="w-[172px] h-[100px] absolute overflow-hidden z-[1] -scale-x-100 rotate-180 left-3 scale-y-100 bottom-full -mt-px mask"
                            bis_skin_checked="1">
                            <div
                                className={'w-[calc(172px*2)] h-[calc(172px*2)] left-0 top-0 absolute will-change-transform bg-landing-hero-beam-bg animate-beam-spin4'}
                                style={{'color': 'rgb(0, 127, 255)'}}></div>
                        </div>
                    </div>

                    <div
                        className='p-3 -z-2 absolute bg-white border rounded-xl top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'>
                        X
                    </div>
                </div>
            </div>
        </div>
    )

export default App;
