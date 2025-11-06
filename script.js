script.js
const interactions = [];

// Function to track user clicks and generate heatmap data
const trackInteraction = (event) => {
    const interaction = {
        x: event.clientX,
        y: event.clientY,
        time: new Date().toISOString(),
    };
    interactions.push(interaction);
    renderHeatmap(interaction);
};

// Function to render the heatmap based on recorded interactions
const renderHeatmap = (interaction) => {
    const heatmap = document.getElementById('heatmap');
    const circle = document.createElement('div');
    circle.classList.add('interaction');
    circle.style.left = `${interaction.x - 25}px`; // Circle offset for center positioning
    circle.style.top = `${interaction.y - 25}px`;
    circle.style.width = '50px';
    circle.style.height = '50px';
    heatmap.appendChild(circle);
};

// Function to generate a PDF report of user interactions
const generatePDFReport = () => {
    const doc = new jsPDF();
    doc.text("User Interaction Report", 10, 10);
    interactions.forEach((interaction, index) => {
        doc.text(`Interaction ${index + 1}: X:${interaction.x}, Y:${interaction.y}, Time:${interaction.time}`, 10, 20 + (index * 10));
    });
    doc.save("user_interaction_report.pdf");
};

// Event listeners for user interactions
document.addEventListener('click', trackInteraction);
