<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    protected $fillable = ['task_name', 'task_desc', 'section_id'];

    protected $hidden = ['section_id'];

    public function section()
    {
        return $this->belongsTo('App\Section');
    }
}
