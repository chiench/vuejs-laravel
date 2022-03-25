<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

use App\Models\SurvayQuestions;
use App\Models\SurvayAnswers;

class CreateQuestionsAnswersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('questions__answers', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(SurvayQuestions::class,'survay_question_id');
            $table->foreignIdFor(SurvayAnswers::class,'survay_answer_id');
            $table->string('answer');
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
        Schema::dropIfExists('questions__answers');
    }
}
