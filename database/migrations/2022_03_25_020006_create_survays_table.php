<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\User;

class CreateSurvaysTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('survays', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug');
            $table->foreignIdFor(User::class,'user_id');
            $table->tinyInteger('status');
            $table->text('description')->nullable();
            $table->timestamps();
            $table->timestamp('expire_date')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('survays');
    }
}
