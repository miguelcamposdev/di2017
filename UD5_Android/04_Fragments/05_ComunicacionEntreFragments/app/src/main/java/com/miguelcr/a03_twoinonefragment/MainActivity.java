package com.miguelcr.a03_twoinonefragment;

import android.content.Intent;
import android.support.constraint.ConstraintLayout;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity implements IComunicacionDetalleListener {
    boolean esTablet = false;
    DetailFragment fragmentDetalle;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        ConstraintLayout layout = findViewById(R.id.layoutTablet);

        if(layout==null) { // Móvil
            Toast.makeText(this, "Estás en un móvil", Toast.LENGTH_SHORT).show();
        } else { // Tablet
            fragmentDetalle = (DetailFragment) getSupportFragmentManager().findFragmentById(R.id.fragment2);
            esTablet = true;
            Toast.makeText(this, "Estás en una tablet", Toast.LENGTH_SHORT).show();
        }
    }

    @Override
    public void onUsuarioClick(String nombre) {
        if(esTablet) {
            fragmentDetalle.actualizaDetalleUsuario(nombre);
        } else {
            Intent i = new Intent(this, DetalleUsuarioActivity.class);
            startActivity(i);
        }
    }
}
