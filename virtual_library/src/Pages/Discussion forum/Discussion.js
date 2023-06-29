import React, { useState, useEffect } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
import GoBack from '../../Components/GoBack/GoBack';
import Topic from './Comments/Topic';
import axios from '../utils/axios';
import { AiOutlineSearch } from 'react-icons/ai';
import ClosedIcon from '@mui/icons-material/Close';


const Discussion = () => {
    const [newTopic, setNewTopic] = useState(false)
    const [loading, setLoading] = useState(true);
    const [data, setdata] = useState([])
    const [wordEntered, setwordEntered] = useState("");


    useEffect(() => {
        axios.get("/forum/TopicList")
            .then((res) => {
                setdata(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    })

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setwordEntered(searchWord);
        const newFilter = data.filter((value) => {
            return value.Topic.toLowerCase().includes(searchWord.toLowerCase())
        });
        localStorage.setItem('Topic', JSON.stringify(newFilter))

        // if (newFilter === "") {
        //     localStorage.removeItem('Topic')
        // }
    }

    if (wordEntered === "") {
        localStorage.removeItem('Topic')
    }


    const clearInput = () => {
        setwordEntered("");
    }


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
                    <div className='w-full h-[20%]  max-h-full p-3  flex flex-col items-center top-0 bg-gray-900'>

                        <div className='px-2 pt-1' >
                            <div className='flex'>
                                <div className='relative'>
                                    <div className='absolute top-3 left-0 flex items-center pl-1 w-[20px] z-1'>
                                        <AiOutlineSearch className='text-white' />
                                    </div>

                                </div>

                                <input type="text" placeholder='Search for topic' value={wordEntered} onChange={handleFilter} className='w-[350px] rounded px-4 py-2.5 text-sm font-light bg-gray-800 text-gray-400 outline-0 border-0 focus:outline-none focus:ring-1 focus:ring-gray-500' />
                                <div className='relative'>
                                    <div className='absolute -left-6 top-1.5 z-1'>
                                        {wordEntered === "" ? <ClosedIcon style={{ visibility: 'hidden' }} /> : <ClosedIcon id="clearBtn" onClick={clearInput} className='text-white' />}
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='px-6'>
                            <hr className='border-gray-700 hidden' />
                        </div>

                    </div>
                    <div className='flex flex-col nn:flex-row'>
                        <div style={{ marginTop: '25px', width: '60px' }}><GoBack /></div>
                        <div className='w-full h-max min-h-screen flex flex-col gap-10 pt-10 px-5 pb-10 '>
                            <span className='text-right'>
                                <button onClick={() => setNewTopic(true)} className="w-[300px] bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                                    <AiOutlinePlus size={20} />    Start a new Topic
                                </button>
                            </span>

                            <div className='h-full min-h-screen pt-4 bg-white w-full'>

                                <Topic loading={loading} setLoading={setLoading} newTopic={newTopic} setNewTopic={setNewTopic} />

                            </div>
                        </div>
                    </div>

                </div>
                <Footer />
            </div>
        </>
    )

}

export default Discussion