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
    public function tablelist() {
        return[
            [
                'sn'=> '1',
                'customer_name'=>'chandani',
                'product'=>'desel',
                'invoice'=>'123456',
                'quantity'=>'10 ltr',
                't_amount'=>'11080',
                'sale_by'=>'Admin',
                'date'=> '02-03-2022',
            ],
            [
                'sn'=> '2',
                'customer_name'=>'Ashish',
                'product'=>'desel',
                'invoice'=>'123457',
                'quantity'=>'10 ltr',
                't_amount'=>'11080',
                'sale_by'=>'Suer',
                'date'=> '02-03-2022',
            ],
            [
                'sn'=> '3',
                'customer_name'=>'Rijesh',
                'product'=>'desel',
                'invoice'=>'123458',
                'quantity'=>'10 ltr',
                't_amount'=>'11080',
                'sale_by'=>'Admin',
                'date'=> '02-03-2022',
            ],
            [
                'sn'=> '4',
                'customer_name'=>'Einsteina',
                'product'=>'desel',
                'invoice'=>'123459',
                'quantity'=>'10 ltr',
                't_amount'=>'11080',
                'sale_by'=>'User',
                'date'=> '02-03-2022',
            ],
            [
                'sn'=> '5',
                'customer_name'=>'Muksam',
                'product'=>'desel',
                'invoice'=>'123410',
                'quantity'=>'10 ltr',
                't_amount'=>'11080',
                'sale_by'=>'Admin',
                'date'=> '02-03-2022',
            ],
            [
                'sn'=> '6',
                'customer_name'=>'Suman',
                'product'=>'desel',
                'invoice'=>'1234511',
                'quantity'=>'10 ltr',
                't_amount'=>'11080',
                'sale_by'=>'User',
                'date'=> '02-03-2022',
            ],
            
        ];
    }
}
