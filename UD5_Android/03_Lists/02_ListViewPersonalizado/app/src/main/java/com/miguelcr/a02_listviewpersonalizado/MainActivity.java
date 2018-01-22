package com.miguelcr.a02_listviewpersonalizado;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.ListView;

import java.util.ArrayList;
import java.util.List;

public class MainActivity extends AppCompatActivity {
    ListView listView;
    List<Alumno> alumnos;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        listView = findViewById(R.id.listViewAlumnos);

        // Init la lista de alumnos
        alumnos = new ArrayList<>();
        alumnos.add(new Alumno("Manolito", 20, 4.9f,"https://s3.amazonaws.com/uifaces/faces/twitter/vista/128.jpg"));
        alumnos.add(new Alumno("Maria", 23, 7.9f,"https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"));

        AlumnosAdapter adaptadorAlumnos = new AlumnosAdapter(
                this,
                R.layout.list_alumnos_item,
                alumnos
        );

        listView.setAdapter(adaptadorAlumnos);
    }
}
