import {animals} from "../Animals/Animals";
export const displayFact = (e) => {
    const selectedAnimal = e.target.alt;
    const animalInfo = animals[selectedAnimal];
    const optionIndex = Math.floor(Math.random() * animalInfo.facts.length);
    const funFact = animalInfo.facts[optionIndex];
    document.getElementById('fact').innerHTML = funFact;
}
function DisplayFacts() {

    return (
        <p id='fact'></p>
    )
}

export default DisplayFacts;