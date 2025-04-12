function Navigation(){
    return (
        <>
        <nav className="container">
          <div className="logo">
            <img src="/images/puma_logo.png" alt="Logo" />
          </div>
          

          <ul>
            <li href="#">Home</li>
            <li href="#">Location</li>
            <li href="#">About</li>
            <li href="#">Contact Us</li>
          </ul>

          <button>Log In</button>
        </nav>
        </>
    )
};

export default Navigation;