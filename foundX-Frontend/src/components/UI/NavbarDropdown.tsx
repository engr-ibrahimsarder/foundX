"use client"
import UserProvider, { useUser } from "@/src/context/user.provider";
import { logout } from "@/src/services/AuthService";
import { Avatar } from "@heroui/avatar";
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@heroui/dropdown";
import { useRouter } from "next/navigation";


const NavbarDropdown = () => {
    const router = useRouter()
    const {user, setIsLoading: setUserLoading } = useUser()
  
    
  const handleLogout = () => {
    logout();
    setUserLoading(true);
  };
    const handleNavigation = (pathname: string) =>{
        router.push(pathname)
    }
  return (
    <Dropdown>
    <DropdownTrigger>
    <Avatar className="cursor-pointer"  src={user?.profilePhoto} />
    </DropdownTrigger>
    <DropdownMenu aria-label="Static Actions">
      <DropdownItem key="profile" onClick={() => handleNavigation('/profile')} >Profile</DropdownItem>
      <DropdownItem key="settings" onClick={()=> handleNavigation('/profile/settings')}  >Settings</DropdownItem>
      <DropdownItem key="create-post" onClick={()=> handleNavigation('/profile/create-post')}  >Create post</DropdownItem>
      <DropdownItem    onClick={() => handleLogout()} key="delete" className="text-danger" color="danger">
        Logout
      </DropdownItem>
    </DropdownMenu>
  </Dropdown>
  );
};

export default NavbarDropdown;