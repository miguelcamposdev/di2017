package com.miguelcr.a04_fragmentcomunicacion;

import android.content.Context;
import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;


public class ListaUsuariosFragment extends Fragment {

    Button btnUsuario;

    private IListadoUsuariosListener mListener;

    public ListaUsuariosFragment() {
        // Required empty public constructor
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        View v =  inflater.inflate(R.layout.fragment_lista_usuarios, container, false);

        btnUsuario = v.findViewById(R.id.buttonUsuarioClicked);

        eventListeners();

        return v;
    }

    private void eventListeners() {
        btnUsuario.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if (mListener != null) {
                    mListener.onUsuarioClick("Killo esto funsiona");
                }
            }
        });
    }


    @Override
    public void onAttach(Context context) {
        super.onAttach(context);
        if (context instanceof IListadoUsuariosListener) {
            mListener = (IListadoUsuariosListener) context;
        } else {
            throw new RuntimeException(context.toString()
                    + " must implement OnFragmentInteractionListener");
        }
    }

    @Override
    public void onDetach() {
        super.onDetach();
        mListener = null;
    }


}
