package com.tns.gen.com.google.android.gms.common.api;

public class GoogleApiClient_OnConnectionFailedListener implements com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener {
	public GoogleApiClient_OnConnectionFailedListener() {
		com.tns.Runtime.initInstance(this);
	}

	public void onConnectionFailed(com.google.android.gms.common.ConnectionResult param_0)  {
		java.lang.Object[] args = new java.lang.Object[1];
		args[0] = param_0;
		com.tns.Runtime.callJSMethod(this, "onConnectionFailed", void.class, args);
	}

}
