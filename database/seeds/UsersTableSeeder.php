<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\User::create([
            'name' => 'Nazmus Shakib',
            'email' => 'nshakib.se@gmail.com',
            'password' => '1q1q1q',
        ]);

        $section1 = \App\Section::create([
            'name' => 'First Section',
            'description' => '1 description from seeder.',
        ]);

        $section2 = \App\Section::create([
            'name' => 'Second Section',
            'description' => 'Second description from seeder.',
        ]);

        \App\Task::create([
            'section_id' => $section1->id,
            'task_name' => 'First Section first task',
            'task_desc' => 'Fstsk description from seeder.',
        ]);

        \App\Task::create([
            'section_id' => $section1->id,
            'task_name' => '22 First Section first task',
            'task_desc' => '22 Fstsk description from seeder.',
        ]);

        \App\Task::create([
            'section_id' => $section2->id,
            'task_name' => '22 Second Section first task',
            'task_desc' => '22 Second description from seeder.',
        ]);
    }
}
