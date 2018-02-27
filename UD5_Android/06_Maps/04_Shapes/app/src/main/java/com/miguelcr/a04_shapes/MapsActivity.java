package com.miguelcr.a04_shapes;

import android.support.v4.app.FragmentActivity;
import android.os.Bundle;

import com.google.android.gms.maps.CameraUpdateFactory;
import com.google.android.gms.maps.GoogleMap;
import com.google.android.gms.maps.OnMapReadyCallback;
import com.google.android.gms.maps.SupportMapFragment;
import com.google.android.gms.maps.model.LatLng;
import com.google.android.gms.maps.model.MarkerOptions;
import com.google.android.gms.maps.model.Polyline;
import com.google.android.gms.maps.model.PolylineOptions;

public class MapsActivity extends FragmentActivity implements OnMapReadyCallback {

    private GoogleMap mMap;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_maps);
        // Obtain the SupportMapFragment and get notified when the map is ready to be used.
        SupportMapFragment mapFragment = (SupportMapFragment) getSupportFragmentManager()
                .findFragmentById(R.id.map);
        mapFragment.getMapAsync(this);
    }


    /**
     * Manipulates the map once available.
     * This callback is triggered when the map is ready to be used.
     * This is where we can add markers or lines, add listeners or move the camera. In this case,
     * we just add a marker near Sydney, Australia.
     * If Google Play services is not installed on the device, the user will be prompted to install
     * it inside the SupportMapFragment. This method will only be triggered once the user has
     * installed Google Play services and returned to the app.
     */
    @Override
    public void onMapReady(GoogleMap googleMap) {
        mMap = googleMap;


        // Add a marker in Sydney and move the camera
        LatLng sevilla = new LatLng(37.385956,-5.993181);
        mMap.addMarker(new MarkerOptions().position(sevilla).title("Marker in Servilla"));
        mMap.moveCamera(CameraUpdateFactory.newLatLngZoom(sevilla,18));

        PolylineOptions rectOptions = new PolylineOptions()
                .add(new LatLng(37.386633,-5.994029))
                .add(new LatLng(37.386783,-5.992666))  // North of the previous point, but at the same longitude
                .add(new LatLng(37.386104,-5.992355))  // Same latitude, and 30km to the west
                .add(new LatLng(37.385359,-5.992227))  // Same longitude, and 16km to the south
                .add(new LatLng(37.385142,-5.992414))
                .add(new LatLng(37.385048,-5.993621))
                .add(new LatLng(37.38524,-5.993911))
                .add(new LatLng(37.386633,-5.994029)); // Closes the polyline.

        Polyline polyline = mMap.addPolyline(rectOptions);

        polyline.setWidth(10);
        polyline.setColor(R.color.colorAccent);


    }
}
