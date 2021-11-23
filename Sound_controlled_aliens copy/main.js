function start() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    var classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/QefhvdrsS/model.json", () => classifier.classify((err, result) => {
        if(err) throw err;

        console.log(result);
        var numR = Math.floor(Math.random() * 255) + 1, numG =  Math.floor(Math.random() * 255) + 1, numB = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = "I can hear - " + result[0].label; document.getElementById("result_label").style.color = "rgb(" + numR + ", " + numG + ", " + numB + ")";
        document.getElementById("result_confidence").innerHTML = "Accuracy - " + ((result[0].confidence * 100).toFixed(2)) + "%"; document.getElementById("result_confidence").style.color = "rgb(" + numR + ", " + numG + ", " + numB + ")";

        var img1 = document.getElementById("alien1");
        var img2 = document.getElementById("alien2");

        img1.src = "";
        img2.src = "";

        if(result[0].label == "cat") img1.src = "cat.jpg";
        if(result[0].label == "dog") img2.src = "dog.jpg";
    }));
}