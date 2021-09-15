import Head from 'next/head';
import Link from 'next/link';

export default function Layout( { children, home } ) {
  return (
    <div>
      <Head>
        <title>Basic Next.js App - Jaruwan Pattanasing</title>
      </Head>
      <header>
        <div className="container-fluid page_heder"> Chiapas AMBER </div>
        <img src="images/beads.gif" alt="" className="img-fluid"/>
      </header>
        <div className="container-fluid nav_bg">
        <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item"> 
           <Link href="/">
           <a>Home&nbsp;&nbsp;</a> 
           </Link>
           </li>
           
          
          <li className="nav-item"> 
          <Link href="/">
           <a>About Us</a>{ }
           </Link>
          </li>
         
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