import React from "react";
import FishGrid from "./FishGrid";
import renderer from "react-test-renderer";

test("Fish appear in FishGrid", () => {
	const fishes = [
		{ Id: 1, Name: "dwarf angels", Info: [] },
		{ Id: 2, Name: "large angels", Info: [] }
	];

	const component = renderer.create(<FishGrid fishes={fishes} />);

	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
