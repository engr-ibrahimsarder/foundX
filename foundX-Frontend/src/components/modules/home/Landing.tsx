import { Input } from "@heroui/input";
import { SearchIcon } from "../../icons";

const Landing = () => {
  return (
    <div className="h-screen bg-cover bg-center bg-[url('/glass.jpg')]">
      <div className="pt-32 max-w-xl flex-1 mx-auto">
    <form className="flex">
    <Input 
    type="text"
    aria-label="Search"
    classNames={{
      inputWrapper: 'bg-default-100',
      input: 'text-sm'
    }}
    labelPlacement="outside"
    placeholder="Search..."
    size="lg"
    startContent={
      <SearchIcon className="pointer-events-none flex-shrink-0 "/>
    }
    />
    </form>
      </div>
   </div>
  );
};

export default Landing;