'use client';
import Link from 'next/link';
import {Pacifico} from '@next/font/google';

const mainStyles = {
     backgroundColor: 'white',
     color: 'black',
     width: '100%',
     position: 'relative',
};

const headerContainerStyles = {
     display: 'flex',
     justifyContent: 'space-between',
     alignItems: 'center',
     width: '100%',
     maxWidth: '1400px',
     margin: '0 auto',
     padding: '20px',
};

const logoStyles = {
     font: 'bold 4rem \'Pacifico\', cursive',
     textTransform: 'capitalize',
     color: '#f32291',
     WebkitTextStroke: '3px #000',
     letterSpacing: '4px',
     textDecoration: 'none',
};

const searchInputStyles = {
     width: '40%',
     zIndex: 10,
     padding: '10px',
     border: '3px solid #000',
     outline: 'none',
     font: 'bold 2rem \'Roboto\', sans-serif',
     borderRadius: '50px',
};

const navbarLinksStyles = {
     display: 'flex',
     listStyle: 'none',
     gap: '20px',
     textDecoration: 'none',
     font: 'bold 2.2rem \'Roboto\', sans-serif',
     zIndex: 10,
};

const headerStyles = {
     backgroundColor: 'white',
     height: '70vh',
     overflow: 'hidden',
};

const titleStyles = {
     textAlign: 'center',
     fontFamily: '\'Pacifico\', cursive',
     fontSize: '4rem',
};

export default function Header() {
     return (
          <main style={mainStyles}>
               <nav style={headerContainerStyles}>
                    {/* Logo */}
                    <div style={logoStyles}>
                         <Link href="/">Techy</Link>
                    </div>

                    {/* Search */}
                    <input type="search" placeholder="Search..." style={searchInputStyles} />

                    {/* Navigation */}
                    <ul style={navbarLinksStyles}>
                         <li><Link href="/about">About</Link></li>
                         <li><Link href="/team">Team</Link></li>
                         <li><Link href="/contact">Contact</Link></li>
                    </ul>
               </nav>

               {/* Header */}
               <header style={headerStyles}>
                    <h1 style={titleStyles}>Welcome to Techy</h1>
                    <img src="/wave.svg" alt="wave" style={{ width: '100%', position: 'absolute', bottom: 0 }} />
               </header>
          </main>
     );
}
