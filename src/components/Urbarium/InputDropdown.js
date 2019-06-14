import React from 'react';
import styled from 'styled-components';
import { primary } from '../../colors';
import { InputFieldStyle } from './urbarium-styles';
import fonts from '../../fonts';
import Arrow from './Arrow';

const DropDown = styled.select`
    ${InputFieldStyle}
    ${props => props.font}
    cursor: pointer;
    appearance: none;

    &[data-default=true] {
        color: ${primary.passive};
    }

    option {
        color: black;
    }
`;
const ArrowContainer = styled.div`
    width: 0px;
    height: 0px;
    position: relative;
    bottom: 15px;
    left: 170px;
 `;

const getOptions = (options) => {
  options.map(option => <option value={option} key={option}>{option}</option>);
};

// have to turn this into a more complex react component, preloading data is not working
class InputDropDown extends React.Component {
  constructor(props) {
    super(props);
    const { data } = this.props;
    this.state = { dataDefault: !data };
  }

  handleOnChange(event) {
    const { options, changeHandler } = this.props;
    this.setState({ dataDefault: false });
    // TODO: check setState above should be called or after the changeHandler which trigger the parent setState
    const selectedIndex = options.indexOf(event.target.value);
    changeHandler(selectedIndex);
  }

  render() {
    const {
      data, disabled, options, placeholder, font,
    } = this.props;
    const { dataDefault } = this.state;
    return (
      <div className="InputDropDown">
        {/* data-default is used as a data property to alter style using css selectors */}
        <DropDown
          data-default={dataDefault}
          defaultValue={data ? options[data - 1] : placeholder}
          font={font}
          onChange={event => this.handleOnChange(event)}
          disabled={disabled}
        >
          {[<option hidden value="" key=" ">{placeholder}</option>,
            ...getOptions(options)]}
        </DropDown>
        <ArrowContainer>
          <Arrow width={8} color={primary.primary} />
        </ArrowContainer>
      </div>
    );
  }
}

InputDropDown.defaultProps = {
  placeholder: '',
  options: ['option 1'],
  data: undefined,
  font: fonts.defaultInput,
  changeHandler() {},
};

export default InputDropDown;
