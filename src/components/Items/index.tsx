import Card from "components/Card"
import CardForm from "components/CardForm"
import { useState } from "react"

export type Product = {
  id: number,
  img: string,
  name: string,
  isadd: boolean
}

function Items() {  

const [buy, setBuy] = useState<Product[]>([
    {
      id:1,
      img: "https://www.pngkit.com/png/full/922-9227928_oasis-boisson-personnage-funny-banana.png",
      name: "Strawberry  & pear",
      isadd: false
    },
    {
      id:2,
      img: "https://pngimage.net/wp-content/uploads/2018/06/salty-png-1.png",
      name: "Salt",
      isadd: false
    },
    {
      id:3,
      img: "https://pixy.org/src/25/252109.png",
      name: "Carrots",
      isadd: false
    },
    {
      id:4,
      img: "https://cdn.shopify.com/s/files/1/0170/4391/4816/products/BOY_TEARS_1512x.png?v=1548434335",
      name: "Water 5l",
      isadd: false
    },
    {
      id:5,
      img: "https://www.freeiconspng.com/uploads/bmw-car-clipart-images--vehicle-pictures-6.png",
      name: "New BMW",
      isadd: false
    },
    {
      id:6,
      img: "https://secureservercdn.net/72.167.241.134/784.841.myftpupload.com/wp-content/uploads/2017/03/Dannon-1024x728.png",
      name: "Yogurt",
      isadd: false
    },
  ])

  const addNewItem = (item:Product): void =>{
    setBuy([...buy, item])
  }
  const deleteCard = (id:number):void =>{
    const filteredcards: Product[] = buy.filter(item => item.id !== id);
    setBuy(filteredcards);
  }

  const changeAdd = (id:number):void =>{
    let arr2 = JSON.parse(JSON.stringify(buy))
    const indexCard: Product = arr2.find((el:Product)  => el.id === id);

    if (indexCard.isadd === true){
      indexCard.isadd = false;
    }else (indexCard.isadd = true);

    setBuy(arr2)
  }  


    return (
        <div className='minHeight mx-auto'>
        <CardForm addNewItem={addNewItem}/>

        {buy.length === 0 && (
          <div className='mt-20 text-center text-7xl text-gray-400 font-thin'>No items to buy</div>
        )}
         {buy.length > 0 && buy.map((item) =>{
            return(
              <Card key={item.id} item={item} changeAdd={changeAdd} deleteCard={deleteCard}/>
           )
         })}
      </div>
    )
}

export default Items;