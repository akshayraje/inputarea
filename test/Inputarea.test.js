import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Inputarea from '../src/Inputarea.js';

Enzyme.configure({ adapter: new Adapter() });

describe('Inputarea', function() {

    it('should render without throwing an error', function() {
        let inputs = shallow(<Inputarea />).find('input');
        expect(inputs.length).toEqual(1);
    });

    it('should pass all valid props', function() {
        let inputs = shallow(<Inputarea className="form-control" name="inputarea" rows="3" />).find('.form-control[name="inputarea"][rows="3"]');
        expect(inputs.length).toEqual(1);
    });

    it('should not pass private props', function() {
        let inputs = shallow(<Inputarea initType="textarea" disableType />).find('[initType="textarea"][disableType]');
        expect(inputs.length).toEqual(0);
    });

    it('should transform to textarea on enter', function() {
        let inputarea = mount(<Inputarea />);
        inputarea.simulate('keyDown', { key: 'Enter', keyCode: 13 });
        let textarea = inputarea.find('textarea');
        expect(textarea.length).toEqual(1);
    });

    it('should not transform to textarea on enter if disabled', function() {
        let inputarea = mount(<Inputarea disableType />);
        inputarea.simulate('keyDown', { key: 'Enter', keyCode: 13 });
        let textarea = inputarea.find('textarea');
        expect(textarea.length).toEqual(0);
    });

});