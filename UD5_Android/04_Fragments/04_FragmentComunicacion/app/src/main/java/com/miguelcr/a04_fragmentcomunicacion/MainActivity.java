package com.miguelcr.a04_fragmentcomunicacion;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity implements IListadoUsuariosListener {


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

    @Override
    public void onUsuarioClick(String texto) {
        Toast.makeText(this, texto, Toast.LENGTH_SHORT).show();
    }

    @Override
    public void onConfigClick(String nuevaConfiguracion) {

    }
}
