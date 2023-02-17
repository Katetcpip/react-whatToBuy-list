import { Product } from "components/Items"

type Props = {
    changeAdd: (id: number) => void,
    item: Product
}

function ButtonCh(props:Props){
    const {changeAdd, item}=props

    return(
      <button className='lg:text-2xl text-lg cursor-pointer font-bold flex flex-row items-center hover:text-green-600' onClick={() =>changeAdd(item.id)}>
        {item.isadd ? "ADDED" : "ADD"}</button>
    )
}

export default ButtonCh