import React from 'react'
import Logo from '/LogoMain.png'

const Header = () => {
    return (
        <>
            <header>
                <div className="max-w-[1216px] mx-auto">
                    {/* Header_part */}
                    <div className="">
                        <div className="">
                            <img src={Logo} alt="" />
                        </div>
                    </div>


                </div>
            </header>
        </>
    )
}

export default Header