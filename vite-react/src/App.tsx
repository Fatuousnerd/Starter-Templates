import { RouterProvider } from "react-router";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { router } from "@/lib/router";
import { SidebarProvider } from "./components/ui/sidebar";
import { TooltipProvider } from "./components/ui/tooltip";

function App() {
	const defaultOpen = Cookies.get("sidebar_state") === "true";
	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			<TooltipProvider>
				<SidebarProvider defaultOpen={defaultOpen}>
					<RouterProvider router={router} />
				</SidebarProvider>
			</TooltipProvider>
		</QueryClientProvider>
	);
}

export default App;
