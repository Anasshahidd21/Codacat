function main() {
	cat.show();
	cat.lookAt(mouseX, mouseY);
	cat.say('Hello World!');
	if (mouseIsPressed) cat.spooked = true;
}
