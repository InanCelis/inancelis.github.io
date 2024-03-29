function HomeIntro({photo}) {
    return (
        <div className='homepage'>
            <div className='content'>
                <div className='image'>
                    <img src={photo} className="my-image"/>
                </div>
                <div className='details'>
                    <h6>Explore My World!</h6>
                    <h3>Hi, I'm <span className='textMain font-weight-bold'>Inan Celis</span> a</h3>
                    <h1>Website</h1>
                    <h2></h2>
                    <p className="text-muted mb-4">
                    Creative web developer and designer - crafting visually stunning, functional websites. 
                    Elevate your brand with bespoke design and innovative technology.
                    </p>
                </div>
            </div>
        </div>

    )
}

export default HomeIntro;