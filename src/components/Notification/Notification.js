const HiddenComponent = Formio.Components.components.hidden;
import editForm from '../Notification/Notification.form';

export default class Notification extends HiddenComponent {

  static schema(...extend) {
    return HiddenComponent.schema({
      type: 'notification',
      tableView: false,
      inputType: 'hidden'
    }, ...extend);
  }

  static get builderInfo() {
	  return {
      title: 'Notification',
      group: 'custom',
      icon: 'envelope',
      weight: 1,
      documentation: '/userguide/#html-element-component',
      schema: Notification.schema()
    };
  }

	static get editForm() {
		return editForm;
	}

}






/*  
function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  static defaultSchema() {
    return HiddenComponent.schema();
  }
      

  static get inputInfo() {
    var info = _get(_getPrototypeOf(HiddenComponent.prototype), "elementInfo", this).call(this);
    info.type = 'input';
    info.attr.type = 'hidden';
    info.changeEvent = 'change';
    return info;
  }



  static get skipInEmail() {
    return true;
  }

  static labelIsHidden() {
    return true;
  }

  static get emptyValue() {
    return '';
  }

  static setValue(value) {
    var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return this.updateValue(value, flags);
  }

  static getValue() {
    return this.dataValue;
  }


static get labelInfo() {
    var label = {};
    label.hidden = this.labelIsHidden();
    label.className = '';
    label.labelPosition = this.component.labelPosition;
    label.tooltipClass = "".concat(this.iconClass('question-sign'), " text-muted");
    var isPDFReadOnlyMode = this.parent && this.parent.form && this.parent.form.display === 'pdf' && this.options.readOnly;

    if (this.hasInput && this.component.validate && (0, FormioUtils.boolValue)(this.component.validate.required) && !isPDFReadOnlyMode) {
      label.className += ' field-required';
    }

    if (label.hidden) {
      label.className += ' control-label--hidden';
    }

    if (this.info.attr.id) {
      label.for = this.info.attr.id;
    }

    return label;
  }
*/
/*
  static get className() {
    var className = this.hasInput ? 'form-group has-feedback ' : '';
    className += "formio-component formio-component-".concat(this.component.type, " "); // TODO: find proper way to avoid overriding of default type-based component styles

    if (this.key && this.key !== 'form') {
      className += "formio-component-".concat(this.key, " ");
    }

    if (this.component.multiple) {
      className += 'formio-component-multiple ';
    }

    if (this.component.customClass) {
      className += this.component.customClass;
    }

    if (this.hasInput && this.component.validate && (0, FormioUtils.boolValue)(this.component.validate.required)) {
      className += ' required';
    }

    if (this.labelIsHidden()) {
      className += ' formio-component-label-hidden';
    }

    if (!this.visible) {
      className += ' formio-hidden';
    }

    return className;
  }

  conditionallyVisible(data, row) {
    data = data || this.rootValue;
    row = row || this.data;

    if (this.builderMode || !this.hasCondition()) {
      return !this.component.hidden;
    }

    data = data || (this.root ? this.root.data : {});
    return this.checkCondition(row, data);
  }
*/
