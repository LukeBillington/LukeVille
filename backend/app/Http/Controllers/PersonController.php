<?php

namespace App\Http\Controllers;

use App\Person;
use Illuminate\Http\Request;

class PersonController extends Controller
{
    public function togglePerson($id) {
        $person = Person::findOrFail($id);
        if($person->checked == true) {
          $person->checked = false;
        } else {
          $person->checked = true;
        }
        $person->save();
    }
}
