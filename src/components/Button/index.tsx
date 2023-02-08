function Button(props:any){
    const {deleteCard, item}=props

    return(
        <button className="p-6 rounded-xl bg-gray" onClick={() => deleteCard(item.id)}>
        <img className="w-10 h-10" src="https://cdn1.iconfinder.com/data/icons/universal-mobile-line-icons-vol-1/48/21-512.png"></img>
        </button>
    )
}


export default Button