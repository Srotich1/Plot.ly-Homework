// load user ids


function BuildCharts(selected){
    console.log(selected)



}



d3.json("samples.json").then((data) => {

    // console.log(data.names)
    let dropdown = d3.select("#selDataset")

    data.names.array.forEach((id) => {
        // console.log(id)


        dropdown.append('option').text(id).property("value, id")
        
    });
    BuildCharts(data.names)

})

function optionChanged(selected){
    // console.log(selected)

    BuildCharts(selected)
}