player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML=player1_name + ":" ;
document.getElementById("player2_name").innerHTML=player2_name + ":" ;

document.getElementById("player1_score").innerHTML=player1_score ;
document.getElementById("player2_score").innerHTML=player2_score ;

document.getElementById("player_question").innerHTML= "Question turn-" + player1_name + ":" ;
document.getElementById("player_answer").innerHTML="Answer turn-" + player2_name + ":" ;

function send(){
    getWord=document.getElementById("word").value ;
    word=getWord.toLowerCase();
    console.log(word);

    charAt1=word.charAt(1);
    console.log(charAt1);

    length_div2 = Math.floor(word.length/2);
    charAt2= word.charAt(length_div2);
    console.log(charAt2);

    length_minus_1=word.length-1;
    charAt3=word.charAt(length_minus_1);
    
    remove_c1=word.replace(charAt1, "_");    
    remove_c2=remove_c1.replace(charAt2, "_");
    remove_c3=remove_c2.replace(charAt3, "_");
    console.log(remove_c3);

    question="<h4 id='word_display'>Q : "+ remove_c3 + "</h4>";
    input_box="<br>Answer:<input type='text' id='input'>";
    check_button = "<br><br><button class='btn btn-info' onClick='check()'>Check</button>";
    row= question+input_box+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";
}

question_turn="player1";
answer_turn="player2";

function check(){
    answer=document.getElementById("input").value;
    input=answer.toLowerCase();
    console.log(input);

    if (answer==word){
        if (answer_turn=="player1"){
            player1_score=player1_score+1;
            document.getElementById("player1_score").innerHTML=player1_score;
        }
        else{
            player2_score=player2_score+1;
            document.getElementById("player2_score").innerHTML=player2_score;
        }
    }

    if (question_turn=="player1"){
        question_turn="player2";
        document.getElementById("player_question").innerHTML="Question Turn-" + player2_name;
    }
    else{
        question_turn="player1";
        document.getElementById("player_question").innerHTML="Question Turn-" + player1_name;
    
    }

    if (answer_turn=="player1"){
        answer_turn="player2";
        document.getElementById("player_answer").innerHTML="Answer Turn-" + player2_name;
    }
    else{
        answer_turn="player1";
        document.getElementById("player_answer").innerHTML="Answer Turn-" + player1_name;
    
    }

    document.getElementById("output").innerHTML="";
}

