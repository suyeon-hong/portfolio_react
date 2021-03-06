const publicUrl = process.env.PUBLIC_URL;
const vidSrc = `${publicUrl}/img/visual.mp4`;

function Main(){
    return(
        <>
            <figure id="visual">
                <video src={vidSrc} muted autoPlay loop></video>
                <div className="intro">
                        <h1>Doing The Right Things</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro magni molestias facilis repellat quas rem repellendus nostrum doloremque veniam consectetur, animi natus commodi itaque enim deleniti nulla maiores eius cum. Porro magni molestias facilis repellat quas rem repellendus nostrum doloremque veniam consectetur.</p>
                        <div className="wrap">
                            <article>
                                <h2>319</h2>
                                <h3>IDEA</h3>
                            </article>
                            <article>
                                <h2>230</h2>
                                <h3>INSTRUCTORS</h3>
                            </article>
                            <article>
                                <h2>215</h2>
                                <h3>DIRECTIONS</h3>
                            </article>
                            <article>
                                <h2>198</h2>
                                <h3>AWARDS</h3>
                            </article>
                        </div>
                    </div>
            </figure>
            <main id="main">
                <div className="inner">
                    <div className="contents">
                        <article>
                            <div className="con">
                                <span className="num">01</span>
                                <h1>GET STARTED</h1>
                                <h2>Title comes here</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error atque, minima ea inventore esse non. Impedit deserunt, id cumque accusantium sequi facere tenetur, nulla necessitatibus ex et facilis, tempora iure! Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus aspernatur animi eius nemo reiciendis vel quae assumenda temporibus numquam incidunt.</p>
                                <a href="#">read more<span></span></a>
                            </div>
                            <div className="pic">
                                <img src={`${publicUrl}/img/content1.jpg`} />
                            </div>
                        </article>
                        <article>
                            <div className="pic">
                                <img src={`${publicUrl}/img/content2.jpg`} />
                            </div>
                            <div className="con">
                                <span className="num">02</span>
                                <h1>GET STARTED</h1>
                                <h2>Title comes here</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error atque, minima ea inventore esse non. Impedit deserunt, id cumque accusantium sequi facere tenetur, nulla necessitatibus ex et facilis, tempora iure! Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus aspernatur animi eius nemo reiciendis vel quae assumenda temporibus numquam incidunt.</p>
                                <a href="#">read more<span></span></a>
                            </div>
                        </article>
                        <article>
                            <div className="con">
                                <span className="num">03</span>
                                <h1>GET STARTED</h1>
                                <h2>Title comes here</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error atque, minima ea inventore esse non. Impedit deserunt, id cumque accusantium sequi facere tenetur, nulla necessitatibus ex et facilis, tempora iure! Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus aspernatur animi eius nemo reiciendis vel quae assumenda temporibus numquam incidunt.</p>
                                <a href="#">read more<span></span></a>
                            </div>
                            <div className="pic">
                                <img src={`${publicUrl}/img/content3.jpg`} />
                            </div>
                        </article>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Main;