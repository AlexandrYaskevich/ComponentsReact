import React from 'react';


export const ShopItemFunc = (props) => {
  const { brand, title, description, descriptionFull, price, currency } = props.item;

  return (
  <div className={"main-content"}>
    <h2>{brand}</h2>
    <h1>{title}</h1>
    <h3>{description}</h3>
   <div className={"description"}>{descriptionFull}</div>
    <div className="highlight-window mobile"><div className="highlight-overlay"></div></div>
    <div className="divider"></div>
    <div className="purchase-info">
     <div className="pricec">{price}{currency}</div>
     <button>{"Добавить в корзину"}</button>
   </div>
  </div>
  );
}

export const ShopItemFuncCC = () => {
  const item = {
    brand: 'Tiger of Sweden',
    title: 'Leonard coat',
    description: 'Minimalistic coat in cotton-blend',
    descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
    price: 399,
    currency: '£',
  };

  return (
  <div className={"main-content"}>
    <h2>{item.brand}</h2>
    <h1>{item.title}</h1>
    <h3>{item.description}</h3>
   <div className={"description"}>{item.descriptionFull}</div>
    <div className="highlight-window mobile"><div className="highlight-overlay"></div></div>
    <div className="divider"></div>
    <div className="purchase-info">
     <div className="pricec">{item.price}{item.currency}</div>
     <button>{"Добавить в корзину"}</button>
   </div>
  </div>
  );
}
