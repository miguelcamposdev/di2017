package com.miguelcr.a10_spinner;

import android.content.Context;
import android.support.annotation.NonNull;
import android.support.annotation.Nullable;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.ImageView;
import android.widget.TextView;

import java.util.List;

/**
 * Created by miguelcampos on 27/2/18.
 */

public class SpinnerCategoriaAdapter extends ArrayAdapter<Categoria> {
    Context ctx;
    int template;
    List<Categoria> values;

    public SpinnerCategoriaAdapter(@NonNull Context context, int resource, @NonNull List<Categoria> objects) {
        super(context, resource, objects);
        ctx = context;
        template = resource;
        values = objects;
    }

    @NonNull
    @Override
    public View getView(int position, @Nullable View convertView, @NonNull ViewGroup parent) {
        View view = LayoutInflater.from(ctx).inflate(template,null);

        Categoria categoria = values.get(position);


        ImageView imageViewCategoria = view.findViewById(R.id.imageViewCategoria);
        TextView textViewCategoria = view.findViewById(R.id.textViewNombreCategoria);

        imageViewCategoria.setImageResource(R.drawable.ic_attach_money_black_24dp);
        textViewCategoria.setText(categoria.getNombre());

        return view;

    }


    // Personalizamos la
    @Override
    public View getDropDownView(int position, @Nullable View convertView, @NonNull ViewGroup parent) {
        View view = LayoutInflater.from(ctx).inflate(template,null);

        Categoria categoria = values.get(position);


        ImageView imageViewCategoria = view.findViewById(R.id.imageViewCategoria);
        TextView textViewCategoria = view.findViewById(R.id.textViewNombreCategoria);

        imageViewCategoria.setImageResource(R.drawable.ic_attach_money_black_24dp);
        textViewCategoria.setText(categoria.getNombre());

        return view;
    }
}
