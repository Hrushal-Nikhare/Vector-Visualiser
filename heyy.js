var vectors = [];

function addVector() {
	var startX = parseFloat(document.getElementById("startX").value);
	var startY = parseFloat(document.getElementById("startY").value);
	var startZ = parseFloat(document.getElementById("startZ").value);
	var dirX = parseFloat(document.getElementById("dirX").value);
	var dirY = parseFloat(document.getElementById("dirY").value);
	var dirZ = parseFloat(document.getElementById("dirZ").value);

	
	vectors.push({
		startX: startX,
		startY: startY,
		startZ: startZ,
		dirX: dirX,
		dirY: dirY,
		dirZ: dirZ,
	});

	// Update list and plot
	updateList();
	updatePlot();
	updateDistanceAndAngle();
}

function updateList() {
	var listHtml = "";
	vectors.forEach(function (vec, index) {
		listHtml += "<li>";
		listHtml +=
			"Vector (" +
			vec.startX +
			"," +
			vec.startY +
			"," +
			vec.startZ +
			") -> (" +
			(vec.startX + vec.dirX) +
			"," +
			(vec.startY + vec.dirY) +
			"," +
			(vec.startZ + vec.dirZ) +
			")";
		listHtml +=
			' <button onclick="editVector(' + index + ')">Edit</button>';
		listHtml +=
			' <button onclick="deleteVector(' + index + ')">Delete</button>';
		listHtml += "</li>";
	});
	document.getElementById("vectorList").innerHTML = listHtml;
}

function editVector(index) {
	var vec = vectors[index];
	document.getElementById("startX").value = vec.startX;
	document.getElementById("startY").value = vec.startY;
	document.getElementById("startZ").value = vec.startZ;
	document.getElementById("dirX").value = vec.dirX;
	document.getElementById("dirY").value = vec.dirY;
	document.getElementById("dirZ").value = vec.dirZ;

	
	vectors.splice(index, 1);
	updateList();
	updatePlot();
	updateDistanceAndAngle();
}


function deleteVector(index) {
	vectors.splice(index, 1);
	updateList();
	updatePlot();
	updateDistanceAndAngle();
}

function updatePlot() {
	var traces = [];

	vectors.forEach(function (vec) {
		var trace1 = {
			type: "scatter3d",
			mode: "lines",
			x: [vec.startX, vec.startX + vec.dirX],
			y: [vec.startY, vec.startY + vec.dirY],
			z: [vec.startZ, vec.startZ + vec.dirZ],
			line: {
				color: "blue",
				width: 5,
			},
			name:
				"Vector (" +
				vec.startX +
				"," +
				vec.startY +
				"," +
				vec.startZ +
				")",
		};

		var trace2 = {
			type: "scatter3d",
			mode: "markers",
			x: [vec.startX + vec.dirX],
			y: [vec.startY + vec.dirY],
			z: [vec.startZ + vec.dirZ],
			marker: {
				color: "blue",
				size: 10,
			},
			name:
				"Head (" +
				vec.startX +
				"," +
				vec.startY +
				"," +
				vec.startZ +
				")",
		};

		traces.push(trace1);
		traces.push(trace2);
	});

	var layout = {
		title: "3D Vector Plot",
		scene: {
			xaxis: { title: "X Axis", showaxes: "true" },
			yaxis: { title: "Y Axis", showaxes: "true" },
			zaxis: { title: "Z Axis", showaxes: "true" },
		},
	};

	Plotly.newPlot("VectorPlot", traces, layout);
}

function calculateDistance(vec1, vec2) {
	var dx = vec2.startX - vec1.startX;
	var dy = vec2.startY - vec1.startY;
	var dz = vec2.startZ - vec1.startZ;
	return Math.sqrt(dx * dx + dy * dy + dz * dz);
}


function dotProduct(vec1, vec2) {
	return (
		vec1.dirX * vec2.dirX + vec1.dirY * vec2.dirY + vec1.dirZ * vec2.dirZ
	);
}


function magnitude(vec) {
	return Math.sqrt(
		vec.dirX * vec.dirX + vec.dirY * vec.dirY + vec.dirZ * vec.dirZ
	);
}


function calculateAngle(vec1, vec2) {
	var dot = dotProduct(vec1, vec2);
	var mag1 = magnitude(vec1);
	var mag2 = magnitude(vec2);
	var angleRad = Math.acos(dot / (mag1 * mag2));
	return angleRad * (180 / Math.PI); // Convert radians to degrees
}


function updateDistanceAndAngle() {
	if (vectors.length >= 2) {
		var vec1 = vectors[0];
		var vec2 = vectors[1];
		var distance = calculateDistance(vec1, vec2);
		var angle = calculateAngle(vec1, vec2);
		document.getElementById("vectorIndices").textContent =
			"(" +
			vec1.startX +
			"," +
			vec1.startY +
			"," +
			vec1.startZ +
			") and (" +
			vec2.startX +
			"," +
			vec2.startY +
			"," +
			vec2.startZ +
			")";
		document.getElementById("distanceOutput").textContent =
			distance.toFixed(2);
		document.getElementById("angleOutput").textContent = angle.toFixed(2);
	} else {
		document.getElementById("vectorIndices").textContent = "";
		document.getElementById("distanceOutput").textContent = "";
		document.getElementById("angleOutput").textContent = "";
	}
}


updatePlot();
