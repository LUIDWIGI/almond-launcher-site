const navbar = ()=> {
    
    return(
<div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
    </div>
    <label className="btn btn-ghost hover:scale-110">
        <img className="w-10 h-10 rounded-none" src="/almonds-5.svg" alt="Almond"/>
        <a href='/' className=" normal-case text-xl">Almond Launcher</a>
    </label>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      <li><a href="/about" className="hover:scale-110">About</a></li>
      <li><a href="/features" className="hover:scale-110">Features</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a href="/download" className="btn hover:scale-110">Download</a>
  </div>
</div>
)
}

export default navbar;