package com.miguelcr.a06_fragmentlist;

import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import java.util.List;

public class MyAlumnoItemRecyclerViewAdapter extends RecyclerView.Adapter<MyAlumnoItemRecyclerViewAdapter.ViewHolder> {

    private final List<AlumnoItem> mValues;

    public MyAlumnoItemRecyclerViewAdapter(List<AlumnoItem> items) {
        mValues = items;
    }

    // Este método carga el TEMPLATE para pintar 1 ALUMNO (AlumnoItem)
    @Override
    public ViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext())
                .inflate(R.layout.fragment_alumnoitem, parent, false);
        return new ViewHolder(view);
    }

    // Adapter >>>> pintar cada elemento
    @Override
    public void onBindViewHolder(final ViewHolder holder, int position) {
        holder.elementoActual = mValues.get(position);
        holder.textViewNombre.setText(mValues.get(position).getNombre());
        holder.textViewSuspensos.setText(mValues.get(position).getSuspensos()+" suspensos");

    }

    @Override
    public int getItemCount() {
        return mValues.size();
    }

    // PROYECCIÓN
    // Debemos definir los elementos visuales que necesitemos
    // para pintar un alumno y que deben estar definidos en el
    // layout R.layout.fragment_alumnoitem
    // P.e. si  voy a dibujar un alumno con su foto, nombre y nº de suspensos
    // necesitaré un ImageView para la foto y 2 TextView: uno para el nombre
    // y otro para el nº de suspensos

    // El elemento View mView siempre existe porque hace referencia
    // al root element o elemento padre del layout, es decir, por lo
    // general al ConstraintLayout que incluye a los 3 elementos
    // que hemos citado

    // Se define también un elemento, en este caso de tipo AlumnoItem
    // siempre debe ser del tipo de elemento que tenemos en la lista
    // public AlumnoItem mItem;
    public class ViewHolder extends RecyclerView.ViewHolder {
        public final View mView;
        public final ImageView imageViewPhoto;
        public final TextView textViewNombre;
        public final TextView textViewSuspensos;
        public AlumnoItem elementoActual;

        public ViewHolder(View view) {
            super(view);
            mView = view;
            imageViewPhoto = view.findViewById(R.id.imageViewPhoto);
            textViewNombre =  view.findViewById(R.id.textViewNombre);
            textViewSuspensos = view.findViewById(R.id.textViewSuspensos);
        }

        @Override
        public String toString() {
            return super.toString() + " '" + textViewNombre.getText() + "'";
        }
    }
}
