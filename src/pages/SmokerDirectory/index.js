import React from 'react';
import Card from '../../components/Card';
import weber from './../../assets/weber.jpg';
import weberpro from './../../assets/weber-pro.jpg';
import webersuper from './../../assets/weber-superpro.png';
import mbcheap from './../../assets/masterbuilt-cheap.jpg';
import mbexp from './../../assets/masterbuilt-exp.jpg';
import char from './../../assets/charbroil.png';
import campsmoke from './../../assets/campchefsmokevault.jpg';
import dyna from './../../assets/dynaglo.jpg';
import charbroilelec from './../../assets/charbroilelec.jpg';
import elecdyna from './../../assets/elecdyna.png';
import mbelecexp from './../../assets/mbelecexp.jpg';
import smhollow from './../../assets/smhollow.jpg';
import smokehouse from './../../assets/smokehouse.jpg';
import smokinit from './../../assets/smokinit.jpg';
import green from './../../assets/greenmountain.jpg';
import pitboss from './../../assets/pitboss.jpg';
import zgrill from './../../assets/zgrill.jpg';
import campcheap from './../../assets/campchef-cheap.jpg';
import campchef from './../../assets/campchef.jpg';
import traeger from './../../assets/traeger.png';
import acorn from './../../assets/acorn.jpg';
import biggreenegg from './../../assets/biggreen.jpg';
import kamado from './../../assets/kamado.jpg';
import bronco from './../../assets/bronco.png';
import charvert from './../../assets/charvert.jpg';
import gateway from './../../assets/gateway.jpg';
import pitbarrel from './../../assets/pitbarrel.jpg';
import websmokey from './../../assets/websmokey.jpg';
import charoff from './../../assets/charoff.jpg';
import bandera from './../../assets/bandera.png';
import highland from './../../assets/highland.png';
import wichita from './../../assets/loaded-wichita.jpg';
import mb560 from './../../assets/MB560.jpg';
import mb1050 from './../../assets/MB1050.jpg';

import './styles.css'


const SmokerDirectory = () => {
    return(
        <div>
            <button className="snipcart-checkout">
                View Cart
            </button>
        <div className="smokers">
            <h2>Let's take a look at each smoker type and some examples that you can purchase today to begin your bbq journey!</h2>
            <div className="smokers-kettle">
                <h3>Kettle Grills -  an important staple in the backyard bbq community</h3>

                <div className="smoker-group">
                <div className="budget">
                    <p>Basic/Budget Option</p> 
                    <Card 
                    title="Weber Kettle"
                    text="Kettle Smoker $109"
                    url="/smokers/kettle/kettle1"
                    image={ weber } />
                    <button
                    className="snipcart-add-item"
                    data-item-id="weber-kettle-original"
                    data-item-price="109.99"
                    data-item-url="/smokers/kettle/kettle1"
                    data-item-name="Weber Kettle Original"
                    data-item-image={ weber }
                    >
                    Add to Cart
                    </button>
                </div>
                <div className="next-tier">
                    <p>A little more expensive</p>
                    <Card 
                    title="Weber Kettle Premium"
                    text="Kettle Smoker $165"
                    url="/smokers/kettle/kettlepre"
                    image={ weberpro } />
                    <button
                    className="snipcart-add-item"
                    data-item-id="weber-kettle-premium"
                    data-item-price="165.99"
                    data-item-url="/smokers/kettle/kettlepre"
                    data-item-name="Weber Kettle Premium"
                    data-item-image={ weberpro }
                    >
                    Add to Cart
                    </button>
                </div>
                <div className="expensive">
                    <p>Peak Tier</p>
                    <Card 
                    title="Weber Kettle Performer"
                    text="Kettle Smoker $439"
                    url="/smokers/kettle/kettlepro"
                    image={ webersuper } />
                    <button
                    className="snipcart-add-item"
                    data-item-id="weber-kettle-performer"
                    data-item-price="439.99"
                    data-item-url="/smokers/kettle/kettlepro"
                    data-item-name="Weber Kettle Performer"
                    data-item-description="Fancy Weber Kettle"
                    data-item-image={ webersuper }
                    >
                    Add to Cart
                    </button>
                </div>
                </div>
                <p>The Weber is a classic addition to any backyard. Most people can remember seeing their dad or uncle flipping burgers, hot dogs, or ribs on a Weber in their childhood years. The most basic level is pretty affordable at about $100 is it's a great starter grill for anyone to get started at the art of building/managing fires. If you have more funds to start out with or are just in love with the kettle style, feel free to upgrade to one of the more premium options which have more advanced features such as one-touch cleaning and side tables.</p>
            </div>
            <hr />
      <div className="smokers-gas">
      <h3>Propane Smokers- not at all for the "purists" out there (like me) but they sure are convenient</h3>

      <div className="smoker-group">
        <div className="budget">
            <p>The Basic/Budget Option</p>
            <Card 
              title="Masterbuilt MB20050116 "
              text="Propane $149"
              url="/smokers/propane/1"
              image={ mbcheap } />
            <button
              className="snipcart-add-item"
              data-item-id="masterbuilt-budget"
              data-item-price="149.99"
              data-item-url="/smokers/propane/1"
              data-item-name="Masterbuilt MB20050116"
              data-item-description="Budget Masterbuilt Propane Smoker"
              data-item-image={ mbcheap }
            >
              Add to Cart
            </button>
            <Card 
              title="Charbroil 595"
              text="Propane $189"
              url="/smokers/propane/2"
              image={ char } />
            <button
              className="snipcart-add-item"
              data-item-id="charbroil-595"
              data-item-price="189.99"
              data-item-url="/smokers/propane/2"
              data-item-name="Charbroil 595"
              data-item-description="Budget Charbroil Vertical Propane Smoker"
              data-item-image={ char }
            >
              Add to Cart
            </button>
          </div>
          <div className="next-tier">
            <p>A little more  expensive</p>
            <Card 
              title="CampChef  SmokeVault"
              text="Propane $229"
              url="/smokers/propane/3"
              image={ campsmoke } />
            <button
              className="snipcart-add-item"
              data-item-id="campchef-smokevault"
              data-item-price="229.99"
              data-item-url="/smokers/propane/3"
              data-item-name="CampChef SmokeVault"
              data-item-description="CampChef SmokeVault Propane Smoker"
              data-item-image={ campsmoke }
            >
              Add to Cart
            </button>
            <Card 
              title="Dyna-Glo DGY784BDP"
              text="Propane $200"
              url="/smokers/propane/4"
              image={ dyna } />
            <button
              className="snipcart-add-item"
              data-item-id="dynaglo-propane"
              data-item-price="199.99"
              data-item-url="/smokers/propane/4"
              data-item-name="Dyna-Glo DGY784BDP"
              data-item-description="Dyna-Glo DGY784BDP Propane Smoker"
              data-item-image={ dyna }
            >
              Add to Cart
            </button>
          </div>
          <div className="expensive">
            <p>Peak Tier</p>
            <Card 
              title="Masterbuilt MB20051316"
              text="Propane $400"
              url="/smokers/propane/5"
              image={ mbexp } />
            <button
              className="snipcart-add-item"
              data-item-id="masterbuilt-mb20051315"
              data-item-price="399.99"
              data-item-url="/smokers/propane/5"
              data-item-name="Masterbuilt MB20051316"
              data-item-description="Biggest Masterbuilt Propane Smoker"
              data-item-image={ mbexp }
            >
              Add to Cart
            </button>
          </div>

        </div>
      </div>
    <hr />
      <div className="smokers-electric">
        <h3>Electric Smokers - a little more into the "techy" style but a very easy and efficient option for some quick cue</h3>
        <div className="smoker-group">
          <div className="budget">
              <p>Basic/Budget Option</p>
              <Card 
                title="Smoke Hollow 26142E "
                text="Electric $149"
                url="/smokers/electric/1"
                image={ smhollow} />
              <button
              className="snipcart-add-item"
              data-item-id="smoke-hollow-electric"
              data-item-price="149.99"
              data-item-url="/smokers/electric/1"
              data-item-name="Smoke Hollow 26142E"
              data-item-description="Smoke Hollow Electric Smoker"
              data-item-image={ smhollow }
            >
              Add to Cart
            </button>
              <Card 
                title="Smokehouse Products Big Chief Electric Smoker"
                text="Electric $124"
                url="/smokers/electric/2"
                image={ smokehouse} />
              <button
              className="snipcart-add-item"
              data-item-id="smokehouse-big-chief"
              data-item-price="124.99"
              data-item-url="/smokers/electric/2"
              data-item-name="Smokehouse Big Chief"
              data-item-description="Smokehouse Products' Big Chief Electric Smoker"
              data-item-image={ smokehouse }
            >
              Add to Cart
            </button>
            </div>
            <div className="next-tier">
              <p>A little more expensive</p>
              <Card 
                title="Dyna-Glo DGU732SDE"
                text="Electric $302"
                url="/smokers/electric/3"
                image={ elecdyna } />
              <button
              className="snipcart-add-item"
              data-item-id="dyna-glo-electric"
              data-item-price="302.99"
              data-item-url="/smokers/electric/3"
              data-item-name="Dyna-Glo DGU732SDE"
              data-item-description="Dyna-Glo Electric Smoker"
              data-item-image={ elecdyna }
            >
              Add to Cart
            </button>
              <Card 
                title="Char-Broil 17202004"
                text="Electric $260"
                url="/smokers/electric/4"
                image={ charbroilelec } />
              <button
              className="snipcart-add-item"
              data-item-id="charbroil-17202004"
              data-item-price="259.99"
              data-item-url="/smokers/electric/4"
              data-item-name="Charbroil 17202004"
              data-item-description="Charbroil Electric Smoker"
              data-item-image={ charbroilelec }
            >
              Add to Cart
            </button>
            </div>
            <div className="expensive">
              <p>Peak Tier</p>
              <Card 
                title="Masterbuilt MB20074719"
                text="Electric $400"
                url="/smokers/electric/5"
                image={ mbelecexp} />
              <button
              className="snipcart-add-item"
              data-item-id="masterbuilt-mb2007-electric"
              data-item-price="399.99"
              data-item-url="/smokers/electric/5"
              data-item-name="Masterbuilt MB20074719"
              data-item-description="Masterbuilt Electric Smoker"
              data-item-image={ mbelecexp }
            >
              Add to Cart
            </button>
              <Card 
                title="Smokin-It Model #2"
                text="Electric $570"
                url="/smokers/electric/6"
                image={ smokinit } />
              <button
              className="snipcart-add-item"
              data-item-id="smokin-it-2"
              data-item-price="569.99"
              data-item-url="/smokers/electric/6"
              data-item-name="Smokin-It"
              data-item-description="Smokin-It Model #2"
              data-item-image={ smokinit }
            >
              Add to Cart
            </button>
            </div>

        </div>
      </div>
    <hr />
      <div className="smokers-pellet">
      <h3>Pellet Smokers - Super convenient but adds more smoke flavor than propane</h3>
        <div className="smoker-group">
          <div className="budget">
              <p>Basic/Budget Option</p>
              <Card 
                title="PIT BOSS PB440 "
                text="Pellet $349"
                url="/smokers/pellet/1"
                image={ pitboss } />
              <button
              class="snipcart-add-item"
              data-item-id="pit-boss-pb440"
              data-item-price="349.99"
              data-item-url="/smokers/pellet/1"
              data-item-name="PIT BOSS"
              data-item-description="PIT BOSS PB440"
              data-item-image={ pitboss }
            >
              Add to Cart
            </button>
              <Card 
                title="Green Mountain Davy Crockett Sense"
                text="Pellet $299"
                url="/smokers/pellet/2"
                image={ green } />
              <button
              class="snipcart-add-item"
              data-item-id="green-mountain-crockett"
              data-item-price="299.99"
              data-item-url="/smokers/pellet/2"
              data-item-name="Green Mountain Davy Crockett Sense"
              data-item-description="Green Mountain Davy Crockett Sense"
              data-item-image={ green }
            >
              Add to Cart
            </button>
            </div>
            <div className="next-tier">
              <p>A little more expensive</p>
              <Card 
                title="Camp Chef SmokePro DLX "
                text="Pellet 484"
                url="/smokers/pellet/3"
                image={ campcheap } />
              <button
              class="snipcart-add-item"
              data-item-id="campchef-smokepro-dlx"
              data-item-price="484.99"
              data-item-url="/smokers/pellet/3"
              data-item-name="Camp Chef SmokePro DLX "
              data-item-description="Camp Chef SmokePro DLX "
              data-item-image={ campcheap }
            >
              Add to Cart
            </button>
              <Card 
                title="Z GRILLS-700D"
                text="Pellet $569"
                url="/smokers/pellet/4"
                image={ zgrill } />
              <button
              class="snipcart-add-item"
              data-item-id="z-grills-700"
              data-item-price="569.99"
              data-item-url="/smokers/pellet/4"
              data-item-name="Z GRILLS-700D"
              data-item-description="Z GRILLS-700D"
              data-item-image={ zgrill }
            >
              Add to Cart
            </button>
            </div>
            <div className="expensive">
              <p>Peak Tier/Most Expensive</p>
              <Card 
                title="TRAEGER TIMBERLINE 850 "
                text="Pellet $1800"
                url="/smokers/pellet/5"
                image={ traeger } />
              <button
              class="snipcart-add-item"
              data-item-id="traeger-timberline-850"
              data-item-price="1800.99"
              data-item-url="/smokers/pellet/5"
              data-item-name="TRAEGER TIMBERLINE 850"
              data-item-description="TRAEGER TIMBERLINE 850"
              data-item-image={ traeger }
            >
              Add to Cart
            </button>
              <Card 
                title="Camp Chef WOODWIND WIFI 36"
                text="Pellet $1200"
                url="/smokers/pellet/6"
                image={ campchef } />
              <button
              class="snipcart-add-item"
              data-item-id="campchef-woodwind-36"
              data-item-price="1200.99"
              data-item-url="/smokers/pellet/6"
              data-item-name="Camp Chef WOODWIND WIFI 36"
              data-item-description="Camp Chef WOODWIND WIFI 36"
              data-item-image={ campchef }
            >
              Add to Cart
            </button>
            </div>

        </div>
      </div>
    <hr />
      <div className="smokers-ceramic">
      <h3>Kamado Smokers - Small but super effective. For the real charcoal lovers</h3>
        <div className="smoker-group">
          <div className="budget">
              <p>Basic/Budget Option</p>
              <Card 
                title="Char-Griller E16620 Akorn "
                text="Kamado $300"
                url="/smokers/kamado/1"
                image={ acorn } />
              <button
              class="snipcart-add-item"
              data-item-id="acorn-chargriller"
              data-item-price="299.99"
              data-item-url="/smokers/kamado/1"
              data-item-name="Akorn"
              data-item-description="Char-Griller E16620 Akorn"
              data-item-image={ acorn }
            >
              Add to Cart
            </button>
            </div>
            <div className="next-tier">
              <p>A little more expensive/ middle range</p>
              <Card 
                title="Big Green Egg"
                text="Kamado $900"
                url="/smokers/kamado/2"
                image={ biggreenegg } />
              <button
              class="snipcart-add-item"
              data-item-id="big-green-egg"
              data-item-price="899.99"
              data-item-url="/smokers/kamado/2"
              data-item-name="Big Green Egg"
              data-item-description="Big Green Egg"
              data-item-image={ biggreenegg }
            >
              Add to Cart
            </button>
            </div>
            <div className="expensive">
              <p>Peak Tier</p>
              <Card 
                title="Kamado Joe"
                text="Kamado $1600"
                url="/smokers/kamado/3"
                image={ kamado } />
              <button
              class="snipcart-add-item"
              data-item-id="kamado-joe"
              data-item-price="1599.99"
              data-item-url="/smokers/kamado/3"
              data-item-name="Kamado Joe"
              data-item-description="Kamado Joe"
              data-item-image={ kamado }
            >
              Add to Cart
            </button>
            </div>

        </div>
      </div>
    <hr />
      <div className="smokers-drum">
      <h3>Drum/Vertical Smokers</h3>
        <div className="smoker-group">
          <div className="budget">
              <p>Basic/Budget Option</p>
              <Card 
                title="Charbroil Bullet"
                text="Drum $177"
                url="/smokers/drum/1"
                image={ charvert } />
              <button
              class="snipcart-add-item"
              data-item-id="charbroil-bullet"
              data-item-price="177.99"
              data-item-url="/smokers/drum/1"
              data-item-name="Charbroil Bullet"
              data-item-description="Charbroil Vertical Smoker"
              data-item-image={ charvert }
            >
              Add to Cart
            </button>
              <Card 
                title="Bronco Drum Smoker"
                text="Drum $250"
                url="/smokers/drum/2"
                image={ bronco } />
              <button
              class="snipcart-add-item"
              data-item-id="bronco-drum"
              data-item-price="249.99"
              data-item-url="/smokers/drum/2"
              data-item-name="Bronco Drum Smoker"
              data-item-description="Oklahoma Joe Drum Smoker"
              data-item-image={ bronco }
            >
              Add to Cart
            </button>
            </div>
            <div className="next-tier">
              <p>A little more expensive</p>
              <Card 
                title="Weber Smoker Mountain"
                text="Drum $430"
                url="/smokers/drum/3"
                image={ websmokey } />
              <button
              class="snipcart-add-item"
              data-item-id="weber-smokey-mountain"
              data-item-price="429.99"
              data-item-url="/smokers/drum/3"
              data-item-name="Weber Smoker Mountain"
              data-item-description="Weber's contribution to the Vertical smoker market"
              data-item-image={ websmokey }
            >
              Add to Cart
            </button>
              <Card 
                title="Pit Barrel Cooker"
                text="Drum $350"
                url="/smokers/drum/4"
                image={ pitbarrel} />
              <button
              class="snipcart-add-item"
              data-item-id="pit-barrel-smoker"
              data-item-price="349.99"
              data-item-url="/smokers/drum/4"
              data-item-name="Pit Barrel Cooker"
              data-item-description="Popular Pit Barrel Drum Smoker"
              data-item-image={ pitbarrel }
            >
              Add to Cart
            </button>
            </div>
            <div className="expensive">
              <p>Peak Tier</p>
              <Card 
                title="Gateway Drum"
                text="Drum $800"
                url="/smokers/drum/5"
                image={ gateway } />
              <button
              class="snipcart-add-item"
              data-item-id="gateway-drum"
              data-item-price="799.99"
              data-item-url="/smokers/drum/5"
              data-item-name="Gateway Drum"
              data-item-description="Gateway Drum Smoker"
              data-item-image={ gateway }
            >
              Add to Cart
            </button>
            </div>

        </div>
        <h2>Many people make their own</h2>
      </div>
    <hr />
      <div className="smokers-offset">
      <h3>Offset Smokers - The Grand Option. What BBQ is Really About</h3>
        <div className="smoker-group">
          <div className="budget">
              <p>Basic/Budget Option</p>
              <Card 
                title="Char-Griller E1224 "
                text="Offset $287"
                url="/smokers/offset/1"
                image={ charoff } />
              <button
              class="snipcart-add-item"
              data-item-id="chargriller-e1224"
              data-item-price="287.99"
              data-item-url="/smokers/offset/1"
              data-item-name="Char-Griller E1224"
              data-item-description="Budget Chargriller Offset Smoker"
              data-item-image={ charoff }
            >
              Add to Cart
            </button>
              <Card 
                title="Highland Offset"
                text="Offset $300"
                url="/smokers/offset/2"
                image={ highland } />
              <button
              class="snipcart-add-item"
              data-item-id="oklahoma-highland"
              data-item-price="299.99"
              data-item-url="/smokers/offset/2"
              data-item-name="Highland Offset"
              data-item-description="Basic Offset from Oklahoma Joe"
              data-item-image={ highland }
            >
              Add to Cart
            </button>
            </div>
            <div className="next-tier">
              <p>A little more expensive</p>
              <Card 
                title="Bandera"
                text="Offset $450"
                url="/smokers/offset/3"
                image={ bandera } />
              <button
              class="snipcart-add-item"
              data-item-id="oklahoma-bandera"
              data-item-price="449.99"
              data-item-url="/smokers/offset/3"
              data-item-name="Bandera"
              data-item-description="Vertical Offset from Oklahoma Joe"
              data-item-image={ bandera }
            >
              Add to Cart
            </button>
            </div>
            <div className="expensive">
              <p>Peak Tier</p>
              <Card 
                title="Yoder Wichita"
                text="Offset $2400"
                url="/smokers/offset/4"
                image={ wichita} />
              <button
              class="snipcart-add-item"
              data-item-id="yoder-wichita"
              data-item-price="2399.99"
              data-item-url="/smokers/offset/4"
              data-item-name="Yoder Wichita"
              data-item-description="Popular Offset from Yoder Smokers!"
              data-item-image={ wichita }
            >
              Add to Cart
            </button>
            </div>

        </div>
      </div>
    <hr />
      <div className="smokers-gravity">
      <h3>Gravity Fed Smokers - kind on new on the block but a great option nonetheless</h3>
        <div className="smoker-group">
              <Card 
                title="MasterBuilt 560"
                text="Gravity $500"
                url="/smokers/gravity/1"
                image={ mb560 } />
              <button
              class="snipcart-add-item"
              data-item-id="masterbuilt-560"
              data-item-price="499.99"
              data-item-url="/smokers/gravity/1"
              data-item-name="MasterBuilt 560"
              data-item-description="Entry level gravity fed by Masterbuilt"
              data-item-image={ mb560 }
            >
              Add to Cart
            </button>
              <Card 
                title="MasterBuilt 1050"
                text="Gravity $800"
                url="/smokers/gravity/2"
                image={ mb1050 } />
              <button
              class="snipcart-add-item"
              data-item-id="masterbuilt-1050"
              data-item-price="799.99"
              data-item-url="/smokers/gravity/2"
              data-item-name="MasterBuilt 1050"
              data-item-description="Higher Capacity Gravity Fed by MasterBuilt"
              data-item-image={ mb1050 }
            >
              Add to Cart
            </button>
        </div>
      </div>
    <hr />
    </div>
    </div>
    );
}

export default SmokerDirectory;

