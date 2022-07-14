

function Background() {
    const showBackground = Math.random() < 0.5;
    const background = (
        <img
            className='background'
            alt='ocean'
            src='/images/ocean.jpg'
        />
    );
    return (
        <>
            { showBackground && background }
        </>
    )
}

export default Background;