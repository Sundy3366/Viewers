import LesionTrackerPanel from './components/LesionTrackerPanel';

export default {
  /**
   * Only required property. Should be a unique value across all extensions.
   */
  id: 'lesion-tracker',

  /**
   * @param {object} params
   * @param {ServicesManager} params.servicesManager
   * @param {CommandsManager} params.commandsManager
   */
  getPanelModule({ servicesManager, commandsManager }) {
    return {
      menuOptions: [
        {
          icon: 'th-list',
          label: 'Lesion Tracker',
          target: 'lesion-tracker-panel',
        },
      ],
      components: [
        {
          id: 'lesion-tracker-panel',
          component: LesionTrackerPanel,
        },
      ],
      defaultContext: ['VIEWER']
    };
  },

  /**
   * @param {object} params
   * @param {ServicesManager} params.servicesManager
   * @param {CommandsManager} params.commandsManager
   * @returns Object
   */
  getToolbarModule() {
    return null;
  },

  /**
   * @param {object} params
   * @param {ServicesManager} params.servicesManager
   * @param {CommandsManager} params.commandsManager
   * @returns Object
   */
  getCommandsModule() {
    return null;
  },
};
