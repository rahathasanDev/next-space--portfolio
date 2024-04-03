import Hero from "@/Components/main/Hero";
import Skills from "@/Components/main/Skills";
import Image from "next/image";

export default function Home() {
  return (
  <main className="h-full w-full">
    <div className="flex flex-col  gap-20">
      <Hero></Hero>
      <Skills></Skills>

    </div>
  
  </main>
  );
}
