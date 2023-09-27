import React, { Component } from "react";
import Flatpickr from "react-flatpickr";
import moment from "moment";

import { KeyCodeUtils } from "../../utils";
import "./DatePicker.scss";

// const CustomInput = ({ value, defaultValue, inputRef, onInputChange, onInputBlur, ...props }) => {
//     return <input {...props} className='custom-form-control custom-date-input' defaultValue={defaultValue} ref={inputRef}
//         onChange={onInputChange}
//         onBlur={onInputBlur}
//     />;
// };

class DatePicker extends Component {
  flatpickrNode = null;

  nodeRef = (element) => {
    this.flatpickr = element && element.flatpickr;
    this.flatpickrNode = element && element.node;
    if (this.flatpickrNode) {
      this.flatpickrNode.addEventListener("blur", this.handleBlur);
      this.flatpickrNode.addEventListener("keydown", this.handlerKeyDown);
    }
  };

  handlerKeyDown = (event) => {
    const keyCode = event.which || event.keyCode;
    if (keyCode === KeyCodeUtils.ENTER) {
      event.preventDefault();
      const { onChange } = this.props;
      const value = event.target.value;

      // Take the blur event and process the string value
      const valueMoment = moment(value, "DD/MM/YYYY");
      onChange([valueMoment.toDate(), valueMoment.toDate()]);
    }
  };

  componentWillUnmount() {
    if (this.flatpickrNode) {
      this.flatpickrNode.removeEventListener("blur", this.handleBlur);
      this.flatpickrNode.removeEventListener("keydown", this.handlerKeyDown);
    }
  }

  handleBlur = (event) => {
    const { onChange } = this.props;
    const value = event.target.value;

    // Take the blur event and process the string value
    event.preventDefault();
    const valueMoment = moment(value, "DD/MM/YYYY");
    onChange([valueMoment.toDate(), valueMoment.toDate()]);
  };

  onOpen = () => {
    if (this.flatpickrNode) {
      this.flatpickrNode.blur();
    }
  };

  close() {
    this.flatpickr.close();
  }

  checkDateValue = (str, max) => {
    if (str.charAt(0) !== "0" || str === "00") {
      var num = parseInt(str);
      if (isNaN(num) || num <= 0 || num > max) num = 1;
      str =
        num > parseInt(max.toString().charAt(0)) && num.toString().length === 1
          ? "0" + num
          : num.toString();
    }
    return str;
  };

  autoFormatOnChange = (value, seperator) => {
    var input = value;

    let regexForDeleting = new RegExp(`\\D\\${seperator}$`);

    //if (/\D\/$/.test(input)) input = input.substr(0, input.length - 3); // dat.nt: Xóa thêm 1 ký tự nếu xóa dấu cách sau / (VD: 12 / 12 /=> 12 / 1)

    if (regexForDeleting.test(input)) input = input.substr(0, input.length - 3);

    var values = input.split(seperator).map(function (v) {
      return v.replace(/\D/g, "");
    });

    if (values[0]) values[0] = this.checkDateValue(values[0], 31);
    if (values[1]) values[1] = this.checkDateValue(values[1], 12);
    var output = values.map(function (v, i) {
      return v.length === 2 && i < 2 ? v + " " + seperator + " " : v;
    });
    return output.join("").substr(0, 14);
  };

  onInputChange = (e) => {
    if (this.DISPLAY_FORMAT === this.DATE_FORMAT_AUTO_FILL) {
      let converted = this.autoFormatOnChange(e.target.value, this.SEPERATOR);
      e.target.value = converted;
    }
  };

  onInputBlur = (e) => {};

  //dat.nt : Auto Fill cho dạng ngăn cách và format cụ thể (seperator có thể dc thay thế)
  SEPERATOR = "/";
  DATE_FORMAT_AUTO_FILL = "d/m/Y"; // Format không thay đổi

  // dat.nt : Format ngày hiển thị
  DISPLAY_FORMAT = "d/m/Y";

  render() {
    const { value, onChange, minDate, onClose, ...otherProps } = this.props;
    const options = {
      dateFormat: this.DISPLAY_FORMAT,
      allowInput: true,
      disableMobile: true,
      onClose: onClose,
      onOpen: this.onOpen,
    };
    if (minDate) {
      options.minDate = minDate;
    }
    return (
      <Flatpickr
        ref={this.nodeRef}
        value={value}
        onChange={onChange}
        options={options}
        // render={
        //     ({ defaultValue, value, ...props }, ref) => {
        //         return <CustomInput defaultValue={defaultValue} inputRef={ref} onInputChange={this.onInputChange} onInputBlur={this.onInputBlur} />
        //     }
        // }
        {...otherProps}
      />
    );
  }
}

export default DatePicker;
