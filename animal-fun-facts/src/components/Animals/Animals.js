import { displayFact } from '../DisplayFacts/DisplayFacts';
export const animals = {
    dolphin: {
        image: '/images/dolphin.jpg',
        facts: ['Dolphins have been shown to give distinct names to each other!', 'Dolphins are known to display their own culture!', 'Dolphins have two stomachs!']
    },
    lobster: {
        image: '/images/lobster.jpg',
        facts: ['Lobsters taste with their legs!', 'Lobsters chew with their stomachs!', 'Lobsters can live as long as 100 years.']
    },
    starfish: {
        image: '/images/starfish.jpg',
        facts: ['Starfish can have up to 40 arms!', 'Starfish have no brain and no blood!', 'Starfish can regenerate their own arms!']
    }
};

function Animals() {
    const images = [];
    for (const animal in animals) {
        images.push(
            <img
                key={animal}
                className='animal'
                alt={animal}
                src={animals[animal].image}
                aria-label={animal}
                role='button'
                onClick={displayFact}
            />
        )
    }
    return (
        <div className='animals'>
            {images}
        </div>
    )
}

export default Animals;