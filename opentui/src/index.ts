import { BoxRenderable, createCliRenderer } from "@opentui/core";

const renderer = await createCliRenderer({
	exitOnCtrlC: true,
	backgroundColor: "#1131E9",
});

const app = new BoxRenderable(renderer, { height: "100%", width: "100%" });

renderer.root.add(app);

renderer.keyInput.on("keypress", (key) => {
	if (key.name === "q") {
		renderer.destroy();
		process.exit(0);
	}
});
