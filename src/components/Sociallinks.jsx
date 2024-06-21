import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";


const Sociallinks = () => {
    const links=[
        {
            id:1,
            child:(
                <>
                LinkedIn <FaLinkedin size={30} />

            </>
            ),
            href:'https://www.linkedin.com/in/choragudi-sai-kishore-57963520a/',
            style:'rounded-tr-md'
        },
        {
            id:2,
            child:(
                <>
                 GitHub <FaGithub  size={30}/>

            </>
            ),
            href:'https://github.com/Saikishore711',
            style:'rounded-tr-md'
        },
        {
            id:3,
            child:(
                <>
                 Email <HiOutlineMail size={30}/>

            </>
            ),
            href:'mailto:Saikishorechoragudi@gmail.com',
            style:'rounded-tr-md'
        },
        {
            id:4,
            child:(
                <>
                Resume <BsFillPersonLinesFill size={30} />

            </>
            ),
            href:"https://drive.google.com/file/d/1PA0gbeVWkZ0ynJ5rmY38l8EmVq5cPPcP/view",
            style:'rounded-br-md',
            download:true,
        },
    ]
    return (
        <div className=" hidden lg:flex flex-col top-[35%] left-0 fixed">
            <ul>
                {links.map(({id,child,href,style,download}) =>(
                    <li key={id} className={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-100px] hover:rounded-md duration:300  bg-gray-500"+" "+ style}>
                    <a href={href}
                    className="flex justify-between items-center  w-full  textwhite"
                    download={download}
                    target='_blank'
                    rel="norefferer"
                    >
        {child}
                    </a>
                </li>

                ))}
                
        
            </ul>
        </div>
    );
};

export default Sociallinks;