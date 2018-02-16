package com.miguelcr.a08_recyclercondetalle;

import retrofit2.Call;
import retrofit2.http.FormUrlEncoded;
import retrofit2.http.GET;
import retrofit2.http.Query;

/**
 * Created by miguelcampos on 16/2/18.
 */



public interface ApiMecaroundService {

    @GET("taller/lista")
    Call<Talleres> listTalleres(@Query("X-API-KEY") String apiKey);
}
