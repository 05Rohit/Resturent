import React from "react";

const MenuCard = ({ menuData }) => {
  return (
    <>
      <section className="main-card--cointainer">
        {menuData.map((curElem) => {
            const{id,name,category, description,image}=curElem; //  Destructuring of the Array data 
          return (
            <>
              <div className="card-container" key={id}> 
                <div className="card">
                  <div className="card-bod">
                    <span className="card-number card-circle subtle"> {id} </span>
                    <span className="card-author subtle">{category}></span>
                    <h2 className="card-title">{name}</h2>
                    <span className="card-description subtle">
                    {description}
                    </span>
                   
                    <div className="card-read subtle">Ready</div>
                  </div>
                   <img src={image} alt='images' className='card-media' /> 
                  <span className="card-tag">Order now</span>
                </div>
              </div>
            </>
          );
        })}
        ;
      </section>
    </>
  );
};

export default MenuCard;
