// MapView.js

import React, { PropTypes } from 'react';
import { requireNativeComponent, View, NativeModules } from 'react-native';

const MAP_TYPES = {
  NORMAL: 'normal',
  SATELLITE: 'satellite',
};

const MapViewComponent = NativeModules.MapView;

var iface = {
  name: 'MapView',
  propTypes: {
    ...View.propTypes, // include the default view properties

    /**
     * style
     */
    style: View.propTypes.style,

    /**
     * Center of the map : latitude,longitude
     */
    center: PropTypes.string,

    /**
     * The map type to be displayed.
     *
     * - standard: standard road map (default)
     * - satellite: satellite view
     * - hybrid: satellite view with roads and points of interest overlayed
     * - terrain: topographic view
     * - none: no base map
     */
    mapType: PropTypes.oneOf(Object.values(MAP_TYPES)),

    /**
     * initialZoom: initial zoom level for map
     */
     initialZoom : PropTypes.number
  },
};

class MapView extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isReady: false,
    };

    this._onMapReady = this._onMapReady.bind(this);
  }

  // componentWillUpdate() is invoked immediately before rendering when
  // new props or state are being received. Use this as an opportunity
  // to perform preparation before an update occurs. This method is not called
  // for the initial render.
  componentWillUpdate(nextProps) {
  }

  // componentDidMount() is invoked immediately after a component is mounted.
  // Initialization that requires DOM nodes should go here. If you need to load
  // data from a remote endpoint, this is a good place to instantiate the
  // network request. Setting state in this method will trigger a re-rendering.
  componentDidMount() {
    const { isReady } = this.state;
    if (isReady) {
    }
  }

  _onMapReady() {
    this.setState({ isReady: true });
  }
}

// requireNativeComponent commonly takes two parameters, the first is
// the name of the native view and the second is an object that describes the
// component interface. The component interface should declare a friendly name
// for use in debug messages and must declare the propTypes reflected by the
// Native View. The propTypes are used for checking the validity of a user's
// use of the native view.
// Note that if you need your JavaScript component to do
// more than just specify a name and propTypes, like do custom event handling,
// you can wrap the native component in a normal react component. In that case,
// you want to pass in the wrapper component instead of iface to
// requireNativeComponent.
module.exports = requireNativeComponent('MapView', iface), MapViewComponent;
