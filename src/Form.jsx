function handleFormSubmit(evt){
    evt.preventDefault();
    console.log("Form was submitted")
}

export default function Form() {
    return (
        <form action="">
            <input type="text" placeholder="Wirte something" name="" id="" />
            <button onClick={handleFormSubmit}>Submit</button>
        </form>
    )
}