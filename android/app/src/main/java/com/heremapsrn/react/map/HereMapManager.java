package com.heremapsrn.react.map;

import android.util.Log;

import com.facebook.infer.annotation.Assertions;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.common.MapBuilder;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewGroupManager;
import com.facebook.react.uimanager.annotations.ReactProp;

import java.util.Map;

import javax.annotation.Nullable;

class HereMapManager extends ViewGroupManager<HereMapView> {

    static final int COMMAND_ZOOM_IN = 1;
    static final int COMMAND_ZOOM_OUT = 2;

    static final String REACT_CLASS = "HereMapView";

    private static final String TAG = HereMapManager.class.getSimpleName();

    //private final ReactApplicationContext appContext;

    //private Activity currentActivity;

//    public HereMapManager(Activity activity) {
//        currentActivity = activity;
//    }

//    HereMapManager(ReactApplicationContext context) {
//        this.appContext = context;
//    }

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    protected HereMapView createViewInstance(ThemedReactContext reactContext) {
        return new HereMapView(reactContext);
    }


    @Override
    public Map<String,Integer> getCommandsMap() {
        Log.d("React"," View manager getCommandsMap:");
        return MapBuilder.of(
                "zoomIn", COMMAND_ZOOM_IN,
                "zoomOut", COMMAND_ZOOM_OUT);
    }

    @Override
    public void receiveCommand(HereMapView view,
                               int commandType,
                               @Nullable ReadableArray args) {

        Assertions.assertNotNull(view);
        Assertions.assertNotNull(args);

        double zoomLevel = args.getDouble(0);

        switch (commandType) {
            case COMMAND_ZOOM_IN: {
                view.setZoomLevel(zoomLevel);
                return;
            }
            case COMMAND_ZOOM_OUT: {
                view.setZoomLevel(zoomLevel);
                return;
            }

            default:
                throw new IllegalArgumentException(String.format(
                        "Unsupported command %d received by %s.",
                        commandType,
                        getClass().getSimpleName()));
        }
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
