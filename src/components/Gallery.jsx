import React, { useRef, useState } from 'react'
import './Gallery.css'

const Gallery = () => {
    const viewerRef = useRef(null)

    const handleClick = (e) => {
        //console.log("Haciendo click en la imagen")
        //console.log(e.target.src)
        viewerRef.current.src = e.target.src
    }

    return (
        <>
            <div className="gallery">
                <div className="viewer">
                    <img ref={viewerRef} />
                </div>
                <div className="photos">
                    <img src="https://picsum.photos/id/345/400/400" onClick={handleClick} />
                    <img src="https://picsum.photos/id/560/400/400" onClick={handleClick} />
                    <img src="https://picsum.photos/id/120/400/400" onClick={handleClick} />
                    <img src="https://picsum.photos/id/876/400/400" onClick={handleClick} />
                    <img src="https://picsum.photos/id/439/400/400" onClick={handleClick} />
                    <img src="https://picsum.photos/id/239/400/400" onClick={handleClick} />
                </div>
            </div>

            <ul>
                {
                    state.songs.map((song) => {
                        return (
                            <li>{song.name}</li>
                        )
                    })
                }
            </ul>

        </>
    )
}

export default Gallery