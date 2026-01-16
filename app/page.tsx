"use client"
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Mynd from "@/components/mynd";


export default function Home() {
  const arr = useState(0)
  console.log(arr)
  return (
    <div>
      <p>halló heimur</p>
      <Mynd mynd={{src:"/jarvis-ragebait.gif", text:"jarvis"}}></Mynd>
        </div>
  );
}
