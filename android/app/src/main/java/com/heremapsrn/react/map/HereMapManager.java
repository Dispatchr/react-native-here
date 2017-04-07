package com.heremapsrn.react.map;

import android.util.Log;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewGroupManager;
import com.facebook.react.uimanager.annotations.ReactProp;

import javax.annotation.Nullable;

class HereMapManager extends ViewGroupManager<HereMapView> {

    private static final String TAG = HereMapManager.class.getSimpleName();

    static final String REACT_CLASS = "MapView";

    private final ReactApplicationContext appContext;

    HereMapManager(ReactApplicationContext context) {
        this.appContext = context;
    }

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    protected HereMapView createViewInstance(ThemedReactContext context) {
        return new HereMapView(context);
    }

    @ReactProp(name = "center")
    public void setCenter(HereMapView view, @Nullable String center) {
        view.setCenter(center);
    }

    @ReactProp(name = "mapType")
    public void setMapType(HereMapView view, @Nullable String type) {
        view.setCenter(type);
    }

    @ReactProp(name = "initialZoom", defaultDouble = 10.0)
    public void setZoomLevel(HereMapView view, double zoomLevel) {
        Log.d(TAG, "======================= ZOOM " + zoomLevel);
        view.setZoomLevel(zoomLevel);
    }
}
