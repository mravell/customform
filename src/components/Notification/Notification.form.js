import NotificationEditDisplay from './editForm/Notification.edit.display';
import NotificationEditData from './editForm/Notification.edit.data';

import base from 'formiojs/components/_classes/component/Component.form';

export default function(...extend) {
  return base([
    {
      key: 'display',
      components: NotificationEditDisplay
    },
    {
      key: 'data',
      components: NotificationEditData
    },
    {
      key: 'layout',
      ignore: true
    },
    {
      key: 'validation',
      ignore: true
    }
  ], ...extend);
}
