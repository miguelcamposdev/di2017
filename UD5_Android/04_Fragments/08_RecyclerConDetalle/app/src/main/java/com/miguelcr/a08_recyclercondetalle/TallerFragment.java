package com.miguelcr.a08_recyclercondetalle;

import android.content.Context;
import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.support.v7.widget.GridLayoutManager;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;


import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class TallerFragment extends Fragment {

    // TODO: Customize parameters
    private int mColumnCount = 1;

    private IOnTallerInteractionListener mListener;
    List<Taller> tallerList;
    RecyclerView recyclerView;

    /**
     * Mandatory empty constructor for the fragment manager to instantiate the
     * fragment (e.g. upon screen orientation changes).
     */
    public TallerFragment() {
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.fragment_taller_list, container, false);

        // Set the adapter
        if (view instanceof RecyclerView) {
            Context context = view.getContext();
            recyclerView = (RecyclerView) view;
            if (mColumnCount <= 1) {
                recyclerView.setLayoutManager(new LinearLayoutManager(context));
            } else {
                recyclerView.setLayoutManager(new GridLayoutManager(context, mColumnCount));
            }


            Retrofit retrofit = new Retrofit.Builder()
                    .baseUrl("http://miguelcamposrivera.com/mecaround/api/v1/")
                    .addConverterFactory(GsonConverterFactory.create())
                    .build();

            ApiMecaroundService service = retrofit.create(ApiMecaroundService.class);
            String apiKey = "8wcok084w80go4gc0wksc8c8sw0sck8osgcwc4ok";

            Call<Talleres> tallerCall = service.listTalleres(apiKey);

            tallerCall.enqueue(new Callback<Talleres>() {
                @Override
                public void onResponse(Call<Talleres> call, Response<Talleres> response) {

                    tallerList = response.body().talleres;
                    recyclerView.setAdapter(new MyTallerRecyclerViewAdapter(getActivity(),tallerList, mListener));
                }

                @Override
                public void onFailure(Call<Talleres> call, Throwable t) {

                }
            });



        }
        return view;
    }


    @Override
    public void onAttach(Context context) {
        super.onAttach(context);
        if (context instanceof IOnTallerInteractionListener) {
            mListener = (IOnTallerInteractionListener) context;
        } else {
            throw new RuntimeException(context.toString()
                    + " must implement IOnTallerInteractionListener");
        }
    }

    @Override
    public void onDetach() {
        super.onDetach();
        mListener = null;
    }


}
