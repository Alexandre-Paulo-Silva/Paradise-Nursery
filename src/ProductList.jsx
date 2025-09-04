import React, { useState } from 'react';
import './ProductList.css';
import CartItem from './CartItem';
import { useDispatch } from 'react-redux';
import { addItem } from './CartSlice';

function ProductList() {
  const [showCart, setShowCart] = useState(false);
  const [disabledButtons, setDisabledButtons] = useState({});
  const [cartCount, setCartCount] = useState(0);
  const dispatch = useDispatch();

  const handleAddToCart = (plant) => {
    dispatch(addItem({ ...plant, quantity: 1 }));
    setCartCount(cartCount + 1);
    setDisabledButtons({ ...disabledButtons, [plant.name]: true });
  };

  const handleContinueShopping = () => {
    setShowCart(false);
  };

  const plantsArray = [
    {
      category: "Air Purifying Plants",
      plants: [
        {
          name: "Espada-de-São-Jorge",
          image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
          cost: "$15"
        },
        {
          name: "Clorofito",
          image: "https://plantasemcasa.com.br/wp-content/uploads/2022/07/clorofito-imagem-destacada-1500x1000-1.jpg",
          cost: "$12"
        }
      ]
    },
    {
      category: "Aromatic Fragrant Plants",
      plants: [
        {
          name: "Lavanda",
          image: "https://images.tcdn.com.br/img/img_prod/761023/flor_artificial_buque_de_lavanda_lilas_46_cm_paisagismo_e_decoracao_para_escritorio_casas_e_festas_1621_1_6087791ce057699ad93acf93e97337ea.jpg",
          cost: "$20"
        },
        {
          name: "Jasmim",
          image: "https://medworld.com.br/2022/wp-content/uploads/2015/09/jasmim-propriedades-medicinais-medworld.jpg",
          cost: "$25"
        }
      ]
    },
    {
      category: "Medicinal Plants",
      plants: [
        {
          name: "Babosa",
          image: "https://cdn.awsli.com.br/800x800/1539/1539472/produto/240341178/aloe-vera-6iv1z8rvf3.jpg",
          cost: "$10"
        },
        {
          name: "Hortelã",
          image: "https://jardimpark.com.br/wp-content/uploads/2022/01/hortela.jpg",
          cost: "$8"
        }
      ]
    }
  ];

  return (
    <div>
      {/* Cabeçalho */}
      <div className="navbar">
        <div className="luxury">
          <img src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png" alt="logo" height="50" />
          <h3>Paradise Nursery</h3>
        </div>
        <div>
          <button onClick={() => setShowCart(true)}>🛒 Cart ({cartCount})</button>
        </div>
      </div>

      {/* Lista de produtos ou carrinho */}
      {!showCart ? (
        <div className="product-grid">
          {plantsArray.map((group, index) => (
            <div key={index} className="plant-category">
              <h2>{group.category}</h2>
              <div className="plant-list">
                {group.plants.map((plant, idx) => (
                  <div key={idx} className="product-card">
                    <img
                      src={plant.image}
                      alt={plant.name}
                      style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '5px' }}
                    />
                    <h3>{plant.name}</h3>
                    <p>{plant.cost}</p>
                    <button
                      className={`product-button ${disabledButtons[plant.name] ? 'added-to-cart' : ''}`}
                      disabled={disabledButtons[plant.name]}
                      onClick={() => handleAddToCart(plant)}
                    >
                      {disabledButtons[plant.name] ? "Added" : "Add to Cart"}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <CartItem onContinueShopping={handleContinueShopping} />
      )}
    </div>
  );
}

export default ProductList;
