"use client";

import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export default function LandingPage() {
  const router = useRouter();
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  const handleLoginRedirect = () => {
    if (isLoggedIn) {
      router.push("/dashboard");
    } else {
      router.push("/auth/login");
    }
  };

  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-8">Welcome to Our App</h1>
      <button
        onClick={handleLoginRedirect}
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-md font-semibold transition-colors"
      >
        {isLoggedIn ? "Go to dashboard" : "Go to login page"}
      </button>
    </main>
  );
}

/*

Next.js 15.5+ Routing Guide (App Router):

1. Basic route:
   /app/demo/page.tsx  --> Serves at route "/demo"

2. Nested route:
   /app/demo/demo-details/page.tsx  --> Serves at route "/demo/demo-details"

3. Dynamic routes with parameters:
   To create a dynamic route, create a folder with the parameter name wrapped in square brackets.

   Example:
   /app/demo/[id]/page.tsx  --> Serves at route "/demo/:id"

   Inside the page component for a dynamic route, you can access the param (id, slug, etc.) via `params`.

   Example:
   ```tsx
   import { useParams } from "next/navigation"; // Instead of directly passing props in the component

   const DemoIdPage: React.FC = () => {
     const { id } = useParams(); // get the dynamic param value here

     return <div>Dynamic route with id: {id}</div>;
   };

   export default DemoIdPage;
   */
