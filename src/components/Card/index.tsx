import Button from "components/Button"
import ButtonCh from "components/ButtonCh";

function Card(props:any){
    const {item, deleteCard, changeAdd} = props
    return(
        <div className='rounded-xl shadow-md bg-slate-100 hover:bg-slate-200 flex flex-row w-2/5 py-6 px-4 mb-8 mt-8 m-auto items-center justify-between'>     
        <div className='text-2xl font-semibold ml-4 flex flex-row gap-4 items-center'>
        <img className='w-25 h-20' src={item.img}></img>
          {item.name}</div>
        <div className="flex flex-row justify-end">
          <ButtonCh  item={item} changeAdd={changeAdd}/>
          <Button  deleteCard={deleteCard} item={item}/>
            </div>
        </div>
    )
}

export default Card;