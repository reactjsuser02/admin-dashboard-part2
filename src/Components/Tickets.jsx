import '../App.css';

import tripleDot from '../icons/tripleDot.svg';

function App(props) {
return (
    <>
    <div className='col-span-4 border-b h-20 p-4'>
        <div className='align-top inline-block'>
            <img className='h-10 rounded-3xl inline mr-5' src={props.profilePicture} alt="" />
        </div>
        <div className='inline-block h-full'>
            <h4 className=''>{props.info}</h4>
            <span className='text-gray-400'>Updated 1 day ago</span>
        </div>
    </div>
    <div className='col-span-2 border-b h-20 p-4'>
        {props.name}
        <br />
        <span className='text-gray-400'>on 24.05.2019</span>
    </div>
    <div className='col-span-2 border-b h-20 p-4'>
        May 26, 2019<br/>
        <span className='text-gray-400'>6:30 PM</span>
    </div>
    <div className='relative col-span-2 border-b h-20 p-6'>
        <span className='bg-red-500 text-white px-4 py-1 rounded-3xl'>High</span>
        <img className='absolute right-5 inline m-auto' src={tripleDot} alt="" />
    </div>
    </>
);
}

export default App;


