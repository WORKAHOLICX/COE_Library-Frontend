import React, { useState, useEffect, useRef } from 'react';
import './Searchbar.css';
import SearchIcon from '@mui/icons-material/Search';
import ClosedIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';

function Searchbar({ placeholder, data }) {
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setwordEntered] = useState("");
    const [display, setdisplay] = useState(false);
    const [hasResults, sethasResults] = useState(false)
    const [word, setword] = useState("")
    const navigate = useNavigate();
    const resultsRef = useRef();

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setwordEntered(searchWord);
        const newFilter = data.filter((value) => {
            return value.name.toLowerCase().includes(searchWord.toLowerCase())
        });
        if (searchWord === "") {
            setFilteredData([]);
        }
        else {
            setFilteredData(newFilter);
            sethasResults(true)
        }

    }

    const clearInput = () => {
        setFilteredData([]);
        setwordEntered("");
        sethasResults(false)
    }

    const handleClick = event => {
        setdisplay(true)
        sethasResults(false)
    }

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            setdisplay(false)
            sethasResults(false)
        }
    })

    let menuRef = useRef();
    useEffect(() => {
        let handler = (e) => {
            if (!menuRef.current.contains(e.target)) {
                setdisplay(false)
                sethasResults(false)
            }

        }


        document.addEventListener("mousedown", handler);

        return () => {
            document.removeEventListener("mousedown", handler)
        }
    })

    const handleSearch = (e) => {
        const sear = wordEntered.split(" ").join("").toLowerCase();
        const sh = sear.split(',');
        navigate(`/home/${sh[1]}/${sh[0]}`)
    }

    useEffect(() => {
        if (hasResults) {
            document.body.addEventListener('keydown', onKeyDown);
        } else {
            document.body.removeEventListener('keydown', onKeyDown);
        }
        return () => {
            document.body.removeEventListener('keydown', onKeyDown);
        }
    }, [hasResults]);

    function onKeyDown(event) {
        const isUp = event.key === 'ArrowUp';
        const isDown = event.key === 'ArrowDown';

        if (isUp) {
            // console.log('Going up!')
        }

        if (isDown) {
            // console.log('Going down!')

        }
    }

    return (
        <div className='Appss'>
            <div className='search' ref={menuRef}>
                <div className='searchInputs'>
                    <div className='absolute pt-1 pl-1'>
                        {hasResults && wordEntered === word ? <SearchIcon id="clearBtn" onClick={handleSearch} /> : <SearchIcon id="clearBtn" />}
                    </div>
                    <input type="text" placeholder={placeholder} value={wordEntered} onChange={handleFilter} onClick={handleClick} />
                    <div className='relative -left-8 pt-1'>
                        {wordEntered === "" ? <ClosedIcon style={{ visibility: 'hidden' }} /> : <ClosedIcon id="clearBtn" onClick={clearInput} />}
                    </div>
                </div>
                {filteredData.length !== 0 && (
                    <div ref={resultsRef} className='dataResult' style={{ visibility: display ? 'visible' : 'hidden' }}>
                        {filteredData.slice(0, 15).map((value, key) => {
                            return <Link onMouseEnter={(e) => {
                                setwordEntered(e.currentTarget.innerText)
                                setword(e.currentTarget.innerText)
                            }} key={[value.id, value.IDM]} className='dataItem hover:bg-[lightgray]' to={`/home/${value.IDM}/${value.id}`}><p>{value.name}, {value.IDM.toUpperCase()}</p></Link>
                        })}
                    </div>
                )}
            </div>
        </div >
    )
}

export default Searchbar;

