import 'components/Header/Header.css';

function Header() {
    return (
        <header className='bg-indigo-600 pt-10 pb-6'>
            
            <nav className='flex flex-col lg:flex-row lg:justify-around items-center gap-16 pl-4 pr-4'>
                <div className='text-orange-100 text-4xl font-bold text-center flex items-center'>Try not to forget something</div>
               <div className='flex flex-col items-start gap-3'>
               <div className='text-orange-100 text-2xl cursor-pointer font-semibold'>Call me if you get lost: </div>
               <div className='text-indigo-800 px-4 py-2 hover:bg-violet-200 cursor-pointer font-semibold text-2xl rounded-full bg-violet-100 shadow-lg'>+7 (960) 587-53-58</div>
               </div>

            </nav>
             </header>
    );
}

export default Header