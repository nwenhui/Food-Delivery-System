import React from 'react';
import Calendar from 'rc-calendar';
import DatePicker from 'rc-calendar/lib/Picker';
import TimePickerPanel from 'rc-time-picker/lib/Panel';
import enUS from 'rc-calendar/lib/locale/en_US';

import 'rc-calendar/assets/index.css';
import 'rc-time-picker/assets/index.css';
import './DateTimeSelector.scss';

const DateTimeSelector = (props) => {
  let currFormat = props.format ? props.format : "YYYY-MM-DD HH:mm";
  return (
    <DatePicker
      calendar={
        <Calendar 
          // mode={props.mode ? props.mode : ''}
          style={{zIndex:1000, background: 'whitesmoke'}}
          timePicker={(props.timePicker === false) ? null : 
            <TimePickerPanel
              defaultValue={props.defaultValue}
              minuteStep={props.minuteStep || 1}
              showSecond={false}
              hideDisabledOptions={true}
            />}
          locale={enUS}
          defaultValue={props.defaultValue}
          format={currFormat}
          dateInputPlaceholder={props.defaultValue ? props.defaultValue.format(currFormat) : ''}
          showToday={props.showToday || true}
        />
      }
      animation="slide-up"
      value={props.defaultValue}
      onChange={props.handleChange}
    >
    {
      ({ value }) => {
        return (
          <span>
            <input
              style={props.style}
              placeholder={value ? value.format(currFormat) : 'Invalid date'}
              className="ant-calendar-picker-input ant-input"
              value={value ? value.format(currFormat) : ''}
              readOnly
            />
          </span>
        );
      }
    }
    </DatePicker>
  )
};

export default DateTimeSelector;