
const Navbar =()=>{
    return(
    <>
   <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">ToDo</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Sign Up</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Sign In</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Log Out</a>
        </li>
        <li className="nav-item">
            <img  className=" img-fluid user-png" src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"></img>
        </li>
        
        
    
      </ul>
    
    </div>
  </div>
</nav>
    </>)
}

export default Navbar;