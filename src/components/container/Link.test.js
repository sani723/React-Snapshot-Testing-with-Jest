import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';
import toJson from 'enzyme-to-json';

import Link from './Link';

configure({ adapter: new Adapter() });

describe("<Link />", () => {
  it("It should render as expected", () => {
    const component = shallow(<Link />);
    let tree = toJson(component);
    expect(tree).toMatchSnapshot();

    tree.props.onMouseEnter();
    tree = toJson(component);
    expect(tree).toMatchSnapshot();
  });
});
