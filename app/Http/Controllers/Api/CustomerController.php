<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CustomerController extends Controller
{
    public function index(){
        $array = [
            [
                'name'=>'ashish',
               
                'product'=>'petrol',
                'invoice'=>'123456',
                'quantity'=>'10 ltr',
                't_amount'=>'11080',
                'payment_type'=>'Bank',

            ],
            [
                'name'=>'chandani',
                
                'product'=>'desel',
                'invoice'=>'123456',
                'quantity'=>'10 ltr',
                't_amount'=>'11080',
                'payment_type'=>'Cash',

            ],
        ];

        return $array;
    }

    public function piechartData(){
        return [80, 90,130,100, 30];
    }
    public function infoData(){
        return[
        [
            'color'=> "b-blue",
            'numb'=> 110,
           'title'=> "Today's Customer",
            'icon' => "fa fa-users icon",
        ],
        [
            'color'=> "b-red",
           'numb'=> 3,
           'title'=> "Petrol Pump",
            'icon' => ' fa fa-microchip icon',
        ],
        [
            'color'=> "b-darkblue",
            'numb'=> 70,
           'title'=> "Total Sales",
            'icon' =>  'fa fa-dollar icon',
        ],
        [
            'color'=> "b-green",
            'numb'=> 40,
            'title'=> "Total Purchase",
            'icon'=>' fa fa-opencart icon',
        ],
    ];
    }
}
