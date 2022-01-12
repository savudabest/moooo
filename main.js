var dog = 0;
var cat = 0;
var lion = 0;
var cow = 0;

function startC(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('',modelReady);
}
function modelReady(){
    classifier.classify(gotResult);
}
function gotResult(error, results) {
    if(error){
        console.error(error)
    }
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random()*255) + 1;
        random_number_g = Math.floor(Math.random()*255) + 1;
        random_number_b = Math.floor(Math.random()*255) + 1;

        document.getElementById("detected").innerHTML = "Detected Dog - "+dog+", Detected Cat - "+cat+",Detected Lion - "+lion+",Detected cow - "+cow;``
        document.getElementById("detected").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        document.getElementById("animal_voices").innerHtml = "Detected Voices Is Of - " + results[0].label;
        document.getElementById("detected").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        img = document.getElementById("animal_images");

        if(results[0].label == "Barking"){
        img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDsGq7YH01XxiY3W2iqUEBKmefOtpjk73V3A&usqp=CAU";
        dog = dog + 1;
        }
        else if(results[0].label == "Meowing"){
        img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv52cs-UOnWXI9gpSO4qxezOGRkHlPWKVgQw&usqp=CAU";
        cat = cat + 1;
        }
        else if(results[0].label == "Roar"){
        img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqto1FU-D-zJihf_qPpad8g8clK4UuHRqxiQ&usqp=CAU";
        lion = lion + 1;
        }
        else(result[0].label == "Mooing"){
        img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjrgFRUJeQL-bJubVUpsj_0dGFsG3zydHt9g&usqp=CAU";
        cow = cow + 1;
        }
    
    }
}
