
package com.miguelcr.a08_recyclercondetalle;

import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

public class Taller {

    @SerializedName("id")
    @Expose
    public String id;
    @SerializedName("nombre")
    @Expose
    public String nombre;
    @SerializedName("latlng")
    @Expose
    public String latlng;
    @SerializedName("direccion")
    @Expose
    public String direccion;
    @SerializedName("telefono")
    @Expose
    public String telefono;

    public Taller withId(String id) {
        this.id = id;
        return this;
    }

    public Taller withNombre(String nombre) {
        this.nombre = nombre;
        return this;
    }

    public Taller withLatlng(String latlng) {
        this.latlng = latlng;
        return this;
    }

    public Taller withDireccion(String direccion) {
        this.direccion = direccion;
        return this;
    }

    public Taller withTelefono(String telefono) {
        this.telefono = telefono;
        return this;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getLatlng() {
        return latlng;
    }

    public void setLatlng(String latlng) {
        this.latlng = latlng;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }
}
