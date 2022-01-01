import React, { PureComponent } from 'react';
import {
  Calendar as RNCalendar,
  CalendarProps as RNCalendarProps,
  LocaleConfig
} from 'react-native-calendars';

const monthNames = [
  '一月',
  '二月',
  '三月',
  '四月',
  '五月',
  '六月',
  '七月',
  '八月',
  '九月',
  '十月',
  '十一月',
  '十二月'
];

const dayNames = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];

LocaleConfig.locales.zh_CN = {
  monthNames: monthNames,
  monthNamesShort: monthNames,
  dayNames: dayNames,
  dayNamesShort: dayNames,
  today: '今天'
};
LocaleConfig.defaultLocale = 'zh_CN';

export default class Calendar extends PureComponent<RNCalendarProps, any> {
  render() {
    return <RNCalendar {...this.props} />;
  }
}
