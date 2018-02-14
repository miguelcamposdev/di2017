package com.miguelcr.a07_restaurantlistfragment;

import android.content.Context;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.RatingBar;
import android.widget.TextView;

import com.squareup.picasso.Picasso;

import java.util.List;

public class MyRestaurantRecyclerViewAdapter extends RecyclerView.Adapter<MyRestaurantRecyclerViewAdapter.ViewHolder> {

    private Context ctx;
    private final List<Restaurant> mValues;

    public MyRestaurantRecyclerViewAdapter(Context context, List<Restaurant> items) {
        ctx = context;
        mValues = items;
    }

    // Carga el template (layout) que utilizamos para dibujar un elemento de la lista
    @Override
    public ViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext())
                .inflate(R.layout.fragment_restaurant, parent, false);
        return new ViewHolder(view);
    }

    @Override
    public void onBindViewHolder(final ViewHolder holder, int position) {
        holder.mItem = mValues.get(position);

        holder.textViewName.setText(holder.mItem.getName());
        holder.textViewAddress.setText(holder.mItem.getAddress());
        holder.ratingBarRate.setRating(holder.mItem.getRate());

        // Seteamos la imagen en el componente ImageView
        Picasso.with(ctx)
                .load(holder.mItem.getUrlPhoto())
                .resize(600,150)
                .centerCrop()
                .into(holder.imageViewPhoto);


    }

    @Override
    public int getItemCount() {
        return mValues.size();
    }

    public class ViewHolder extends RecyclerView.ViewHolder {
        public final View mView;
        public final ImageView imageViewPhoto;
        public final TextView textViewName;
        public final TextView textViewAddress;
        public final RatingBar ratingBarRate;

        public Restaurant mItem;

        public ViewHolder(View view) {
            super(view);
            mView = view;
            imageViewPhoto = view.findViewById(R.id.imageViewPhoto);
            textViewName = view.findViewById(R.id.textViewName);
            textViewAddress = view.findViewById(R.id.textViewAddress);
            ratingBarRate = view.findViewById(R.id.ratingBarRate);
        }

        @Override
        public String toString() {
            return super.toString() + " '" + textViewName.getText() + "'";
        }
    }
}
