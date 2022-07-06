/**
 *  React Slot Machine
 *  Create an extremely biased, web-based slot machine game.
 *
 *  Copyright 2020, Marc S. Brooks (https://mbrooks.info)
 *  Licensed under the MIT license:
 *  http://www.opensource.org/licenses/mit-license.php
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _slotMachineGen = require('slot-machine-gen');

var _slotMachineGen2 = _interopRequireDefault(_slotMachineGen);

require('./slot-machine.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Provides React Component wrapper.
 */
var SlotMachine = function (_React$Component) {
  _inherits(SlotMachine, _React$Component);

  function SlotMachine() {
    _classCallCheck(this, SlotMachine);

    return _possibleConstructorReturn(this, (SlotMachine.__proto__ || Object.getPrototypeOf(SlotMachine)).apply(this, arguments));
  }

  _createClass(SlotMachine, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.slot = new _slotMachineGen2.default(this.refs.wrapper, this.props.reels, this.props.callback, this.props.options);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (this.props.play !== prevProps.play) {
        this.slot.play();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { id: this.props.id, className: 'slot-machine', ref: 'wrapper' });
    }
  }]);

  return SlotMachine;
}(_react2.default.Component);

;

SlotMachine.defaultProps = {
  id: 'slot-machine',
  play: false
};

SlotMachine.propTypes = {
  id: _propTypes2.default.string,
  play: _propTypes2.default.bool,
  reels: _propTypes2.default.array.isRequired,
  callback: _propTypes2.default.func,
  options: _propTypes2.default.object
};

exports.default = SlotMachine;
//# sourceMappingURL=react-slot-machine.js.map