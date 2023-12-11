
  import React from 'react'
  import Data from'../.../MeehrReciept.json'
  
  function MeehrReciept() {
    const data2 = Data.data;
  console.log(data2);
    return (
        <div className="meinListFertigEssen">
        <h1 className="ProductenTitle">Producten</h1>
        <ul className="alleFertigEssen">
          {data2.map((item) => (
            <div
              className="Karte"
              key={item.id} >
              <li>{item.description}</li>
              <img className="Product-picture" src={item.image_url} alt="" />
              <li>{item.name}</li>

              <button className="WarenkorbIconFertigEssen">
                <ShoppingCartIcon />
              </button>
            </div>
            // <img src={item.image_url} alt="picture" srcset="" />
          ))}
        </ul>
      </div>
    )
  }
  
  export default MeehrReciept