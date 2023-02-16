import {Link} from "react-router-dom"

function Footer(){
    return(
<footer className="bg-zinc-800 flex lg:flex-row flex-col lg:justify-center items-center pl-6 pr-6 pt-10 pb-4 flex-wrap">
        <div className="text-white lg:w-1/2 w-full lg:flex lg:justify-center mb-4 text-xl lg:text-start text-center text-gray-400">Moscow, Donetskaya St., bldng 1</div>
        <div className="text-white lg:w-1/2 w-full lg:flex lg:justify-center mb-4 text-xl lg:text-start text-center text-gray-400">E-mail: pokupaem-bez-problem@mail.ru</div>
        <Link to="/reviews" className="text-white flex lg:justify-end  justify-center lg:w-fit w-full text-xl lg:text-start text-center hover:text-red-600 p-4">Feedback</Link>
        <div className="text-white flex justify-center lg:w-fit w-full text-xl lg:text-start text-center text-gray-400 p-4">@2022 - today</div>
        <Link to="/" className="text-white flex lg:justify-start justify-center lg:w-fit w-full text-xl lg:text-start text-center hover:text-red-600 p-4">Home</Link>
        </footer>
    );
}

export default Footer