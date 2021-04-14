// for review (by theme)
// to change table text to chosen theme
function themeOutput(theme) {
  var tbody = document.getElementById('tbody');
  tbody.innerHTML = "";
  switch(theme) {
    case "CID":
      document.getElementById('theme').innerHTML = "Cultural and Intellectual Developments (CID)";
      for (var i = 0; i < CID.length; i++) {
        var tr = "<tr>";
          tr+= '<td class="topic">' + CID[i]["TOPIC"] + '</td>';
          tr+= '<td>' + CID[i]["LESSON"] + '</td>';
          tr+= '<td class="learno">' + CID[i]["LO"] + '</td>';
            var a = CID[i]["HD"].split('\n-');
          tr+= '<td class="histd">' + a.join("<br><br>" + "-") + '</td>';
            var b = CID[i]["EX"].split('\n');
          tr+= '<td>' + b.join("<br>") + '</td>';
          tr+= '</tr>';
        tbody.innerHTML += tr;
      }
      break;
      
    case "INT":
      document.getElementById('theme').innerHTML = "Interaction Between Europe of the World (INT)";
      for (var i = 0; i < INT.length; i++) {
        var tr = "<tr>";
          tr+= '<td class="topic">' + INT[i]["TOPIC"] + '</td>';
          tr+= '<td>' + INT[i]["LESSON"] + '</td>';
          tr+= '<td class="learno">' + INT[i]["LO"] + '</td>';
            var a = INT[i]["HD"].split('\n-');
          tr+= '<td class="histd">' + a.join("<br>" + "-") + '</td>';
            var b = INT[i]["EX"].split('\n');
          tr+= '<td>' + b.join("<br>") + '</td>';
          tr+= '</tr>';
        tbody.innerHTML += tr;
      }
      break;
      
    case "SOP":
      document.getElementById('theme').innerHTML = "States and Other Institutions of Power (SOP)";
      for (var i = 0; i < SOP.length; i++) {
        var tr = "<tr>";
          tr+= '<td class="topic">' + SOP[i]["TOPIC"] + '</td>';
          tr+= '<td>' + SOP[i]["LESSON"] + '</td>';
          tr+= '<td class="learno">' + SOP[i]["LO"] + '</td>';
            var a = SOP[i]["HD"].split('\n-');
          tr+= '<td class="histd">' + a.join("<br>" + "-") + '</td>';
            var b = SOP[i]["EX"].split('\n');
          tr+= '<td>' + b.join("<br>") + '</td>';
          tr+= '</tr>';
        tbody.innerHTML += tr;
        }
      break;
      
    case "ECD":
      document.getElementById('theme').innerHTML = "Economic and Commercial Developments (ECD)";
      for (var i = 0; i < ECD.length; i++) {
        var tr = "<tr>";
          tr+= '<td class="topic">' + ECD[i]["TOPIC"] + '</td>';
          tr+= '<td>' + ECD[i]["LESSON"] + '</td>';
          tr+= '<td class="learno">' + ECD[i]["LO"] + '</td>';
            var a = ECD[i]["HD"].split('\n-');
          tr+= '<td> class="histd"' + a.join("<br>" + "-") + '</td>';
            var b = ECD[i]["EX"].split('\n');
          tr+= '<td>' + b.join("<br>") + '</td>';
          tr+= '</tr>';
        tbody.innerHTML += tr;
        }
      break;
      
    case "SCD":
      document.getElementById('theme').innerHTML = "Social Organization and Development (SCD)";
      for (var i = 0; i < SCD.length; i++) {
        var tr = "<tr>";
          tr+= '<td class="topic">' + SCD[i]["TOPIC"] + '</td>';
          tr+= '<td>' + SCD[i]["LESSON"] + '</td>';
          tr+= '<td class="learno">' + SCD[i]["LO"] + '</td>';
            var a = SCD[i]["HD"].split('\n-');
          tr+= '<td class="histd">' + a.join("<br>" + "-") + '</td>';
            var b = SCD[i]["EX"].split('\n');
          tr+= '<td>' + b.join("<br>") + '</td>';
          tr+= '</tr>';
        tbody.innerHTML += tr;
        }
      break;
      
    case "NEI":
      document.getElementById('theme').innerHTML = "National and European Identity (NEI)";
      for (var i = 0; i < NEI.length; i++) {
        var tr = "<tr>";
          tr+= '<td class="topic">' + NEI[i]["TOPIC"] + '</td>';
          tr+= '<td>' + NEI[i]["LESSON"] + '</td>';
          tr+= '<td class="learno">' + NEI[i]["LO"] + '</td>';
            var a = NEI[i]["HD"].split('\n-');
          tr+= '<td class="histd">' + a.join("<br>" + "-") + '</td>';
            var b = NEI[i]["EX"].split('\n');
          tr+= '<td>' + b.join("<br>") + '</td>';
          tr+= '</tr>';
        tbody.innerHTML += tr;
        }
      break;
    
    case "TSI":
      document.getElementById('theme').innerHTML = "Technological and Scientific Innovation (TSI)";
      for (var i = 0; i < TSI.length; i++) {
        var tr = "<tr>";
          tr+= '<td class="topic">' + TSI[i]["TOPIC"] + '</td>';
          tr+= '<td>' + TSI[i]["LESSON"] + '</td>';
          tr+= '<td class="learno">' + TSI[i]["LO"] + '</td>';
            var a = TSI[i]["HD"].split('\n-');
          tr+= '<td class="histd">' + a.join("<br>" + "-") + '</td>';
            var b = TSI[i]["EX"].split('\n');
          tr+= '<td>' + b.join("<br>") + '</td>';
          tr+= '</tr>';
        tbody.innerHTML += tr;
        }
      break;
  }
}

// to hide and show answers
var questions=document.getElementsByClassName('learno');  

function toggleAnswer(){
  var answer=document.getElementsByClassName('histd'); 
  for (var i = 0; i < answer.length; i++) {
    answer.classList.toggle("show");
};

for (var i = 0; i < questions.length; i++) {
    questions[i].addEventListener("click", toggleAnswer);
  }
}


// for notes page (changes image to respective notes)
function changeImage(topic) {
  switch (topic) {
    case "ir2":
      document.getElementById("notes").src =
        "https://cdn.glitch.com/e9ea0f69-9d30-44f4-b64c-cb26bfd597b0%2F2nd%20industrial%20rev.png?v=1618113584449";
      break;
    case "crimwar":
      document.getElementById("notes").src =
        "https://cdn.glitch.com/e9ea0f69-9d30-44f4-b64c-cb26bfd597b0%2Fcrimean%20war%20and%20italy%20unification.png?v=1618115603882";
      break;
    case "geruni":
      document.getElementById("notes").src =
        "https://cdn.glitch.com/e9ea0f69-9d30-44f4-b64c-cb26bfd597b0%2Fgermany%20unification.png?v=1618119078078";
      break;
    case "karlmarx":
      document.getElementById("notes").src =
        "https://cdn.glitch.com/e9ea0f69-9d30-44f4-b64c-cb26bfd597b0%2Fkarl%20marx%2C%20science%20and%20culture.png?v=1618119079656";
      break;
    case "nstate":
      document.getElementById("notes").src =
        "https://cdn.glitch.com/e9ea0f69-9d30-44f4-b64c-cb26bfd597b0%2Fnational%20state.png?v=1618119080919";
      break;
    case "imp":
      document.getElementById("notes").src =
        "https://cdn.glitch.com/e9ea0f69-9d30-44f4-b64c-cb26bfd597b0%2Fimperialism.png?v=1618119941387";
      break;
    case "scimod":
      document.getElementById("notes").src =
        "https://cdn.glitch.com/e9ea0f69-9d30-44f4-b64c-cb26bfd597b0%2Fmodern%20consciousness.png?v=1618119942567";
      break;
    case "poli":
      document.getElementById("notes").src =
        "https://cdn.glitch.com/e9ea0f69-9d30-44f4-b64c-cb26bfd597b0%2Fpolitics.png?v=1618119944597";
      break;
    case "prewwi":
      document.getElementById("notes").src =
        "https://cdn.glitch.com/e9ea0f69-9d30-44f4-b64c-cb26bfd597b0%2Fbefore%20wwi.png?v=1618119940265";
      break;
    case "cwwi":
      document.getElementById("notes").src =
        "https://cdn.glitch.com/e9ea0f69-9d30-44f4-b64c-cb26bfd597b0%2Fthe%20road%20to%20wwi.png?v=1618120580639";
      break;
    case "wwi":
      document.getElementById("notes").src =
        "https://cdn.glitch.com/e9ea0f69-9d30-44f4-b64c-cb26bfd597b0%2Fthe%20wwi.png?v=1618120582423";
      break;
    case "rrev":
      document.getElementById("notes").src =
        "https://cdn.glitch.com/e9ea0f69-9d30-44f4-b64c-cb26bfd597b0%2Frussian%20rev.png?v=1618120584065";
      break;
    case "pwwi":
      document.getElementById("notes").src =
        "https://cdn.glitch.com/e9ea0f69-9d30-44f4-b64c-cb26bfd597b0%2Fpeace%20settlement.png?v=1618120584884";
      break;
  }
}
