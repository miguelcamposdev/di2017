package com.miguelcr.a02_bottomnavigation;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.TextView;

public class DetalleRestauranteActivity extends AppCompatActivity {

    TextView textViewNombre;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_detalle_restaurante);

        textViewNombre = findViewById(R.id.textViewNombreRestaurante);

        // Obtenemos del Intent que ha lanzado este Activity
        // los parámetros que vienen a través del putExtra()
        Bundle extras = getIntent().getExtras();
        String nombre = extras.getString("nombre");

        textViewNombre.setText(nombre);
    }
}
