import Image from "next/image";
import imgLogo from "../../public/images/hoag_logo.png";

const Header = () => {
    return (
        <div >
            <Image src={imgLogo.src} alt="logo" width={78} height={64} />
        </div>
    )
}

export default Header;