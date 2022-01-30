import "./styles.css";
import Card from "./card";

export default function Cards(props) {
  return (
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">

<Card id="1" item="Fancy Product" cart="View options" price2="$40.00 - $80.00" onAdd={props.onAdd} onEnable={props.onEnable}/>
<Card id="2" sale="Sale" item="Special Item" cart="Add to cart" price1="$20.00" price2="$18.00" onAdd={props.onAdd} onEnable={props.onEnable}/>
<Card id="3" sale="Sale" item="Sale Item" cart="Add to cart" price1="$50.00" price2="$25.00" onAdd={props.onAdd} onEnable={props.onEnable}/>
<Card id="4" item="Popular Item" cart="Add to cart" price2="$40.00" onAdd={props.onAdd} onEnable={props.onEnable}/>
<Card id="5" sale="Sale" item="Sale Item" cart="Add to cart" price1="$50.00" price2="$25.00" onAdd={props.onAdd} onEnable={props.onEnable}/>
<Card id="6" item="Fancy Product" cart="View options" price2="$120.00 - $280.00" onAdd={props.onAdd} onEnable={props.onEnable}/>
<Card id="7" sale="Sale" item="Special Item" cart="Add to cart" price1="$20.00" price2="$18.00" onAdd={props.onAdd} onEnable={props.onEnable}/>
<Card id="8" item="Popular Item" cart="Add to cart" price2="$40.00" onAdd={props.onAdd} onEnable={props.onEnable}/>
                    </div>
                    </div>
                    </section>

  );
}
