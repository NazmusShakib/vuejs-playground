<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    protected $fillable = ['section_id', 'task_name', 'task_desc'];

    public function section()
    {
        return $this->belongsTo('App\Section');
    }
}
