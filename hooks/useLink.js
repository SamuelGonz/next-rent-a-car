import Link from "next/link";

export default function UseLink({ children, href }) {
   return (
      <Link href={href}>
         <a>{children}</a>
      </Link>
   );
}
