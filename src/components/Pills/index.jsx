import React from 'react'
import { Link, useParams } from 'react-router-dom'
// import { translateType } from '../../utils/stringFunctions';

function Pills({ types }) {
    const { filter } = useParams();

  return (
    <div className='flex gap-5 items-center justify-center'>
        <Link to={`/`} className={(filter === undefined) ? "inline-block rounded-xl py-1 px-3 bg-amber-400 text-slate-700 font-semibold " : "inline-block rounded-xl py-1 px-3 bg-slate-300 text-white font-semibold" }>Todos</Link>
        { types.map((item, index) => (
            <Link to={`/${item}`} key={index} className={(filter === `${item}`) ? "inline-block rounded-xl py-1 px-3 bg-amber-400 text-slate-700 font-semibold " : "inline-block rounded-xl py-1 px-3 bg-slate-300 text-white font-semibold" }>{ item }</Link>
        )) }
    </div>
  )
}

export default Pills