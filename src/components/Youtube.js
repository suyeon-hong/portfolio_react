import axios from "axios";
import { useEffect } from "react";
import { useState } from "react/cjs/react.development";


function Youtube(){
    const key = "AIzaSyBiHz7c5hPNxp0P81utsPpEVutfeuY-OR8";
    const playlistId = "PL4Gr5tOAPttLOY9IrWVjJlv4CtkYI5cI_";
    const num = 6;
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?key=${key}&playlistId=${playlistId}&maxResults=${num}&part=snippet`;
    const loadingImg = `${process.env.PUBLIC_URL}/img/loading.gif`;

    let [vids, setVids] = useState([]);
    let [done, setDone] = useState(false);

    useEffect(()=>{
        getYoubute();
    }, []);

    return(
        <main className="youtube">
            <div className="inner">
                {(done) ? <VidGallery /> : <img src={loadingImg} className="loadingImg" />}
            </div>
        </main>
    )

    function VidGallery(){
        return(
            <ul>
                {
                    vids.map((vid,index)=>{
                        const videoId = vid.snippet.resourceId.videoId;
                        const videoSrc = `https://www.youtube.com/embed/${videoId}`; 

                        return (
                            <li key={index}>
                                <iframe src={videoSrc} frameBorder="0" allowFullScreen></iframe>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }

    async function getYoubute(){
        await axios.get(url)
        .then(result=> {
            setVids(result.data.items)
        })
        .catch(err=> console.error(err));

        setDone(true);
    }
}

export default Youtube;