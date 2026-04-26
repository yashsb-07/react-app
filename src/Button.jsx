function printHello() {
    console.log("Hello Yash!");
}

function handleHover() {
    console.log("Mouse is moved")
}

export default function Button() {
    return (
        <div>
            <button onClick={printHello}>Click Me!</button>
            <p onMouseOver={handleHover}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque voluptate et laboriosam amet, error mollitia laborum ducimus magni. Et aliquid quas eius facilis ipsum placeat voluptate error modi suscipit? Quod.</p>
        </div>
    );
}