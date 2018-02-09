package com.miguelcr.a06_fragmentlist;

/**
 * Created by miguelcampos on 9/2/18.
 */

class AlumnoItem {
    private String photo;
    private String nombre;
    private int suspensos;

    public AlumnoItem(String photo, String nombre, int suspensos) {
        this.photo = photo;
        this.nombre = nombre;
        this.suspensos = suspensos;
    }

    public String getPhoto() {
        return photo;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public int getSuspensos() {
        return suspensos;
    }

    public void setSuspensos(int suspensos) {
        this.suspensos = suspensos;
    }
}
