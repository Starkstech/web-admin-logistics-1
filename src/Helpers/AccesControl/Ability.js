/* eslint-disable no-underscore-dangle */
import { Ability, AbilityBuilder } from '@casl/ability'

import { Store } from 'Store'

// Defines how to detect object's type
function subjectName (item) {
  if (!item || typeof item === 'string') {
    return item
  }
  return item.__type
}

const ability = new Ability([], { subjectName })

let currentAuth
Store.subscribe(() => {
  const prevAuth = currentAuth
  currentAuth = Store.getState().myRole
  if (prevAuth !== currentAuth) {
    ability.update(defineRulesFor(currentAuth))
  }
})

function defineRulesFor (auth) {
  const { can, rules } = new AbilityBuilder()
  if (auth !== {}) {
    if (auth.name === 'SuperAdmin') {
      can('view', 'Proposal')
      can('view', 'Draft')
      can('apply', 'Proposal')
      can('view', 'Profile')
      can('view', 'Teams')
      can('view', 'dashboard')
      can('view', 'report')
      can('view', 'channels')
      can('view', 'conversations')
      can('view', 'qrcode')
      can('view', 'logs')
      can('view', 'help')
      can('view', 'admins')
      can('view', 'reports')
      can('view', 'notifications')
      can('view', 'users')
      can('suspend', 'users')
      can('create', 'users')
      can('create', 'channel')
      can('create', 'qrcode')
      can('view', 'search')
      can('view', 'clients')
      can('view', 'permissions')
      can('view', 'settings')
      can('create', 'permissions')
      can('view', 'general_settings')
      can('view', 'profile_settings')
      can('create', 'admins')
      can('view', 'admins')
      can('create', 'private_conversation')
      can('create', 'private_channel')
    }
    if (auth.name === 'Client') {
      can('view', 'organisation_channels')
      can('add', 'Proposal')
      can('view', 'Proposal')
      can('accept', 'Application')
      can('reject', 'Application')
      can('view', 'dashboard')
      can('view', 'report')
      can('view', 'channels')
      can('view', 'conversations')
      can('view', 'qrcode')
      can('view', 'logs')
      can('view', 'help')
      can('view', 'admins')
      can('view', 'reports')
      can('view', 'notifications')
      can('view', 'settings')
      can('view', 'users')
      can('suspend', 'users')
      can('create', 'users')
      can('create', 'channel')
      can('create', 'qrcode')
      can('view', 'search')
      can('view', 'general_settings')
      can('view', 'profile_settings')
      can('create', 'admins')
      can('view', 'admins')
    }
  } else {
    can('view', 'conversations')
    can('view', 'notifications')
    can('view', 'settings')
  }

  return rules
}

export default ability
