import Link from "next/link";

const Home = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <p>
        <Link href="documents/123" className="text-blue-400">
          Click here
        </Link>{" "}
        to go to document 123
      </p>
    </div>
  );
};

export default Home;
