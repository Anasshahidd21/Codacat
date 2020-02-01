function main() {
    cat.show();
    cat.lookAt(mouseX, mouseY);

    if (mouseIsPressed)
        cat.spooked = true;
}   