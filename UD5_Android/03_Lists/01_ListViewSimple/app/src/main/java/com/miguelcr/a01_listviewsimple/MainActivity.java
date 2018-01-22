package com.miguelcr.a01_listviewsimple;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Adapter;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.ListView;
import android.widget.Toast;

import java.util.ArrayList;
import java.util.List;

public class MainActivity extends AppCompatActivity implements AdapterView.OnItemClickListener {
    ListView listView;
    List<String> alumnos;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        // Hemos conectado la variable listView que hemos declarado arriba
        // con el elemento ListView de la IU cuyo id es listViewAlumnos
        listView = findViewById(R.id.listViewAlumnos);

        // Inicializamos la lista de alumnos
        alumnos = new ArrayList<>();
        alumnos.add("Miguel A. Gómez");
        alumnos.add("Miguel A. Galiani");
        alumnos.add("Javier Rogerio");
        alumnos.add("Er Juanfran");
        alumnos.add("El asiento de la expulsión");
        alumnos.add("César, expulsa alumnos");
        alumnos.add("Sosa");
        alumnos.add("Jimmy");
        alumnos.add("Fibra NO");
        alumnos.add("Herminia");
        alumnos.add("Cristina");
        alumnos.add("Fernando Cruz");
        alumnos.add("Jorge");
        alumnos.add("Pepe Youtuber");
        alumnos.add("Jesús");
        alumnos.add("Tejero palmero");
        alumnos.add("Manuel");
        alumnos.add("Javi Rubik");
        alumnos.add("Marta");
        alumnos.add("Alejandro Verano");
        alumnos.add("David");

        ArrayAdapter adaptadorAlumnos = new ArrayAdapter<String>(
                this,
                android.R.layout.simple_list_item_1,
                alumnos
        );

        // Conectamos el adapter con el Listview
        listView.setAdapter(adaptadorAlumnos);

        listView.setOnItemClickListener(this);

    }

    @Override
    public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
        String alumnoClicked = alumnos.get(position);
        Toast.makeText(this, "Alumno: "+alumnoClicked, Toast.LENGTH_SHORT).show();
        view.animate().rotationXBy(360).setDuration(2000).start();
    }
}
