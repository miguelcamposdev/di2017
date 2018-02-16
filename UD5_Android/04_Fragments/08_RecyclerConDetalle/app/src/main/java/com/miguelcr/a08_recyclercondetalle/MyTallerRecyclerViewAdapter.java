package com.miguelcr.a08_recyclercondetalle;

import android.content.Context;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import java.util.List;


public class MyTallerRecyclerViewAdapter extends RecyclerView.Adapter<MyTallerRecyclerViewAdapter.ViewHolder> {

    private Context ctx;
    private final List<Taller> mValues;
    private final IOnTallerInteractionListener mListener;

    public MyTallerRecyclerViewAdapter(Context context, List<Taller> items, IOnTallerInteractionListener listener) {
        ctx = context;
        mValues = items;
        mListener = listener;
    }

    @Override
    public ViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext())
                .inflate(R.layout.fragment_taller, parent, false);
        return new ViewHolder(view);
    }

    @Override
    public void onBindViewHolder(final ViewHolder holder, int position) {
        holder.mItem = mValues.get(position);

        // Set de la información de cada elemento en base al elemento actual
        // que se está dibujando

        holder.textViewNombre.setText(holder.mItem.getNombre());
        holder.textViewDireccion.setText(holder.mItem.getDireccion());
        holder.textViewTelefono.setText(holder.mItem.getTelefono());

        // Eventos
        holder.imageViewMapa.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                mListener.onDireccionTallerClick(holder.mItem);
            }
        });

        holder.textViewTelefono.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                mListener.onTelefonoTallerClick(holder.mItem);
            }
        });

    }

    @Override
    public int getItemCount() {
        return mValues.size();
    }

    public class ViewHolder extends RecyclerView.ViewHolder {
        public final View mView;
        public final TextView textViewNombre;
        public final TextView textViewDireccion;
        public final TextView textViewTelefono;
        public final ImageView imageViewMapa;
        public Taller mItem;

        public ViewHolder(View view) {
            super(view);
            mView = view;
            textViewNombre = view.findViewById(R.id.textViewNombre);
            textViewDireccion= view.findViewById(R.id.textViewDireccion);
            textViewTelefono= view.findViewById(R.id.textViewTelefono);
            imageViewMapa= view.findViewById(R.id.imageViewMapa);
        }

        @Override
        public String toString() {
            return super.toString() + " '" + textViewNombre.getText() + "'";
        }
    }
}
