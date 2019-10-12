import React, { Component } from 'react';
import closeIcon from '../img/_ionicons_svg_md-close.svg';
import checkMark from '../img/_ionicons_svg_md-checkmark-circle-outline.svg';
import SVG from 'react-inlinesvg';
import '../styles.css';

class EditableInput extends Component {

  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleEditToggle = this.handleEditToggle.bind(this);
    this.handleComplete = this.handleComplete.bind(this);
    this.state = {
      inputTitle: '',
      isEditable: false,
    }
  }

  handleInputChange(event) {
    const { name, value } = event.target;

    this.setState({
        [name]: value
    });
  };

  async handleEditToggle() {
    const { isEditable } = this.state;

    await this.setState({
      isEditable: !isEditable,
      inputTitle: '',
    });
  };

  async handleComplete(event){
    event.preventDefault();
    const { handleSubmit } = this.props;
    const { inputTitle } = this.state;

    await this.setState({
      isEditable: false,
      inputTitle: '',
    });

    handleSubmit(inputTitle);
  }
  
  render () {
    let {
      minInputLength,
      value,
    } = this.props;

    const { inputTitle, isEditable } = this.state;

    // default length = 1
    if (!minInputLength) minInputLength = 1;

    const shouldDisable = inputTitle.length < minInputLength;

    return (
      <div className="editable-container">
        {isEditable ? (
          <div className='row flex-row'>
            <form
              className='editable-form'
              onReset={this.handleEditToggle}
              onChange={this.handleInputChange}
              onSubmit={this.handleComplete}
            >
              <div className='editable-input-wrapper'>
                <input
                  type='text'
                  className='input-title'
                  defaultValue={inputTitle}
                  name='inputTitle'
                />
              </div>
              <div className='editable-action'>
                <button
                  className='send-btn'
                  type='submit'               
                  disabled={shouldDisable}>
                  <SVG src={checkMark} className="send-icon" alt="checkmark-circle" />
                </button>
              </div>
              <div className='editable-action'>
                <button
                  type='reset'
                  className='close-btn'>
                    <SVG src={closeIcon} className="close-icon" alt="close-circle" />
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className='stationary-value'
              onClick={this.handleEditToggle}>{value}</div>
          )}
      </div>
    )
  }
}

export default EditableInput;