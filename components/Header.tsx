import ExampleNavigationMenu from "./ui/navigationmenu";
import Image from "next/image";
import logo from "../public/logo.png"
export default function Header() {
  return (
    <header className="flex flex-col space-y-2 container mx-auto justify-between items-center p-4">
      <Image alt="Elasome" src={logo} height={200} placeholder="blur" />
      <ExampleNavigationMenu />  
    </header>
  );
}
