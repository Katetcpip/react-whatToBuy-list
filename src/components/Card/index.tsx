import Button from "components/Button"
import ButtonCh from "components/ButtonCh";
import { Product } from "components/Items";

type Props = {
  item: Product,
  deleteCard: (id: number) => void,
  changeAdd: (id: number) => void
}

function Card({item, deleteCard, changeAdd}: Props){
    return(
        <div className='rounded-xl shadow-lg bg-slate-100 hover:bg-slate-200 flex flex-row lg:w-2/5 lg:py-6 lg:px-4 lg:mb-8 lg:mt-8 lg:m-auto m-4 box-border items-center justify-between'>     
        <div className='lg:text-2xl text-lg font-semibold ml-4 flex flex-row gap-4 items-center'>
        <img alt="" className='lg:w-25 lg:h-20 w-15 h-10' src={item.img}></img>
          {item.name}</div>
        <div className="flex flex-row justify-end">
          <ButtonCh  item={item} changeAdd={changeAdd}/>
          <Button  deleteCard={deleteCard} item={item}/>
            </div>
        </div>
    )
}

export default Card;