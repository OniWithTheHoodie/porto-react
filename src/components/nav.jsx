function Nav() {
    return(
        <>
            <nav className="bg-[#BFC9D1] text-[#25343F] text-lg md:text-xl flex gap-7 p-4 list-none justify-around 
">
                <li className="hover:text-[#FF9B51]"><a href="#about-me">About me</a></li>
                <li className="hover:text-[#FF9B51]"><a href="#my-work">My work</a></li>
                <li className="hover:text-[#FF9B51]"><a href="#contact">Contact</a></li>
            </nav>
        </>
    )
}

export default Nav