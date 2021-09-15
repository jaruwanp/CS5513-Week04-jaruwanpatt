import Head from 'next/head';
import Link from 'next/link';

export default function Layout( { children, home } ) {
  return (
    <div>
      <Head>
        <title>Basic Next.js App - Jaruwan Pattanasing</title>
      </Head>
      <header>
        <div class="container-fluid page_heder"> Chiapas AMBER </div>
        <img src="images/beads.gif" alt="" className="img-fluid"/>
      </header>
        <div class="container-fluid nav_bg">
        <div class="container">
        <nav className="navbar navbar-expand-lg navbar-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item"> <a className="nav-link" href="/"> Home </a> </li>
          <li className="nav-item dropdown active"> <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Catalog </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown"> 
				
				<a className="dropdown-item" href="'/'">View All</a> 
				<a className="dropdown-item" href="/">Catalog Item #1</a>
				<a className="dropdown-item" href="/">Catalog Item #2</a>
				
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="catalog_list.html">Sculpture</a> <a className="dropdown-item" href="catalog_list.html">Jewelry</a> <a className="dropdown-item" href="catalog_list.html">Cabochon & Beads</a> <a className="dropdown-item" href="catalog_list.html">Raw Amber</a> </div>
          </li>
          <li className="nav-item"> <a className="nav-link" title="About Us" href="about_us.html"> About US</a> </li>
          <li className="nav-item"> <a className="nav-link" title="Contact Us" href="contact_us.html"> Contact Us</a> </li>
          <li className="nav-item px-0"><a className="nav-link" href="#" title="Follow us on facebook"><i className="fa fa-facebook"></i></a> </li>
          <li className="nav-item px-0"><a className="nav-link" href="#" title="Follow us on facebook"><i className="fa fa-instagram"></i></a> </li>
        </ul>
        </div>
        </nav>
        </div>
        </div>
      <main>{children}</main>
      {!home && (
          <Link href="/">
            <a className="btn btn-primary mt-3">← Back to home</a>
          </Link>
        )
      }
      <footer>
        <div className="webFooter text-center">
    <p className="text-center mt-1">Week 4: Assignment 5: Draft Basic Full-Stack App</p>
    by Jaruwan Pattanasing</div>
      </footer>
    </div>
  );
}