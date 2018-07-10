import React from 'react';
import classnames from 'classnames';
import i18n from './i18n';

import './style/ie8.scss';
import './style/Message.scss';

const { PropTypes } = React;
const i18nDefault = 'zh-cn';

export default class Message extends React.Component {
  static displayName = 'eui-message';

  static propTypes = {
    children: PropTypes.any,
    lang: PropTypes.string,
    icon: PropTypes.string,
    prefixCls: PropTypes.string,
    theme: PropTypes.string,
    style: PropTypes.object,
    className: PropTypes.string,
  };

  static defaultProps = {
    children: i18n[i18nDefault].description,
    lang: i18nDefault,
    icon: '//cdn.ewt360.com/ewt360/images/images/searchno.jpg?t=201806222330',
    prefixCls: 'eui-message',
    theme: 'default',
    style: {},
    className: '',
  };

  render() {
    const {
      prefixCls,
      children,
      icon,
      style,
      className,
    } = this.props;
    const p = [1, 2, 4].map(item => <span key={item}>{item}</span>);

    return (
      <div
        className={classnames({ [prefixCls]: true }, { [className]: !!className })}
        style={style}
      >
        <div
          className={`${prefixCls}-icon`}
          style={{
            backgroundImage: `url(${icon})`,
          }}
        />
        <div className={`${prefixCls}-content`}>
          {children}
          {p}
        </div>
      </div>
    );
  }
}
