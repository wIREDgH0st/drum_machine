

    document.addEventListener("DOMContentLoaded", function () {

        const sound_files:string[]= [];
        sound_files[97] = "sounds/808_kick.wav";
        sound_files[115] = "sounds/909_clap.wav";
        sound_files[100] = "sounds/808_cowbell.wav";
        sound_files[106] = "sounds/909_cymbal.wav";
        sound_files[107] = "sounds/909_snare.wav";
        sound_files[108] = "sounds/909_hihatopen.wav";
  
        const button = document.querySelectorAll('button');
   
        for (let i = 0; i < button.length; i++) {
            button[i].addEventListener('click', () => {
  
                play(button[i].dataset.sample);    
            });
        }
  
        function play(sample) {
           const audio = new Audio(sound_files[sample]); 
           audio.play();
        }
  
        document.addEventListener('keypress', (event) => {
            if (event.keyCode === 97 || event.keyCode === 115 || event.keyCode === 100 || event.keyCode === 106 || event.keyCode === 107 || event.keyCode === 108) {
                play(event.keyCode);
                document.querySelector('button[data-sample="' + event.keyCode + '"]').classList.add("btn-animation");
  
                setTimeout( () =>{
                document.querySelector('button[data-sample="' + event.keyCode + '"]').classList.remove("btn-animation");    
                },500);
            }
        });
  
        let btn = document.getElementById("btn");
        const text = document.getElementById("text");
  
        function getRandomSentence () {
          let index= Math.floor(Math.random() * (sentences.length));
          return sentences[index];
      }
  
          let sentences= [
          'so fat not even Dora can explore her',
          'so  fat I swerved to miss her and ran out of gas',
          'so smelly she put on Right Guard and it went left',
          'so fat she hasn’t got cellulite, she’s got celluheavy',
          'so fat she don’t need no internet – she’s already world wide',
          'so hair her armpits look like Don King in a headlock',
          'so classless she could be a Marxist utopia',
          'so fat she can hear bacon cooking in Canada',
          'so fat she won “The Bachelor” because she all those other bitches',
          'so stupid she believes everything that Brian Williams says',
          'so ugly she scared off Flavor Flav',
          'is like Domino’s Pizza, one call does it all',
          'is twice the man you are',
          'is like Bazooka Joe, 5 cents a blow',
          'is like an ATM, open 24/7',
          'is like a championship ring, everybody puts a finger in her'
      ];
  
      btn.onclick = function () {
          console.log(getRandomSentence());
          text.textContent = getRandomSentence();
      }

    });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  