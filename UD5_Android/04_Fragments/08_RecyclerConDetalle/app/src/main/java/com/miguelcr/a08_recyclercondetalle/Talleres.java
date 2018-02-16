
package com.miguelcr.a08_recyclercondetalle;

import java.util.List;
import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

public class Talleres {

    @SerializedName("talleres")
    @Expose
    public List<Taller> talleres = null;

    public Talleres withTalleres(List<Taller> talleres) {
        this.talleres = talleres;
        return this;
    }

}
