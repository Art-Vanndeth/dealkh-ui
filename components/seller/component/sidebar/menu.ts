import { AiOutlineShop ,AiOutlineFileProtect} from "react-icons/ai";
import { FaRegUser,FaRegHeart } from "react-icons/fa";
import { LuUserSquare2 } from "react-icons/lu";
import { GrAnnounce } from "react-icons/gr";

export const MenuList = [
	{
		name: "Shop ",
		path: "/ownshop",
		icon: AiOutlineShop,
	},
	{
		name: "Seller ",
		path: "/seller",
		icon: LuUserSquare2,
	},
	{
		name: "Product",
		path: "/product",
		icon: AiOutlineFileProtect,
	},
	{
		name: "Marketing",
		path: "promotions",
		icon: GrAnnounce,
	},
	{
		name: "Wishlist",
		path: "/wishlists",
		icon: FaRegHeart,
	},
	{
		name: "Profile",
		path: "/profiles",
		icon: FaRegUser,
	},
	
];
