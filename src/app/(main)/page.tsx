import About from "../pages/home/about/About";
import Banner from "../pages/home/banner/Banner";
import Services from "../pages/home/services/Services";

export default function LandingPage() {

  return (
    <div>
      <Banner />
      <div className="section-padding-x">
        <About />
        <Services />
      </div>

    </div>
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
