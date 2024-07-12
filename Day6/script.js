window.addEventListener ("load", () => {
    let button= document.getElementsByTagName("button")[0];
    
    button.addEventListener("click",() => {
        let message1 = "Let me introduce my Youtube Channel to you!";
        let message2 = "If you are fond of spending your time watching movies, and want to explore more about hidden gems, click OK. If not, click Cancel.";
        
        alert (message1)
        
        // Display confirm dialog and store the user's choice
        let userChoice = confirm(message2);

        // Check user's choice
        if (userChoice) {
            alert("Yay!! Please enjoy exploring my channel!");
            // Perform subscription action or redirect
            window.location.href = "http://www.youtube.com/@shinn.sworld";
        } else {
            alert("Thank you. You will still be in this website.");
        }
    });
    });