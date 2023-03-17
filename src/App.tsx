import React from "react";
import { PageIndex } from "./pages/index";
import useWindowDimensions from "./utils/window";
import { Mobile } from "./pages/mobile/index";

function App() {
	const { width } = useWindowDimensions();

	if (width < 700) {
		return (
			<div className="App">
				<Mobile />
			</div>
		);
	} else {
		return (
			<div className="App">
				<PageIndex />
			</div>
		);
	}
}

export default App;
