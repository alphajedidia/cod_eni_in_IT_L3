import { redirect } from "next/navigation";

export default function Home() {
  redirect('/ServicePublique');
  return null;
}
