export default function EventPage01() {
    const name = '여진구';

    function showName() {
        console.log(name);
    }

    function showText(e) {
        // console.log(document.getElementsByTagName('input')[0].value);
        console.log(e.target.value);
    }

    function showMessage(msg) {
        console.log(msg);
    }

    function ThisIsComponent() {
        console.log('ThisIsComponent');
    }

    return (
        <div>
            <button onClick={showName}>showName</button>
            <input type="text" onChange={showText} defaultValue="고수" />
            <input type="text" onChange={(e) => {
                showMessage(e.target.value);
            }} />
            {/* <ThisIsComponent onClick={showText}></ThisIsComponent> */}
        </div>
    );
};