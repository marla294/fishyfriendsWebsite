import React from "react";
import FishTank from "./FishTank";
import renderer from "react-test-renderer";

test("Fish appear in FishTank", () => {
	const fishes = [
		{ Id: 1, Name: "dwarf angels", Info: [] },
		{ Id: 2, Name: "large angels", Info: [] }
	];

	const component = renderer.create(<FishTank fishes={fishes} />);

	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
