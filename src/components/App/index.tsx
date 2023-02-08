import 'components/App/App.css';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { useState } from 'react';
import Card from 'components/Card';

function App() {

const [buy, setBuy] = useState([
    {
      id:1,
    img: "https://www.pngkit.com/png/full/922-9227928_oasis-boisson-personnage-funny-banana.png",
      name: "Strawberry  & pear",
      isadd: "ADD"
    },
    {
      id:2,
      img: "https://pngimage.net/wp-content/uploads/2018/06/salty-png-1.png",
      name: "Salt",
      isadd: "ADD"
    },
    {
      id:3,
      img: "https://pixy.org/src/25/252109.png",
      name: "Carrots",
      isadd: "ADD"
    },
    {
      id:4,
      img: "https://cdn.shopify.com/s/files/1/0170/4391/4816/products/BOY_TEARS_1512x.png?v=1548434335",
      name: "Water 5l",
      isadd: "ADD"
    },
    {
      id:5,
      img: "https://www.freeiconspng.com/uploads/bmw-car-clipart-images--vehicle-pictures-6.png",
      name: "New BMW",
      isadd: "ADD"
    },
    {
      id:6,
      img: "https://secureservercdn.net/72.167.241.134/784.841.myftpupload.com/wp-content/uploads/2017/03/Dannon-1024x728.png",
      name: "Yogurt",
      isadd: "ADD"
    },
  ])

  const deleteCard = (id:number):any =>{
    const filteredcards: Array<any> = buy.filter(item => item.id !== id);
    setBuy(filteredcards);
  }

  const changeAdd = (id:number):any =>{
    let arr2 = JSON.parse(JSON.stringify(buy))

    let indexCard:any = arr2.find(el => el.id === id);

    if (indexCard.isadd === "ADD"){
      indexCard.isadd = "ADDED";
    }else (indexCard.isadd = "ADD");

    setBuy(arr2)
  }  

  return (
    <div>
      <Header />
      <div className='minHeight mx-auto'>
      {buy.map((item) =>{
        return(
          <Card key={item.id} item={item} changeAdd={changeAdd} deleteCard={deleteCard}/>
        )
      })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
