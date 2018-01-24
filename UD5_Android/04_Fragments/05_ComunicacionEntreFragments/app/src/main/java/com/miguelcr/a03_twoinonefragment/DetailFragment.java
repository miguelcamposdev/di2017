package com.miguelcr.a03_twoinonefragment;


import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;


/**
 * A simple {@link Fragment} subclass.
 */
public class DetailFragment extends Fragment {
    TextView nombreUsuario;

    public DetailFragment() {
        // Required empty public constructor
    }


    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        View v = inflater.inflate(R.layout.fragment_detail, container, false);

        nombreUsuario = v.findViewById(R.id.textViewNombre);

        return v;
    }

    public void actualizaDetalleUsuario(String nombre) {
        nombreUsuario.setText(nombre);
    }

}
