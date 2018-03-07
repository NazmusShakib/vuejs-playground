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
            'password' => bcrypt('1q1q1q')
        ]);
    }
}
