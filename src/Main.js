
import App from './App';
import Menu from './Menu';
import { useState } from 'react';

function Main() {
    const [address, setAddress] = useState("");
    console.log(address, "main")
    return (<>
        <Menu onMetaMaskLogin={setAddress} />
        <App id={1} user={address} />
        <App id={2} />
        <App id={3} />
    </>)
}

export default Main;