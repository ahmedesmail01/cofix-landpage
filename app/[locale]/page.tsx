// import BuildComp from "./components/BuildComp";
import Hero from "./components/home/Hero";
import Welcome from "./components/home/Welcome";
import Partner from "./components/home/Partner";
import Empower from "./components/home/Empower";
// import Voices from "./components/home/Voices";
import Philosophy from "./components/home/Philosophy";
import ContactComp from "./components/home/ContactComp";

export default function Home() {
  return (
    <main className="flex flex-col gap-10 lg:gap-[140px] row-start-2 items-center ">
      {/* <BuildComp /> */}
      <Hero />
      <Welcome />
      <Partner />
      <Empower />
      {/* <Voices /> */}
      <Philosophy />
      <ContactComp />
    </main>
  );
}
