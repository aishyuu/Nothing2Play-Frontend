function Input() {
    return(
        <div>
            <form method="POST" action="/steam">
                <div className="steamIdInput">
                    <label for="steamid">Steam id:</label>
                    <input className="steamInput" type="text" id="steamid" name="steamid" size="50" />
                    <input type="submit" value="Submit" />
                </div>
            </form>
        </div>
    )
}

export default Input;