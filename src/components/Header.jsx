import { Link } from "react-router-dom"
function Header() {
    return (
        <header className='bg-slate-200 shadow-md'>
            <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
                <Link to="/">
                <h1 className='font-bold-text-sm sm:text-xl flex flex-wrap'>
                    <span className='text-slate-700'>Sahand</span>
                    <span className='text-slate-700 font-bold'>Estate</span>
                </h1>
                </Link>
                <form action="" className='bg-slate-100 p-3 rounded-lg'>
                    <input type="text" placeholder='Search' className='bg-transparent focus:outline-none w-24 sm:w-64' /> 
                </form>
                <ul className="flex gap-4">
                    <Link to="/Home">
                        
                    <li className="hidden sm:inline font-medium hover:underline">Home</li>
                    </Link>

                    <Link to="/about">

                    <li className="hidden sm:inline font-medium hover:underline">About</li> 
                    </Link>

                    <Link to="/singin">

                    <li className=" font-medium hover:underline">Singin</li>
                    </Link>
                </ul>

            </div>


        </header>
    )
}

export default Header
