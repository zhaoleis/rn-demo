package com.auditerp;

import android.app.Activity;
import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.Toast;

public class SecondActivity extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.acticity_second);
        Intent mIntent = getIntent();
        if (mIntent != null) {
            Toast.makeText(this, mIntent.getStringExtra("params"), Toast.LENGTH_SHORT).show();
        }
        Button btn_huidiao=(Button)this.findViewById(R.id.button);
        btn_huidiao.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent mIntent=new Intent();
                mIntent.putExtra("three_result","From Activity的数据回调过来啦~");
                SecondActivity.this.setResult(Activity.RESULT_OK,mIntent);
                SecondActivity.this.finish();
            }
        });
    }

}
