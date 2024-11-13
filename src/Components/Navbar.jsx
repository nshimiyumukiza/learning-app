const Navbar = () =>{
return <nav className=" bg-[#006266] text-white">
    <div className="w-11/12 mx-auto flex justify-between" >
    <h1 className="font-extrabold text-3xl">Smart<span className="text-[#1B1464]">Learn</span></h1>
    <div className="flex gap-x-3">
      <a className="hover:underline hover:text-[#12CBC4]" href="">Home</a>
      <a className="hover:underline hover:text-[#12CBC4]" href="">Courses</a>
      <a className="hover:underline hover:text-[#12CBC4]" href="">Add Course</a>
    </div>
    </div>

</nav>
}
export default Navbar;