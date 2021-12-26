import axios from 'axios';
import { useEffect, useState } from 'react';

const base = "https://www.flickr.com/services/rest/?";
const method = "flickr.interestingness.getList";
const key = "21be590b77fb11bd12a7266f99a2f2d8";
const perPage = 9;
const url = `${base}method=${method}&api_key=${key}&per_page=${perPage}&format=json&nojsoncallback=1&privacy_filter=1`;
const loadingImg = `${process.env.PUBLIC_URL}/img/loading.gif`;

function Gallery(){
    let [pics, setPics] = useState([]);
    let [done, setDone] = useState(false);

    useEffect(()=>{
        getFlickr();
    }, []);

    return(
        <main className='gallery'>
            <div className="inner">
                {(done) ? <Gallery /> : <img src={loadingImg} className='loadingImg' />}
            </div>
        </main>
    )

    function Gallery(){
        return(
                <ul>
                    {
                        pics.map((pic,index)=>{
                            const imgSrc = `https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_n.jpg`

                            return (
                                <li key={index}>
                                    <div className='pic'><img src={imgSrc} /></div>
                                    <h1>{pic.title}</h1>
                                </li>
                            )
                        })
                    }
                </ul>
        )
    }

    async function getFlickr(){
        await axios.get(url)
        .then(items=> {
            const photos = items.data.photos.photo;
            setPics(photos);
        })
        .catch(err=> console.error(err));

        setDone(true);
    }
}

export default Gallery;