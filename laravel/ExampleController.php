<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;

class ExampleController extends Controller
{
    public function testReact(Request $request)
    {   
         $response['status'] = false;
         $response['message'] = "Something went wrong";
         
         $name = $request['name'];
         $contact = $request['contact'];
         $email = $request['email'];
         $city = $request['city'];

         $insert = [
                'name'=>$name,
                'contact'=>$contact,
                'email'=>$email,
                'city'=>$city

         ];
         $data = DB::table('apiusers')->insert($insert);

        if($data){
            $response['status'] = true;
            $response['message'] = "Successfully";
        }
        else{
            $response['status'] = false;
            $response['message'] = "UnSuccessfully";
        }

        return $response;
    }
}
