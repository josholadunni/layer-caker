import Link from "next/link";
import { Title } from "@/components/Title";

export default async function Page() {
  return (
    <section className="container mx-auto grid grid-cols-1 gap-6 p-12">
      <Title>Layer Caker Home Page</Title>
      <h1 className="text-4xl font-bold">Home</h1>
      <hr />
      <Link href="/posts">Posts index &rarr;</Link>
    </section>
  );
}
