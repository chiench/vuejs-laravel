<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\Survays;

class CreateSurvayAnswersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('survay_answers', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Survays::class,'survay_id');
            $table->timestamps();
            $table->timestamp('start_date')->nullable();
            $table->timestamp('end_date')->nullable();

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('survay_answers');
    }
}
