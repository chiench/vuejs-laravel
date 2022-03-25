<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\Survays;

class CreateSurvayQuestionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('survay_questions', function (Blueprint $table) {
            $table->id();
            $table->string('question');
            $table->string('type');
            $table->string('description');
            $table->foreignIdFor(Survays::class,'survay_id');

            $table->longText('data');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('survay_questions');
    }
}
