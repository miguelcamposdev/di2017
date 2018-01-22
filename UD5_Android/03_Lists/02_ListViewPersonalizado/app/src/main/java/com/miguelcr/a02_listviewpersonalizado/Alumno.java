package com.miguelcr.a02_listviewpersonalizado;

/**
 * Created by miguelcampos on 22/1/18.
 */

class Alumno {
    private String nombre;
    private int edad;
    private float media;
    private String urlFoto;

    public Alumno(String nombre, int edad, float media, String urlFoto) {
        this.nombre = nombre;
        this.edad = edad;
        this.media = media;
        this.urlFoto = urlFoto;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public int getEdad() {
        return edad;
    }

    public void setEdad(int edad) {
        this.edad = edad;
    }

    public float getMedia() {
        return media;
    }

    public void setMedia(float media) {
        this.media = media;
    }

    public String getUrlFoto() {
        return urlFoto;
    }

    public void setUrlFoto(String urlFoto) {
        this.urlFoto = urlFoto;
    }
}
