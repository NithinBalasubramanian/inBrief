import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ImNext , ImPrevious2 , ImNext2 } from "react-icons/im"


const Brief = () => {

    const router = useRouter();

    let { brief } = router.query;

    let next = Number(brief)+1;

    let prev = Number(brief)-1;

    return(
        <div className="briefMain">
        <div className="briefPrev">
            <Link href={ "/Brief/" + prev } >
                <a><ImPrevious2 size="30px" color="#fff" style={{ margin:"400px 25px" }} /></a>
            </Link>
        </div>
        <div className="briefNext">
            <Link href={ "/Brief/" + next } >
                <a><ImNext2 size="30px" color="#fff" style={{ margin:"400px 25px",float:"right" }} /></a>
            </Link>
        </div>
            <div className="briefContainer">
                <div className="briefFlex">
                    <div className="briefImageCont">
                        <img src="https://coingeek.com/wp-content/uploads/2020/10/paypal-the-bitcoin-wallet-that-isnt-really.jpg" alt="Image" />
                        <div className="briefOpacity"></div>
                    </div>
                    <div className="briefContent">
                        <div className="briefContDisp">
                            <h1>12 Percent Rise of Dogecoin after Elon Musk Tweet { brief } </h1>
                            <p>After awing the world with a video macaque playing a video game with its brain earlier this month, billionaire Elon Musk is once again tweeting about Dogecoin after almost a month-long break.Following a series of cryptic tweets with emojis, Musk tweeted a painting of Spanish painter and sculptor Joan Miró, calling it "Doge Barking at the Moon" instead of "Dog Barking at the Moon" in a reference to his favorite cryptocurrency.</p>
                        </div>
                        <div className="briefContSrc">
                            <div className="briefContSrcImg">
                                <img src="https://crypto.com/static/cae522dc778b83946d0bbe0ee927090c/130e5/crypto-logo-white.png" alt="src_img"></img>
                            </div>
                            <div className="briefContSrcMore">
                                <ImNext size="23px" color="#e1e4f0" style={{ margin:"12px 25px",float:"right" }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Brief
