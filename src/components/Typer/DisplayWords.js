import React from 'react'
import './DisplayWords.css'

const getTypedWords=(words, player)=>{
    let typedWords = words.slice(0, player.currentWordIndex);
    typedWords = typedWords.join(" ")
    return <span className="typdalrdy paddeds"> {typedWords}</span>
}

const getCurrentWord=(words, player)=>{
    return <span className="paddeds" style={{textDecoration:'underline'}}>{words[player.currentWordIndex]}</span>
}

const getWordsToBeTyped=(words, player)=>{
    let wordsToBeTyped =words.slice(player.currentWordIndex +1, words.length)
    wordsToBeTyped= wordsToBeTyped.join(" ")
    return <span className="paddeds"> {wordsToBeTyped}</span>
}

export default function DisplayWords({words, player}) {
    return (
        <div>
            <div className="WordsTypedBlock out">
                {getTypedWords(words, player)}
                {getCurrentWord(words, player)}
                {getWordsToBeTyped(words, player)}
            </div>
        </div>
    )
}
