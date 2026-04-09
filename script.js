document.getElementById("greetBtn").onclick = () => {
    const name = document.getElementById("studentName").innerText;
    alert(`Welcome, ${name}!`);
};
document.getElementById("toggleMode").onclick = () => {
    document.body.classList.toggle("dark");
};
document.getElementById("contactForm").onsubmit = function(e) {
    const name = nameField.value.trim();
    const cls = classField.value.trim();
    const msg = messageField.value.trim();

    if (!name || !cls || !msg) {
        alert("All fields are required!");
        e.preventDefault();
    } else {
        alert("Form submitted successfully!");
    }
};

const nameField = document.getElementById("name");
const classField = document.getElementById("class");
const messageField = document.getElementById("message");
document.getElementById("addSubject").onclick = () => {
    const input = document.getElementById("newSubject");
    if (input.value.trim() !== "") {
        const li = document.createElement("li");
        li.textContent = input.value;
        document.getElementById("subjectList").appendChild(li);
        input.value = "";
    }
};
function calculateResults() {
    const rows = document.querySelectorAll("#marksTable tbody tr");

    let total = 0;
    const maxMarksPerSubject = 100;

    rows.forEach(row => {
        const marks = parseInt(row.children[1].innerText);
        const percentCell = row.querySelector(".percent");

        const percent = (marks / maxMarksPerSubject) * 100;
        percentCell.innerText = percent.toFixed(1) + "%";

        if (percent >= 75) percentCell.style.color = "limegreen";
        else if (percent >= 60) percentCell.style.color = "orange";
        else percentCell.style.color = "red";

        total += marks;
    });

    const totalSubjects = rows.length;
    const average = total / totalSubjects;

    document.getElementById("totalMarks").innerText = total + " / " + (totalSubjects * 100);
    document.getElementById("avgPercent").innerText = ((average / 100) * 100).toFixed(1) + "%";
}
calculateResults();