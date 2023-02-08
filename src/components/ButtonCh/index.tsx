function ButtonCh(props:any){
    const {changeAdd, item}=props

    return(
      <button className='text-2xl cursor-pointer font-bold flex flex-row items-center hover:text-green-600' onClick={() =>changeAdd(item.id)}>
        {item.isadd}</button>
    )
}

export default ButtonCh