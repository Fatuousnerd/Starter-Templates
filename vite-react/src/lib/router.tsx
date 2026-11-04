import { createBrowserRouter } from "react-router";
import Home from "@/components/Home";
import RootLayout from "@/layouts/RootLayout";

export const router = createBrowserRouter([
	{ element: <RootLayout />, children: [{ path: "/", element: <Home /> }] },
]);
