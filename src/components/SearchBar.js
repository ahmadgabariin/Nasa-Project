import React, { useState } from 'react'

function SearchBar(props) {
    const [inputsValues , setInputsValues] = useState({search : ``})
    const updateInputs = (e) => setInputsValues ({ [e.target.name] : e.target.value })

    const getPosts = () => props.getPosts(inputsValues.search)

    return (
        <div className='search-div'>
            <input type={`text`} className = {`search-input`}  value = {inputsValues.search} name = {`search`} onChange = {updateInputs}></input>
            <button className='btn-search' onClick={getPosts}><i className="fa-solid fa-magnifying-glass"></i></button>
        </div>
    )
}

export default SearchBar