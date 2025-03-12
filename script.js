// Function to start voting
function startVoting() {
    let candidate1 = document.getElementById("candidate1").value.trim();
    let candidate2 = document.getElementById("candidate2").value.trim();

    if (candidate1 === "" || candidate2 === "") {
        alert("Please enter names for both candidates.");
        return;
    }

    sessionStorage.setItem("candidate1", candidate1);
    sessionStorage.setItem("candidate2", candidate2);

    document.getElementById("voteBtn1").innerText = `Vote for ${candidate1}`;
    document.getElementById("voteBtn2").innerText = `Vote for ${candidate2}`;
    document.getElementById("name1").innerText = candidate1;
    document.getElementById("name2").innerText = candidate2;

    document.getElementById("nameInput").style.display = "none";
    document.getElementById("votingSection").style.display = "block";
}

// Function to vote
function vote(candidateKey) {
    let votesA = parseInt(sessionStorage.getItem("votesA")) || 0;
    let votesB = parseInt(sessionStorage.getItem("votesB")) || 0;

    if (candidateKey === "candidate1") {
        votesA++;
        sessionStorage.setItem("votesA", votesA);
    } else {
        votesB++;
        sessionStorage.setItem("votesB", votesB);
    }

    updateResults();
}

// Function to update results
function updateResults() {
    document.getElementById("votesA").innerText = sessionStorage.getItem("votesA") || 0;
    document.getElementById("votesB").innerText = sessionStorage.getItem("votesB") || 0;
}

// Function to restart voting
function restart() {
    sessionStorage.clear();
    window.location.href = "index.html";
}

// Reset everything on page refresh
window.onload = function () {
    sessionStorage.clear();
};