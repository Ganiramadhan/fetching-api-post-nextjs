import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-white text-2xl">Gani Pedia</h1>
                <ul className="flex space-x-4">
                    <li>
                        <Link href="/">
                            <p className="text-white hover:text-gray-300 cursor-pointer">Home</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/posts">
                            <p className="text-white hover:text-gray-300 cursor-pointer">Posts</p>
                        </Link>
                    </li>
                  
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
