import GenderCheckbox from "./GenderCheckbox"


const SignUp = () => {
  return (
    <div className="flex flex-col item-center justify-center min-w-96 mx-auto">
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg
        bg-opacity-0">
            <h1 className="text-3xl font-semibold text-center text-gray-300">
            Sign Up<span className="text-blue-500"> Chatter Hack</span>

            </h1>
            <form>
            <div>
            <label className='label p-2'>
                <spam className='base label-text text-black'>Full Name</spam>
            </label>
            <input type='text' placeholder=' Enter your full Name' className='w-full input input-bordered h-10'></input>

            </div>
            <div>
            <label className='label p-2'>
                <spam className='base label-text text-black'>User Name</spam>
            </label>
            <input type='text' placeholder=' Enter your User Name' className='w-full input input-bordered h-10'></input>

            </div>
            <div>
            <label className='label p-2'>
                <spam className='base label-text text-black'>Password</spam>
            </label>
            <input type='password' placeholder=' Enter your password' className='w-full input input-bordered h-10'></input>

            </div>
            <div>
            <label className='label p-2'>
                <spam className='base label-text text-black'>Confirm Password</spam>
            </label>
            <input type='password' placeholder='Confirm password' className='w-full input input-bordered h-10'></input>

            </div>
            <GenderCheckbox/>
          

          <div>
          <button className="btn btn-block btn-sm mt-2 border border-slate-700">Sign Up</button>
          </div>
          <a href="#" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-b;ock  text-black'>Already
          have an account?</a>
            </form>
        </div>
    </div>
  )
}

export default SignUp