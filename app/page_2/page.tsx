import Link from "next/link";
import Image from "next/image";
import Mynd from "@/components/mynd";



export default function Page2() {
  return (
    <div>
        ég er blár
      <Mynd mynd={{src:"/blue-da-ba-dee.gif", text:"blue"}}></Mynd>

    </div>
  );
}