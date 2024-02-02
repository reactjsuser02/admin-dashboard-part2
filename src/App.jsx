import './App.css';
import React, { useState } from 'react';
import Main from './Components/Main';


import overview from './icons/overview.svg';
import agents from './icons/agents.svg';
import articles from './icons/articles.svg';
import contacts from './icons/contacts.svg';
import ideas from './icons/ideas.svg';
import settings from './icons/settings.svg';
import subscription from './icons/subscription.svg';
import tickets from './icons/tickets.svg';
import logo from './icons/logo.svg';

function App() {

    const [page, setPage] = useState('tickets')

return (
    <div className="App w-full h-full overflow-auto">
        <div className='sidebar absolute left-0 h-full py-4 w-2/12 overflow-auto bg-gray-900 text-gray-400'>
            <div className='px-5 mb-10'>
                <img className='inline mr-2' src={logo} alt="" />
                <h2 className='inline'>Dashboard Kit</h2>
            </div>
            <div className={(page == 'overview') ? 'h-10 px-5 leading-10 text-gray-300 hover:bg-gray-800 cursor-pointer bg-gray-800 border-l-2 border-green-300' : 'h-10 leading-10 px-5 hover:bg-gray-800 cursor-pointer'} onClick={() => setPage('overview')}>
                <img className='inline leading-10 mr-3' src={overview} alt="" />
                Overview
            </div>
            <div className={(page == 'tickets') ? 'h-10 px-5 leading-10 text-gray-300 hover:bg-gray-800 cursor-pointer bg-gray-800 border-l-2 border-green-300' : 'h-10 leading-10 px-5 hover:bg-gray-800 cursor-pointer'} onClick={() => setPage('tickets')}>
                <img className='inline leading-10 mr-3' src={tickets} alt="" />
                Tickets
            </div>
            <div className='h-10 leading-10 px-5 hover:bg-gray-800 cursor-pointer'>
                <img className='inline leading-10 mr-3' src={ideas} alt="" />
                Ideas
            </div>
            <div className='h-10 leading-10 px-5 hover:bg-gray-800 cursor-pointer'>
                <img className='inline leading-10 mr-3' src={contacts} alt="" />
                Contacts
            </div>
            <div className='h-10 leading-10 px-5 hover:bg-gray-800 cursor-pointer'>
                <img className='inline leading-10 mr-3' src={agents} alt="" />
                Agents
            </div>
            <div className='h-10 leading-10 px-5 hover:bg-gray-800 cursor-pointer'>
                <img className='inline leading-10 mr-3' src={articles} alt="" />
                Articles
            </div>

            <hr className='border-gray-800 my-5' />

            <div className='h-10 leading-10 px-5 hover:bg-gray-800 cursor-pointer'>
                <img className='inline leading-10 mr-3' src={settings} alt="" />
                Settings
            </div>
            <div className='h-10 leading-10 px-5 hover:bg-gray-800 cursor-pointer'>
                <img className='inline leading-10 mr-3' src={subscription} alt="" />
                Subscription
            </div>
        </div>

        
        <Main page={page} />
        
    </div>
);
}

export default App;
