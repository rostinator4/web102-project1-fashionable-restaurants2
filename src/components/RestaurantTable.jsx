import './RestaurantTable.css'
import Card from './Card'

import adalinaImg from '../assets/adalina.png'
import monteverdeImg from '../assets/monteverde.jpg'
import indienneImg from '../assets/indienne.jpg'
import feldImg from '../assets/feld.jpg'
import barbambiImg from '../assets/barbambi.jpg'
import radicleImg from '../assets/radicle.png'
import sifrImg from '../assets/sifr.jpg'
import kasamaImg from '../assets/kasama.jpg'
import alstonImg from '../assets/alston.jpg'
import armitageImg from '../assets/armitage.png'

const RestaurantTable = () => {
    return (
        <div className="lux-grid">

            <Card
                image={adalinaImg}
                link="https://www.adalinachicago.com/"
                name="Adalina Prime (West Loop)"
                desc="A high-energy, trendy follow-up to the Gold Coast’s Adalina. A magnet for celebrities blending luxury steakhouse vibes with subtle Asian influences."
            />

            <Card
                image={monteverdeImg}
                link="https://monteverdechicago.com/"
                name="Monteverde (West Loop)"
                desc="A fashion-crowd favorite featuring an open pastificio where you can watch handmade pasta in a chic industrial-modern space."
            />

            <Card
                image={indienneImg}
                link="https://www.indiennechicago.com/"
                name="Indienne (River North)"
                desc="Michelin-starred progressive Indian cuisine in one of the city's most visually striking dining rooms."
            />

            <Card
                image={feldImg}
                link="https://www.feldrestaurant.com/"
                name="Feld (West Town)"
                desc="Farm-to-table contemporary cuisine centered around an open kitchen experience."
            />

            <Card
                image={barbambiImg}
                link="https://www.barbambichicago.com/"
                name="Bar Bambi (West Town)"
                desc="A whimsical cocktail-forward hotspot with ethereal aesthetics and bold design."
            />

            <Card
                image={radicleImg}
                link="https://www.theradiclechicago.com/"
                name="The Radicle (Logan Square)"
                desc="The creative crowd's favorite for raw bar dishes and curated cocktails."
            />

            <Card
                image={sifrImg}
                link="https://www.sifrchicago.com/"
                name="Sifr (River North)"
                desc="Middle Eastern hotspot with wood-fired dishes and modern desert-inspired decor."
            />

            <Card
                image={kasamaImg}
                link="https://www.kasamachicago.com/"
                name="Kasama (Ukrainian Village)"
                desc="Two-Michelin-starred culinary destination famous for tasting menus and iconic daytime bakery."
            />

            <Card
                image={alstonImg}
                link="https://www.thealstonchicago.com/"
                name="The Alston (Near North Side)"
                desc="Ultra-luxe steakhouse designed like an exclusive private club."
            />

            <Card
                image={armitageImg}
                link="https://armitagealehouse.com/"
                name="Armitage Alehouse (Lincoln Park)"
                desc="Upscale British pub with moody wood interiors and one of the toughest reservations in the city."
            />

        </div>
    )
}

export default RestaurantTable