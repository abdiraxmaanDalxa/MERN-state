import { Link } from "react-router-dom"
function SingUp() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sing-up</h1>
      <form action="" className='flex flex-col gap-3 '>
        <input type="text" placeholder='Username' id='username' 
        className='border-none p-3 rounded-lg bg-transparent' />
        <input type="email" placeholder='Email' id='email' 
        className='border-none p-3 rounded-lg bg-transparent' />
        <input type="password" placeholder='password' id='password' 
        className='border-none p-3 rounded-lg bg-transparent' />
        <button  className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:80'>sing up</button>
      </form>
      <div className='flex gap-3 my-4'>
      <p>Have an acount</p>
      <Link to={"/singin"}>
      <span className='text-blue-700'>singin</span>

      </Link>
    </div>
      </div>
  )
}

export default SingUp
