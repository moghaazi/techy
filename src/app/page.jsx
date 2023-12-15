import Link from "next/link";
import ScrollToTop from "./components/ScrollToTop";

export default function Home() {
    return (
        <div>
            <main>
                <ScrollToTop />
                <nav className="container">

                    <div className="logo">
                        <Link href="/" className="logo">Techy</Link>
                    </div>
                    <input type="search" placeholder="Search..." />
                    <ul>
                        <li><Link href="/about" >About</Link></li>
                        <li><Link href="/team">Team</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </nav>
                <header>
                    <h1>Welcome to Techy</h1>
                    <img src="wave.svg" alt="wave" />
                </header>
            </main>
            <div className="posts">
                <h1>Post</h1>
            </div>
            <footer>
                <img src="wave.svg" alt="wave" />
                <p>&copy; 2023 Techy. All rights reserved.</p>
            </footer>
        </div>
    )
}
