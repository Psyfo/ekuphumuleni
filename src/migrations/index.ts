import * as migration_20261122_115253_initial from './20261122_115253_initial';
import * as migration_20261122_122843_donate_settings from './20261122_122843_donate_settings';

export const migrations = [
  {
    up: migration_20261122_115253_initial.up,
    down: migration_20261122_115253_initial.down,
    name: '20261122_115253_initial',
  },
  {
    up: migration_20261122_122843_donate_settings.up,
    down: migration_20261122_122843_donate_settings.down,
    name: '20261122_122843_donate_settings'
  },
];
