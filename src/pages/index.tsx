import Link from "next/link";
import Button from "../components/Button";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <Link href="/editor">
        <Button variant="primary">Get Started</Button>
      </Link>
    </div>
  );
}

export default Home;
