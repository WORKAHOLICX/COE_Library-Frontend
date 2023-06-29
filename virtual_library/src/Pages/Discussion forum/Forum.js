import React, { useState } from 'react';
import Comments from './Comments/Comments';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
import GoBack from '../../Components/GoBack/GoBack';
import { useAuth } from '../hooks/useAuth';

const Forum = () => {
    const [loading, setLoading] = useState(true);
    const { user } = useAuth();
    const { id } = user;


    return (
        <>
            {loading && <div>
                <div className="loader-container">
                    <div className="spinner"></div>
                </div>
            </div>}
            <div id='discuss'>

                <Navbar />


                <div className='w-full flex flex-col h-full min-h-screen'>
                    <div className='flex flex-col nn:flex-row'>
                        <div style={{ marginTop: '25px', width: '60px' }}><GoBack /></div>
                        <div className='w-full h-max flex flex-col gap-10 pt-10 px-5 pb-10 '>

                            <div className='h-full pt-4 bg-white w-full'>

                                <Comments currentUserId={id} setLoading={setLoading} loading={loading} />


                            </div>

                        </div>
                    </div>

                </div>
                <Footer />
            </div>
        </>
    )

}

export default Forum