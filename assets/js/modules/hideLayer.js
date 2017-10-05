export function hideLayer(node){
    const svg = document.getElementById("zombies");
    svg.getElementById(node).setAttribute("visibility", "hidden");
}
