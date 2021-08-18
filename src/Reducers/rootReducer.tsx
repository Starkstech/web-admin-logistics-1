import { combineReducers } from 'redux';
import {
  settingsReducers,
  activeConversationReducer,
  activeConversationTypeReducer,
  incomingCallReducer,
  activeGroupCallReducer,
  conversationReducer,
  rolesPermissions,
  userReducer,
  myOrgReducer,
  permisionReducers,
  qrcodeReducer,
  ActiveOrganisationReducers,
  channelReducer,
  notificationReducer,
  searchReducer,
  sidebarReducer,
  addUserReducer,
  adminReducer,
  taskReducer,
  singleTaskReducer,
  newTaskReducer,
  pendingTaskReducer,
  completedTaskReducer
} from './';

const rootReducer = combineReducers({
  settings: settingsReducers,
  activeChatInfo: activeConversationReducer,
  activeChatType: activeConversationTypeReducer,
  incomingCall: incomingCallReducer,
  activeGroupCall: activeGroupCallReducer,
  channel: channelReducer,
  conversation: conversationReducer,
  roles: rolesPermissions,
  user: userReducer,
  myOrg: myOrgReducer,
  permissions: permisionReducers,
  qrcode: qrcodeReducer,
  myActiveOrganisation: ActiveOrganisationReducers,
  notifications: notificationReducer,
  search: searchReducer,
  sidebar: sidebarReducer,
  addUser: addUserReducer,
  myAdmin: adminReducer,
  tasks: taskReducer,
  single: singleTaskReducer,
  newTask: newTaskReducer,
  pendingTask: pendingTaskReducer,
  completedTask: completedTaskReducer
});

export default rootReducer;
