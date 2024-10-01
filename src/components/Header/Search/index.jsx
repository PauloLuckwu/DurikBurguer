import React, { useState } from 'react'
import { Search28Filled } from '@fluentui/react-icons';
import { useSearchParams } from 'react-router-dom';

function Search({ placeholder}) {
    const [search, setSearch] = useState("");

    const [searchParams, setSearchParams] = useSearchParams();

    const handleClick = () => {
        setSearchParams({ search: search });
        setSearch("");
    };
    return (
        <div className={'my-8 flex items-center justify-center'}>
            <input
                className="w-3/6 h-10 border-2 border-amber-400 rounded-lg px-4 mt-1 box-border"
                placeholder={placeholder} type='text' value={search} onChange={event => setSearch(event.target.value)} onKeyDown={(e) => e.key === "Enter" && handleClick()}
            />
            <div className='relative'>
                <Search28Filled className='absolute top-[-16px] right-2 px-4 py-1 box-content cursor-pointer' onClick={handleClick} />
            </div>
        </div>
    )
}

export default Search