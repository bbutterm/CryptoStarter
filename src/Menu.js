import { useState, useEffect } from 'react';
function Menu(props) {
    const [address, setAddress] = useState("");
    useEffect(() => {
        props.onMetaMaskLogin(address);
    }, [address])
    const connect = async () => {
        try {
            const { ethereum } = window;

            if (!ethereum) {
                console.log("Metamask not detected");
                return;
            }

            const accounts = await ethereum.request({
                method: "eth_requestAccounts",
            });
            setAddress(accounts[0]);
        } catch (error) {
            console.log("Error connecting to metamask", error);
        }
    };
    return (
        <>
            <div class="page1">
                <div class="header">
                    <div class="header-two" name="button"><strong>Cryptostarter</strong></div>
                    {!address ? <button class="button" onClick={connect} name="button">Connect wallet <img src="wallet.svg" width="20" /></button> : address}
                </div>
            </div>
        </>
    )
}

export default Menu;