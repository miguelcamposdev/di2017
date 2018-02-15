package com.miguelcr.a02_bottomnavigation;

import android.content.Intent;
import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.design.widget.BottomNavigationView;
import android.support.v4.app.Fragment;
import android.support.v7.app.AppCompatActivity;
import android.view.MenuItem;

public class MainActivity extends AppCompatActivity implements IOnRestaurantInteractionListener {


    private BottomNavigationView.OnNavigationItemSelectedListener mOnNavigationItemSelectedListener
            = new BottomNavigationView.OnNavigationItemSelectedListener() {

        @Override
        public boolean onNavigationItemSelected(@NonNull MenuItem item) {
            Fragment f = null;

            switch (item.getItemId()) {
                case R.id.navigation_restaurantes:
                    f = new RestaurantFragment();
                    return true;
                case R.id.navigation_hoteles:
                    f = new HotelesFragment();
                    return true;
                case R.id.navigation_rentcar:
                    f = new RentCarFragment();
                    return true;
            }

            if(f!=null) {
                getSupportFragmentManager()
                        .beginTransaction()
                        .replace(R.id.contenedor, f)
                        .commit();
            }


            return false;
        }
    };

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        BottomNavigationView navigation = (BottomNavigationView) findViewById(R.id.navigation);
        navigation.setOnNavigationItemSelectedListener(mOnNavigationItemSelectedListener);

        // Cargamos el Fragment por defectoooooooooooo
        getSupportFragmentManager()
                .beginTransaction()
                .add(R.id.contenedor,new RestaurantFragment())
                .commit();
    }

    @Override
    public void onRestaurantClick(Restaurant restaurant) {
        Intent i = new Intent(this, DetalleRestauranteActivity.class);
        i.putExtra("nombre",restaurant.getName());
        startActivity(i);
    }
}
