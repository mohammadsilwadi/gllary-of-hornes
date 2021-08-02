import React, { Component } from 'react'
import HornedBeast from "./ HornedBeast";
export class Main extends Component {
    render() {
        return (
            <>
                <HornedBeast
                    title="Giant horned beast"
                    description="The giant horned beast is a big monstrosity who uses his claws and big horns on his 
                    head to attack. He has a lot of fur which keeps him warm in cold environments.
                      He will attack aggressively as soon as the player enters the arena "
                    img='https://cdn2.myminifactory.com/assets/object-assets/606484a2dae1f/images/720X720-demonfrog2.jpg' />
                <HornedBeast
                    title="mythical horned beasts"
                    description="Unicorns, a horse or goat-like animal with a single horn, are a commonly depicted mythical creature"
                    img='https://media.sciencephoto.com/image/c0289476/800wm/C0289476-Mythical_horned_beasts,_17th_century.jpgk' />
                    <HornedBeast
                    title="Horned Beast"
                    description="Another Horned Beast"
                    img='https://img-9gag-fun.9cache.com/photo/agLDDQr_700bwp.webp' />
            </>
            
        )
    }
}

export default Main