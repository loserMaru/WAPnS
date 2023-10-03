// -------------Задание 1
// export default function Profile1() {
//     return (
//         <img
//         src="https://i.imgur.com/lICfvbD.jpg"
//         alt="Aklilu Lemma"
//         />
//     );
// }


// -------------Задание 2
// export default function Profile2() {
//     return (
//     <img src="https://i.imgur.com/jA8hHMpm.jpg"
//     alt="Katsuko Saruhashi"
//     />
//     );
// }


// -------------Задание 3
function Profile3() {
    return(
        <img
        src="https://i.imgur.com/QIrZWGIs.jpg"
        alt="Alan L. Hart"
        />
    );
}

function Profile2() {
    return (
    <img src="https://i.imgur.com/jA8hHMpm.jpg"
    alt="Katsuko Saruhashi"
    />
    );
}

function Profile1() {
    return (
        <img
        src="https://i.imgur.com/lICfvbD.jpg"
        alt="Aklilu Lemma"
        />
    );
}

export default function Gallery() {
    return (
        <section>
            <h1>Amazing scientists</h1>
            <Profile1/>
            <Profile2/>
            <Profile3/>
        </section>
    );
}