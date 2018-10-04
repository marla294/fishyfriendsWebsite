import React from "react";
import Fish from "./Fish";
import renderer from "react-test-renderer";

test("Correct fish name appears", () => {
	const component = renderer.create(<Fish name="Gobies" />);

	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
