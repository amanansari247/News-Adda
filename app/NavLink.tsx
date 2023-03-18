import Link from "next/link";
import { useRouter } from "next/navigation";
import { Category } from "../typings";



interface Props {
  category: Category;
  isActive: boolean;
  className?: string;
}

function NavLink({ category, isActive, className }: Props) {
    const router = useRouter();

  const handleClick = () => {
    
    router.push(`/category/${category}`);
  };
  return (
    <Link href={`/category/${category}`}>
      <div className="grid grid-cols-6">
        <a
          className={`${isActive ? "font-medium" : "text-gray-500 hover:bg-gray-300 w-fit"} ${className}`}
          onClick={handleClick}
        >
          <span>{category}</span>
        </a>
      </div>
    </Link>
  );
}

export default NavLink;
