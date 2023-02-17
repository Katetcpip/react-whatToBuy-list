import { useState } from "react";
import { type Product } from "components/Items";

type Props = {
 addNewItem : (item: Product) => void;
}


const CardForm = ({addNewItem} : Props) => {

    const [newItems, setItems] = useState("");
    const handleClick = (event:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
       const item ={
            img: "https://winx-fan.ru/800/600/https/static-sl.insales.ru/files/1/4004/12119972/original/img_61696.png",
            name: newItems,
            isadd: false,
            id: 100
        }  
        addNewItem(item)
        setItems(" ")
    }

    return(
        <div>
            <form className="mx-10 my-10  flex flex-row gap-4 m-auto justify-center">
            <h2 className="font-bold text-xl">What else?</h2>
            <div className="flex">
                <input 
                    onChange={(event) => setItems(event.target.value)}
                    value={newItems}
                    name="newItem" 
                    type="text" 
                    className="border border-solid border-gray-400 rounded"></input> 
            </div>
            <button className="rounded bg-indigo-500 text-white hover:bg-indigo-600 px-4 py-1" onClick={(event) => handleClick(event)} type="submit">to the shopping list</button>
        </form>
        </div>
    )
}

export default CardForm;