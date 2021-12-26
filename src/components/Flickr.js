import axios from 'axios';
import { useEffect, useState } from 'react';

const base = "https://www.flickr.com/services/rest/?";
const method = "flickr.interestingness.getList";
const key = "21be590b77fb11bd12a7266f99a2f2d8";
const perPage = 5;
const url = `${base}method=${method}&api_key=${key}&per_page=${perPage}&format=json&nojsoncallback=1&privacy_filter=1`;

function Flickr(){
    let [pics, setPics] = useState([]);

    useEffect(()=>{
        getFlickr();
    }, []);

    return(
        <main>
            <div className="inner">
                <ul>
                    {
                        pics.map((pic,index)=>{
                            const imgSrc = `https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_n.jpg`

                            return (
                                <li key={index}>
                                    <img src={imgSrc} />
                                    <h1>{pic.title}</h1>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </main>
    )

    function getFlickr(){
        axios.get(url)
        .then(items=> {
            const photos = items.data.photos.photo;
            setPics(photos);
        })
        .catch(err=> console.error(err))
    }
}

export default Flickr;