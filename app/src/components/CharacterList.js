import React, {useEffect} from 'react'
import { connect } from 'react-redux'

import {fetchCharacters} from '../store/actions/action'

const CharacterList = (props) => {
    useEffect(()=> {
        props.fetchCharacters();
    },[])




    return (
        <div>
            <h1>Star Wars Characters</h1>
            {props.isLoading ? <p>Loading characters data...</p> : null}
            {props.error ? <p style = {{ color: "red" }}> {props.error} </p>: null}
            {props.characters.map((item) => (
                <div>
                    {/*console.log("item: ", item)*/}
                    <h2>{item.name}</h2>
                </div>
            ))}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.isLoading,
        characters: state.characterData,
        error: state.error
    }
}

export default connect(mapStateToProps, { fetchCharacters }) (CharacterList);