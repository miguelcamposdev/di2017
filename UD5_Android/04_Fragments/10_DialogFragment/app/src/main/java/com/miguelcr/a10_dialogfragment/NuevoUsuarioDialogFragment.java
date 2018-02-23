package com.miguelcr.a10_dialogfragment;

import android.app.Activity;
import android.app.Dialog;
import android.content.Context;
import android.content.DialogInterface;
import android.os.Bundle;
import android.support.v4.app.DialogFragment;
import android.support.v7.app.AlertDialog;
import android.view.View;
import android.widget.EditText;

/**
 * Created by miguelcampos on 23/2/18.
 */

public class NuevoUsuarioDialogFragment extends DialogFragment {

    INuevoUsuarioDialogListener mListener;
    EditText editTextNombre;

    public NuevoUsuarioDialogFragment() {
    }

    @Override
    public Dialog onCreateDialog(Bundle savedInstanceState) {
        // Build the dialog and set up the button click handlers
        AlertDialog.Builder builder = new AlertDialog.Builder(getActivity());
        builder.setTitle("Nuevo usuario")
                .setMessage("Introduce los datos del nuevo usuario")
                .setPositiveButton("Guardar", new DialogInterface.OnClickListener() {
                    public void onClick(DialogInterface dialog, int id) {
                        // Send the positive button event back to the host activity
                        String nombre = editTextNombre.getText().toString();
                        mListener.onGuardarClick(nombre);
                    }
                })
                .setNegativeButton("Cancelar", new DialogInterface.OnClickListener() {
                    public void onClick(DialogInterface dialog, int id) {
                        // Send the negative button event back to the host activity
                        dialog.dismiss();
                    }
                });

        View v = getActivity().getLayoutInflater().inflate(R.layout.dialog_nuevo_usuario,null);

        editTextNombre = v.findViewById(R.id.editTextNombreUsuario);

        builder.setView(v);
        return builder.create();
    }

    @Override
    public void onAttach(Context context) {
        super.onAttach(context);
        // Verify that the host activity implements the callback interface
        try {
            mListener = (INuevoUsuarioDialogListener) context;
        } catch (ClassCastException e) {
            // The activity doesn't implement the interface, throw exception
            throw new ClassCastException(context.toString()
                    + " must implement INuevoUsuarioDialogListener");
        }

    }
}
