package com.miguelcr.a10_spinner;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.CheckBox;
import android.widget.Spinner;
import android.widget.Toast;

import java.util.ArrayList;
import java.util.List;

public class MainActivity extends AppCompatActivity implements AdapterView.OnItemSelectedListener {
    Spinner spinnerCategorias;
    List<Categoria> listadoCategorias;
    CheckBox checkBoxAmigos, checkBoxFamilia;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        spinnerCategorias = findViewById(R.id.spinnerCategorias);
        checkBoxAmigos = findViewById(R.id.checkBoxAmigos);
        checkBoxFamilia = findViewById(R.id.checkboxFamilia);


        // Listado de ctaegorías
        listadoCategorias = new ArrayList<>();
        listadoCategorias.add(new Categoria(0,"Amigos"));
        listadoCategorias.add(new Categoria(1,"Colegio"));
        listadoCategorias.add(new Categoria(2,"Familia"));

        ArrayAdapter<CharSequence> adapter = ArrayAdapter.createFromResource(this,
                R.array.categorias_array, android.R.layout.simple_spinner_item);

        adapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);

        spinnerCategorias.setAdapter(adapter);

        spinnerCategorias.setOnItemSelectedListener(this);
    }

    @Override
    public void onItemSelected(AdapterView<?> parent, View view, int position, long id) {
        Categoria categoriaSeleccionada = listadoCategorias.get(position);
        Toast.makeText(this, "Categoría: "
                        +categoriaSeleccionada.getNombre()
                        +"("
                        +categoriaSeleccionada.getId()+")",
                Toast.LENGTH_SHORT).show();

        switch (position) {
            case 0: // amigos
                checkBoxAmigos.setVisibility(View.VISIBLE);
                checkBoxFamilia.setVisibility(View.GONE);
                break;
            case 1: // colegio
                checkBoxAmigos.setVisibility(View.GONE);
                checkBoxFamilia.setVisibility(View.GONE);
                break;
            case 2: // familia
                checkBoxAmigos.setVisibility(View.GONE);
                checkBoxFamilia.setVisibility(View.VISIBLE);
                break;
            default: break;

        }
    }

    @Override
    public void onNothingSelected(AdapterView<?> parent) {

    }

    public void guardarNota(View view) {
        int posicionSeleccionado = spinnerCategorias.getSelectedItemPosition();
        Categoria categoriaSeleccionada = listadoCategorias.get(posicionSeleccionado);

        Toast.makeText(this, "Nota guardada: "+categoriaSeleccionada.getNombre(), Toast.LENGTH_SHORT).show();
    }
}
