import React from 'react';
import PropTypes from 'prop-types';
import { withFormsy } from 'formsy-react';

import Radio from './Radio';
import './RadioGroup.scss';

class RadioGroup extends React.Component {
  static propTypes = {
    checkedIndex: PropTypes.number,
    setValue: PropTypes.func.isRequired,
    data: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.any.isRequired,
      }),
    ).isRequired,
  };

  static defaultProps = {
    checkedIndex: 0,
  };

  constructor(props) {
    super(props);
    const { checkedIndex } = this.props;
    this.state = {
      checkedIndex: checkedIndex > -1 ? checkedIndex : 0,
    };
  }

  componentWillMount() {
    const { data, setValue } = this.props;
    const { checkedIndex } = this.state;
    const { value } = data[checkedIndex];
    setValue(value);
  }

  onChange = (event, nextIndex) => {
    const { setValue } = this.props;
    const { value } = event.target;
    this.setState({ checkedIndex: nextIndex }, () => setValue(value));
  };

  isChecked = index => {
    const { checkedIndex } = this.state;
    return checkedIndex === index;
  };

  render() {
    const { data } = this.props;
    return (
      <div id="radio-group">
        {data.map((radio, i) => (
          <Radio
            key={radio.value}
            label={radio.label}
            value={radio.value}
            checked={this.isChecked(i)}
            onClick={e => this.onChange(e, i)}
          />
        ))}
      </div>
    );
  }
}

export default withFormsy(RadioGroup);
