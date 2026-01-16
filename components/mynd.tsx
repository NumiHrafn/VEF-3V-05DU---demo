import Image from "next/image";

type Props = {
    mynd:{
    src:string,
    text:string,
    }
}

const myndir = [
    {src:"/jarvis-ragebait.gif", text:"jarvis"},
    {src:"/blue-da-ba-dee.gif", text:"blue"},
    {src:"/alien.jpg", text:"alien"}
];

const Mynd = ({mynd}:Props) => {
    return (
        <nav>            
            <Image className="img" src={mynd.src} width={200} height={200} alt={mynd.text}/>
        </nav>
    )
}

export default Mynd