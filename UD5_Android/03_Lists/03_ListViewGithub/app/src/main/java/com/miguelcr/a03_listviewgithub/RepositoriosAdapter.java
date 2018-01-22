package com.miguelcr.a03_listviewgithub;

import android.content.Context;
import android.support.annotation.NonNull;
import android.support.annotation.Nullable;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.ImageView;
import android.widget.TextView;

import com.squareup.picasso.Picasso;

import java.lang.reflect.Array;
import java.util.List;

/**
 * Created by miguelcampos on 22/1/18.
 */

class RepositoriosAdapter extends ArrayAdapter<Repo> {
    Context ctx;
    List<Repo> listaElementos;
    int template;

    public RepositoriosAdapter(@NonNull Context context, int resource, @NonNull List<Repo> objects) {
        super(context, resource, objects);
        ctx = context;
        listaElementos = objects;
        template = resource;
    }

    @NonNull
    @Override
    public View getView(int position, @Nullable View convertView, @NonNull ViewGroup parent) {
        // En el objeto "v" tenemos una referencia al root element del "template"
        View v = LayoutInflater.from(ctx).inflate(template, parent, false);

        // 1. Rescatar los elementos visuales de mi layout
        ImageView ivFoto = v.findViewById(R.id.imageViewAvatar);
        TextView tvNombre = v.findViewById(R.id.textViewNombreRepo);

        // 2. Rescatar los datos el alumno que estoy dibujando en este momento
        Repo actual = listaElementos.get(position);
        String nombre = actual.getName();
        String urlFotoAvatar = actual.getOwner().getAvatarUrl();

        // 3. Setear los datos del alumno en los View components
        tvNombre.setText(nombre);
        Picasso.with(ctx).load(urlFotoAvatar).into(ivFoto);

        return v;
    }
}
