package com.miguelcr.a07_restaurantlistfragment;

import android.content.Context;
import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.support.v7.widget.GridLayoutManager;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import java.util.ArrayList;
import java.util.List;

public class RestaurantFragment extends Fragment {

    // TODO: Customize parameters
    private int mColumnCount = 1;
    List<Restaurant> restaurantList;
    MyRestaurantRecyclerViewAdapter adapter;

    /**
     * Mandatory empty constructor for the fragment manager to instantiate the
     * fragment (e.g. upon screen orientation changes).
     */
    public RestaurantFragment() {
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.fragment_restaurant_list, container, false);

        restaurantList = new ArrayList<>();
        restaurantList.add(new Restaurant("Goiko Grill",5,"https://www.goikogrill.com/wp-content/uploads/2017/01/GOIKO_GRILL_WEB-2.jpg","Avda. República Argentina, 35 bajo"));
        restaurantList.add(new Restaurant("Cibeles",0,"https://media-cdn.tripadvisor.com/media/photo-s/0e/7f/0d/47/flamenquin-casero.jpg","Pasaje Esperanza Triana"));
        restaurantList.add(new Restaurant("TGB",3,"https://inversorglobal.es/wp-content/uploads/2015/03/TGB.jpg","Plaza Nueva, s/n"));

        // Set the adapter
        if (view instanceof RecyclerView) {
            Context context = view.getContext();
            RecyclerView recyclerView = (RecyclerView) view;
            if (mColumnCount <= 1) {
                recyclerView.setLayoutManager(new LinearLayoutManager(context));
            } else {
                recyclerView.setLayoutManager(new GridLayoutManager(context, mColumnCount));
            }
            adapter = new MyRestaurantRecyclerViewAdapter(getActivity(), restaurantList);
            recyclerView.setAdapter(adapter);
        }
        return view;
    }

}
