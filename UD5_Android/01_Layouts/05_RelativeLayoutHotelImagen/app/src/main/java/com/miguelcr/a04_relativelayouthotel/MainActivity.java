package com.miguelcr.a04_relativelayouthotel;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.ImageView;

import com.squareup.picasso.Picasso;

public class MainActivity extends AppCompatActivity {
    ImageView photoHotel;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        photoHotel = findViewById(R.id.imageViewHotel);

        Picasso.with(this)
                .load("http://bellanyc.com/wp-content/uploads/2016/11/exterior.jpg").into(photoHotel);
    }
}
