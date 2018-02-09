package com.miguelcr.a06_fragmentlist;

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

public class AlumnoItemFragment extends Fragment {
    List<AlumnoItem> alumnoItemList;


    public AlumnoItemFragment() {
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.fragment_alumnoitem_list, container, false);

        // Set the adapter
        if (view instanceof RecyclerView) {
            Context context = view.getContext();
            RecyclerView recyclerView = (RecyclerView) view;

            recyclerView.setLayoutManager(new LinearLayoutManager(context));

            alumnoItemList = new ArrayList<>();
            alumnoItemList.add(new AlumnoItem("","Tejero",3));
            alumnoItemList.add(new AlumnoItem("","Jesús",2));
            alumnoItemList.add(new AlumnoItem("","Juanjo",5));
            alumnoItemList.add(new AlumnoItem("","Juanfran",0));
            recyclerView.setAdapter(new MyAlumnoItemRecyclerViewAdapter(alumnoItemList));
        }
        return view;
    }


}
