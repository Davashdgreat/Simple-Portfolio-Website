const Navbar = () => {
    return (
        <nav className="bg-transparent backdrop-blur text-black fixed z-10 shadow-md w-full">

            <div className="flex justify-between items-center p-4 max-w-screen-xl mx-auto">

                <div>
                    <p className="text-lg font-bold">Davash</p>
                </div>

                <div className="space-x-4 flex-shrink-0">

                    <a href="" className="hover:text-gray-400">About</a>
                    <a href="" className="hover:text-gray-400">Projects</a>
                    <a href="" className="hover:text-gray-400">Skills</a>
                    <a href="" className="hover:text-gray-400">Contact</a>

                </div>

            </div>
        </nav>
    );
};

export default Navbar;