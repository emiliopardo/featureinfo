/**
 * @module M/plugin/Featureinfo
 */
import 'assets/css/featureinfo';
import api from '../../api.json';

export default class Featureinfo extends M.Plugin {
  /**
   * @classdesc
   * Main facade plugin object. This class creates a plugin
   * object which has an implementation Object
   *
   * @constructor
   * @extends {M.Plugin}
   * @param {Object} impl implementation object
   * @api stable
   */
  constructor(parameters) {
    super();
    /**
     * Facade of the map
     * @private
     * @type {M.Map}
     */
    this.map_ = null;

    /**
     * Array of controls
     * @private
     * @type {Array<M.Control>}
     */
    this.controls_ = [];

    this.name_ = 'featureinfo'


    /**
     * Metadata from api.json
     * @private
     * @type {Object}
     */
    this.metadata_ = api.metadata;
    if (!parameters) {
      this.position_ = 'TL';
      this.verticalPosition_ = 'm-top';
      this.horizontalPosition_ = 'm-left';
    } else {
      this.options_ = parameters.options
      this.position_ = this.options_.position
    }
    if (this.position_ === 'TL') {
      this.verticalPosition_ = 'm-top';
      this.horizontalPosition_ = 'm-left';
    } else if (this.position_ === 'BL') {
      this.verticalPosition_ = 'm-bottom';
      this.horizontalPosition_ = 'm-left';
    } else if (this.position_ === 'TR') {
      this.verticalPosition_ = 'm-top';
      this.horizontalPosition_ = 'm-right';
    } else if (this.position_ === 'BR') {
      this.verticalPosition_ = 'm-bottom';
      this.horizontalPosition_ = 'm-right';
    }
  }

  /**
   * This function adds this plugin into the map
   *
   * @public
   * @function
   * @param {M.Map} map the map to add the plugin
   * @api stable
   */
  addTo(map) {
    this.getfeatureinfoControl_ = null;
    this.map_ = map
    this.controls_ = this.map_.getControls()
    this.plugins_ = this.map_.getPlugins()

    if (!this.getfeatureinfoControl_) {
      this.map_.addControls('getfeatureinfo')
    }

    this.getfeatureinfoControl_ = this.map_.getControls().filter(e => e.name === 'getfeatureinfo')[0]

    if (!this.plugins_.filter(e => e.name === 'measurebar').length) {
      let toolPanel_ = document.getElementsByClassName('m-panel m-tools')[0]
      toolPanel_.style.display = 'none';
    }

    let featureInfoButton = document.getElementById('m-getfeatureinfo-button');
    let distinationPanel = document.getElementsByClassName('m-area ' + this.verticalPosition_ + ' ' + this.horizontalPosition_)[0]
    distinationPanel.appendChild(featureInfoButton);

    this.getfeatureinfoControl_.on(M.evt.ACTIVATED, () => {
      featureInfoButton.style.color = '#ff9800';
    })

    this.getfeatureinfoControl_.on(M.evt.DEACTIVATED, () => {
      featureInfoButton.style.color = '#FFF';
    })
  }


  /**
   * This function gets metadata plugin
   *
   * @public
   * @function
   * @api stable
   */
  getMetadata() {
    return this.metadata_;
  }

  get name() {
    return 'featureinfo'
  }
}
