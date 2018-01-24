package com.miguelcr.a03_twoinonefragment;

import android.support.constraint.ConstraintLayout;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        ConstraintLayout layout = findViewById(R.id.layoutTablet);

        if(layout==null) { // Móvil
            Toast.makeText(this, "Estás en un móvil", Toast.LENGTH_SHORT).show();
        } else { // Tablet
            Toast.makeText(this, "Estás en una tablet", Toast.LENGTH_SHORT).show();
        }
    }
}
