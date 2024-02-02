import '../App.css';
import Tickets from './Tickets';

import profilePicture1 from '../images/profiles/1.jpg';
import profilePicture2 from '../images/profiles/2.jpg';
import profilePicture3 from '../images/profiles/3.jpg';
import profilePicture4 from '../images/profiles/4.jpg';
import profilePicture5 from '../images/profiles/5.jpg';
import profilePicture6 from '../images/profiles/6.jpg';
import profilePicture7 from '../images/profiles/7.jpg';
import profilePicture8 from '../images/profiles/8.jpg';

import search from '../icons/search.svg';
import notification from '../icons/notification.svg';
import profile from '../images/profiles/profile.jpg';
import dividerBlue from '../icons/dividerBlue.svg';
import dividerGray from '../icons/dividerGray.svg';
import addIcon from '../icons/add.svg';
import arrowLeft from '../icons/arrowLeft.svg';
import arrowRight from '../icons/arrowRight.svg';
import sortIcon from '../icons/sort.svg';
import filterIcon from '../icons/filter.svg';


function Main(props) {
// return (
    if(props.page == 'overview') {
        return (
            <>
            <div className='main absolute right-0 bg-gray-200 w-10/12 h-full overflow-auto px-5 py-4'>
                <div className='header mb-10'>
                    <h2 className='inline-block font-semibold text-lg'>Overview</h2>
                    <div className='inline-block w-fit float-right'>
                        <img className='inline-block cursor-pointer' src={search} alt="" />
                        <img className='inline-block mx-2.5 cursor-pointer' src={notification} alt="" />
                        |
                        <div className='profile inline-block ml-2.5'>
                            Jones Ferdinand
                            <img className='w-8 inline-block ml-2.5 rounded-3xl cursor-pointer' src={profile} alt="" />
                        </div>
                    </div>
                </div>
                <div className='category grid grid-cols-4 gap-5 mb-8'>
                    <div className='bg-white py-5 rounded-lg border border-gray-300 cursor-pointer'>
                        <h3 className='w-fit text-gray-400 m-auto mb-2.5'>Unresolved</h3>
                        <span className='text-4xl block w-fit m-auto'>60</span>
                    </div>
                    <div className='active bg-white text-sky-600 py-5 rounded-lg border border-sky-600 cursor-pointer'>
                        <h3 className='w-fit m-auto mb-2.5'>Overdue</h3>
                        <span className='text-4xl block w-fit m-auto'>16</span>
                    </div>
                    <div className='bg-white py-5 rounded-lg border-gray-300 cursor-pointer'>
                        <h3 className='w-fit text-gray-400 m-auto mb-2.5'>Open</h3>
                        <span className='text-4xl block w-fit m-auto'>43</span>
                    </div>
                    <div className='bg-white py-5 rounded-lg border-gray-300 cursor-pointer'>
                        <h3 className='w-fit text-gray-400 m-auto mb-2.5'>On hold</h3>
                        <span className='text-4xl block w-fit m-auto'>64</span>
                    </div>
                </div>

                <div className='grid grid-cols-4 h-5/6 mb-5 border border-gray-300'>
                    <div className='trends col-span-3 bg-white p-5 px-6 border-r'>
                        <h3 className='font-semibold text-md'>Today's trends</h3>
                        <div className='text-gray-400'>
                            <span>as of 25 May 2019, 09:41 PM</span>
                            <div className='inline-block float-right'>
                                <span>
                                    <img className='inline mr-2' src={dividerBlue} alt="" />
                                    Today
                                </span>
                                <span className='ml-8'>
                                    <img className='inline mr-2' src={dividerGray} alt="" />
                                    Yesterday
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white grid grid-rows-5'>
                        <div className='border-b py-5'>
                            <h4 className='w-fit text-gray-400 m-auto mb-1'>Resolved</h4>
                            <span className='text-2xl block w-fit m-auto'>449</span>
                        </div>
                        <div className='border-b py-5'>
                            <h4 className='w-fit text-gray-400 m-auto mb-1'>Received</h4>
                            <span className='text-2xl block w-fit m-auto'>426</span>
                        </div>
                        <div className='border-b py-5'>
                            <h4 className='w-fit text-gray-400 m-auto mb-1'>Average first response time</h4>
                            <span className='text-2xl block w-fit m-auto'>33m</span>
                        </div>
                        <div className='border-b py-5'>
                            <h4 className='w-fit text-gray-400 m-auto mb-1'>Average response time</h4>
                            <span className='text-2xl block w-fit m-auto'>3h 8m</span>
                        </div>
                        <div className='border-b py-5'>
                            <h4 className='w-fit text-gray-400 m-auto mb-1'>Resolution within SLA</h4>
                            <span className='text-2xl block w-fit m-auto'>94%</span>
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-2 gap-5 h-3/6'>
                    <div className='bg-white flex flex-col'>
                        <div className='p-5 h-2/6'>
                            <h3 className='inline font-semibold text-md'>Unresolved tickets</h3>
                            <a href="#" className='float-right text-sky-600'>View details</a>
                            <p>
                                <span className='text-gray-400'>Group: </span>Support
                            </p>
                        </div>
                        <div className='grid grid-rows-4 basis-auto grow-0 shrink h-4/6'>
                            <div className='px-5 border-b leading-[50px]'>
                                Waiting on Feature Request
                                <span className='text-gray-400 float-right'>4238</span>
                            </div>
                            <div className='px-5 border-b leading-[50px]'>
                                Awaiting Customer Response
                                <span className='text-gray-400 float-right'>1005</span>
                            </div>
                            <div className='px-5 border-b leading-[50px]'>
                                Awaiting Developer Fix
                                <span className='text-gray-400 float-right'>914</span>
                            </div>
                            <div className='px-5 leading-[50px]'>
                                Pending
                                <span className='text-gray-400 float-right'>281</span>
                            </div>

                        </div>
                    </div>
                    <div className='bg-white flex flex-col'>
                        <div className='p-5 h-2/6'>
                            <h3 className='inline font-semibold text-md'>Tasks</h3>
                            <a href="#" className='float-right text-sky-600'>View all</a>
                            <p>
                                <span className='text-gray-400'>Today</span>
                            </p>
                        </div>
                        <div className='grid grid-rows-4 basis-auto grow-0 shrink h-4/6'>
                            <div className='relative px-5 border-b leading-[50px]'>
                                <input className='w-11/12' type="text" placeholder='Create new task' />
                                <img className='absolute right-5 top-2 cursor-pointer' src={addIcon} alt="" />
                            </div>
                            <div className='px-5 border-b leading-[50px]'>
                                <input className='mr-3' type="checkbox" />
                                Finish ticket update
                            </div>
                            <div className='px-5 border-b leading-[50px]'>
                                <input className='mr-3' type="checkbox" />
                                Create new ticket example
                            </div>
                            <div className='px-5 border-b leading-[50px]'>
                                <input className='mr-3' type="checkbox" />
                                Update ticket report
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
        );
    } else {
        return (
        <>
        <div className='main absolute right-0 bg-gray-200 w-10/12 h-full overflow-auto px-5 py-4'>
            <div className='header mb-10'>
                <h2 className='inline-block font-semibold text-lg'>Tickets</h2>
                <div className='inline-block w-fit float-right'>
                    <img className='inline-block cursor-pointer' src={search} alt="" />
                    <img className='inline-block mx-2.5 cursor-pointer' src={notification} alt="" />
                    |
                    <div className='profile inline-block ml-2.5'>
                        Jones Ferdinand
                        <img className='w-8 inline-block ml-2.5 rounded-3xl cursor-pointer' src={profile} alt="" />
                    </div>
                </div>
            </div>
            <div className='bg-white border border-gray-300'>
                <div className='p-5'>
                    <h3 className='inline'>All tickets</h3>
                    <div className='inline-block float-right'>
                        <img className='inline' src={sortIcon} alt="" />
                        <span>Sort</span>
                        <img className='inline ml-5' src={filterIcon} alt="" />
                        <span>Filter</span>
                    </div>
                </div>
                <div className='grid grid-rows-9 grid-cols-10'>
                    <div className='text-gray-400 leading-[5] col-span-4 border-b h-20 p-4'>
                        Ticket details
                    </div>
                    <div className='text-gray-400 leading-[5] col-span-2 border-b h-20 p-4'>
                        Customer name
                    </div>
                    <div className='text-gray-400 leading-[5] col-span-2 border-b h-20 p-4'>
                        Date
                    </div>
                    <div className='text-gray-400 leading-[5] relative col-span-2 border-b h-20 p-4'>
                        Priority
                    </div>
                    <Tickets
                    profilePicture={profilePicture1}
                    info='Contact Email not Linked'
                    name='Tom Cruise'
                    priority='High'
                    />
                    <Tickets
                    profilePicture={profilePicture2}
                    info='Adding Images to Featured Posts'
                    name='Matt Damon'
                    priority='High'
                    />
                    <Tickets
                    profilePicture={profilePicture3}
                    info='When will I be charged this month?'
                    name='Robert Downey'
                    priority='High'
                    />
                    <Tickets
                    profilePicture={profilePicture4}
                    info='Payment not going through'
                    name='Christian Bale'
                    priority='High'
                    />
                    <Tickets
                    profilePicture={profilePicture5}
                    info='Unable to add replies'
                    name='Henry Cavil'
                    priority='High'
                    />
                    <Tickets
                    profilePicture={profilePicture6}
                    info='Downtime since last week'
                    name='Chris Evans'
                    priority='High'
                    />
                    <Tickets
                    profilePicture={profilePicture7}
                    info='Referral Bonus'
                    name='Sam Smith'
                    priority='High'
                    />
                    <Tickets
                    profilePicture={profilePicture8}
                    info='How do I change my password?'
                    name='Steve Rogers'
                    priority='High'
                    />
                </div>
                <div className='relative h-20 pt-6 px-5'>
                    <div className='float-right'>
                        <span className='text-gray-400'>Rows per page:</span>
                        <select className='w-10 ml-2'>
                            <option value="8" default>8</option>
                        </select>
                        <span className='text-gray-400 ml-5'>1-8 of 1240</span>
                        <img className='inline cursor-pointer' src={arrowLeft} alt="" />
                        <img className='inline cursor-pointer' src={arrowRight} alt="" />
                    </div>
                </div>
            </div>
        </div>
        </>
        );
    }
    
// );
}

export default Main;


