// const svgChildNodes = document.getElementById("zombies").childNodes;
// const svgArray = nodelist2array(svgChildNodes);

export function showLayer(node){
    const svg = document.getElementById("zombies");
    svg.getElementById(node).setAttribute("visibility", "visible");
}
  