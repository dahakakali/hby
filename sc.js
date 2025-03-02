const startBtn = document.getElementById("startBtn");
        const popup = document.getElementById("popup");
        const popupText = document.getElementById("popupText");
        const yesBtn = document.getElementById("yesBtn");
        const noBtn = document.getElementById("noBtn");

        let step = 0;
        const messages = [
            "Are you sure you want to know?",
            "Think again!",
            "It should not affect our friendship!",
            "Do you know what , it dont makes me emotional any more",
            "I cant explain this feelings ",
            "it is too good ",
            "I might be able to release myself only for you because I am not like others",
            "I know how to love unconditionally.",
            "No matter how far you go , I am willing to fall in love with you again and again.",
            "Love doesn’t ask for anything in return; give as much as you can.",
            "But that doesn’t mean I will ever harm myself.If I’m not here, who will hold on to these feelings",
            "As Anupam Roy once said:'Many births ago, in this very spring,I saw you for the first time.I walked towards the unknown,And now that spring is priceless to me.'",
               "That’s why love teaches us to live, not to harm",
            "🌟 You are awesome! 🌟"
        ];

        startBtn.addEventListener("click", () => {
            step = 0;
            popupText.textContent = messages[step];
            popup.classList.remove("hidden");
        });

        yesBtn.addEventListener("click", () => {
            step++;
            if (step < 3  ) {
                popupText.textContent = messages[step];
            }
            else if(step < messages.length - 1)
            {
                popupText.textContent = messages[step];
                yesBtn.textContent ="ok then"
                noBtn.classList.add("hidden");
            

            }
            else {
                popupText.innerHTML = `<span class='text-green-600'>${messages[step]}</span>`;
                yesBtn.classList.add("hidden");
                noBtn.textContent = "Close";
            }
        });

        noBtn.addEventListener("click", () => {
            popup.classList.add("hidden");
        });