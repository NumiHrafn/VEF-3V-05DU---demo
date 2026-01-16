import Mynd from "@/components/mynd";
import Image from "next/image";

export default function Page2() {
  return (
    <div>
        koddu í bónus
        <Mynd mynd={{src:"/alien.jpg", text:"alien"}}></Mynd>
        <Mynd mynd={{src:"/bonus.png", text:"bonus"}}></Mynd>
    </div>
  );
}