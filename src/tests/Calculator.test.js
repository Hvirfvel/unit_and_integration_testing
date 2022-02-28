import React from 'react';
import Calculator from '../containers/Calculator';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Calculator', () => {
  let container;
  let button1;
  let button2;
  let button3;
  let button4;
  let button5;
  let button7;
  let equalsButton;
  let runningTotal;
  
  beforeEach(() => {
    container = mount(<Calculator/>)
    button1 = container.find('#number1');
    button2 = container.find('#number2')
    button3 = container.find('#number3');
    button4 = container.find('#number4');
    button5 = container.find('#number5');
    button7 = container.find('#number7');
    
    equalsButton = container.find('#operator-equals');
    runningTotal = container.find('#running-total');
  })

  it('should change running total on number enter', () => {
    button4.simulate('click');
    expect(runningTotal.text()).toEqual('4');
  })

  it('should be able to get total from adding', () => {
    const addButton = container.find('#operator_add')
    button1.simulate('click');
    addButton.simulate('click');
    button4.simulate('click');
    equalsButton.simulate('click');
    expect(runningTotal.text()).toEqual('5');
  })

  it('should be able to get total from subtracting', () => {
    const subtractButton = container.find('#operator-subtract');
    button7.simulate('click');
    subtractButton.simulate('click');
    button4.simulate('click');
    equalsButton.simulate('click');
    expect(runningTotal.text()).toEqual('3');
  })

  it('should be able to get total from multiplying', () => {
    const multiplyButton = container.find('#operator-multiply');
    button3.simulate('click');
    multiplyButton.simulate('click');
    button5.simulate('click');
    equalsButton.simulate('click');
    expect(runningTotal.text()).toEqual('15');
  })

  it('should be able to get total from dividing', () => {
    const divideButton = container.find('#operator-divide');
    button2.simulate('click');
    button1.simulate('click');
    divideButton.simulate('click');
    button7.simulate('click');
    equalsButton.simulate('click');
    expect(runningTotal.text()).toEqual('3');
  })

  it('should be able concatenate multiple number button clicks', () => {
    button3.simulate('click');
    button7.simulate('click');
    button5.simulate('click');
    expect(runningTotal.text()).toEqual('375');
  })

  it('should be able to chain multiple operations together', () => {
    const multiplyButton = container.find('#operator-multiply');
    const addButton = container.find('#operator_add');
    button7.simulate('click');
    multiplyButton.simulate('click');
    button2.simulate('click');
    addButton.simulate('click');
    button1.simulate('click');
    equalsButton.simulate('click');
    expect(runningTotal.text()).toEqual('15');
  })
})

