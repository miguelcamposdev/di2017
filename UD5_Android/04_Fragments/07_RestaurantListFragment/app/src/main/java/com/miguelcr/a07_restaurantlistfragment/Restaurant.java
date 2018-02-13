package com.miguelcr.a07_restaurantlistfragment;

/**
 * Created by miguelcampos on 13/2/18.
 */

public class Restaurant {
    private String name;
    private int rate;
    private String urlPhoto;
    private String address;

    public Restaurant(String name, int rate, String urlPhoto, String address) {
        this.name = name;
        this.rate = rate;
        this.urlPhoto = urlPhoto;
        this.address = address;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getRate() {
        return rate;
    }

    public void setRate(int rate) {
        this.rate = rate;
    }

    public String getUrlPhoto() {
        return urlPhoto;
    }

    public void setUrlPhoto(String urlPhoto) {
        this.urlPhoto = urlPhoto;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }
}
